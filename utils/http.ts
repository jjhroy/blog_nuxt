// import { $fetch } from 'ohmyfetch'
const baseURL = 'http://114.132.230.67:8080'

export const fetchInstance = $fetch.create({
    baseURL,
    retry: 0,
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'include',
    // @ts-ignore
    onRequest: (content) => {
        console.log('content', content);

    },
    // @ts-ignore
    onResponse({ response, options }) {
        const { _data } = response
        console.log('response', _data.data);
    },
})
