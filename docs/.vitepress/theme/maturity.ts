export const maturity = {
  seed: { label: '种子', icon: '🌱', level: 1, detail: '刚发布，框架和核心步骤已可用' },
  sprout: { label: '发芽', icon: '🌿', level: 2, detail: '补齐案例和练习，可放心跟做' },
  lush: { label: '茂盛', icon: '🌳', level: 3, detail: '经读者反馈和多轮修订' }
} as const

export type Maturity = keyof typeof maturity
