<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import GrowthBadge from './GrowthBadge.vue'
import { maturity, type Maturity } from './maturity'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
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
      <span class="garden-logo" aria-hidden="true">✿</span>
    </template>
    <template #nav-bar-content-after>
      <a class="garden-nav-cta" :href="withBase('/start/')">从零开始 <span aria-hidden="true">→</span></a>
    </template>
    <template #doc-before>
      <div v-if="stage" class="garden-doc-stage">
        <GrowthBadge :stage="stage" meter />
      </div>
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
          <span>国产AI实战指南 · 免费内容全站公开</span>
          <span><a :href="withBase('/news/')">AI 资讯</a> · <a :href="withBase('/feedback/')">留言板</a> · <a :href="withBase('/about/')">关于我们</a></span>
        </div>
      </footer>
    </template>
  </Layout>
</template>
