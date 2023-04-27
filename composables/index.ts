import dayjs from "dayjs";

export const calcRelativeTime = (
    date: string | number | Date
) => {
    const handleZero = (num: number) => {
        if (num < 1) {
            return 1
        } else return num
    }
    let _date = dayjs(date).unix().valueOf() * 1000
    console.log('now', _date);

    const now = Date.now()
    const prefix = _date > now ? '后' : '前'
    // 转为秒
    const relativeValue = ~~Math.abs((now - _date) / 1000)
    if (relativeValue <= 60) {
        return `${relativeValue}秒${prefix}`
    }
    if (relativeValue <= 60 * 60) {
        return `${handleZero(Math.floor(relativeValue / 60))}分钟${prefix}`
    }
    if (relativeValue <= 60 * 60 * 24) {
        return `${handleZero(Math.floor(relativeValue / 60 / 60))}小时${prefix}`
    }
    if (relativeValue <= 60 * 60 * 24 * 30) {
        return `${handleZero(Math.floor(relativeValue / 60 / 60 / 24))}天${prefix}`
    }
    if (relativeValue <= 60 * 60 * 24 * 30 * 12) {
        return `${handleZero(
            Math.floor(relativeValue / 60 / 60 / 24 / 30.5)
        )}月${prefix}`
    }
    return `${handleZero(
        Math.floor(relativeValue / 60 / 60 / 24 / 30.5 / 12)
    )}年${prefix}`
}



export const formatDate = (date: string | number | Date, formatTemplate = 'YYYY-MM-DD:HH:mm:ss') => {
    return dayjs(date).format(formatTemplate)
}



export const redirectTo404Page = () => {
    return navigateTo('/404')
}