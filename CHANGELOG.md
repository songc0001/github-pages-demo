# 開發日誌

## To Do List

- [ ] 改Layout,先抄Element-plus個Docs, 參考vitepress, https://vite-starter.element-plus.org/

- [ ] 製作測試用頁面
  - [ ] 入口在View建立Test.vue載入components

- [ ] vue3-sfc-loader再放好D
  - [ ] 獨立js
  - [ ] 改import?
  
- [ ] 工具頁Layout Design
  - [ ] 參考<https://tools.miku.ac/>
- [ ] 簡單Blog頁Layout Design
- [ ] Router
- [ ] mockjs + axios模擬數據
- [ ] 匯入markdown
- [ ] Admin頁
- [ ] Try to re-structure of VitePress

## 已完成

### 16/10/2022
- [x] css-vars.css Font全局重設
- [x] vue3-sfc-loader option 1 可以用

### 18/8/2022

- [x] 因為Element-plus需要先import Vue, 所以只能放head src js
- [x] Font睇下點統一返
  - [x] 加入左styles/css-vars.css override css

### 17/8/2022

- [x] 用vue3-sfc-loader載入.vue
  - 用handleModule handle `.png`
- [x] vue3-sfc-loader - option.getresource
  - 睇唔明放棄  
- [x] 固定vue3-sfc-loader版本
- [x] Try element-plus image
- [x] Header完成
- [x] Github Pages src問題
  - src記得要用./<>/*.*
- [x] Element-Plus建立RWD主頁
  - [x] Layout Header Design
    - 最後都係用最簡單的方式，唔搞左右  
