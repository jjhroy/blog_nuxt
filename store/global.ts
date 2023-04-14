import { GLOBAL_STORE } from '~/configs/store'
import { storeToRefs } from 'pinia'

export const globalStore = defineStore(GLOBAL_STORE, () => {
    const userExtraData = ref({ username: 'jjh' })
    const isLight = ref(true)
    const websiteInfo = ref({
        viewsCount: "",
        articleCount: 0,
        categoryCount: 0,
        tagCount: 0,
        websiteConfig: {
            articleCover: "",
            websiteNotice: "",
            touristAvatar: "",
            userAvatar: "",
            websiteAuthor: "",
            websiteAvatar: "",
            websiteCover: "",
            websiteCreateTime: "",
            websiteIntro: "",
            websiteName: "",
            websiteRecordNo: "",
        }
    })
    const changeTheme = () => {
        isLight.value = !isLight.value
    }
    return { userExtraData, changeTheme, websiteInfo, isLight }

}, {
    persist: {
        storage: persistedState.sessionStorage
    }
})

export const useGlobalStore = () => storeToRefs(globalStore())
