<template>
  <div class="recommend">
    <el-row>
      <el-col :span="6" v-for="recommend in recommends">
        <a class="recommend-item" :href="recommend.link" >
          <img class="recommend-img"  :src="recommend.image" alt="" />
          <div>{{ recommend.title }}</div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props:{
    recommends:Array
  }
}
</script>

<style scoped>
.recommend{
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 10px 2px rgba(100,100,100,0.2);
}
.recommend-img{
  width: 90%;
  margin-bottom: 10px;
}
</style>
