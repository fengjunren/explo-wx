const SAVR_OPENID = 'SAVR_OPENID'
const SAVR_USERID = 'SAVR_USERID'
const CHAGE_ROUTE = 'CHAGE_ROUTE'

export default {
  [SAVR_OPENID] (state, payload) {
    state.openid = payload.openid
  },
  [SAVR_USERID] (state, payload) {
    state.userId = payload.userId
  },
  [CHAGE_ROUTE] (state, payload) {
    state.route = payload.route
  }
}
