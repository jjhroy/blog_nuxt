// 爬取vilipix的数据
import { IVilipixImgList, IVilipixTagList } from "~~/interface/gallery/index";

export const galleryApi = {
  // 获取榜单图片列表
  getRankingGalleryList: async () => {},

  // 获取推荐图片列表
  getGalleryList: async (limit: number) =>
    await useAsyncData<IVilipixImgList>("gallery-list", () =>
      $fetch(`https://www.vilipix.com/api/v1/picture/recommand`, {
        query: {
          limit: limit,
          offset: 1,
        },
      })
    ),
  //获取推荐标签列表
  getRecommendTagList: async () =>
    await useAsyncData<IVilipixTagList>("tag-list", () =>
      $fetch(`https://www.vilipix.com/api/v1/search/recommand_tag`)
    ),
};
