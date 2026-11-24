<script setup>
import { withBase } from 'vitepress'

const steps = [
  { title: '认识模型', detail: '先了解常见国产 AI 工具和适用场景。', link: '/models/' },
  { title: '完成一个任务', detail: '从文案、PPT 或周报入手，做出一份可以继续修改的初稿。', link: '/scenarios/' },
  { title: '检查结果', detail: '看看如何用同一任务对比不同工具的产出。', link: '/compare/' }
]

const tasks = [
  { title: '写文案', detail: '把提纲整理成一份文案初稿', image: 'copywriting', link: 'writing' },
  { title: '做 PPT', detail: '从原始材料提炼演示大纲', image: 'presentation', link: 'slides' },
  { title: '写周报', detail: '把零散记录整理成一页周报', image: 'weekly-report', link: 'weekly-report' }
]

function openSearch() {
  // Use the default theme's search button so the whole site shares one index.
  document.querySelector('#local-search button')?.click()
}
</script>

<template>
  <div class="guide-home">
    <section class="guide-hero" aria-labelledby="guide-hero-heading">
      <div class="guide-intro">
        <h1 id="guide-hero-heading">三步上手国产 AI</h1>
        <p>面向职场人和中小企业经营者，从一件手上的工作学起。</p>
        <button class="guide-search" type="button" @click="openSearch">
          <span>搜索任务或工具</span>
          <span class="guide-search-action">搜索</span>
        </button>
      </div>
      <img
        class="guide-hero-photo"
        :src="withBase('/images/study-desk.webp')"
        alt=""
        width="1050"
        height="700"
        fetchpriority="high"
      >
    </section>

    <div class="guide-work">
      <section class="guide-learning" aria-labelledby="guide-learning-heading">
        <h2 id="guide-learning-heading">学习路径</h2>
        <ol class="guide-steps">
          <li v-for="(step, index) in steps" :key="step.link">
            <a :href="withBase(step.link)">
              <span class="guide-step-number" aria-hidden="true">{{ index + 1 }}</span>
              <span class="guide-item-text">
                <strong>{{ step.title }}</strong>
                <span>{{ step.detail }}</span>
              </span>
              <span class="guide-arrow" aria-hidden="true">→</span>
            </a>
          </li>
        </ol>
      </section>

      <section class="guide-tasks" aria-labelledby="guide-tasks-heading">
        <h2 id="guide-tasks-heading">选一个任务</h2>
        <ul class="guide-task-list">
          <li v-for="task in tasks" :key="task.link">
            <a :href="withBase('/scenarios/#' + task.link)">
              <img :src="withBase('/images/' + task.image + '.webp')" alt="" width="640" height="426">
              <span class="guide-item-text">
                <strong>{{ task.title }}</strong>
                <span>{{ task.detail }}</span>
              </span>
              <span class="guide-arrow" aria-hidden="true">→</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
