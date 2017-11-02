# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

## Start localhost nodejs mock server

```bash
npm run server
```

## Build & upload to storage server

```bash
# just build project, and upload the no-md5 filename to the storage server
npm run publish
```

## Build & upload to online server

```bash
# just build project, and upload the md5 filename to the storage server
npm run online
```

## Customize Log

- [x] Add mock server
- [x] Add Vue cookie plugin
- [x] Add [vue-axios-plugin](https://www.npmjs.com/package/vue-axios-plugin)
- [x] Add customize element-ui
- [x] Add [ionicons](http://ionicons.com/)
- [x] Use sass by default


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

