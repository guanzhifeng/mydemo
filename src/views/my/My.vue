<template>
  <div>
    <h2>我的</h2>
    <button @click="requ">按钮</button>
  </div>
</template>

<script>
	export default{
		name:'My',
    methods:{
      requ(){
        this.ajaxGet(
            '/home/multidata',
            {type: 'pop',page: 1}
        ).then(res => {
          console.log(res);
        })
      }
    }
	}
</script>

<style>
</style>
