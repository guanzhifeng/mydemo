<template>
	<div class="tab-bar-item" @click="itemClick()">
		<div v-if="!on"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-on"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'TabBarItem',
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'#1296DB'
			}
		},
		data(){
			return{

			}
		},
		computed:{
			on(){

				// return this.$route.path.indexOf(this.path) != -1;
				return this.$route.path === this.path;
			},
			activeStyle(){
				return this.on ? {color: this.activeColor}: {};
			}
		},
		methods:{
			itemClick(){
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
	}
/* 	.textcolor{
		color: #1296DB;
	} */
</style>
