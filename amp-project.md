---
layout: page
title: 为谷歌AMP⚡移动页面优化
subtitle: AMP⚡超链接CDN加速
comments: true
sitemap:
  exclude: true
---

全站上对于符合谷歌AMP⚡移动页面规范的网站，提供海外CDN进行内嵌式加速秒开。

具体使用规范和实验性项目请访问：
[AMP计划](https://www.ampproject.org/)
[AMP示例](https://ampbyexample.com/)

> p.s. 需要格外注意的是，在中国大陆地区访问会造成延迟，这也是[fanyu.ru](https://fanyu.ru/)本身为什么不使用谷歌移动页面优化的主要原因。

~~~ html
<!doctype html>
<html ⚡>
 <head>
   <meta charset="utf-8">
   <link rel="canonical" href="hello-world.html">
   <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
   <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
   <script async src="https://cdn.ampproject.org/v0.js"></script>
 </head>
 <body>Hello World!</body>
</html>
~~~


