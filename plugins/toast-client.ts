import Toast, { PluginOptions } from 'vue-toastification'

// 配置可以参考：https://vue-toastification.maronato.dev/
const options: PluginOptions = {
    // We can set our default options here
    // @ts-ignore
    position: 'top-right',
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false,
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast, options)
})
