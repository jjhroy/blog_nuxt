import hljs from 'highlight.js';
// import  from 'highlightjs-line-numbers.js'

export default defineNuxtPlugin((nuxtApp) => {
    // nuxtApp包含的属性可看文档 https://nuxt.com/docs/guide/going-further/internals
    nuxtApp.vueApp.directive('highlight', function (el) {
        const blocks = el.querySelectorAll('pre code')
        blocks.forEach((block: any) => {
            hljs.highlightBlock(block)
        })
    })
})
