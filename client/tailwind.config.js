/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(26, 100%, 55%)',
        secondary: 'hsl(25, 100%, 94%)',
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)',
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      /* 添加自定义的 utilities */
      /* 请确保这段代码在主题的 extend 中 */
      /* 如果你的 CSS 文件与 tailwind.config.js 文件分开，请将该代码添加到你的 CSS 文件中 */
      /* 这里的代码会生成 before-bottom-calc 类 */
    },
  },
  plugins: [],
};
