import { $fetch } from 'ohmyfetch'
// const baseURL = 'http://114.132.230.67:8080'
const baseURL = 'https://www.linkstarted.top/api'
export const fetchInstance = $fetch.create({
    baseURL,
    retry: 0,
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'include',
    // @ts-ignore
    onRequest: (content) => {
    },
    // @ts-ignore
    onResponse({ response, options }) {
        const { _data } = response
        response._data = _data.data
    },
})

