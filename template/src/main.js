{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import 'normalize.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import '@/styles/app.scss'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueAxiosPlugin from 'vue-axios-plugin'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
import VueCookie from './utils/vue-cookie'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueComponents from './utils/vue-components'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueApi from './utils/vue-apis'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}


Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

function checkStatus{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(response) {
  return {
    status: response.status,
    ...response.data{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

Vue.use(VueCookie){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueAxiosPlugin, { checkStatus }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueComponents){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueApi){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
