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
  message.img = '../images/wht.jpg';
  message.title = '王昊天';
  message.number='18074214'
  message.major = 'Computer Since';
  message.github = 'kira-sir';
  message.interest='睡觉和摸鱼';
  return message;
  },


})
