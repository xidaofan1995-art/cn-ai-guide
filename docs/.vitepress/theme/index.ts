import DefaultTheme from 'vitepress/theme'
import GardenLayout from './GardenLayout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: GardenLayout
}
