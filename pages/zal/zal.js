Page({
  data:{
    msg:{},
    anima:'张奥骆18041105'
  },
onLoad:function () {
  wx.cloud.database().collection('Student').doc('28ee4e3e609a745e17d13d8a48629d78').get()
  .then(res=>{
      console.log('成功',res);
      this.setData({ msg: res.data });
  })
  .catch(err=>{
      console.log('失败',err);
  })
  },

  click:function(){
    var animation = wx.createAnimation({
    timingFunction: "ease",
    })
    animation.rotate(360).step();//导出动画数据传递给组件的animation属性。 
    this.setData({  
    animationData: animation.export(),
    })
    setTimeout(() => {
    animation.rotate(0).step() 
    this.setData({ 
    animationData: animation.export()  
    })}, 1200)
  },

})
