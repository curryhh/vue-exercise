import getters from "./getters";


const state={
	menu:true,
};
const mutations={
	hideMenu(state){
		state.menu=false;
	},
	showMenu(state){
		state.menu=true;
	}	
};
export default{
	state,
	mutations,
	getters
}
