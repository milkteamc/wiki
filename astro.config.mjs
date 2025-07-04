import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '奶茶伺服器 Wiki',
      description: '奶茶伺服器官方 Wiki：你的 Minecraft 冒險起點，從這裡開始探索、學習與創造。',
      logo: {
        src: './src/assets/logo.png',
      },
      favicon: './src/assets/logo.png',
      social: [
        {
          label: 'GitHub',
          icon: 'github',
          href: 'https://github.com/milkteamc/wiki',
        },
        {
          label: 'Discord',
          icon: 'discord',
          href: 'https://discord.gg/22DxRjrXRv',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/milkteamc/wiki/edit/main/',
      },
      lastUpdated: true,
      customCss: [
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: '開始使用',
          items: [
            { label: '伺服器連線', link: '/guides/connect/' },
            { label: '註冊與登入', link: '/guides/auth/' },
            { label: '基礎指令', link: '/guides/commands/' },
          ],
        },
        {
          label: '遊戲功能',
          items: [
            { label: '傳送系統', link: '/features/teleport/' },
            { label: '家點系統', link: '/features/homes/' },
            { label: '經濟系統', link: '/features/economy/' },
          ],
        },
        {
          label: '其他',
          items: [
            { label: '常見問題', link: '/faq/' },
            { label: '聯絡我們', link: '/contact/' },
          ],
        },
      ],
      components: {
        Footer: './src/components/Footer.astro',
        Head: './src/components/Head.astro',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: '繁體中文',
          lang: 'zh-TW',
        },
      },
    }),
  ],
  // 明確設定編碼和語言
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    define: {
      __LANG__: '"zh-TW"',
    },
  },
});