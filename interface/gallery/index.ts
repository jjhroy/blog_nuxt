export interface IVilipixImgItem {
  picture_id: string;
  title: string;
  regular_url: string;
  original_url: string;
}
export interface IVilipixImgList {
  code: number;
  data: {
    count: number;
    rows: IVilipixImgItem[];
  };
}
export interface IVilipixTag {
  tag_id: string;
  title: string;
  zh: string;
}
export interface IVilipixTagList {
  code: number;
  data: {
    count: number;
    rows: IVilipixTag[];
  };
}
