import { GLOBAL_STORE } from '~/configs/store'
import { storeToRefs } from 'pinia'
import { commonApi } from '~~/services/common'

export const globalStore = defineStore(GLOBAL_STORE, () => {
    const userExtraData = ref({ username: 'jjh' })
    const visitorIp = ref('127.0.0.1')
    const visitorAddress = ref('M78星云')
    const isLight = ref(true)
    const isSearch = ref(false)
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
    /**
     * 主题切换
     */
    const changeTheme = () => {
        isLight.value = !isLight.value
    }
    /**
     * 展示搜索框
     */
    const showSearchModal = () => {
        isSearch.value = !isSearch.value
    }
    /**
     * 获取访客ip地址信息
     */
    const getVisitorIp = async () => {
        const { data: ip } = await commonApi.getIpAddress()
        visitorIp.value =
            ip.value?.match(/(?<=\")(.+?)(?=\")/g)?.shift() ?? '127.0.0.1';
    }
    const getVisitorAddress = async () => {
        const { data: address } = await commonApi.getVisitorAddress(visitorIp.value)
        visitorAddress.value = address.value?.data[0].location ?? 'M78星云';
    }
    return { userExtraData, changeTheme, websiteInfo, isLight, getVisitorIp, visitorIp, visitorAddress, getVisitorAddress, isSearch, showSearchModal }

}, {
    persist: {
        storage: persistedState.sessionStorage
    }
})

export const useGlobalStore = () => storeToRefs(globalStore())
