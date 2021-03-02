# 合成小红人

[在线访问](https://sml.xx-xx-xx.vercel.app/)

<img src="https://gitee.com/xx-xx-xx/images/raw/master/img/4ed917f85479a7fa6b5f4b6674ff646.jpg" style="zoom:10%;" />

## 魔改步骤

### 教程

[魔改详细教程](https://cloud.tencent.com/developer/article/1782433)

[未修改版源码](https://github.com/liyupi/daxigua/releases/tag/1.0.0)

[替换素材表](https://docs.qq.com/sheet/DS0d2VVVJYmpvZ0pZ?tab=BB08J2&_t=1612024933646)

<img src="https://gitee.com/xx-xx-xx/images/raw/master/img/20210302143533.png" style="zoom:40%;" />

cocos creator引擎[官方文档](https://docs.cocos.com/creator/manual/zh/)

- res/raw-assets 改音乐和图片
- extraSettings.js 已经写好了一些宏供修改

### 本地启动

1. 安装 serve 工具

   ```bash
   npm i -g serve
   ```

2. 运行 serve

   ```bash
   serve
   ```

3. 打开浏览器访问 localhost:5000

### 发布上线

1. 安装Vercel

   ```js
   npm install -g vercel
   ```

2. 进入`index.html`目录发布网站

   ```js
   vercel --prod
   ```

3. 得到网址

## BUGs

1. ~~小红人照片对应错误因为少了一个~~
3. ~~广告部分仅替换底色仅视觉上看不出来其实还是可以点击进去的~~
3. 改了弹性系数后跳的太高会与还没释放的小红人消掉，之后不会出现新的小红人