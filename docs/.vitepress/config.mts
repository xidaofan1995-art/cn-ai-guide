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
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}brand/orange-explorer.svg` }],
    ['meta', { name: 'color-scheme', content: 'light' }],
    ['link', { rel: 'preload', as: 'font', type: 'font/woff2', href: `${base}fonts/noto-serif-sc.woff2`, crossorigin: 'anonymous' }]
  ],
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'AI 基础', link: '/basics/', activeMatch: '^/(basics|start|models|compare|guides)/' },
      { text: '知识专题', link: '/topics/', activeMatch: '^/topics/' },
      { text: '工具实测', link: '/tools/', activeMatch: '^/tools/' },
      { text: '实战案例', link: '/scenarios/', activeMatch: '^/scenarios/' },
      { text: '提示词库', link: '/prompts/', activeMatch: '^/prompts/' },
      { text: 'AI 资讯', link: '/news/', activeMatch: '^/news/' },
      { text: '留言板', link: '/feedback/', activeMatch: '^/feedback/' },
      { text: '关于网站', link: '/about/', activeMatch: '^/about/' }
    ],
    sidebar: {
      '/topics/': [{ text: '知识专题', items: [{ text: '专题目录', link: '/topics/' }] },
        { text: 'AI全景认知', collapsed: true, items: [{ text: 'A01 全球AI大模型全景：从模型家族到实际能力', link: '/topics/global-models' }, { text: 'A04 同一问题，不同AI输出有什么区别？', link: '/topics/model-experiment' }, { text: 'A05 RAG 是什么：让AI回答你的问题的技术全景', link: '/topics/rag-explained' }, { text: 'A07 用AI处理敏感数据前必读：隐私、合规与本地化方案地图', link: '/topics/ai-data-privacy' }, { text: 'A08 一张图看懂MCP与工具协议：AI如何连接软件和数据', link: '/topics/mcp-explained' }] },
        { text: 'AI工具与工作流', collapsed: true, items: [{ text: 'B02 个人多Agent工作流', link: '/topics/multi-agent-workflow' }, { text: 'B03 手机与电脑如何低成本协作：云端AI、本地Agent与远程访问', link: '/topics/mobile-desktop' }, { text: 'B04 AI订阅与API怎么选：普通人、产品经理和创业者的成本地图', link: '/topics/ai-cost' }, { text: 'B05 AI工作流的稳定交付', link: '/topics/workflow-roi' }, { text: 'B06 文章越来越多，如何让网站越做越轻松？', link: '/topics/content-publishing' }, { text: 'B07 本地部署大模型全攻略', link: '/topics/local-llm' }, { text: 'B08 Vibe Coding全景：不会写代码的人能不能用AI做出产品', link: '/topics/vibe-coding' }, { text: 'B09 从零搭建个人RAG知识库：让AI真正读过你的文档', link: '/topics/personal-rag' }] },
        { text: 'AI×智能硬件', collapsed: true, items: [{ text: 'C01 智能硬件产品开发全景', link: '/topics/hardware-development' }, { text: 'C02 全屋智能生态全景：传感器、协议、平台与用户场景', link: '/topics/smart-home-ecosystem' }, { text: 'C03 AI如何做智能硬件市场调研：以水墨屏环境检测仪为例', link: '/topics/eink-market-research' }, { text: 'C04 一张图看懂AI硬件产业链：创客、方案商、ODM到品牌', link: '/topics/hardware-supply-chain' }, { text: 'C05 智能摄像头全景：从看家到主动感知', link: '/topics/smart-camera' }, { text: 'C06 端侧AI全景：智能硬件的模型为什么放进设备里？', link: '/topics/edge-ai' }, { text: 'C07 智能硬件创业的四个台阶：众筹、小批量、ODM到自有品牌', link: '/topics/hardware-startup' }] },
        { text: 'AI×外贸出海', collapsed: true, items: [{ text: 'D02 海外潜客开发工作流', link: '/topics/overseas-lead-workflow' }, { text: 'D03 如何用AI做海外选品：从需求证据到可生产方案', link: '/topics/overseas-product-selection' }, { text: 'D04 制造业如何利用AI开发海外客户：以精密零部件为例', link: '/topics/precision-parts-outreach' }, { text: 'D06 外贸获客渠道全景：B2B平台、独立站、社媒与开发信怎么选', link: '/topics/export-channels' }, { text: 'D07 外贸内容营销全景：用AI做独立站SEO和专业内容', link: '/topics/export-content' }, { text: 'D08 AI外贸的合规红线：客户数据、邮件触达与跨境隐私', link: '/topics/export-compliance' }, { text: 'D09 AI客户背调全景：从公司名到采购决策人的信息链路', link: '/topics/customer-due-diligence' }] },
        { text: '个人实践与复盘', collapsed: true, items: [{ text: 'E04 AI图表质量控制', link: '/topics/chart-quality' }] }],
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
            { text: '多 AI 共享记忆与归档', link: '/tools/obsidian-agent-knowledge' },
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
