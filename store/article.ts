import { ARTICLE_STORE } from '~/configs/store'
import { storeToRefs } from 'pinia'
import dayjs from 'dayjs'
import { articleDetails, articles } from '~/types/api/article'

export const articleStore = defineStore(ARTICLE_STORE, () => {

    const articleDetail = ref<articleDetails>()
    const articleList = ref<articles[]>([])
    const currentPage = ref(1)
    const isEnd = ref(false)
    /**
     * 获取文章列表
     * @param oldList 
     */
    const getArticleList = async (oldList: articles[]) => {
        const { data } = await getApi<articles[]>("/articles", {
            params: {
                current: currentPage.value,
                type: 1,
            }
        })
        if (data.value?.length === 0) isEnd.value = true
        articleList.value = [...oldList, ...(data.value ?? [])];
        console.log(data.value, 'list');

    }
    /**
     * 根据ID获取文章详情
     * @param id 
     */
    const getArticleById = async (id: number) => {
        const { data } = await getApi<articleDetails>(
            `/articles/${id}`, {
            key: id + dayjs(new Date()).unix().valueOf().toString()
        }
        );
        console.log('new article', data.value);

        articleDetail.value = data.value!
    }

    return {
        isEnd,
        currentPage,
        articleList,
        getArticleList,
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
