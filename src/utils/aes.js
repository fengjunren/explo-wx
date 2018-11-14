import CryptoJS from 'crypto-js'
// import MD5 from 'MD5'

// 加密
function encrypt (data,pwd) {
  let dataJson = {}
  dataJson.REQ_BODY = data
  let request = JSON.stringify(dataJson)
  console.log('-----未加密数据----')
  console.log(request)
  
  let key = CryptoJS.enc.Utf8.parse(pwd)
  let encryptedData = CryptoJS.AES.encrypt(request, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })

  let cryptRequest = encryptedData.toString()
  console.log('-----AES----------cryptRequest:',cryptRequest)
 
  return cryptRequest
}

// 解密
function decrypt (data,pwd) {
  let key = CryptoJS.enc.Utf8.parse(pwd)
  let decryptByte = CryptoJS.AES.decrypt(data, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  let plaintext = decryptByte.toString(CryptoJS.enc.Utf8)
  return plaintext
}

export default {encrypt,decrypt}
