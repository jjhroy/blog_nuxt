export default defineNuxtConfig({
    app: {
        head: {
            title: 'Mongo Blog',
            // meta: [
            //     { 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' }
            // ]
        }
    },
    modules: [
        'nuxt-lodash',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxt/image-edge',
        '@pinia-plugin-persistedstate/nuxt',
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // 自动引入 `usePinia()`
                    'defineStore',
                    // 自动引入 `usePinia()` 并重命名为 `usePiniaStore()`
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
    ],
    lodash: {
        prefix: "_",
        prefixSkip: ["string"],
        upperAfterPrefix: false,
        exclude: ["map"],
        alias: [
            ["camelCase", "stringToCamelCase"], // => stringToCamelCase
            ["kebabCase", "stringToKebab"], // => stringToKebab
            ["isDate", "isLodashDate"], // => _isLodashDate
        ],
    },
    build: {
        transpile: ['vue-toastification'],

    },
    css: ['vue-toastification/dist/index.css', '~~/assets/css/global.css', 'md-editor-v3/lib/style.css'],
    devServer: {
        // host: '127.0.0.1',
        // https: true,
        port: '2333'
    }
})