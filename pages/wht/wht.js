Page({
  data:{
    msg:{},
  },
onLoad:function () {
  wx.cloud.database().collection('Student').doc('b00064a7609a751f1696ae34331be04b').get()
  .then(res=>{
      console.log('成功',res);
      this.setData({ msg: res.data });
  })
  .catch(err=>{
      console.log('失败',err);
  })
  },

})
