Page({
  data:{
    msg:{},
    anima:'张奥骆18041105'
  },
onLoad:function () {
  var msg = this.initData();
  this.setData({ msg: msg });
  },
initData:function () {
  var message = new Object();
  message.img = '../images/zal.jpg';
  message.title = '张奥骆';
  message.number='18041105'
  message.major = 'Computer Since';
  message.github = 'zal-orz';
  message.interest='游戏、动漫、游泳';
  return message;
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
