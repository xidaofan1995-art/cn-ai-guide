import { defineConfig } from 'vitepress'

const base = '/cn-ai-guide/'

const basicsSidebar = [
  {
    text: 'AI 基础',
    items: [
      { text: '基础知识地图', link: '/basics/' },
      { text: '零基础 7 天练习', link: '/start/' },
      { text: 'Token、API、Agent、CLI、MCP', link: '/basics/concepts' }
    ]
  },
  {
    text: '大模型',
    items: [
      { text: '模型与常用入口', link: '/models/' },
      { text: 'DeepSeek', link: '/models/deepseek' },
      { text: '通义千问', link: '/models/qwen' },
      { text: '模型能力对比', link: '/compare/' },
      { text: '周报同题对比', link: '/compare/weekly-report' }
    ]
  }
]

export default defineConfig({
  lang: 'zh-CN',
  title: '桔子哥的AI探索',
  description: '从日常办公到中国制造出海，分享 AI 基础、国内外工具实测和可以复用的工作方法。',
  base,
  appearance: false,
  head: [
    ['meta', { name: 'color-scheme', content: 'light' }],
    ['link', { rel: 'preload', as: 'font', type: 'font/woff2', href: `${base}fonts/noto-serif-sc.woff2`, crossorigin: 'anonymous' }]
  ],
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'AI 基础', link: '/basics/', activeMatch: '^/(basics|start|models|compare)/' },
      { text: '工具实测', link: '/tools/', activeMatch: '^/tools/' },
      { text: '实战案例', link: '/scenarios/', activeMatch: '^/scenarios/' },
      { text: 'AI 资讯', link: '/news/', activeMatch: '^/news/' },
      { text: '留言板', link: '/feedback/', activeMatch: '^/feedback/' },
      { text: '关于网站', link: '/about/', activeMatch: '^/about/' }
    ],
    sidebar: {
      '/basics/': basicsSidebar,
      '/models/': basicsSidebar,
      '/start/': basicsSidebar,
      '/compare/': basicsSidebar,
      '/tools/': [
        {
          text: '工具实测',
          items: [
            { text: '实测目录', link: '/tools/' },
            { text: '实测方法', link: '/tools/method' },
            { text: '海关数据收集与整理', link: '/tools/trade-data' },
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
            { text: 'Excel 表格', link: '/scenarios/excel' }
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
