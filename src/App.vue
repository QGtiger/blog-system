<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@font-face{
  font-family: MainFont;
  src: url('./assets/fonts/GoodVibrationsROB Script.ttf');
}

.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.fit-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.lineClamp1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  max-height: 23px;
  white-space: break-spaces;
  word-break: break-all;
}

.lineClamp3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  max-height: 67px;
}

.mt-1 {
  margin-top: 10px !important;
}
.ml-1 {
  margin-left: 10px !important;
}
.mr-1 {
  margin-right: 10px !important;
}
.mb-1 {
  margin-bottom: 10px !important;
}

.mt-2 {
  margin-top: 20px !important;
}
.ml-2 {
  margin-left: 20px !important;
}
.mr-2 {
  margin-right: 20px !important;
}
.mb-2 {
  margin-bottom: 20px !important;
}

.pt-2 {
  padding-top: 20px !important;
}
.pl-2 {
  padding-left: 20px !important;
}
.pr-2 {
  padding-right: 20px !important;
}
.pb-2 {
  padding-bottom: 20px !important;
}

.el-dialog {
box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.1);
border-radius: 8px;
}

.full-width {
  width: 100%;
}

.tc {
  text-align: center;
}

.base-tips {
  color: #909399
}

.small-tips {
  color: #909399;
  font-size: 14px;
}

.mini-tips {
  color: #909399;
  font-size: 13px;
}

.circle {
  border-radius: 100%;
  overflow: hidden;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.bs-text {
  color: $info
}

</style>
