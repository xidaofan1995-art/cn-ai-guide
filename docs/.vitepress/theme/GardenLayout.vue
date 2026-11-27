<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import GrowthBadge from './GrowthBadge.vue'
import ExplorerAssistant from './ExplorerAssistant.vue'
import { maturity, type Maturity } from './maturity'

const { Layout } = DefaultTheme
const { frontmatter, page, site } = useData()
const updatedFormatter = new Intl.DateTimeFormat('zh-CN', {
  timeZone: 'Asia/Shanghai',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23'
})

const lastUpdated = computed(() => {
  if (!page.value.lastUpdated) return

  const date = new Date(page.value.lastUpdated)
  const parts = Object.fromEntries(updatedFormatter.formatToParts(date).map(({ type, value }) => [type, value]))
  return {
    iso: date.toISOString(),
    text: `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`
  }
})

const stage = computed(() => {
  const candidate = frontmatter.value.maturity
  return typeof candidate === 'string' && Object.hasOwn(maturity, candidate)
    ? candidate as Maturity
    : undefined
})
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <img :src="withBase('/brand/orange-explorer.svg')" width="34" height="34" alt="" aria-hidden="true" style="display:block;flex:0 0 34px;width:34px;height:34px;object-fit:contain;margin-right:8px" />
    </template>
    <template #nav-bar-content-after>
      <a class="garden-nav-cta" :href="withBase('/start/')">从零开始 <span aria-hidden="true">→</span></a>
    </template>
    <template #doc-before>
      <div v-if="stage" class="garden-doc-stage">
        <GrowthBadge :stage="stage" meter />
      </div>
    </template>
    <template #doc-footer-before>
      <p v-if="lastUpdated" class="garden-last-updated">
        最后更新：<time :datetime="lastUpdated.iso" title="北京时间">{{ lastUpdated.text }}</time>
      </p>
    </template>
    <template #doc-after>
      <div v-if="stage" class="garden-doc-feedback">
        <span>发现有误，或希望这里多讲一步？</span>
        <a :href="withBase('/feedback/')">去留言板提建议 <span aria-hidden="true">→</span></a>
      </div>
    </template>
    <template #layout-bottom>
      <footer class="garden-footer">
        <div class="garden-wrap garden-footer-inner">
          <span>{{ site.title }} · 教程与练习公开分享</span>
          <span><a :href="withBase('/news/')">AI 资讯</a> · <a :href="withBase('/feedback/')">留言板</a> · <a :href="withBase('/about/')">关于网站</a></span>
        </div>
      </footer>
      <ClientOnly><ExplorerAssistant /></ClientOnly>
    </template>
  </Layout>
</template>
