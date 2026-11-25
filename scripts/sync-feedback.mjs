import { writeFile } from 'node:fs/promises'

const [owner, name] = (process.env.GITHUB_REPOSITORY ?? '').split('/')
const token = process.env.GH_TOKEN
const graphqlUrl = process.env.GITHUB_GRAPHQL_URL ?? 'https://api.github.com/graphql'

if (!owner || !name || !token) {
  throw new Error('The message tree sync requires a repository and GitHub Actions token.')
}

const response = await fetch(graphqlUrl, {
  method: 'POST',
  headers: {
    Authorization: 'Bearer ' + token,
    'Content-Type': 'application/json'
  },
  signal: AbortSignal.timeout(30_000),
  body: JSON.stringify({
    query: 'query ($owner: String!, $name: String!) { repository(owner: $owner, name: $name) { isPrivate discussions(first: 30, orderBy: { field: CREATED_AT, direction: DESC }) { nodes { number body bodyText title category { slug } } } } }',
    variables: { owner, name }
  })
})

if (!response.ok) {
  throw new Error('GitHub Discussions returned HTTP ' + response.status + '.')
}

const result = await response.json()
const repository = result.data?.repository
if (result.errors?.length || !repository?.discussions?.nodes || repository.isPrivate !== false) {
  throw new Error('Could not read public discussions. Check that Discussions is enabled and the build token has discussions: read.')
}

const categories = new Set(['ideas', 'show-and-tell', 'general', 'q-a'])
const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'grapheme' })
const previewLength = 15
const bottleLimit = 6

function getPreview({ body, bodyText, title }) {
  // Discussion forms put the substantive suggestion between two Markdown headings.
  const formText = body.match(/(?:^|\r?\n)### 你的想法[ \t]*\r?\n([\s\S]*?)(?=\r?\n### 相关页面链接（选填）[ \t]*(?:\r?\n|$)|$)/)?.[1]
  const text = formText === undefined
    ? bodyText
    : formText.replace(/<!--[\s\S]*?-->/g, '')
      .replace(/!?\[([^\]]*)\]\([^)]+\)/g, '$1')
      .replace(/(^|\n)[ \t]*(?:#{1,6}|>|[-*+])\s+/g, '$1')
      .replace(/(\*{1,3}|_{1,3}|\x60)(\S(?:[\s\S]*?\S)?)\1/g, '$2')
  const plainText = text.replace(/\s+/g, ' ').trim() || title

  let preview = ''
  let count = 0
  for (const { segment } of segmenter.segment(plainText)) {
    if (count === previewLength) return preview + '…'
    preview += segment
    count++
  }
  return preview
}

const previews = repository.discussions.nodes
  .filter(discussion => discussion && categories.has(discussion.category.slug))
  .slice(0, bottleLimit)
  .map(discussion => ({ number: discussion.number, preview: getPreview(discussion) }))

const data = JSON.stringify(previews) + '\n'
await writeFile(new URL('../docs/.vitepress/theme/feedback-discussions.json', import.meta.url), data)
await writeFile(new URL('../docs/public/feedback-discussions.json', import.meta.url), data)
console.log('Synced ' + previews.length + ' public message tree preview(s).')
