<template>
  <div id="home">
    <nav-bar class="home-nav-bar"><center slot="center">购物街</center></nav-bar>
    <rotation :banners="banners" />
    <recommend :recommends="recommends" />
    <feature />
    <div v-for="i in 30">
      <p>商品{{i}}</p>
      <br>
    </div>

  </div>

</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import Rotation from "@/views/home/homecomponents/Rotation";
  import Recommend from "@/views/home/homecomponents/Recommend";
  import Feature from "@/views/home/homecomponents/Feature";
  import {getHomeMultidata} from "@/network/home";

  export default{
		name:'Home',
    data(){
      return{
        banners:[],
        dkeyword:[],
        keywords:[],
        recommends:[],
      }
    },
    components:{
      NavBar,
      Rotation,
      Recommend,
      Feature
    },
    created() {
      //请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.dkeyword = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
        this.recommends = res.data.recommend.list;
      })
    },
    // methods:{
    //   updatenickname(){
    //     this.$store.commit('setNickName')
    //   }
    // }
  }
</script>

<style>
.home-nav-bar{
  background-color: var(--color-high-text);
  color: #fff;
}
</style>
