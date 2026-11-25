<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { models, tasks } from '../../public/practice/model-overview-runs.json'

const activeId = ref(tasks[0].id)
const task = computed(() => tasks.find(item => item.id === activeId.value) ?? tasks[0])
</script>

<template>
  <section class="model-examples" aria-labelledby="model-examples-title">
    <div class="example-head">
      <strong id="model-examples-title">同题输出对照</strong>
      <a :href="withBase('/practice/model-overview-runs.json')" download>下载完整记录 JSON</a>
    </div>
    <div class="example-switch" role="group" aria-label="选择职场测试题">
      <button v-for="item in tasks" :key="item.id" type="button"
        :aria-pressed="item.id === activeId" aria-controls="model-active-task" @click="activeId = item.id">
        {{ item.label }}
      </button>
    </div>
    <p class="example-summary" aria-live="polite">{{ task.label }} · {{ task.summary }}</p>

    <div id="model-active-task">
      <details :key="task.id" class="example-input">
        <summary>查看这道题的原始材料与提示词</summary>
        <pre>{{ task.prompt }}</pre>
      </details>

      <div class="example-grid" :key="task.id">
        <article v-for="(output, index) in task.outputs" :key="models[index].id">
          <p class="example-model"><strong>{{ models[index].label }}</strong><small>{{ models[index].method }}</small></p>
          <p class="example-review">{{ output.review }}</p>
          <details>
            <summary>展开原始回答</summary>
            <pre>{{ output.response }}</pre>
          </details>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.model-examples {
  margin: 24px 0;
  padding: clamp(14px, 3vw, 22px);
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
}

.example-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 6px 16px;
}

.example-head a { font-size: .85rem; }

.example-switch {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0;
}

.example-switch button {
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  font-size: .875rem;
}

.example-switch button[aria-pressed="true"] {
  border-color: var(--vp-c-text-1);
  background: var(--vp-c-text-1);
  color: #fff;
}

.model-examples .example-summary {
  margin: 10px 0 14px;
  font-size: .9rem;
}

.example-input { margin: 14px 0; }

.model-examples summary {
  cursor: pointer;
  color: var(--vp-c-brand-1);
  font-size: .85rem;
  font-weight: 600;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(190px, 100%), 1fr));
  gap: 12px;
}

.example-grid article {
  min-width: 0;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}

.model-examples .example-model {
  display: grid;
  gap: 4px;
  margin: 0;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.example-model strong { font-size: .94rem; }
.example-model small { color: var(--vp-c-text-2); }

.model-examples .example-review {
  margin: 8px 0 12px;
  font-size: .875rem;
  line-height: 1.6;
}

.model-examples pre {
  margin: 8px 0 0;
  padding: 10px;
  border-radius: 8px;
  background: #f5f7f9;
  color: var(--vp-c-text-1);
  font-size: .8rem;
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
</style>
