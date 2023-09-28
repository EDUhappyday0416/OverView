<!-- https://github.com/flow-open-money-come/wander-map-frontend/tree/main
參考
https://recreation.forest.gov.tw/Files/Service/Document/%E6%9E%97%E6%A5%AD%E5%8F%8A%E8%87%AA%E7%84%B6%E4%BF%9D%E8%82%B2%E7%BD%B2%E5%8F%B0%E7%81%A3%E5%B1%B1%E6%9E%97%E6%82%A0%E9%81%8A%E7%B6%B2%E9%96%8B%E6%94%BE%E8%B3%87%E6%96%99%E5%88%97%E8%A1%A8%E5%8F%8A%E5%85%A7%E5%AE%B9.pdf

https://recreation.forest.gov.tw/Forest/QueryForest?Region=N%2CC&Typ=0%2C1&Keyword=&Height=1&IsOpen=open&Traffic=&RT_Status=&RT_Hard=&RT_Length=&RT_Time=&sort=&PageIndex=0&PageSize=36&topic=

https://recreation.forest.gov.tw/Forest/Query
Region: N,C,S,E 地區
Typ: 0,1,2,10,11,3,12 //景點類型
國家森林遊樂區
自然步道
平地森林園區
林業文化園區
林業軌道
自然教育中心
生態教育館

Keyword:
Height: 1,2,3,4 海拔高度
IsOpen: open,close
Traffic: 0,1 0開車 1大眾交通
RT_Status:
RT_Hard:
RT_Length:
RT_Time:
sort:
PageIndex: 0
PageSize: 36
topic:


預計:
登山申請服務 -->

<!-- 底下標籤來源參考寫法可至：https://github.com/Envoy-VC/awesome-badges#github-stats -->

<!-- ![](https://img.shields.io/github/stars/hsiangfeng/README-Example-Template.svg)｜![](https://img.shields.io/github/forks/hsiangfeng/README-Example-Template.svg)｜![](https://img.shields.io/github/issues-pr/hsiangfeng/README-Example-Template.svg)｜![](https://img.shields.io/github/issues/hsiangfeng/README-Example-Template.svg) -->

<!-- > 由於許多人都不知道如何撰寫 README，所以我就提供一個 README 範本，讓大家可以參考，許多地方你都可以斟酌是否要加入，或是修改成你自己的風格。 -->

<!-- **ps. 底下範本不是絕對，你可以依照自己需求斟酌增加或刪除。** -->

# README

![專案封面圖](https://fakeimg.pl/500/)

<!-- > 此專案是一份 README 的撰寫範本，主要是方便所有人可以快速撰寫 README，讓大家可以更有方向的去寫出 README。 -->

- [線上觀看連結](https://eduhappyday0416.github.io/vue3_project_0804/#/)

## 功能

測試帳號密碼 **（請斟酌提供，建議只提供僅能觀看不能操作的帳號密碼）**

```bash
帳號密碼可以透過自己申請，以下是測試帳號(若無法登入，請自行申請一組)
帳號： cc@cc.com
密碼： 123456
```

- [x] 登入
- [x] 登出(進行中)
- [x] 註冊頁面
- [x] 自然步道頁面
- [x] 百岳一覽
- [x] 揪團表單
- [x] 最新消息
- [x] 路線查詢與介紹
- [ ] 百岳路線地圖
- [ ] 登山路線分享與評論
- [ ] 登山裝備評論區
- [ ] 個人登山日誌功能
- [ ] 登山安全教育資料
- [ ] 登山活動組織與揪團
- [ ] 山區緊急聯絡方式整理
...

## 畫面

> 可提供 1~3 張圖片，讓觀看者透過 README 了解整體畫面

![範例圖片 1](https://fakeimg.pl/500/)
![範例圖片 2](https://fakeimg.pl/500/)
![範例圖片 3](https://fakeimg.pl/500/)

## 安裝

> 以下將會引導你如何安裝此專案到你的電腦上。



Node.js 版本建議為：`16.15.0` 以上...

### 取得專案

```bash
git clone git@github.com:EDUhappyday0416/vue3_project_0804.git
```

### 移動到專案內

```bash
cd README-Example-Template
```

### 安裝套件

```bash
npm i
```


### 運行專案

```bash
npm run serve
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
待補
```
<!-- 
## 環境變數說明

```env
APIPATH= # API 位置
COUSTOMPATH= # 自訂變數
...
``` -->

## 資料夾說明(待補)
- src
  - views - 畫面放置處
  <!-- - controllers - 控制器放置處 -->
  - components - 組件
  <!-- - modules - 模組放置處 -->
  - assets - 靜態資源放置處
    - scss - scss 檔案放置處
    - images - 圖片放置處
...

## 專案技術(待補)
//前端
- Node.js v16.15.0
- Vue v3.2.20
- Vite v4.4.6
- Vue Router v4.2.4
- pinia v5.1.3

//後端
...

<!-- ## 第三方服務

- Algolia
- Google Analytics
... -->

## CI/CD 說明

此專案有使用 Github Actions，所以發起 PR 時會自動執行以下動作：

- 建立 Node.js 環境
- 安裝相依套件
- 編譯程式碼
- 執行 ESLint 掃描
- 執行測試
...

當專案 merge 到 main 時會自動執行以下動作：

- 建立 Node.js 環境
- 安裝相依套件
- 編譯程式碼
- 執行 ESLint 掃描
- 執行測試
- 部署到 Github Pages
...

## 聯絡作者

> ps. 這邊絕對不是業配，而是要適當提供一些方式讓觀看者知道你的聯絡方式，讓他們可以更方便的找到你。

你可以透過以下方式與我聯絡

- [部落格](https://israynotarray.com/)
- [Facebook](https://www.facebook.com/israynotarray)
- [Instagram](https://www.instagram.com/isray_notarray/)
...

