<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import GrowthBadge from './GrowthBadge.vue'
import { maturity, type Maturity } from './maturity'

const filters = [
  { id: 'all', label: '全部' },
  { id: 'new', label: 'AI 基础' },
  { id: 'test', label: '工具实测' },
  { id: 'work', label: '实战案例' }
] as const

type Filter = typeof filters[number]['id']
interface Card {
  id: string
  category: Exclude<Filter, 'all'>
  eyebrow: string
  title: string
  text: string
  url: string
  stage: Maturity
  tint?: 'green' | 'blue'
  wide?: boolean
  count?: string
  action?: string
  visual?: { file: string; alt: string }
}

const cards: Card[] = [
  { id: 'path', category: 'new', eyebrow: 'AI 基础 · 入门苗圃', title: '零基础 7 天上手路径', text: '从选工具到核对结果，用公开教程练习每天会遇到的工作。', url: '/start/', stage: 'seed', tint: 'green', wide: true, action: '开始练习' },
  { id: 'concepts', category: 'new', eyebrow: 'AI 基础', title: '从大模型到 Agent', text: '用一份展会记录弄清 Token、API、Agent、CLI、MCP 怎么配合。', url: '/basics/concepts.html', stage: 'seed', tint: 'blue', action: '看术语' },
  { id: 'models', category: 'new', eyebrow: 'AI 基础', title: '大模型怎么选', text: '查看 DeepSeek、通义千问的常用入口，再拿同一份材料看实际差异。', url: '/models/', stage: 'seed', tint: 'blue', count: '2 份档案', action: '看模型' },
  { id: 'test', category: 'test', eyebrow: '工具实测', title: '同一任务，实测国内外 AI 工具', text: '记录条件、原始输出和人工核对。已有周报对比，海关数据和展会洞察待测。', url: '/tools/', stage: 'seed', wide: true, action: '看实测目录' },
  { id: 'writing', category: 'work', eyebrow: '制造出海', title: '写一封展会客户跟进邮件', text: '把会面记录变成英文邮件，问清图纸、材料和试制数量。', url: '/scenarios/writing.html', stage: 'sprout', count: '1 篇' },
  { id: 'excel', category: 'work', eyebrow: '办公实战', title: 'Excel 表格 + AI 提效', text: '用一份小表练习筛选、求和和复核公式。', url: '/scenarios/excel.html', stage: 'seed', count: '1 篇' },
  { id: 'review', category: 'work', eyebrow: '避坑手册', title: 'AI 幻觉：别把错话发给客户', text: '看周报初稿如何出现无依据的完成率，再逐条回到原始记录。', url: '/scenarios/weekly-report.html#快速识别一处常见误写', stage: 'sprout', wide: true, count: '1 篇' },
  { id: 'slides', category: 'work', eyebrow: '办公实战', title: 'PPT 大纲与讲稿一条龙', text: '从业务记录做成 5 页可编辑汇报，核对每页结论，再准备开场讲稿。', url: '/scenarios/slides.html', stage: 'sprout', wide: true, count: '1 篇', visual: { file: 'slides-outline.webp', alt: '五页业务汇报的内容结构，从展会进度到负责人待确认事项' } },
  { id: 'weekly', category: 'work', eyebrow: '办公实战', title: '把零散记录写成一页周报', text: '对照原始记录和 AI 初稿，把待确认、已完成和下周行动分清。', url: '/scenarios/weekly-report.html', stage: 'sprout', wide: true, count: '1 篇', visual: { file: 'weekly-correction.webp', alt: '周报改稿对照，原始记录、模型误写和人工审阅共三栏' } }
]

const selected = ref<Filter>('all')
const visibleCards = computed(() => selected.value === 'all' ? cards : cards.filter(card => card.category === selected.value))

const steps = [
  ['一', '从模型档案找到官方入口，选一个工具开始'],
  ['二', '把需求说清楚，写出任务、材料、格式和限制'],
  ['三', '写完一封邮件、一份周报，核对并修订初稿'],
  ['四', '用一张小表复核公式，再做五页汇报'],
  ['五', '把验证过的提示词和检查步骤留作模板']
]

const updates = [
  { date: '2026-11-25', tag: '新苗', text: '新增 AI 基础知识地图和工具实测目录', link: '/basics/' },
  { date: '2026-11-24', tag: '新苗', text: '把一周零散记录变成一页周报', link: '/scenarios/weekly-report.html' },
  { date: '2026-11-24', tag: '新苗', text: '发布第 01 期国产 AI 实战周讯', link: '/news/2026-11-24.html' },
  { date: '2026-11-24', tag: '修剪', text: '周报同题对比公开原始回复和核对口径', link: '/compare/weekly-report.html' }
]
</script>

<template>
  <div class="garden-wrap garden-home">
    <section class="garden-hero" aria-labelledby="garden-hero-title">
      <div class="garden-hero-copy">
        <p class="garden-eyebrow garden-rise"><span aria-hidden="true">✿</span> 桔子哥的 AI 实践笔记</p>
        <h1 id="garden-hero-title" class="garden-rise garden-delay-1">
          用 Token 做点<br class="garden-title-break"><em>有用的事<svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8 Q60 1 100 5 T198 4" fill="none" stroke="#7fbf8e" stroke-width="3" stroke-linecap="round" /></svg></em>
        </h1>
        <p class="garden-intro garden-rise garden-delay-1">从日常办公到中国制造出海。用真实任务试国内外 AI 工具，把写周报、查市场、跟进展会客户的方法分享出来。</p>
        <div class="garden-hero-actions garden-rise garden-delay-2">
          <a class="garden-btn garden-btn-primary" :href="withBase('/start/')">🌱 从第一项练习开始</a>
          <a class="garden-btn garden-btn-secondary" :href="withBase('/tools/')">看工具实测</a>
        </div>
      </div>

      <div class="garden-nursery garden-rise garden-delay-2" aria-label="栏目入口">
        <div class="garden-plot">
          <a class="garden-cell garden-cell-basics" :href="withBase('/basics/')">
            <strong class="garden-cell-title">AI 基础 <span aria-hidden="true">↗</span></strong>
            <span class="garden-cell-desc">从模型怎么选，到 API、Agent、CLI 和 MCP 怎么配合。</span>
            <span class="garden-leaf" aria-hidden="true">🌿</span>
          </a>
          <a class="garden-cell garden-cell-tests" :href="withBase('/tools/')">
            <strong class="garden-cell-title">工具实测 <span aria-hidden="true">↗</span></strong>
            <span class="garden-cell-desc">同题周报对比<br>海关数据、展会洞察待测</span>
            <span class="garden-leaf" aria-hidden="true">🍃</span>
          </a>
          <a class="garden-cell garden-cell-office" :href="withBase('/scenarios/#office')">
            <strong class="garden-cell-title">办公实战 <span aria-hidden="true">↗</span></strong>
            <span class="garden-cell-desc">邮件 · 周报 · Excel · PPT</span>
          </a>
          <a class="garden-cell garden-cell-export" :href="withBase('/scenarios/#export')">
            <strong class="garden-cell-title">制造出海 <span aria-hidden="true">↗</span></strong>
            <span class="garden-cell-desc">从展会线索到客户跟进</span>
          </a>
        </div>
      </div>
    </section>

    <section class="garden-legend garden-rise garden-delay-3" aria-labelledby="garden-legend-title">
      <div class="garden-legend-intro">
        <h2 id="garden-legend-title">每篇文章都有成熟度</h2>
        <p>就像植物，内容会持续生长、定期回访修剪。</p>
      </div>
      <ul class="garden-legend-list">
        <li v-for="item in maturity" :key="item.label">
          <span class="garden-legend-icon" aria-hidden="true">{{ item.icon }}</span>
          <span><strong>{{ item.label }}</strong><small>{{ item.detail }}</small></span>
        </li>
      </ul>
    </section>

    <section aria-labelledby="garden-bento-title">
      <div class="garden-section-head">
        <div><h2 id="garden-bento-title">从手上的任务开始</h2></div>
        <div class="garden-filters" role="group" aria-label="内容筛选">
          <button v-for="filter in filters" :key="filter.id" type="button" :aria-pressed="selected === filter.id" @click="selected = filter.id">{{ filter.label }}</button>
        </div>
      </div>
      <p class="visually-hidden" role="status">显示 {{ visibleCards.length }} 张内容卡</p>
      <div class="garden-bento">
        <article v-for="card in visibleCards" :key="card.id"
          :class="['garden-card', card.tint && 'garden-tint-' + card.tint, { 'garden-wide': card.wide, 'garden-path': card.id === 'path' }]">
          <span class="garden-card-eyebrow">{{ card.eyebrow }}</span>
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
          <img v-if="card.visual" class="garden-card-visual" :src="withBase('/images/' + card.visual.file)" :alt="card.visual.alt" width="1080" height="570" loading="lazy">

          <template v-if="card.id === 'path'">
            <ol class="garden-steps">
              <li v-for="[index, text] in steps" :key="index"><span aria-hidden="true">{{ index }}</span>{{ text }}</li>
            </ol>
            <p class="garden-path-note">🌿 练完留下一套提示词模板和一份核对清单</p>
          </template>

          <div class="garden-card-foot">
            <span><GrowthBadge :stage="card.stage" :count="card.count" meter /></span>
            <a :href="withBase(card.url)" :aria-label="(card.action || '进园') + '：' + card.title">{{ card.action || '进园' }} <span aria-hidden="true">→</span></a>
          </div>
        </article>
      </div>
    </section>

    <section class="garden-updates" aria-labelledby="garden-update-title">
      <div class="garden-section-head">
        <div><h2 id="garden-update-title">花园最近在忙什么</h2><p>每次模型大版本更新，相关教程会回访修订。</p></div>
        <a :href="withBase('/news/')">查看 AI 资讯 <span aria-hidden="true">→</span></a>
      </div>
      <ul class="garden-update-list">
        <li v-for="item in updates" :key="item.link">
          <time :datetime="item.date">{{ item.date.slice(5) }}</time>
          <span :class="['garden-update-tag', item.tag === '新苗' ? 'garden-new' : 'garden-fix']">{{ item.tag }}</span>
          <a :href="withBase(item.link)">{{ item.text }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>
