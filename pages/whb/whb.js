Page({
  data:{
    msg:{},
  },
onLoad:function () {
  wx.cloud.database().collection('Student').doc('b00064a7609a75ce1696df3466037a99').get()
  .then(res=>{
      console.log('成功',res);
      this.setData({ msg: res.data });
  })
  .catch(err=>{
      console.log('失败',err);
  })
  },

})
