const webpack = require("webpack");

export default {
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL
  },
  privateRuntimeConfig: {
    PATH_IMAGES: process.env.PATH_IMAGES
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png?v=3' },
    ],
    script: [
      {src:"https://demo.hasthemes.com/sinrato-preview/sinrato/assets/js/vendor/jquery-1.12.4.min.js"},
      {src:"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"},
      {src:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'assets/css/animate.css',
    'assets/css/bootstrap.min.css',
    'assets/css/all.min.css',
    'assets/css/ionicons.min.css',
    'assets/css/themify-icons.css',
    'assets/css/linearicons.css',
    'assets/css/flaticon.css',
    'assets/css/simple-line-icons.css',

    //'assets/owlcarousel/css/owl.carousel.min.css',
    //'assets/owlcarousel/css/owl.theme.css',
    //'assets/owlcarousel/css/owl.theme.default.min.css',

    'assets/css/magnific-popup.css',
    'assets/css/slick.css',
    //'assets/css/slick-theme.css',

    'assets/css/style.css',
    'assets/css/responsive.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/jquery-1.12.4.min.js', ssr: false },
    {src: 'plugins/owl.js', ssr: false}

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   vendor: ["jquery", "bootstrap"],
   plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
   ],
   extend (config, { isDev, isClient }) {

  },
  }
}
