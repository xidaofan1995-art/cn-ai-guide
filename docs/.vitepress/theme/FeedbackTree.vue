<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'
import messageData from './feedback-discussions.json'

interface Message {
  number: number
  preview: string
}

const messages: Message[] = messageData
const discussions = 'https://github.com/xidaofan1995-art/cn-ai-guide/discussions'
const composeDialog = ref<HTMLDialogElement>()

const positions = [
  [32, 29, 26, 20], [52, 20, 50, 16], [72, 26, 74, 21],
  [17, 50, 17, 61], [50, 51, 50, 57], [84, 49, 83, 61],
  [13, 31, 8, 37], [61, 41, 92, 37],
  [32, 58], [71, 57]
]

const bottles = positions.map(([x, y, mobileX, mobileY], index) => ({
  style: {
    '--bottle-x': x + '%',
    '--bottle-y': y + '%',
    '--bottle-mobile-x': (mobileX ?? x) + '%',
    '--bottle-mobile-y': (mobileY ?? y) + '%',
    '--bottle-delay': (index * -0.57) + 's'
  },
  wideOnly: mobileX === undefined,
  message: messages[index]
}))
</script>

<template>
  <section class="feedback-tree" aria-label="树上的留言瓶">
    <div class="feedback-tree-stage">
      <img class="feedback-tree-art" :src="withBase('/images/feedback-tree.webp')" alt="" width="1200" height="800" fetchpriority="high">

      <component
        :is="bottle.message ? 'a' : 'button'"
        v-for="(bottle, index) in bottles"
        :key="index"
        class="feedback-bottle"
        :class="{ 'feedback-bottle-filled': bottle.message, 'feedback-bottle-wide-only': bottle.wideOnly }"
        :style="bottle.style"
        :href="bottle.message ? discussions + '/' + bottle.message.number : undefined"
        :type="bottle.message ? undefined : 'button'"
        :aria-haspopup="bottle.message ? undefined : 'dialog'"
        :aria-label="bottle.message ? '读留言：' + bottle.message.preview : '空瓶 ' + (index + 1) + '，写留言'"
        @click="bottle.message ? undefined : composeDialog?.showModal()"
      >
        <span class="feedback-bottle-hanging" aria-hidden="true">
          <span class="feedback-bottle-cork"></span>
          <span class="feedback-bottle-glass">
            <span v-if="bottle.message" class="feedback-bottle-paper"></span>
            <span v-else class="feedback-bottle-plus">+</span>
          </span>
        </span>
        <span v-if="bottle.message" class="feedback-bottle-preview">{{ bottle.message.preview }}</span>
      </component>
    </div>

    <div class="guide-feedback-actions">
      <button type="button" class="guide-feedback-write" @click="composeDialog?.showModal()">挂一条留言</button>
      <a :href="discussions">浏览留言与回复 <span aria-hidden="true">↗</span></a>
    </div>
    <p class="guide-feedback-access">留言与回复公开。发帖需要 GitHub 账号，发布后通常几分钟会挂到树上。</p>

    <dialog ref="composeDialog" class="feedback-compose" aria-labelledby="feedback-compose-title">
      <form method="dialog">
        <button class="feedback-compose-close" aria-label="关闭">×</button>
      </form>
      <h2 id="feedback-compose-title">给树挂一条留言</h2>
      <p>想让网站哪里更好用？或是最近用 AI 做成了什么小事？</p>
      <div class="guide-feedback-actions">
        <a class="guide-feedback-write" :href="discussions + '/new?category=ideas'">写一条建议 <span aria-hidden="true">↗</span></a>
        <a :href="discussions + '/new?category=show-and-tell'">分享实战经验 <span aria-hidden="true">↗</span></a>
      </div>
      <p class="guide-feedback-access">将在 GitHub 发帖。留言会公开，分享案例时请隐去个人和公司信息。</p>
    </dialog>
  </section>
</template>

<style scoped>
.feedback-tree {
  margin-inline: auto;
  text-align: center;
}

.feedback-tree-stage {
  position: relative;
  width: min(100%, 860px);
  aspect-ratio: 3 / 2;
  margin: 3px auto -14px;
}

.feedback-tree-art {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.vp-doc .feedback-bottle,
.feedback-bottle {
  position: absolute;
  z-index: 1;
  top: var(--bottle-y);
  left: var(--bottle-x);
  display: grid;
  justify-items: center;
  justify-content: center;
  width: max-content;
  min-width: 44px;
  min-height: 48px;
  max-width: 133px;
  gap: 5px;
  transform: translateX(-50%);
  color: #254634;
  text-decoration: none;
}

.feedback-bottle:focus-visible,
.feedback-compose-close:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 4px;
  border-radius: 8px;
}

.feedback-bottle:is(:hover, :focus-visible) {
  z-index: 2;
}

.feedback-bottle-hanging {
  --cord-length: clamp(7px, 1.1vw, 15px);
  position: relative;
  display: grid;
  justify-items: center;
  padding-top: var(--cord-length);
  transform-origin: top center;
  animation: feedback-bottle-sway 6s ease-in-out var(--bottle-delay) infinite alternate;
}

.feedback-bottle-hanging::before {
  position: absolute;
  top: 0;
  left: calc(50% - .5px);
  width: 1px;
  height: var(--cord-length);
  background: #68574a;
  content: '';
}

.feedback-bottle-cork {
  z-index: 1;
  width: 46%;
  height: 7px;
  margin-bottom: -2px;
  border: 1px solid #8b694c;
  border-radius: 2px 2px 1px 1px;
  background: linear-gradient(100deg, #b69773, #d5bb97 50%, #a8835e);
}

.feedback-bottle-glass {
  position: relative;
  display: grid;
  place-items: center;
  width: clamp(32px, 5vw, 47px);
  height: clamp(35px, 5.8vw, 53px);
  border: 1.5px solid #649076;
  border-radius: 38% 38% 25% 25% / 26% 26% 19% 19%;
  background: linear-gradient(120deg, #eff8f4e8, #ffffffed 47%, #dcece0ed);
  box-shadow: inset 2px 0 4px #ffffffcf, inset -3px -3px 4px #66907636, 0 3px 9px #213c2836;
  transition: background .18s ease, box-shadow .18s ease;
}

.feedback-bottle-plus {
  margin-top: -2px;
  color: #346448;
  font-size: 22px;
  font-weight: 500;
  line-height: 1;
}

.feedback-bottle-paper {
  width: 48%;
  height: 55%;
  transform: rotate(-12deg);
  border: 1px solid #b3a080;
  border-radius: 2px 1px 3px 1px;
  background: repeating-linear-gradient(0deg, #fbf6ea 0 4px, #dacaad 4px 5px);
}

.feedback-bottle-filled .feedback-bottle-glass {
  border-color: #3a7652;
  background: linear-gradient(112deg, #e3f3e4, #f0f8ef 46%, #a9d0b3);
}

.feedback-bottle:is(:hover, :focus-visible) .feedback-bottle-glass {
  background: #fff;
  box-shadow: 0 0 0 3px #fff9, 0 4px 13px #213c284a;
}

.feedback-bottle-preview {
  padding: 4px 7px;
  border: 1px solid #c5d5c7;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 2px 8px #213c2820;
  font-size: 12px;
  font-weight: 650;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.feedback-compose {
  position: fixed;
  inset: 0;
  width: min(calc(100% - 32px), 440px);
  max-height: calc(100dvh - 36px);
  margin: auto;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--garden-radius);
  background: #fff;
  color: var(--vp-c-text-1);
  text-align: left;
  box-shadow: var(--garden-shadow-hover);
}

.feedback-compose::backdrop {
  background: rgba(23, 42, 30, .32);
}

.vp-doc .feedback-compose h2 {
  margin: 0 28px 8px 0;
  padding: 0;
  border: 0;
}

.vp-doc .feedback-compose p {
  margin-bottom: 8px;
}

.feedback-compose-close {
  position: absolute;
  inset: 10px 10px auto auto;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
}

.feedback-compose-close:hover {
  background: var(--vp-c-bg-soft);
}

@keyframes feedback-bottle-sway {
  from { transform: rotate(-3deg); }
  to { transform: rotate(3deg); }
}

@media (max-width: 560px) {
  .feedback-tree-stage {
    aspect-ratio: 1.04;
    margin-bottom: -5px;
  }

  .feedback-bottle,
  .vp-doc .feedback-bottle {
    top: var(--bottle-mobile-y);
    left: var(--bottle-mobile-x);
    max-width: 72px;
  }

  .feedback-bottle.feedback-bottle-wide-only {
    display: none;
  }

  .feedback-bottle-preview {
    font-size: 11px;
  }
}
</style>
