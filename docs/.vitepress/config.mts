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
      { text: '模型百科', link: '/models/', activeMatch: '^/models/' },
      { text: '场景教程', link: '/scenarios/', activeMatch: '^/scenarios/' },
      { text: '工具对比', link: '/compare/', activeMatch: '^/compare/' },
      { text: '每周资讯', link: '/news/', activeMatch: '^/news/' }
    ],
    sidebar: {
      '/models/': [
        {
          text: '模型百科',
          items: [
            { text: '总览', link: '/models/' },
            { text: 'DeepSeek', link: '/models/deepseek' },
            { text: '通义千问', link: '/models/qwen' }
          ]
        }
      ],
      '/scenarios/': [
        {
          text: '办公实战',
          items: [
            { text: '教程总览', link: '/scenarios/' },
            { text: '写文案', link: '/scenarios/writing' },
            { text: '做 PPT', link: '/scenarios/slides' },
            { text: '写周报', link: '/scenarios/weekly-report' }
          ]
        }
      ],
      '/compare/': [
        {
          text: '工具对比',
          items: [
            { text: '按任务查看', link: '/compare/#by-task' },
            { text: '周报同题对比', link: '/compare/weekly-report' }
          ]
        }
      ],
      '/news/': [
        {
          text: '每周资讯',
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
    outline: { label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最后更新',
    footer: {
      message: '免费内容持续更新 · 进阶课程请关注公众号',
      copyright: '© 2026 国产AI实战指南'
    }
  }
})
