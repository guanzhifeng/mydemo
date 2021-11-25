<template>
  <div>
    <h2>首页</h2>
    <div>{{$store.state.nickname}}</div>
    <div>{{$store.getters.username}}</div>
    <button @click="updatenickname">修改</button>
  </div>

</template>

<script>
	export default{
		name:'Home',
    methods:{
      updatenickname(){
        this.$store.commit('setNickName')
      }
    }
	}
</script>

<style>
</style>
