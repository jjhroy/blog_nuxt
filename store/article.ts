import { ARTICLE_STORE } from '~/configs/store'
import { storeToRefs } from 'pinia'
import { articleDetails } from '~/types/api/article'

export const articleStore = defineStore(ARTICLE_STORE, () => {

    const articleDetail = ref<articleDetails>()
    /**
     * 根据ID获取文章详情
     * @param id 
     */
    const getArticleById = (id: number) => {
        const data = getApi<articleDetails>(
            `/articles/${id}`
        );
        articleDetail.value = data.data.value!
    }

    return {
        getArticleById,
        articleDetail
    }

}, {
    persist: {
        storage: persistedState.localStorage
    }
})
// state 也可以使用解构，但使用解构会使其失去响应式，这时候可以用 pinia 的 storeToRefs
export const useArticleStore = () => storeToRefs(articleStore())
