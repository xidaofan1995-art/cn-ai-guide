<script setup lang="ts">
import { computed } from 'vue'
import { maturity, type Maturity } from './maturity'

const props = defineProps<{ stage: Maturity; count?: string; meter?: boolean }>()
const status = computed(() => maturity[props.stage])
</script>

<template>
  <span class="garden-growth">
    <span :class="['garden-stage', 'garden-stage-' + stage]" :title="status.detail">
      <span aria-hidden="true">{{ status.icon }}</span> {{ status.label }}<template v-if="count"> · {{ count }}</template>
    </span>
    <span v-if="meter" class="garden-meter" role="img" :aria-label="'成熟度 ' + status.level + '/3'">
      <span v-for="segment in 3" :key="segment" :class="{ filled: segment <= status.level }" />
    </span>
  </span>
</template>
