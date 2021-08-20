<!--
 * @FileDescription: 
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-08-19 16:29:50
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-19 17:50:17
-->
<template>
<div class='wraper'>
  <div class='div'></div>
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
  width: 500px;
  height: 300px;
  background: rgba(28, 62, 133, 0.4);
  margin: 0 auto;
}
.div {
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #1f6fb6, #1f6fb6) 0 0 no-repeat,
    linear-gradient(180deg, #1f6fb6, #1f6fb6) 0 0 no-repeat,
    linear-gradient(270deg, #1f6fb6, #1f6fb6) 100% 0 no-repeat,
    linear-gradient(180deg, #1f6fb6, #1f6fb6) 100% 0 no-repeat,
    linear-gradient(270deg, #1f6fb6, #1f6fb6) 0 100% no-repeat,
    linear-gradient(180deg, #1f6fb6, #1f6fb6) 0 100% no-repeat,
    linear-gradient(270deg, #1f6fb6, #1f6fb6) 100% 100% no-repeat,
    linear-gradient(270deg, #1f6fb6, #1f6fb6) 100% 100% no-repeat;
  background-size: 2px 8px, 8px 2px, 2px 8px, 8px 2px;
}

</style>
