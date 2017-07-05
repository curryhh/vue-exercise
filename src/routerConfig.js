import Home from "./components/Home.vue";
import Product from "./components/Product.vue";
import Price from "./components/Price.vue"
import Purchase from "./components/Purchase.vue"
import User from "./components/User.vue"
import Article from "./components/Article.vue";



export default [{
	path: '/Home',
	component: Home
}, {
	path: '/Product',
	component: Product
}, {
	path: '/Price',
	component: Price
}, {
	path: '/Purchase',
	component: Purchase
}, {
	path: '/User',
	component: User
},
{
	path:'/Article/:id',
    component:Article
}, 

{
	path: '/',
	redirect: '/home'
}, {
	path: '*',
	redirect: '/home'
}]