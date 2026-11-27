---
description: 从场景倒推端边云和网络
maturity: seed
---

# 全屋智能生态全景：传感器、协议、平台与用户场景

**C02 · AI×智能硬件 · 公开初稿 / 2026-11-27**

> 依据选题大纲整理的初稿。定性选型、构造案例和事实区分；动态信息发布后持续复核。作者个人观点待补充。

![从场景倒推端边云和网络](/images/topics-c02.svg)

## 30秒概览
先决定要解决哪类生活问题，再选设备和协议。关键自动化必须考虑断网、断电与误触发。跨品牌连接不等于功能完全一致。

## 5分钟理解与决策
| 技术 | 常见应用 | 选型约束 |
| --- | --- | --- |
| Wi-Fi | 摄像头、高带宽设备 | 覆盖、容量、供电 |
| Zigbee | 低功耗传感、控制 | 网关、兼容性、网络规划 |
| Thread | 低功耗IP网状网络 | Border Router、产品生态 |
| Bluetooth LE / Mesh | 配网、近场、建筑控制 | 拓扑、低功耗节点与中继 |
| Matter | 跨生态应用层互操作 | 支持设备类型、版本、平台功能差异 |

【已核事实】[CSA Matter FAQ](https://csa-iot.org/all-solutions/matter/matter-faq/)列出Wi-Fi、Thread、Ethernet等连接与BLE配网；[Thread Group](https://threadgroup.org/resources)介绍低功耗mesh与Border Router；[Bluetooth Mesh FAQ](https://www.bluetooth.com/learn-about-bluetooth/topology-options/le-mesh/mesh-faq/)说明低功耗节点机制（2026-11-27，动态支持情况复核）。
| 场景 | 感知/执行 | 关键验证 |
| --- | --- | --- |
| 离家安防 | 门窗、运动、告警 | 断网告警、漏报误报 |
| 夜间照明 | 人体/照度、灯具 | 时延、误触发、手动兜底 |
| 环境管理 | 温湿度、空气质量、通风 | 传感精度、滞回与噪声 |
| 看护 | 摄像头、告警 | 隐私、存储、授权 |

## 深度探索：可靠性和市场差异
把控制链拆为传感→网络→规则→执行→反馈，逐层测试。纽扣电池设备要测实际电流、休眠、唤醒、重传、温度、低电量提示；半小时心跳并不能单独推算续航。断开外网、断开网关、重启设备、测试固件回滚和换机迁移。国内外产品生态、配网、认证和售后条件需按目标市场核查，不能将规范支持当作所有在售设备支持。本篇未给出国别市场份额或平台实测。

相关阅读：[硬件开发](./hardware-development.md)、[摄像头](./smart-camera.md)、[端侧AI](./edge-ai.md)。

[返回知识专题目录](./index.md)
