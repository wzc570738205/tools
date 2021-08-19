<!--
 * @FileDescription: 
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-08-19 16:29:50
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-19 16:34:33
-->
<template>
  <div class="wraper">
    <div class="textline">
      我是单行隐藏！我是单行隐藏！我是单行隐藏！我是单行隐藏！我是单行隐藏！
    </div>
    <div class="textdouble">
      我是多行隐藏！我是多行隐藏！我是多行隐藏！我是多行隐藏！我是多行隐藏！我是多行隐藏！我是多行隐藏！我是多行隐藏！我是多行隐藏！我是多行隐藏！
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.wraper {
  border: 1px dashed #ccc;
  padding: 5px;
}
.textline {
  width: 200px;
  height: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.textdouble {
  width: 200px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
