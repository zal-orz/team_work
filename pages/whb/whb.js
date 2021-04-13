Page({
  data:{
    msg:{},
  },
onLoad:function () {
  var msg = this.initData();
  this.setData({ msg: msg });
  },
initData:function () {
  var message = new Object();
  message.img = '../images/whb.jpg';
  message.title = '王淏博';
  message.number='17074209'
  message.major = 'Computer Since';
  message.github = 'wanghaobo159';
  message.interest='不明';
  return message;
  },

})
