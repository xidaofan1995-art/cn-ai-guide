<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute, withBase } from 'vitepress'
import mascot from './explorer-mascot'

const route = useRoute()
const ready = ref(false)
const open = ref(false)
const hidden = ref(false)
const still = ref(false)
const moving = ref(false)
const query = ref('')
const trigger = ref<HTMLButtonElement>()
const input = ref<HTMLInputElement>()
const entries = [
  { title: '从零开始：7 天练习', path: '/start/', tags: '入门 学习 新手 AI 基础 怎么学' },
  { title: '全球 AI 大模型全景', path: '/topics/global-models', tags: '模型 ChatGPT Claude Gemini GPT DeepSeek 国内 国外 对比 选择' },
  { title: '工具实测与选型目录', path: '/tools/', tags: '工具 推荐 选择 测评 插件 应用 市场调研 用户研究' },
  { title: '工具实测方法', path: '/tools/method', tags: '可靠 证据 评测 对比 方法 推荐 标准' },
  { title: 'AI 订阅与 API 成本地图', path: '/topics/ai-cost', tags: '费用 免费 付费 价格 预算 会员 成本' },
  { title: '海关数据选型实测', path: '/tools/trade-data', tags: '外贸 出海 海关 市场 数据 客户 调研' },
  { title: '海外潜客开发工作流', path: '/topics/overseas-lead-workflow', tags: '外贸 出海 客户 买家 潜客 B2B' },
  { title: 'AI 如何做智能硬件市场调研', path: '/topics/eink-market-research', tags: '市场调研 竞品 需求 智能硬件 用户研究 水墨屏 产品' },
  { title: '智能硬件产品开发全景', path: '/topics/hardware-development', tags: '智能硬件 产品经理 IPD 开发 学习 研发' },
  { title: '全屋智能生态全景', path: '/topics/smart-home-ecosystem', tags: '智能家居 全屋智能 传感器 协议' },
  { title: '个人多 Agent 工作流', path: '/topics/multi-agent-workflow', tags: 'Agent 智能体 自动化 WorkBuddy Hermes 工作流 插件' },
  { title: '多 AI 共享记忆与归档', path: '/tools/obsidian-agent-knowledge', tags: 'Obsidian 知识库 记忆 同步 多智能体' },
  { title: '个人 RAG 知识库', path: '/topics/personal-rag', tags: 'RAG 知识库 检索 文档' },
  { title: '提示词库', path: '/prompts/', tags: '提示词 prompt 模板' },
  { title: '实战案例', path: '/scenarios/', tags: '案例 营销 办公 Excel PPT 文案' },
  { title: '留言板：反馈与需求', path: '/feedback/', tags: '联系 客服 建议 反馈 自研 插件 需求' },
  { title: '关于网站', path: '/about/', tags: '关于 作者 网站 收费 原则' }
]
const shortcuts = [entries[0], entries[2], entries[7], entries[8], entries[15]]
const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return shortcuts
  const words = q.split(/[\\s，。！？、,!?]+/).filter(Boolean)
  return entries.map(e => {
    const corpus = (e.title + ' ' + e.tags).toLowerCase()
    const score = words.reduce((n, w) => n + (corpus.includes(w) ? 5 : 0), 0)
      + (q.length > 2 ? e.tags.split(' ').reduce((n, w) => n + (w.length > 1 && q.includes(w.toLowerCase()) ? 2 : 0), 0) : 0)
    return { ...e, score }
  }).filter(e => e.score > 0).sort((a, b) => b.score - a.score).slice(0, 5)
})
let timer: ReturnType<typeof setTimeout> | undefined
let endTimer: ReturnType<typeof setTimeout> | undefined
let loadTimer: ReturnType<typeof setTimeout> | undefined
let lastScroll = 0
let motion: MediaQueryList | undefined
function stopMotion() {
  clearTimeout(timer); clearTimeout(endTimer); moving.value = false
}
function schedule() {
  stopMotion()
  if (!ready.value || open.value || hidden.value || still.value || document.hidden || motion?.matches) return
  timer = setTimeout(() => {
    if (Date.now() - lastScroll < 2200) { schedule(); return }
    moving.value = true
    endTimer = setTimeout(schedule, 650)
  }, 18000 + Math.random() * 12000)
}
function scroll() { lastScroll = Date.now(); if (moving.value) schedule() }
function save() {
  try { localStorage.setItem('garden-explorer-v1', JSON.stringify({ hidden: hidden.value, still: still.value })) } catch {}
}
function close(focus = false) {
  open.value = false
  if (focus) nextTick(() => trigger.value?.focus())
}
function toggle() {
  if (open.value) close(true)
  else { open.value = true; nextTick(() => input.value?.focus()) }
}
function hide() { close(); hidden.value = true; save() }
function wake() { hidden.value = false; save(); nextTick(() => trigger.value?.focus()) }
function toggleMotion() { still.value = !still.value; save() }
function keydown(e: KeyboardEvent) { if (e.key === 'Escape' && open.value) close(true) }
function fullSearch() {
  close()
  nextTick(() => {
    const button = document.querySelector<HTMLButtonElement>('.VPNavBarSearch button, .DocSearch-Button')
    if (button) button.click()
    else window.location.href = withBase('/topics/')
  })
}
function initialize() { loadTimer = setTimeout(() => { ready.value = true; schedule() }, 600) }
onMounted(() => {
  try {
    const prefs = JSON.parse(localStorage.getItem('garden-explorer-v1') || '{}')
    hidden.value = prefs.hidden === true; still.value = prefs.still === true
  } catch {}
  motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  motion.addEventListener('change', schedule)
  document.addEventListener('visibilitychange', schedule)
  document.addEventListener('keydown', keydown)
  window.addEventListener('scroll', scroll, { passive: true })
  if (document.readyState === 'complete') initialize()
  else window.addEventListener('load', initialize, { once: true })
})
onUnmounted(() => {
  stopMotion(); clearTimeout(loadTimer)
  motion?.removeEventListener('change', schedule)
  document.removeEventListener('visibilitychange', schedule)
  document.removeEventListener('keydown', keydown)
  window.removeEventListener('scroll', scroll)
  window.removeEventListener('load', initialize)
})
watch([open, hidden, still], schedule)
watch(() => route.path, () => { close(); query.value = '' })
</script>

<template>
  <Teleport to="body">
    <aside v-if="ready" class="explorer" aria-label="桔子哥网站助手">
      <button v-if="hidden" class="wake" type="button" @click="wake">唤醒桔子哥</button>
      <template v-else>
        <section v-if="open" id="explorer-panel" class="panel" aria-label="桔子哥站内导览" role="region">
          <header class="panel-head">
            <div><strong>桔子哥 · AI Explorer</strong><small>知识研究与工具选型助手</small></div>
            <button class="close" type="button" aria-label="收起助手" @click="close(true)">×</button>
          </header>
          <div class="panel-body">
            <p>想学习 AI，还是找适合你的业务工具？我帮你找到站内相关知识。</p>
            <label class="search-label" for="explorer-query">输入关键词或业务问题</label>
            <input id="explorer-query" ref="input" v-model="query" type="search" maxlength="160" placeholder="例如：市场调研、外贸、AI工具" />
            <small class="section-label">{{ query.trim() ? '相关站内内容' : '从这些问题开始' }}</small>
            <div v-if="results.length" class="results">
              <a v-for="item in results" :key="item.path" :href="withBase(item.path)" @click="close()">{{ item.title }} <span aria-hidden="true">→</span></a>
            </div>
            <p v-else class="empty">暂未匹配到精选内容，可使用全站搜索或留言板。</p>
            <div class="actions"><button type="button" @click="fullSearch">全站搜索</button><a :href="withBase('/feedback/')">提建议 / 联系站长</a></div>
            <small class="notice">当前为本地站内导览版，不调用大模型，不上传搜索内容。</small>
          </div>
          <footer class="panel-footer">
            <button type="button" @click="toggleMotion">{{ still ? '恢复动作' : '暂停动作' }}</button>
            <button type="button" @click="hide">隐藏助手</button>
          </footer>
        </section>
        <button ref="trigger" class="launcher" type="button" :aria-expanded="open" aria-controls="explorer-panel" :aria-label="open ? '收起桔子哥助手' : '打开桔子哥助手'" @click="toggle">
          <img :src="mascot" alt="" width="69" height="132" :class="{ moving }" decoding="async" />
          <span>{{ open ? '收起' : '问桔子哥' }}</span>
        </button>
      </template>
    </aside>
  </Teleport>
</template>

<style scoped>
.explorer{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(14px,env(safe-area-inset-bottom));z-index:35;display:flex;flex-direction:column;align-items:flex-end;gap:8px;font-family:var(--vp-font-family-base);color:#35433a;max-width:calc(100vw - 24px);pointer-events:none}
.explorer>*{pointer-events:auto}
.launcher{display:flex;align-items:center;flex-direction:column;gap:1px;border:0;padding:3px 6px 4px;cursor:pointer;background:transparent;touch-action:manipulation}
.launcher img{width:auto;height:104px;object-fit:contain;transform-origin:50% 95%;filter:drop-shadow(0 3px 4px #3c40231f)}
.launcher span,.wake{font-size:11px;line-height:1.4;color:#415540;background:#fffdf6;border:1px solid #dce2d3;border-radius:20px;padding:4px 9px;box-shadow:0 2px 7px #31422b12}
.launcher:focus-visible,.explorer button:focus-visible,.explorer a:focus-visible,.explorer input:focus-visible{outline:2px solid #73946d;outline-offset:2px}
.moving{animation:explorer-nod .65s ease-in-out 1}
@keyframes explorer-nod{0%,100%{transform:rotate(0)}35%{transform:rotate(-4deg) translateY(-2px)}70%{transform:rotate(2deg)}}
.panel{width:340px;max-width:calc(100vw - 28px);max-height:min(560px,calc(100dvh - 155px));overflow:auto;background:#fffdf8;border:1px solid #dce2d3;border-radius:15px;box-shadow:0 9px 32px #303c3326;overscroll-behavior:contain;text-align:left}
.panel-head{display:flex;justify-content:space-between;align-items:center;padding:15px 16px;border-bottom:1px solid #e4e8dd;background:#f1f3e9;gap:8px}
.panel-head strong{font-size:15px;display:block}.panel-head small,.section-label,.notice{font-size:11px;color:#657267;display:block;line-height:1.6}
.close{font-size:24px;line-height:1;min-width:36px;min-height:36px;cursor:pointer}
.panel-body{padding:14px 16px}.panel-body p{font-size:13px;line-height:1.65;margin:0 0 12px}.search-label{display:block;font-size:12px;font-weight:600;margin-bottom:5px}
.panel-body input{width:100%;box-sizing:border-box;background:#fff;border:1px solid #cbd5c5;border-radius:8px;padding:9px 10px;font-size:16px;color:#35433a;line-height:1.5}
.section-label{margin:12px 0 5px}.results{display:grid;gap:5px}.results a{display:flex;justify-content:space-between;gap:8px;padding:8px 10px;border:1px solid #e4e8dc;border-radius:7px;font-size:13px;background:white;color:#3c5740;text-decoration:none}.results a:hover{background:#eef3e9}.actions{display:flex;gap:13px;flex-wrap:wrap;margin:14px 0 10px;font-size:12px;color:#456748}.actions button,.actions a{color:inherit;text-decoration:underline;cursor:pointer}.panel-footer{display:flex;gap:16px;padding:9px 16px;border-top:1px solid #e4e8dd;font-size:12px;color:#657267}.panel-footer button,.wake{cursor:pointer}
@media(max-width:767px){.explorer{right:max(8px,env(safe-area-inset-right));bottom:max(10px,env(safe-area-inset-bottom));z-index:35}.launcher img{height:60px}.launcher span{font-size:10px;padding:3px 7px}.panel{width:min(340px,calc(100vw - 20px));max-height:min(510px,calc(100dvh - 110px))}.panel-body{padding:12px}.panel-head{padding:10px 12px}}
@media(prefers-reduced-motion:reduce){.moving{animation:none}}
</style>
