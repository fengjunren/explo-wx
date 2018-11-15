# explo-wx
Vue 公众号前端

## 预览
![预览](https://raw.githubusercontent.com/fengjunren/fengjunren.github.io/master/dl/wx/preview.gif)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![体验](https://raw.githubusercontent.com/fengjunren/fengjunren.github.io/master/dl/wx/%E6%B5%8B%E8%AF%95%E5%85%AC%E4%BC%97%E5%8F%B71.jpg)

## 准备
* 安装Vue3.0 CLI (https://cli.vuejs.org/zh/guide/installation.html)

## 功能介绍
* 与后端配合实现rsa、aes 双重加密数据传输 (aes 加密数据内容, rsa 加密aes key)
* 后端SpringBoot(https://github.com/fengjunren/Explorer)

## 代码配置
* src/config/global.js  (*号部分填写自己的域名)
```
function initGlobal (env) {
  let Global = {}
  switch (env) {
    case envEnum.DEV:
      Global = {
        baseUrl:'http://localhost:8080'
      }
      break
    case envEnum.TEST:
      Global = {
        baseUrl:'https://***/Explorer'
         }
      break
    case envEnum.PRD:
      Global = {
        baseUrl:'https://***/Explorer'
      }
      break
    default:
      break
  }
```

## 部署

* 初始化
```
yarn install
```

* 本地运行
```
yarn run serve
```
 
* 编译打包 (cmd 切换到 explo-wx,运行 Vue ui)

![1](https://raw.githubusercontent.com/fengjunren/fengjunren.github.io/master/dl/wx/explor-wx-build1.png)
![2](https://raw.githubusercontent.com/fengjunren/fengjunren.github.io/master/dl/wx/explor-wx-build2.png)
