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
    <template #layout-bottom>
      <footer class="garden-footer">
        <div class="garden-wrap garden-footer-inner">
          <span>国产AI实战指南 · 免费内容全站公开 · <a :href="withBase('/owners/#courses')">付费课程见专栏页</a></span>
          <span>由 VitePress 驱动 · 计划每周二／五更新</span>
        </div>
      </footer>
    </template>
  </Layout>
</template>
