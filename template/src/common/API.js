const base = '/api'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const API = {
  user_info: `${base}/user_info`{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default API{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
