import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'KzZzZzZz',
  description: '这是我的第一个 VuePress 站点',
  open: true,
  theme: defaultTheme({
    logo: '/images/navLogo.jpg',
    navbar: [
      {
        text: 'Java笔记',
        activeMatch: '^/Java',
        link: '/Java/basic/01.Java基本应用法.md'
      },
      
    ],
  }),
})
