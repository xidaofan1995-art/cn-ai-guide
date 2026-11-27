---
description: 模型、产品、接口和智能体四层地图
maturity: seed
---

# 全球AI大模型全景：从模型家族到实际能力

**A01 · AI全景认知 · 公开初稿 / 2026-11-27**

> 依据选题大纲整理的初稿。定性选型、构造案例和事实区分；动态信息发布后持续复核。作者个人观点待补充。

![模型、产品、接口和智能体四层地图](/images/topics-a01.svg)

## 30秒概览
别先问哪个模型最强。先判断任务、数据权限和输出形态，再选使用入口。模型是能力基础，聊天产品是入口，API是程序接口，Agent是调用能力并管理任务的应用。它们不是同一级的竞争对手。

## 5分钟理解与决策
下列代表家族为生态示例，并非最新型号或性能榜单；截至2026-11-26的具体版本、价格、许可需从官方产品页复核。
| 家族 / 代表入口 | 生态方向 | 从哪里核对 |
| --- | --- | --- |
| GPT / OpenAI | 通用、多模态、API、工具 | [模型文档](https://developers.openai.com/api/docs/models) |
| Claude / Anthropic | 通用、代码、文档与工具 | [官方文档](https://platform.claude.com/docs) |
| Gemini / Google | 通用、多模态及Google生态 | [官方文档](https://ai.google.dev/gemini-api/docs) |
| Llama / Meta、Gemma / Google | 可下载权重的部分型号 | [Llama](https://www.llama.com/)、[Gemma](https://ai.google.dev/gemma) |
| Qwen、DeepSeek及其他国产家族 | 聊天、API或开放权重，依具体型号 | [国产全景](../models/overview.md) |

| 任务 | 核心验收 | 入口优先级（建议） |
| --- | --- | --- |
| 中文写作 | 保留事实、语气、结构 | 聊天产品 |
| 代码 | 可运行、测试通过、无密钥泄露 | IDE/Agent |
| 图片、音频、视频 | 输入输出模态、授权、质量 | 对应多媒体产品 |
| 批量文档抽取 | 字段准确、费用、稳定性 | API |
| 禁止外发数据 | 获准设备、网络与日志 | 受控本地部署 |

开放权重不自动等同于开源许可，也不代表隐私天然安全。闭源服务同样需要核对数据处理条款。

## 深度探索：如何自己比较
固定同一材料和提示词、版本ID、工具权限、采样参数与日期；记录原始答案、错误、耗时、费用，再按任务标准盲评。不同产品可能带有搜索、记忆或系统提示，不能把产品效果全归因于模型。第三方榜单可参考 [Artificial Analysis](https://artificialanalysis.ai/models/)，但不能替代自己业务的同题验证。本文没有跨厂商统一跑分，不作名次结论。

相关阅读：[国产模型](../models/overview.md)、[同题体验](./model-experiment.md)、[AI成本地图](./ai-cost.md)。

[返回知识专题目录](./index.md)
