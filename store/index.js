import { goodsArray, restArray } from '@/constants/rest'
import { reactive } from 'vue'

export const store = reactive({
  isOpen: false,
  rests: restArray,
  goods: goodsArray,
  toggleModal(value) {
    this.isOpen = value
  },
})
