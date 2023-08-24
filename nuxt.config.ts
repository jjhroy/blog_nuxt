export default defineNuxtConfig({
    app: {
        head: {
            title: 'Mongo Blog',
        }
    },
    modules: [
        '@vueuse/nuxt',
        '@nuxt/content',
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
    content: {
        markdown: {
            anchorLinks: false
        },
        highlight: {
            // theme: {
            //     // Default theme (same as single string)
            //     default: 'github-light',
            //     // Theme used if `html.dark`
            //     dark: 'github-dark',
            //     // Theme used if `html.sepia`
            //     sepia: 'monokai'
            // }
        }
    },
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
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },

    },
    css: ['vue-toastification/dist/index.css', '~~/assets/css/global.css'],
    devServer: {
        // host: '127.0.0.1',
        // https: true,
        port: '2333'
    }
})