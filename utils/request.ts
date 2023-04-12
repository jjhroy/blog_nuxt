import { AsyncDataOptions } from 'nuxt/dist/app/composables'
import { FetchOptions } from 'ohmyfetch'

import type { Ref } from 'vue'
import { fetchInstance } from '~~/utils/http'


export const postApi = <T>(
    url: string,
    options: FetchOptions & {
        key?: string
        body?: Ref<Record<string, any>> | Record<string, any>
        asyncFetchOption?: AsyncDataOptions
    } = {}
) =>
    useAsyncData(
        options?.key ?? url,
        () =>
            fetchInstance<T>(url, {
                method: 'POST',
                // baseURL: process.client ? baseURL : VITE_BACKEND_API,
                // baseURL:
                //   process.env.NODE_ENV === 'development'
                //     ? 'http://pre_amz123.zfty.work/paw'
                //     : VITE_BACKEND_API,
                baseURL: 'http://114.132.230.67:8080',
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
    } = {}
) =>
    useAsyncData(
        options?.key ?? url,
        () =>
            fetchInstance<T>(url, {
                method: 'GET',
                // baseURL: process.client ? baseURL : VITE_BACKEND_API,
                // baseURL:
                //   process.env.NODE_ENV === 'development'
                //     ? 'http://pre_amz123.zfty.work/paw'
                //     : VITE_BACKEND_API,
                baseURL: 'http://114.132.230.67:8080',
                ...options,
                // @ts-ignore
                body: isRef(options?.body) ? options.body.value : options.body,
            }),
        options?.asyncFetchOption
    )

// export const postApi = <T>(
//     url: string,
//     options: FetchOptions & {
//         key?: string
//         body?: Ref<Record<string, any>> | Record<string, any>
//         asyncFetchOption?: AsyncDataOptions
//         defaultValue?: T
//         mock?: boolean
//     } = {}
// ) => {
//     const key = options?.key ?? url
//     // clearNuxtData(key)
//     return useAsyncData(
//         key,
//         () => {
//             try {
//                 // error('Headers:', JSON.stringify(headers))
//                 return fetchInstance<T>(url, {
//                     method: 'POST',
//                     baseURL: process.client ? baseURL : VITE_BACKEND_API,
//                     ...options,
//                     headers,
//                     // @ts-ignore
//                     body: isRef(options?.body) ? options.body.value : options.body,
//                 })
//             } catch (err) {
//                 error('err:', err)
//             }
//         },
//         options?.asyncFetchOption
//     )
// }

// export const getApi = <T>(
//     url: string,
//     options: FetchOptions & {
//         key?: string
//         body?: Ref<Record<string, any>> | Record<string, any>
//         asyncFetchOption?: AsyncDataOptions
//         defaultValue?: T
//         mock?: boolean
//     } = {}
// ) => {
//     const key = options?.key ?? url
//     // clearNuxtData(key)
//     return useAsyncData(
//         key,
//         () => {
//             try {

//                 // error('Headers:', JSON.stringify(headers))
//                 return fetchInstance<T>(url, {
//                     method: 'GET',
//                     baseURL: 'http://114.132.230.67:8080',
//                     ...options,
//                     // @ts-ignore
//                     body: isRef(options?.body) ? options.body.value : options.body,
//                 })
//             } catch (err) {
//                 error('err:', err)
//             }
//         },
//         options?.asyncFetchOption
//     )
// }