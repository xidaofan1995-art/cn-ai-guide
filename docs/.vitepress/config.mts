import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '国产AI实战指南',
  description: '面向职场人和中小老板的国产大模型实战知识库',
  base: '/cn-ai-guide/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '模型百科', link: '/models/' },
      { text: '场景教程', link: '/scenarios/' },
      { text: '工具对比', link: '/compare/' },
      { text: '每周资讯', link: '/news/' }
    ],
    sidebar: {
      '/models/': [
        {
          text: '模型百科',
          items: [
            { text: '总览', link: '/models/' },
            { text: 'DeepSeek', link: '/models/deepseek' }
          ]
        }
      ]
    },
    search: { provider: 'local' },
    outline: { label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最后更新',
    footer: {
      message: '免费内容持续更新 · 进阶课程请关注公众号',
      copyright: '© 2026 国产AI实战指南'
    }
  }
})
