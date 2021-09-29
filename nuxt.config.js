// const pkg = require('./package')

export const mode = 'universal'
export const router = {
  extendRoutes(routes, resolve) {
    routes.push({
      path: '/foo',
      component: resolve(__dirname, 'pages/othername.vue'),
    })
  },
  // middleware: ['auth']
}
export const head = {
  title: 'test',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
}
export const loading = { color: '#fff' }
export const css = ['element-ui/lib/theme-chalk/index.css']
export const plugins = [
  '@/plugins/element-ui',
  '@/plugins/api-inject',
  '@/plugins/interceptor',
]
export const components = true
export const buildModules = [
  // https://go.nuxtjs.dev/eslint
  '@nuxtjs/eslint-module',
]
export const modules = [
  // https://go.nuxtjs.dev/axios
  '@nuxtjs/axios',
  'cookie-universal-nuxt',
]
export const axios = {
  proxy: true,
}
export const proxy = {
  '/api': 'http://localhost:8080',
}
export const build = {
  transpile: [/^element-ui/],
  extend(config, ctx) {},
}
