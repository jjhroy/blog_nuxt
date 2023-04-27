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
    imports: {
        dirs: [
            // Scan top-level modules
            'composables',
            // ... or scan modules nested one level deep with a specific name and file extension
            'composables/*/index.{ts,js,mjs,mts}',
            // ... or scan all modules within given directory
            'composables/**'
        ]
    }
})