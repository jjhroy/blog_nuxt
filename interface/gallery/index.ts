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