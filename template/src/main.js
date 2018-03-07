{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import 'normalize.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import '@/style/app.scss'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueAxiosPlugin from 'vue-axios-plugin'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'
{{/router}}
import VueComponents from './plugin/VueComponents'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

function checkStatus{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(response) {
  if (response.status >= 500) {
    throw new Error('Server Error'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  return response{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

Vue.use(VueAxiosPlugin, { checkStatus }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueComponents){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
