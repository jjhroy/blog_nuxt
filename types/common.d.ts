export interface articleCataLog {
    id: string,
    name: string,
    scrollTop: number,
    level: number,
    isVisible: boolean,
    rawName: string
}

export interface cataLogNode {
    id: string,
    name: string,
    level: number,
    parent: cataLogNode,
    children: cataLogNode[],
    rawName: string,
    scrollTop: number,
    isVisible: boolean
}


export interface IVilipixImgItem {
    picture_id: string
    title: string
    regular_url: string
    original_url: string
}
export interface IVilipixImgList {
    code: number
    data: {
        count: number
        rows: IVilipixImgItem[]
    }
}

export interface IJuejieArticleItem {
    content: {
        title: string
        content_id: string
    }
}
export interface IJuejieList {
    data: IJuejieArticleItem[]
}