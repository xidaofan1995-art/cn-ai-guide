<script setup lang="ts">
import { computed } from 'vue'
import { maturity, type Maturity } from './maturity'

const props = defineProps<{ stage: Maturity; count?: string; meter?: boolean }>()
const status = computed(() => maturity[props.stage])
</script>

<template>
  <span v-if="meter" class="garden-meter" role="img" :aria-label="'成熟度：' + status.label + ' ' + status.level + '/3'" :title="status.detail">
    <span v-for="segment in 3" :key="segment" :class="{ filled: segment <= status.level }" />
  </span>
  <span v-else :class="['garden-stage', 'garden-stage-' + stage]" :title="status.detail">
    <span aria-hidden="true">{{ status.icon }}</span> {{ status.label }}<template v-if="count"> · {{ count }}</template>
  </span>
</template>
