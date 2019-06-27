module.exports = {
  server: {
    port: 8000, // default: 3000
    host: '127.0.0.1', // default: localhost
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    // 配置选项
    // 缓存使用条件：
    // 可缓存组件必须定义唯一 name 选项。
    // 不应该缓存组件的情况：
    // 拥有可能依赖于全球状态的子组件。
    // 具有在渲染context中产生副作用的子组件。
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }]
  ],
  styleResources: {
    // 在页面中注入一些变量和mixin而不必每次都导入它们
    scss: './assets/var.scss',
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
    credentials: true,
    // baseURL and proxy doesn't work together, you need to use prefix instead.
    baseURL: '/api',
    prefix: '/api'
  },
  proxy: {
    '/api': {
      target: 'http://39.96.190.20:3000',
      changeOrigin: true
      // pathRewrite: {
      //   '^/api': '/'
      // }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    babel: {
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    },
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  }
}
