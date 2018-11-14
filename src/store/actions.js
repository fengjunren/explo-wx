export default {
  saveOpenId ({ commit }, openid) {
    commit('SAVR_OPENID', { openid })
  },
  saveUserId ({ commit }, userId) {
    commit('SAVR_USERID', { userId })
  },
  chageRoute ({ commit }, route) {
    commit('CHAGE_ROUTE', { route })
  }
}
