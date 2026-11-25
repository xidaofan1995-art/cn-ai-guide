# DeepSeek

适合先试的任务是**把已有材料整理成可核对的文本**，例如周报、邮件初稿和逐页汇报提纲。此处的场景建议以人工核对为前提。

## 从哪里开始

| 入口 | 用于什么 | 使用前核对 |
|---|---|---|
| [DeepSeek 网页](https://chat.deepseek.com/) | 普通对话、整理已有素材 | 本次访问出现登录页。界面显示的模式、附件与联网选项可能调整。 |
| [官方移动端](https://www.deepseek.com/download/) | 手机端对话与练习 | 官方下载页将助手描述为可免费体验；额度与功能以登录后界面为准。 |
| [DeepSeek API](https://api-docs.deepseek.com/zh-cn/) | 系统集成、开发侧重复调用 | 需要开发者配置和核对[当前计费](https://api-docs.deepseek.com/zh-cn/quick_start/pricing/)。 |

本页的入口、免费与计费口径核验于 2026 年 11 月 24 日。[DeepSeek 官方产品页](https://www.deepseek.com/) · [官方更新日志](https://api-docs.deepseek.com/zh-cn/updates/)

## 第一次练习

想用五道题系统试一遍，可以看[DeepSeek 实战自测清单](./deepseek-self-test.md)。

在网页端新建对话，粘贴[周报练习材料](/practice/weekly-report.txt)。先使用能处理纯文本的对话入口，按材料核对 12 条总线索、5 条优先线索和 4 条已发邮件。再追问有哪些「待确认」被错写成已完成。

查看完整的[周报教程](../scenarios/weekly-report.md)。[同题对比](../compare/weekly-report.md)使用的是 **DeepSeek-R1-Distill-Qwen-1.5B** 公开权重的本地量化版本，版本与官方对话服务分别记录。[模型卡](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B)
