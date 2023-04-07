export interface linkParams {
  linkName: string;
  linkAvatar: string;
  linkIntro: string;
  linkAddress: string;
}

export interface archives {
  id: number
  articleTitle: string
  createTime: Date
}

export interface archiveShowList {
  recordList: archives[]
  year: number
}

export interface archiveListReturn {
  recordList: archives[]
  count: number
}

export interface tag {
  id: number
  tagName: string
}

export interface category {
  id: number
  categoryName: string
  articleCount: number
}

export interface link {
  id: number
  linkAddress: string
  linkAvatar: string
  linkName: string
  linkIntro: string
}