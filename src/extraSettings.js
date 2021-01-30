// 额外分数：修改数字
let extraScore = 1;

// 无敌模式：true 改为 false
let wuDi = false;

// 第一个水果：修改数字为 0-10
let firstFruit = 10;

let setFruit = {
  startFruits: [],
  minNum: 0,
  maxNum: 5,
  randomFunction: () => {
    return this.minNum + Math.floor(Math.random() * (this.maxNum - this.minNum))
  }
}

// 水果合成反转：false 改为 true
let reverseLevelUp = false;

// 让水果更 Q 弹：false 改为大于 0 小于 1 的任意小数（推荐 0.9）
let fruitQTan = 0.9999999;

// 让水果下落缓慢：false 改为大于 0 的任意数，值越大阻力越大，下落越慢（推荐 5）
let fruitSlowDown = false;

// 广告链接：false 或为空字符串表示不会跳转到广告
let adLink = 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/yupi_wechat.png';

// 修改网页标题：将 "合成大西瓜" 进行替换
document.getElementsByTagName("title")[0].innerText = '合成小红人';

// 开启选分弹窗：将 false 改为 true
let selectModal = false;
