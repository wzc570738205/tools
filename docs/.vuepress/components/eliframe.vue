<!--
 * @FileDescription: 
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-08-19 16:54:21
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-19 17:40:06
-->
<!--
 * @FileDescription: 
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-08-19 16:42:21
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-19 16:43:46
-->
<template>
  <iframe :src="url" frameborder="0" ></iframe>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
      url:''
  },
  data() {
    return {
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped>
iframe {
  width: 100%;
  height: 600px;
  overflow-y: auto;
  overflow-x: auto;
}
</style>


