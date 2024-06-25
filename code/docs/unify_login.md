## 集团统一登录web端示例

::: danger 参考文档
**https://iama.haier.net/doc/webdoc/**

**https://ihaier.feishu.cn/docs/doccnQnVLYjvgJFWGlUeC2XkvMp**
:::

::: tip 一、index.html body 中引入统一登录sdk
**https://r.haier.net/assets/prod/dts-fe/fe-stub-usercenter/3.0.58/core.js**
:::

````md
```html
<!-- 示例如下 -->
<body>
  <div id="app">
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
      <div class="load_title">正在加载系统资源，请耐心等待</div>
    </div>
  </div>
  <script src="https://r.haier.net/assets/prod/dts-fe/fe-stub-usercenter/3.0.58/core.js"></script>
  <script type="module" src="/src/main.js"></script>
</body>
```
````

::: tip 二、在.env.development和.env.production环境中配置（以hds为例）
**拿到申请的CLIENT_ID和后端提供的TOKENURL(通过前端sdk,用户登录后会返回code，此接口可通过code换取token)**

VITE_IDM_CLIENTID = "K6998db356ceca869"

VITE_IDM_SSOURL = "https://iama.haier.net"

VITE_IDM_TOKENURL = "https://hdstest.nahuiess.com/oauth2/haierIdm/getUserInfoByCode?system=hds"
:::


::: tip 三、在login.vue中书写逻辑（以vue3为例）
**目前接入实现有两种方式，可自行选择接入一种，或两种都接入**

**1. 在login.vue中书写登录按钮，点击后调用统一登录sdk的login方法，若未登录，则跳转至统一登录页面**

**2. 在login.vue中统一登录逻辑，进入登录页，若未登录，则跳转至统一登录页面**
:::

**1. 在login.vue中书写登录按钮，点击后调用统一登录sdk的login方法，若未登录，则跳转至统一登录页面**

````md
```html
<!-- login.vue -->
<el-button class="haier-login" type="text" size="default" @click="haierLogin()">海尔员工登录</el-button>
```
````

````md
```js
// login.vue

// getTokenByCode 是后端提供的通过code 获取 用户token 的接口
// login 是后端提供的自己系统的登录接口，可通过getTokenByCode的token换取自己的token，并返回用户信息
import { ElMessage, ElLoading } from 'element-plus';
import { getTokenByCode, login } from api;
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const haierLogin = () => {
  // 统一登录sdk初始化
	window.__USERCENTER__.configUserCenter({
		clientId: import.meta.env.VITE_IDM_CLIENTID,
		ssoUrl: import.meta.env.VITE_IDM_SSOURL,
		tokenUrl: import.meta.env.VITE_IDM_TOKENURL,
	})
	window.__USERCENTER__.login() // 调用统一登录，若未登录，则跳转至统一登录页面
}

const { proxy } = getCurrentInstance()
const loginByIdm = () => {
	const { code } = route.query
	if (code) {
		const loading = ElLoading.service({
			lock: true,
			text: 'Loading',
			background: 'rgba(0, 0, 0, 0.7)',
		})
		getTokenByCode({code}).then(res=> {
			const { access_token } = res.data
			login({
				token: access_token,
				grant_type: 'hds_idm',
				scope: 'hds'
			})
				.then(response => { // 登录成功后的处理逻辑，以下是hds的逻辑，具体系统需根据自身情况处理
					// const toUrl = window.localStorage.getItem("keypath") || '/'
					// window.localStorage.clear();
					// window.localStorage.setItem('logins', JSON.stringify(response.data));
					// tokenStore.updateToken(response.data?.access_token)
					// loading.close()
					// router.push(toUrl);
				})
				.catch(err => {
					ElMessage.error(err.response.data.error_description);
					loading.close()
				});
		}).catch(() => {
			ElMessage.error('登录失败，请稍后再试')
			loading.close()
		})
	}
}

// 如果是vue2，则将loginByIdm放到created生命周期中执行，如果是vue3，则放到setup最后执行（也同created） 
// 方法会自动判断路径中是否含有code，如果已登录，则直接执行逻辑 并跳转至首页
loginByIdm()
```
````

**2. 在login.vue中统一登录逻辑，进入登录页，若未登录，则跳转至统一登录页面**
````md
```js
// login.vue
import { ElMessage, ElLoading } from 'element-plus';
import { login } from api;
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const haierLogin = () => {
	window.__USERCENTER__.configUserCenter({
		clientId: import.meta.env.VITE_IDM_CLIENTID,
		ssoUrl: import.meta.env.VITE_IDM_SSOURL,
		tokenUrl: import.meta.env.VITE_IDM_TOKENURL,
    onTokenChange: (token) => {
      if (token) {
        const loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)',
        })
        login({
          token,
          grant_type: 'hds_idm',
          scope: 'hds'
        })
          .then(response => { // 登录成功后的处理逻辑，以下是hds的逻辑，具体系统需根据自身情况处理
            // const toUrl = window.localStorage.getItem("keypath") || '/'
            // window.localStorage.clear();
            // window.localStorage.setItem('logins', JSON.stringify(response.data));
            // tokenStore.updateToken(response.data?.access_token)
            // loading.close()
            // router.push(toUrl);
          })
          .catch(err => {
            ElMessage.error(err.response.data.error_description);
            loading.close()
          });
      }
    }
	})
	window.__USERCENTER__.login()
}

// 如果是vue2，则将haierLogin放到created生命周期中执行，如果是vue3，则放到setup最后执行（也同created） 
haierLogin()
```
````
**（若两种方式都想支持，可另起一个login_idm页，承载此逻辑）**