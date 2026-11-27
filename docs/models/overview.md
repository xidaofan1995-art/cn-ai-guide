---
description: 用一张国产大模型能力地图看清选择，再用三道职场同题对照整理表格、核算报价和撰写邮件的原始输出。
---

<script setup>
import ModelExamples from '../.vitepress/theme/ModelExamples.vue'
</script>

# 国产大模型怎么选？一张能力地图＋三道职场实测

**2026 年 11 月 25 日 · 八个模型家族 · 三道职场同题**

从你想交付的东西开始选。写邮件或整理笔记，先用一个顺手的通用入口；经常要读截图，就查这个版本是否原生接收图片；数字和状态错不起，就用固定小样复测并回到原表。最后再决定要不要为更强的模型、更多额度或 API 付费。

## 一张图看清怎么选 {#model-map}

<div class="model-map" aria-label="四类办公任务的模型能力地图">
  <div><strong>写与整理</strong><span>给文字，拿到邮件、纪要或表格。</span><small>优先检查字段是否齐全、待确认事项有没有被写成承诺。</small></div>
  <div><strong>算与核对</strong><span>给条件，拿到可解释的方案或算式。</span><small>让模型列步骤，用原表和公式独立复算。</small></div>
  <div><strong>读图片和长资料</strong><span>给截图、扫描件或长报告，拿到带出处的摘录。</span><small>先确认入口支持的文件类型、大小和页数，再抽查原文。</small></div>
  <div><strong>接进工作流</strong><span>让程序批量调用，或让智能体操作工具。</span><small>核对 API 的结构化输出、工具调用、用量价格和权限。</small></div>
</div>

这四种需求可以出现在同一个项目里。比如把展会记录变成一张客户表只需要文本；照片里的资料需要视觉输入；要自动写进表格或 CRM，再考虑 API 和智能体。联网搜索、识别 PDF、执行文件操作，还取决于产品是否接上相应工具以及你授予的权限。[用一份展会材料看懂 API、Agent、CLI 和 MCP](../basics/concepts.md)

### 八个家族从哪里看

下表列的是 2026 年 11 月核对到的**代表版本和适合先试的问题**。版本会更新，同一家族的 Flash、Pro、Max、小参数开源版也有各自的输入限制。同入口能够选择多个家族时，记下实际模型名和是否开启搜索、推理等功能。

| 家族 | 可查的代表版本 | 想解决这个问题时可先试 | 查入口和规格 |
|---|---|---|---|
| DeepSeek | V4.1 Flash、V4 Pro | 整理纪要，比较快速回复和多条件推理。要读图时核对具体版本。 | [官方规格](https://api-docs.deepseek.com/zh-cn/quick_start/pricing/) · [本站图鉴](./deepseek.md) |
| 通义千问 Qwen | Qwen 3.8 Flash、Qwen 4 Max | 同一份材料既有文字又有截图时，试做一张带出处的表。 | [阿里云百炼](https://help.aliyun.com/zh/model-studio/text-generation-model/) · [本站图鉴](./qwen.md) |
| 豆包 Seed | 豆包 Seed 2.1 Lite / Pro | 拿中文材料做多模态理解或办公整理，检查所选版本支持的输入。 | [火山方舟更新](https://console.volcengine.com/ark/region:cn-beijing/docs/model-release-announcement) · [本站实练](./doubao.md) |
| Kimi | Kimi K3 | 拿多份材料做分段提取，让每条结论指向原文。 | [百炼模型列表](https://help.aliyun.com/zh/model-studio/models?disableWebsiteRedirect=true) |
| 智谱 GLM | GLM 5.3 | 试一项需要多步规划或写程序的任务，检查每一步能否验证。 | [百炼模型与调用示例](https://help.aliyun.com/zh/model-studio/openai-compatible-agents-api-agent-create) |
| MiniMax | M3.1 Flash | 用短视频、图片和说明文字试一轮整理，抽查文本有没有读错。 | [腾讯云 TokenHub 文档](https://cloud.tencent.com/document/product/1823/132246) · [百炼模型列表](https://help.aliyun.com/zh/model-studio/models?disableWebsiteRedirect=true) |
| 阶跃星辰 Step | Step 5 Preview | 试把商品标签或展会材料图片转成结构化文本。 | [阶跃星辰开放平台](https://platform.stepfun.com/) |
| 小米 MiMo | MiMo V2.6 Pro Ultraspeed | 用同一份表格任务或代码任务比较结果和返工成本。 | [百炼模型列表](https://help.aliyun.com/zh/model-studio/models?disableWebsiteRedirect=true) |

「豆包」「元宝」「千问」也可能是你在用的**应用名**。应用可以提供搜索、附件处理和多个模型选项。记实测结果时，把应用名、选中的模型、开关设置各记一项。用 API 时再核对部署地域、输入与输出单价，以及是否区分缓存、推理和时段。[DeepSeek 官方计费](https://api-docs.deepseek.com/zh-cn/quick_start/pricing/) · [百炼价目表](https://help.aliyun.com/zh/model-studio/model-pricing)

## 三道职场同题怎么判 {#office-tests}

这是三项连在一起的工作：从展会笔记里整理客户、从表格查报价、最后发英文邮件。每题用了同一份虚构材料与提示词；把「模型写了什么」和「人工复核通过了什么」放到一起看。

| 同题 | 预先写好的验收条件 |
|---|---|
| 整理展会客户表 | 三家公司各一行。Northstar 的 500 件属于试制，Oak 的 20,000 件是潜在年用量。A1、A4 都应能在表里找到，Harbor 和 Oak 的相关空白保留为未提供。 |
| 核算 500 件报价 | A 厂为 575 元；B 厂起订 1000 件，本次不能下单；C 厂已知 515 元加未定运费，运费不超过 85 元才在预算内；只有运费低于 60 元，C 的总成本才低于 A。 |
| 写英文跟进邮件 | 请对方确认最新图纸、材料牌号和盐雾测试要求，收到后再复核；邮件保持 80–120 英文词，不承诺价格、交期或一定达到标准。 |

<ModelExamples />

### 怎么复测

- **API 样本**在 Cloudflare Workers AI 运行 Qwen 3.8 27B，关闭深度思考，温度 0.2，输出上限 1100 token。[API 模型规格](https://developers.cloudflare.com/workers-ai/models/qwen3.8-27b/)
- **本地样本**为 DeepSeek-R1-Distill-Qwen-1.5B 和 Qwen2.5-1.5B-Instruct。两者都是 Q4_K_M GGUF，用 node-llama-cpp 3.22.3、CPU、4096 上下文、温度 0.2、top_p 0.95、随机种子 42、输出上限 1900 token。[DeepSeek 量化权重](https://huggingface.co/bartowski/DeepSeek-R1-Distill-Qwen-1.5B-GGUF) · [Qwen 量化权重](https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF)
- 三组都只读题内材料，逐题新建会话、不启用联网或工具，每个版本每题运行一次。下载文件包含题目、配置、最终可见回答和结束状态。页面切换展示已保存的结果，现场复测可以把题目复制到你自己的入口。三组使用的模型大小和运行方式不同，这组结果用于学习如何验收，小样本无法支持模型家族排名。

对这类工作，先挑你最常做的一题，用当前入口跑一遍。核对原始记录、数字和承诺，再比较哪些段落能直接用、哪些还要改。若结果要写进系统，把表格题加一条要求：给固定列名，空字段用空值，校验通过后再写入。

## 按需要深入 {#further-reading}

- 想换一份工作材料再试，读[两款本地模型的周报对照](../compare/weekly-report.md)。
- 想找一个常用入口，继续看[模型档案](./index.md#profiles)或[一分钟速查卡](./quick-pick.md)。
- 想换一个真实业务问题，读[用紧固件实查海关数据](../tools/trade-data.md)。

<style>
.model-map {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 20px 0;
}
.model-map > div {
  display: grid;
  align-content: start;
  gap: 5px;
  padding: clamp(14px, 3vw, 22px);
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background: linear-gradient(145deg, #eef4fa, #fff 76%);
}
.model-map strong { color: #3c6082; font-size: 1.06rem; }
.model-map span { line-height: 1.65; }
.model-map small { color: var(--vp-c-text-2); line-height: 1.6; }
@media (max-width: 560px) {
  .model-map { grid-template-columns: 1fr; }
}
</style>

## 选型时别漏掉可用性与业务约束

模型家族、网页产品、API端点及可下载权重是四个不同层次。使用时应记录具体型号、时间和入口。普通人先看实际工作能否完成；产品经理同时核查API、费用、延迟、数据处理；企业还要确认网络可用性、合同与支付开票。原文同题结果是历史小样本，不能据此宣称某家族整体优胜。进一步理解：[全球AI模型地图](../topics/global-models.md)、[模型盲评练习](../topics/model-experiment.md)、[AI成本计算器](../topics/ai-cost.md)。
