import { AsyncDataOptions } from 'nuxt/dist/app/composables'
import { FetchOptions } from 'ohmyfetch'

import type { Ref } from 'vue'
import { fetchInstance } from '~~/utils/http'

const baseURL = 'https://www.linkstarted.top/api'
export const postApi = <T>(
    url: string,
    options: FetchOptions & {
        key?: string
        body?: Ref<Record<string, any>> | Record<string, any>
        asyncFetchOption?: AsyncDataOptions
        outer?: boolean
    } = {},
) =>
    useAsyncData(
        options?.key ?? url,
        () =>
            fetchInstance<T>(url, {
                method: 'POST',
                baseURL: options.outer ? options.baseURL : baseURL,
                ...options,
                // @ts-ignore
                body: isRef(options?.body) ? options.body.value : options.body,
            }),
        options?.asyncFetchOption
    )

export const getApi = <T>(
    url: string,
    options: FetchOptions & {
        key?: string
        body?: Ref<Record<string, any>> | Record<string, any>
        asyncFetchOption?: AsyncDataOptions
        outer?: boolean
    } = {}
) => {
    const key = options?.key ?? url
    return useAsyncData(
        key,
        () =>
            fetchInstance<T>(url, {
                method: 'GET',
                baseURL: options.outer ? options.baseURL : baseURL,
                ...options,
                // @ts-ignore
                body: isRef(options?.body) ? options.body.value : options.body,
            }),
        options?.asyncFetchOption
    )
}



