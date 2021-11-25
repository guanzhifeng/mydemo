<template>
	<tab-bar>
		<tab-bar-item v-for="tab in tabbarlist" :path="'/'+tab.icon">
			<img slot='item-icon' :src="getimg(tab.icon)"/>
			<img slot='item-icon-on' :src="getimgon(tab.icon)"/>
			<div slot='item-text'>{{tab.text}}</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from '@/components/tabbar/TabBar.vue';
	import TabBarItem from '@/components/tabbar/TabBarItem.vue';
	
	export default {
	  name: 'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		},
		data(){
			return{
				tabbarlist:[
					{icon:'home',text:'首页'},
					{icon:'gzt',text:'分类'},
					{icon:'shopping',text:'购物车'},
					{icon:'my',text:'我的'},
				]
			}
		},
		methods:{
			getimg(icon){
				return require('@/assets/img/tabbar/'+icon+'.png');
			},
			getimgon(icon){
				return require('@/assets/img/tabbar/'+icon+'_on.png');
			}
		}
	}
	
</script>

<style>
</style>
