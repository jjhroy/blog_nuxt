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