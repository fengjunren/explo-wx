# explo-wx
Vue 公众号前端

## 预览
![预览](https://raw.githubusercontent.com/fengjunren/fengjunren.github.io/master/dl/wx/preview.gif)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![体验](https://raw.githubusercontent.com/fengjunren/fengjunren.github.io/master/dl/wx/%E6%B5%8B%E8%AF%95%E5%85%AC%E4%BC%97%E5%8F%B71.jpg)

## 代码配置
* src/config/global.js  (*号部分需要重新填写)
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
 
* 编译打包
```
yarn run build
```
