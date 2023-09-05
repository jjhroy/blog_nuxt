//全局常量

/**
 * 默认文章图片
 */
export const DEFAULT_ARTICLE_IMG =
  "https://upload.linkstarted.top/articles/f57de79f93c4ac72bbb2647b48390026.jpg";

/**
 * 路由映射
 */
export const GLOBAL_ROUTE_MAP = {
  home: "/",
  about: "/about",
  gallery: "/gallery",
  navigation: "/navigation",
  blog: "/blog",
} as Record<string, string>;

export const GLOBAL_ROUTE_NAME_MAP = {
  "/": "Mongo BLog",
  "/about": "Mongo Blog - 关于",
  "/gallery": "Mongo Blog - 图库",
  "/navigation": "Mongo Blog - 导航",
  "/blog": "Mongo Blog - 文章",
} as Record<string, string>;
