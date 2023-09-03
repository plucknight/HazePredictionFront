### 介绍

一个基于Vue 3框架和JavaScript构建的前端应用，使用Element-Plus UI和Echart 5×可视化工具，以及Axios作为HTTP工具，实现简单，适合快速上手。

后端代码见: https://github.com/plucknight/HazePredictionRear

实现效果演示：

### 目录树
```
src
├── App.vue
├── api
│   ├── config.js
│   ├── login.js
│   └── request.js
├── assets
│   ├── css
│   │   ├── bottom.css
│   │   ├── common.css
│   │   ├── header.css
│   │   ├── index.css
│   │   ├── index.less
│   │   ├── konw.css
│   │   ├── page_header.css
│   │   ├── page_main-left.css
│   │   ├── page_main-right.css
│   │   ├── page_main.css
│   │   └── reset.css
│   ├── imgs
│   │   └── picture
│   │       └── pic.jpg
│   └── logo.png
├── components
│   ├── page
│   │   ├── bottom.vue
│   │   ├── header.vue
│   │   ├── index-main.vue
│   │   └── know-main.vue
│   ├── pastmonth.vue
│   ├── preweek.vue
│   ├── search.vue
│   ├── tfhours.vue
│   ├── today.vue
│   └── weekAqi.vue
├── global
│   └── constants.ts
├── main.js
├── router
│   └── index.js
├── service
│   ├── config
│   │   └── index.ts
│   └── request
│       ├── index.ts
│       └── type.ts
├── utils
│   └── cache.ts
├── views
│   ├── NotFound.vue
│   ├── admin.vue
│   ├── data.vue
│   ├── index.vue
│   ├── knowledge.vue
│   └── login.vue
└── vue-shim.d.ts
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
