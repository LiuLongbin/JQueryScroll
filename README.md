# JQueryScroll.js
===========

使用jquery搭建监听响应式网页滚动框架。

## 主要特点

* 实现自定义水平、垂直滚动页面
* 监听浏览器滚轮事件，支持跨浏览器
* 通过css3或同步渲染实现平滑滚动
* 支持自定义缓动函数
* 支持子元素进出事件
* 支持AMD、CMD规范，兼容JQuery插件

## 使用方法

添加JQuery依赖

```javascript
  <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
```

然后添加 `jquery.Scroll.js`

```javascript
  <script src="jquery.Scroll.js"></script>
```

再然后添加基础css `jquery.scroll.css`

```
  <link rel="stylesheet" href="jquery.scroll.css">
```

### 示例

```html
<div id="scroll" data-speed="100">
  <div>first ...</div>
  <div>second ...</div>
  <div>third ...</div>
  ...
</div>
```
最后初始化插件 **Scroll**

```javascript
$("#scroll").scroll();
```

## Options

你可以通过 **Scroll** 的构造函数传入一下参数。

| Option              | Default    | Type   | Description
| -------             | ---------  | ------ | --------
| `speed`          | `50`     | int    | 滚动速度（px/次）
| `duration`          | `1000`      | int    | 持续时间 (ms)
| `orientation`       | `vertical` | string    | 横向（horizontal） or 纵向（vertical）
| `easing`            | `linear`   | string  | 缓动函数
| `containerClass`    | `scroll-container` | string | 容器class
| `contentClass`        | `scroll-content`     | string   | 内容class
| `responsive`        | `true`     | bool   | 支持自适应
| `pagination`        | `true`     | bool   | 分页

Callback options

| Callback             | Default        | Type     | Description
| -------------------- | -------------- | -------- | --------
| `onInitStart`        | `function(){}` | function | before plugin initialization
| `onInitEnd`          | `function(){}` | function | after plugin initialization
| `onTransitionStart`  | `function(){}` | function | before transition starts
| `onTransitionEnd`    | `function(){}` | function | after transition ends
| `onItemShow`        | `function(){}` | function | when item show
| `onItemHide`       | `function(){}` | function | when item hide

### 初始化

可以通过以下方式扩展 **Scroll**

```javascript
// create instance
var scroll = new Scroll($("#scroll"), {
  easing: 'easeOut'
});

// or set the params on jquery instance
$("#scroll").scroll({
  easing: 'easeOut'
});

// or modify global default params
Scroll.defeaults.easing = 'easeOut';
```

### API

## Metadata

| Attribute     | Description
| -------       | --------
| `data-init`   | initial params


## Events

您可以监听以下几个由 **Scroll** 触发的事件。

| Event                  | Description
| -----------------------| -------------------
| `scroll:scrollstart` | when mouse scroll is started
| `scroll:scrollstop`  | when mouse scroll is finished
| `scroll:transitionstart` | when animation is started
| `scroll:transitionend`   | when animation is finished
| `scroll:itemshow`        | when item show
| `scroll:itemhide`       | when item hide

您可以监听以下几个自定义事件通过'on'方法，

```javascript
$("#scroll").Scroll().
on("scroll:scrollstart", function (e) {
  console.log(e);
})
```

或者通过构造函数:

```javascript
$("#scroll").scroll({
  onScrollStart: function (e) { ... }
})
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Copyright

Copyright (c) 2015 Tinyteam. See LICENSE for further details.
