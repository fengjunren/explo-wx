 
 let envEnum = {
  DEV: 0,
  TEST: 1,
  PRD: 2
}
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
  Global.currEnv = env
  return Global
}
let env=envEnum.PRD
if(process.env.NODE_ENV === 'development'){
  env=envEnum.DEV
}else if(process.env.NODE_ENV === 'test'){
  env=envEnum.TEST
}
console.log('curr evn:',env)
let global = initGlobal(env)
export {global, envEnum}
