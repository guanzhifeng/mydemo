import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopping = () => import('../views/shopping/Shopping.vue')
const My = () => import('../views/my/My.vue')

Vue.use(VueRouter)

const routes = [
	{
		path:'',
		redirect: '/home'
	},
	{
		path:'/home',
		component: Home
	},
	{
		path:'/gzt',
		component: Category
	},
	{
		path:'/shopping',
		component: Shopping
	},
	{
		path:'/my',
		component: My
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
