<template>
  <div class="nav-bar">
<!--    <el-row>-->
<!--      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><slot name="left"></slot></el-col>-->
<!--      <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16"><slot name="center"></slot></el-col>-->
<!--      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><slot name="right"></slot></el-col>-->
<!--    </el-row>-->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 2px rgba(100,100,100,0.2);
}
.left,.right{
  width: 50px;
}
.center{
  flex: 1;
}
</style>
