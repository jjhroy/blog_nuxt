import { storeToRefs } from "pinia";
import { GALLERY_STORE } from "~/configs/store";
import { galleryApi } from "~~/services/gallery";
import { IVilipixImgItem, IVilipixTag } from "~~/interface/gallery/index";

export const galleryStore = defineStore(GALLERY_STORE, () => {
  const galleryList = ref<IVilipixImgItem[]>([]);
  const tagList = ref<IVilipixTag[]>([]);

  const getGalleryList = async () => {
    const { data } = await galleryApi.getGalleryList();
    galleryList.value = data.value?.data.rows ?? [];
  };

  const getTagList = async () => {
    const { data } = await galleryApi.getRecommendTagList();
    tagList.value = data.value?.data.rows ?? [];
  };

  return {
    galleryList,
    tagList,
    getGalleryList,
    getTagList,
  };
});

export const useGalleryStore = () => storeToRefs(galleryStore());
