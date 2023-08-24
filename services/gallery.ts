// 爬取vilipix的数据
import { IVilipixImgList, IVilipixTagList } from "~~/interface/gallery/index";
const limit = ref(_random(10, 20));
export const galleryApi = {
  // 获取图片列表
  getGalleryList: async () =>
    await useAsyncData<IVilipixImgList>("gallery-list", () =>
      $fetch(`https://www.vilipix.com/api/v1/picture/recommand`, {
        query: {
          limit: limit.value,
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
