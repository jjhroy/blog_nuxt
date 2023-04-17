import dayjs from "dayjs";

export const formatDateDefault = (date: Date) => {
    return dayjs(date).format("YYYY-MM-DD")
}

export const formatDate_MD = (date: Date) => {
    return dayjs(date).format("MM-DD")
}

export const formatDateFullTime = (date: Date) => {
    return dayjs(date).format("YYYY-MM-DD hh:ss")
}

export const getDayDiff = (date: Date) => {
    return dayjs(new Date()).diff(date, 'days')
}