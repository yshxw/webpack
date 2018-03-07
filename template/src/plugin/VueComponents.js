import {
  Select,
  Option,
  Message,
  Row,
  Col{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
} from 'element-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const VueComponents = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

VueComponents.install = (Vue) => {
  Vue.use(Select){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Vue.use(Option){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Vue.use(Row){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Vue.use(Col){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  Vue.prototype.$message = Message{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

export default VueComponents{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
