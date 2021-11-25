<template>
  <el-carousel :height="bannerheigh+'px'">
    <el-carousel-item v-for="banner in banners" >
      <a :href="banner.link" >
      <img class="img" :src="banner.image" alt />
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  name: "Rotation",
  props:{
    banners:Array
  },
  computed:{
    bannerheigh(){
      return screen.width * (166/320);
    }
  }
}
</script>

<style scoped>
.img{
  width: 100%;
}
</style>
