import { articles } from "~~/types/api/article";

export const getArticleList = (page: number, type: number) => getApi<articles[]>("/articles", {
    params: {
        current: page,
        type: type,
    },
});