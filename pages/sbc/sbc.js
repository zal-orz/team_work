Page({
  data:{
    msg:{},
  },
onLoad:function () {
  wx.cloud.database().collection('Student').doc('28ee4e3e609a757d17d1927b2749dba2').get()
  .then(res=>{
      console.log('成功',res);
      this.setData({ msg: res.data });
  })
  .catch(err=>{
      console.log('失败',err);
  })
  },

})
