<script setup lang="ts">
const world = 2830362.19
const origins = [
  { name: '其他亚洲，未另列', value: 597007.97 },
  { name: '中国', value: 534129.61, highlight: true },
  { name: '日本', value: 312013.62 },
  { name: '韩国', value: 201890.80 },
  { name: '德国', value: 177197.64 }
]

function share(value: number) {
  return (value / world * 100).toFixed(1)
}
</script>

<template>
  <figure class="trade-origins" aria-labelledby="trade-origins-title">
    <figcaption>
      <strong id="trade-origins-title">2025 年美国 HS 731815 进口额前五大来源</strong>
      <span>占美国该税目进口总额的比例</span>
    </figcaption>
    <ul>
      <li v-for="origin in origins" :key="origin.name" :class="{ highlight: origin.highlight }">
        <span>{{ origin.name }}</span>
        <span class="trade-bar" aria-hidden="true"><i :style="{ width: (origin.value / world * 400) + '%' }" /></span>
        <span class="trade-numbers"><b>{{ share(origin.value) }}%</b><small>{{ (origin.value / 1000).toFixed(1) }} 百万美元</small></span>
      </li>
    </ul>
    <p class="trade-chart-note">条形刻度 0–25% · 数据来源为世界银行 WITS / UN Comtrade</p>
  </figure>
</template>

<style scoped>
.trade-origins {
  margin: 20px 0;
  padding: clamp(14px, 3vw, 24px);
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
}

.trade-origins figcaption span {
  display: block;
  color: var(--vp-c-text-2);
  font-size: .875rem;
}

.trade-origins ul {
  display: grid;
  gap: 12px;
  margin: 18px 0;
  padding: 0;
  list-style: none;
}

.trade-origins li {
  display: grid;
  grid-template-columns: minmax(6.2em, 1fr) minmax(30px, 2.1fr) max-content;
  gap: clamp(6px, 2vw, 16px);
  align-items: center;
  margin: 0;
  font-size: .875rem;
  line-height: 1.45;
}

.trade-bar {
  height: 10px;
  overflow: hidden;
  border-radius: 999px;
  background: #eef4fa;
}

.trade-bar i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: #5b7fa6;
}

.highlight .trade-bar i { background: var(--vp-c-brand-1); }
.highlight { font-weight: 600; }

.trade-numbers {
  display: grid;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.trade-numbers small,
.trade-origins .trade-chart-note {
  color: var(--vp-c-text-2);
  font-size: .75rem;
}

.trade-origins .trade-chart-note { margin: 0; }
</style>
