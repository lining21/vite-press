# 小程序列表

纳晖绿能、纳晖光伏运维、纳光宝、智光宝、纳晖储能

## 日常巡检任务
**每周检查小程序是否存在认证过期情况，并告知业务处理，截止目前巡检情况如下**
- 1. 提醒并跟进认证即将超期情况并告知业务处理**4**个/次（包含纳晖储能、纳晖光伏运维小程序等）
- 2. 提醒并跟进交易投诉处理**1**个/次（纳晖绿能小程序）。
- 3. 提醒并跟进手机号验证资源包告警**2**个/次（纳晖绿能、智光宝小程序）。

## 小程序运营状况
**截止目前小程序情况如下**
| 小程序名称 | 纳晖绿能 | 纳晖光伏运维 | 纳光宝 | 智光宝 | 纳晖储能 |
| --- | --- | --- | --- | --- | --- |
| 累计用户数 | 10.74万 | 1,856| 167 | 1.12万 | 1,859 |
| 运营指标 | 优秀 | 优秀 | 优秀 | 优秀 | 优秀 |
| 性能指标 | 优秀 | 普通 | 普通 | 良好 | 普通 |
| 用户指标 | 良好 | 普通 | 普通 | 优秀 | 普通 |
| 下次认证提醒日期 | 2024年12月13日 | 2024年05月10日（已提醒） | 2024年09月14日 | 2024年07月19日 | 2025年01月29日 |
| 手机号快速验证组件累计 | 3.82万次 | 1647 | 375 | 2.95万次 | 870 |
| 手机号快速验证组件总量 | 9.1万次 | 6000 | 1000 | 8.1万次 | 6000 |

## 小程序API更新情况
**近期API更新情况（黄色）**

::: danger 更新
**getSystemInfo** 接口不再维护，建议开发者使用 getSystemSetting / getAppAuthorizeSetting / getDeviceInfo / getWindowInfo / getAppBaseInfo
:::

::: danger 更新
wx.downloadFile、wx.uploadFile 接口新增 **useHighPerformanceMode** 参数
:::

::: danger 更新
API getFileInfo 接口文件摘要算法新增支持 **sha256**
:::

::: danger 更新
API 有授权弹窗的隐私接口（例如 wx.getLocation），将不会再弹官方隐私弹窗，而是在授权弹窗上增加“隐私勾选”；无授权弹窗的隐私接口（如 wx.getClipboardData），将继续保留原来的官方隐私弹窗
:::

::: info 修复
框架 request 接口 useHighPerformanceMode 模式下 onHeadersReceived 回调参数漏了 statusCode
:::

::: info 修复
API request 接口 useHighPerformanceMode 模式下 开启重定向拦截没触发 onHeadersReceived 回调
:::