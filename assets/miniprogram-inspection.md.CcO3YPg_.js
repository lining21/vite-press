import{_ as t,c as d,o as e,a1 as o}from"./chunks/framework.OvzEuveM.js";const u=JSON.parse('{"title":"小程序列表","description":"","frontmatter":{},"headers":[],"relativePath":"miniprogram-inspection.md","filePath":"miniprogram-inspection.md"}'),a={name:"miniprogram-inspection.md"},s=o('<h1 id="小程序列表" tabindex="-1">小程序列表 <a class="header-anchor" href="#小程序列表" aria-label="Permalink to &quot;小程序列表&quot;">​</a></h1><p>纳晖绿能、纳晖光伏运维、纳光宝、智光宝、纳晖储能</p><h2 id="日常巡检任务" tabindex="-1">日常巡检任务 <a class="header-anchor" href="#日常巡检任务" aria-label="Permalink to &quot;日常巡检任务&quot;">​</a></h2><p><strong>每周检查小程序是否存在认证过期情况，并告知业务处理，截止目前巡检情况如下</strong></p><ul><li><ol><li>提醒并跟进认证即将超期情况并告知业务处理<strong>4</strong>个/次（包含纳晖储能、纳晖光伏运维小程序等）</li></ol></li><li><ol start="2"><li>提醒并跟进交易投诉处理<strong>1</strong>个/次（纳晖绿能小程序）。</li></ol></li><li><ol start="3"><li>提醒并跟进手机号验证资源包告警<strong>2</strong>个/次（纳晖绿能、智光宝小程序）。</li></ol></li></ul><h2 id="小程序运营状况" tabindex="-1">小程序运营状况 <a class="header-anchor" href="#小程序运营状况" aria-label="Permalink to &quot;小程序运营状况&quot;">​</a></h2><p><strong>截止目前小程序情况如下</strong></p><table tabindex="0"><thead><tr><th>小程序名称</th><th>纳晖绿能</th><th>纳晖光伏运维</th><th>纳光宝</th><th>智光宝</th><th>纳晖储能</th></tr></thead><tbody><tr><td>累计用户数</td><td>10.74万</td><td>1,856</td><td>167</td><td>1.12万</td><td>1,859</td></tr><tr><td>运营指标</td><td>优秀</td><td>优秀</td><td>优秀</td><td>优秀</td><td>优秀</td></tr><tr><td>性能指标</td><td>优秀</td><td>普通</td><td>普通</td><td>良好</td><td>普通</td></tr><tr><td>用户指标</td><td>良好</td><td>普通</td><td>普通</td><td>优秀</td><td>普通</td></tr><tr><td>下次认证提醒日期</td><td>2024年12月13日</td><td>2024年05月10日（已提醒）</td><td>2024年09月14日</td><td>2024年07月19日</td><td>2025年01月29日</td></tr><tr><td>手机号快速验证组件累计</td><td>3.82万次</td><td>1647</td><td>375</td><td>2.95万次</td><td>870</td></tr><tr><td>手机号快速验证组件总量</td><td>9.1万次</td><td>6000</td><td>1000</td><td>8.1万次</td><td>6000</td></tr></tbody></table><h2 id="小程序api更新情况" tabindex="-1">小程序API更新情况 <a class="header-anchor" href="#小程序api更新情况" aria-label="Permalink to &quot;小程序API更新情况&quot;">​</a></h2><p><strong>近期API更新情况（黄色）</strong></p><div class="danger custom-block"><p class="custom-block-title">更新</p><p><strong>getSystemInfo</strong> 接口不再维护，建议开发者使用 getSystemSetting / getAppAuthorizeSetting / getDeviceInfo / getWindowInfo / getAppBaseInfo</p></div><div class="danger custom-block"><p class="custom-block-title">更新</p><p>wx.downloadFile、wx.uploadFile 接口新增 <strong>useHighPerformanceMode</strong> 参数</p></div><div class="danger custom-block"><p class="custom-block-title">更新</p><p>API getFileInfo 接口文件摘要算法新增支持 <strong>sha256</strong></p></div><div class="danger custom-block"><p class="custom-block-title">更新</p><p>API 有授权弹窗的隐私接口（例如 wx.getLocation），将不会再弹官方隐私弹窗，而是在授权弹窗上增加“隐私勾选”；无授权弹窗的隐私接口（如 wx.getClipboardData），将继续保留原来的官方隐私弹窗</p></div><div class="info custom-block"><p class="custom-block-title">修复</p><p>框架 request 接口 useHighPerformanceMode 模式下 onHeadersReceived 回调参数漏了 statusCode</p></div><div class="info custom-block"><p class="custom-block-title">修复</p><p>API request 接口 useHighPerformanceMode 模式下 开启重定向拦截没触发 onHeadersReceived 回调</p></div>',16),r=[s];function i(l,n,c,p,h,g){return e(),d("div",null,r)}const _=t(a,[["render",i]]);export{u as __pageData,_ as default};
