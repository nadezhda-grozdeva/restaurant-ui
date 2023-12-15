import { h } from 'vue'

export default function useRender(el, data) {
  return {
    render() {
        return h(el, {innerHTML: data })
    }
  }
}