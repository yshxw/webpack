const base = '/api'

const VueApi = {
  user_info: `${base}/user_info`
}

VueApi.install = (Vue) => {
  Vue.VueApi = VueApi

  Object.defineProperties(Vue.prototype, {
    $api: {
      get () {
        return Vue.VueApi
      }
    }
  })
}

export default VueApi
