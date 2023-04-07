import { articles } from "~~/types/api/article";

export const getArticleList = getApi<articles[]>("/articles", {
    params: {
        current: 1,
        type: 1,
    },
});