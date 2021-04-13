Page({
  data:{
    msg:{},
    anima:'沈秉辰18041117'
  },
onLoad:function () {
  var msg = this.initData();
  this.setData({ msg: msg });
  },
initData:function () {
  var message = new Object();
  message.img = '../images/sbc.jpg';
  message.title = '沈秉辰';
  message.number='18041117'
  message.major = 'Computer Since';
  message.github = 'shenbc';
  message.interest='吃吃吃！';
  return message;
  },


})
