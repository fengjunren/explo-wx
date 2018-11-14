 
import Constant from '../config/constant'
import { encryptPublicLong, decryptPrivateLong } from '@lsqswl/rsaencrypt'

// rsa加密
function encrypt (data) {
  let publicKey=Constant.rsa_public_key
  // console.log('publicKey:',publicKey)
  const encryptData = encryptPublicLong(data, publicKey)
  return encryptData
}
// rsa解密
function decrypt (encryptData) {
  let privateKey=Constant.rsa_private_key
  // console.log('privateKey:',privateKey)
  const decryptData = decryptPrivateLong(encryptData, privateKey)
  return decryptData
}

export default {encrypt,decrypt}
