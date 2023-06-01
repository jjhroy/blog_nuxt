/**
 * 创建模态框
 */
import { Component, CSSProperties } from 'nuxt/dist/app/compat/capi'
import MongoModal from '~~/components/mongo-ui/modal/index.vue'
import { createApp } from 'vue'

interface IBasicOption<T extends { onClose?: () => void }> {
  wrapperComponent: Component
  props: T
  style?: CSSProperties
}
export default function useModal<T>(option: IBasicOption<T>) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const app = createApp(
    h(
      MongoModal,
      { onClose: () => container.remove() },
      h(option.wrapperComponent, {
        ...option.props,
        onClose: () => {
          console.log('卸载模态框')
          container.remove()
        },
      })
    )
  )
  app.mount(container)
  // 或许可以把所有的app清空
}
