<template>
<div class="searchTop">
  <i class="bi bi-arrow-left" @click=""></i>
  <input type="text" placeholder="陈奕迅">
</div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style lang="less" scoped>
.searchTop{
  width: 100%;
  height: 1rem;
  padding:0 .2rem;
  display: flex;
  align-items: center;
  input{
    margin-left: .2rem;
    border:none;
    border-bottom:1px solid #999999;
    width: 90%;
    padding:.1rem;
  }
}
</style>