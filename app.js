// app.js
App({
  onLaunch() {
    wx.cloud.init({
      env:"bgd-cloud-5g8xmjas95cfeead"
    })
  },
  globalData: {
    userInfo: null
  }
})
