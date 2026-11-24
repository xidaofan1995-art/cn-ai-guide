<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import GrowthBadge from './GrowthBadge.vue'
import { maturity, type Maturity } from './maturity'

const filters = [
  { id: 'all', label: '全部' },
  { id: 'new', label: '新手' },
  { id: 'work', label: '办公实战' }
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
  { id: 'path', category: 'new', eyebrow: '新手苗圃 · 推荐起点', title: '零基础 7 天上手路径', text: '从选工具到核对结果，用已有的免费教程练习每天会遇到的工作。', url: '/start/', stage: 'seed', tint: 'green', wide: true, count: '7 篇', action: '开始种' },
  { id: 'models', category: 'work', eyebrow: '模型图鉴', title: '2026 国产大模型怎么选', text: '按工作任务挑入口，再用同一份素材检查产出。', url: '/models/', stage: 'seed', count: '2 篇', action: '看图鉴' },
  { id: 'writing', category: 'work', eyebrow: '办公实战', title: '写一封展会客户跟进邮件', text: '把会面记录变成英文邮件，问清图纸、材料和试制数量。', url: '/scenarios/writing.html', stage: 'sprout', count: '1 篇' },
  { id: 'excel', category: 'work', eyebrow: '办公实战', title: 'Excel 表格 + AI 提效', text: '用一份小表练习筛选、求和和复核公式。', url: '/scenarios/excel.html', stage: 'seed', count: '1 篇' },
  { id: 'review', category: 'new', eyebrow: '避坑手册', title: 'AI 幻觉：别把错话发给客户', text: '看周报初稿如何出现无依据的完成率，再逐条回到原始记录。', url: '/scenarios/weekly-report.html#快速识别一处常见误写', stage: 'sprout', count: '1 篇' },
  { id: 'slides', category: 'work', eyebrow: '办公实战', title: 'PPT 大纲与讲稿一条龙', text: '从业务记录做成 5 页可编辑汇报，核对每页结论，再准备开场讲稿。', url: '/scenarios/slides.html', stage: 'sprout', wide: true, count: '1 篇', visual: { file: 'slides-outline.webp', alt: '五页业务汇报的内容结构，从展会进度到负责人待确认事项' } },
  { id: 'weekly', category: 'work', eyebrow: '办公实战', title: '把零散记录写成一页周报', text: '对照原始记录和 AI 初稿，把待确认、已完成和下周行动分清。', url: '/scenarios/weekly-report.html', stage: 'sprout', wide: true, count: '1 篇', visual: { file: 'weekly-correction.webp', alt: '周报改稿对照，原始记录、模型误写和人工审阅共三栏' } }
]

const selected = ref<Filter>('all')
const visibleCards = computed(() => selected.value === 'all' ? cards : cards.filter(card => card.category === selected.value))

const steps = [
  ['一', '选工具与账号设置，从模型图鉴找到官方入口'],
  ['二', '把需求说清楚，写出任务、材料、格式和限制'],
  ['三', '写完一封邮件、一份周报，核对并修订初稿'],
  ['四', '用一张小表复核公式，再做五页汇报'],
  ['五', '把验证过的提示词和检查步骤留作模板']
]

const modelRows = [
  { name: 'DeepSeek', purpose: '推理 · 方案' },
  { name: 'Kimi', purpose: '长文档阅读' },
  { name: 'Qwen', purpose: '多模态 · 表格' }
]

const updates = [
  { date: '2026-11-24', tag: '新苗', text: '把一周零散记录变成一页周报', link: '/scenarios/weekly-report.html' },
  { date: '2026-11-24', tag: '新苗', text: '发布第 01 期国产 AI 实战周讯', link: '/news/2026-11-24.html' },
  { date: '2026-11-24', tag: '修剪', text: '周报同题对比公开原始回复和核对口径', link: '/compare/weekly-report.html' }
]
</script>

<template>
  <div class="garden-wrap garden-home">
    <section class="garden-hero" aria-labelledby="garden-hero-title">
      <div class="garden-hero-copy">
        <p class="garden-eyebrow garden-rise"><span aria-hidden="true">✿</span> 一座只种国产大模型的花园</p>
        <h1 id="garden-hero-title" class="garden-rise garden-delay-1">
          把国产大模型<br class="garden-title-break">种进你的<em>日常工作<svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8 Q60 1 100 5 T198 4" fill="none" stroke="#7fbf8e" stroke-width="3" stroke-linecap="round" /></svg></em>
        </h1>
        <p class="garden-intro garden-rise garden-delay-1">DeepSeek、Kimi、通义千问、豆包、智谱……不用懂技术，跟着一步步的实操教程，把 AI 用在写方案、做表格、谈客户上。</p>
        <div class="garden-hero-actions garden-rise garden-delay-2">
          <a class="garden-btn garden-btn-primary" :href="withBase('/start/')">🌱 从新手苗圃开始</a>
          <a class="garden-btn garden-btn-secondary" :href="withBase('/models/')">先看模型图鉴</a>
        </div>
        <div class="garden-rise garden-delay-3">
          <dl class="garden-stats" aria-label="示例指标，可替换">
            <div><dt>免费教程</dt><dd>120+</dd></div>
            <div><dt>主流模型实测</dt><dd>8 款</dd></div>
            <div><dt>更新 2~3 篇</dt><dd>每周</dd></div>
          </dl>
          <small class="garden-demo">演示指标，可替换 · 当前上线 4 篇实战教程、2 张工具卡、1 篇实测</small>
        </div>
      </div>

      <div class="garden-nursery garden-rise garden-delay-2" aria-label="模型苗圃演示">
        <div class="garden-plot">
          <a class="garden-cell garden-cell-deepseek" :href="withBase('/models/deepseek.html')">
            <strong class="garden-mono">DeepSeek-R1</strong>
            <span class="garden-cell-desc">练习深度思考、方案与周报整理。</span>
            <GrowthBadge stage="lush" count="12 篇" />
            <span class="garden-leaf" aria-hidden="true">🌿</span>
          </a>
          <a class="garden-cell garden-cell-kimi" :href="withBase('/models/#upcoming')">
            <strong class="garden-mono">Kimi</strong>
            <span class="garden-kimi-title">长文档<br>阅读练习</span>
            <GrowthBadge stage="lush" count="9 篇" />
            <span class="garden-leaf" aria-hidden="true">🍃</span>
          </a>
          <a class="garden-cell garden-cell-qwen" :href="withBase('/models/qwen.html')">
            <strong class="garden-mono">通义千问 Qwen</strong>
            <GrowthBadge stage="sprout" count="4 篇" />
          </a>
          <a class="garden-cell garden-cell-tools" :href="withBase('/models/#upcoming')">
            <span>🪴 豆包</span><span>🪴 智谱清言</span><span>🌱 腾讯元宝</span><small>+5 块苗圃整理中</small>
          </a>
        </div>
        <small class="garden-demo">图例演示 · 卡片成熟度与篇数可替换，发布状态见图鉴</small>
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
        <div><h2 id="garden-bento-title">按你的处境，挑一块田地</h2><p>六块苗圃，各管一件事。</p></div>
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
            <p class="garden-path-note">🌿 7 天练习目标：一套自己的提示词模板 + 5 个可复用的工作流</p>
          </template>

          <template v-if="card.id === 'models'">
            <table class="garden-model-table" aria-label="模型场景示例">
              <tbody>
                <tr v-for="row in modelRows" :key="row.name">
                  <th scope="row" class="garden-mono">{{ row.name }}</th>
                  <td>{{ row.purpose }}</td>
                  <td><span class="garden-free">免费</span></td>
                </tr>
              </tbody>
            </table>
            <small class="garden-demo">免费为示例标签 · 以官方入口与额度为准</small>
          </template>

          <div class="garden-card-foot">
            <span><GrowthBadge :stage="card.stage" :count="card.count" meter /><span v-if="card.id === 'path'" class="garden-path-free">全部免费</span></span>
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
