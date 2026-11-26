import { defineConfig } from 'vitepress'

const base = process.env.CF_PAGES === '1' ? '/' : '/cn-ai-guide/'

const basicsSidebar = [
  {
    text: 'AI 基础',
    items: [
      { text: '基础知识地图', link: '/basics/' },
      { text: '零基础 7 天练习', link: '/start/' },
      { text: 'Token、API、Agent、CLI、MCP', link: '/basics/concepts' },
      { text: '四段式提示词', link: '/basics/prompt-template' },
      { text: '注册与账号安全', link: '/basics/account-safety' },
      { text: '验证三步法', link: '/basics/verify-answers' }
    ]
  },
  {
    text: '大模型',
    items: [
      { text: '国产大模型全景与实测', link: '/models/overview' },
      { text: '模型与常用入口', link: '/models/' },
      { text: 'DeepSeek', link: '/models/deepseek' },
      { text: '通义千问', link: '/models/qwen' },
      { text: 'DeepSeek 实战自测', link: '/models/deepseek-self-test' },
      { text: '豆包工作选型实练', link: '/models/doubao' },
      { text: '模型速查卡', link: '/models/quick-pick' },
      { text: '模型能力对比', link: '/compare/' },
      { text: '周报同题对比', link: '/compare/weekly-report' }
    ]
  },
  {
    text: '避坑手册',
    items: [
      { text: '个人数据安全三道门', link: '/guides/data-security' },
      { text: '团队数据红线', link: '/guides/data-redline' }
    ]
  }
]

export default defineConfig({
  lang: 'zh-CN',
  title: '桔子哥的AI探索',
  description: '看懂 AI 全貌，选对工具，做成实事。从日常办公到制造出海，用图表、同题实测和可复核的案例帮你做选择。',
  base,
  appearance: false,
  head: [
    ['meta', { name: 'color-scheme', content: 'light' }],
    ['link', { rel: 'preload', as: 'font', type: 'font/woff2', href: `${base}fonts/noto-serif-sc.woff2`, crossorigin: 'anonymous' }]
  ],
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'AI 基础', link: '/basics/', activeMatch: '^/(basics|start|models|compare|guides)/' },
      { text: '工具实测', link: '/tools/', activeMatch: '^/tools/' },
      { text: '实战案例', link: '/scenarios/', activeMatch: '^/scenarios/' },
      { text: '提示词库', link: '/prompts/', activeMatch: '^/prompts/' },
      { text: 'AI 资讯', link: '/news/', activeMatch: '^/news/' },
      { text: '留言板', link: '/feedback/', activeMatch: '^/feedback/' },
      { text: '关于网站', link: '/about/', activeMatch: '^/about/' }
    ],
    sidebar: {
      '/basics/': basicsSidebar,
      '/models/': basicsSidebar,
      '/start/': basicsSidebar,
      '/compare/': basicsSidebar,
      '/guides/': basicsSidebar,
      '/prompts/': [
        {
          text: '提示词苗圃',
          items: [
            { text: '提问基础 P01–P10', link: '/prompts/#prompt-basics' },
            { text: '模型选型 P11–P13', link: '/prompts/#prompt-models' },
            { text: '职场实战 P14–P21', link: '/prompts/#prompt-work' },
            { text: '团队协作 P22–P26', link: '/prompts/#prompt-teams' },
            { text: '安全与避坑 P27–P28', link: '/prompts/#prompt-safety' },
            { text: '资讯与运营 P29–P30', link: '/prompts/#prompt-news' }
          ]
        }
      ],
      '/tools/': [
        {
          text: '工具实测',
          items: [
            { text: '实测目录', link: '/tools/' },
            { text: '实测方法', link: '/tools/method' },
            { text: '海关数据选型实测', link: '/tools/trade-data' },
            { text: '多 Agent 知识库选型', link: '/tools/obsidian-agent-knowledge' },
            { text: '展会洞察', link: '/tools/exhibition' }
          ]
        }
      ],
      '/scenarios/': [
        {
          text: '实战案例',
          items: [
            { text: '案例总览', link: '/scenarios/' },
            { text: '制造出海', link: '/scenarios/#export' },
            { text: '写文案', link: '/scenarios/writing' },
            { text: '做 PPT', link: '/scenarios/slides' },
            { text: '写周报', link: '/scenarios/weekly-report' },
            { text: 'Excel 表格', link: '/scenarios/excel' },
            { text: '数据核对三道关', link: '/scenarios/data-verify' }
          ]
        }
      ],
      '/news/': [
        {
          text: 'AI 资讯',
          items: [
            { text: '第 01 期', link: '/news/2026-11-24' },
            { text: '往期资讯', link: '/news/#archive' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索全站' },
          modal: {
            noResultsText: '未找到相关内容',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '打开',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' }
  }
})
