<template>
    <div id="app">
        <router-view></router-view>    
        <!--底部按钮-->
        <Menu v-show="menuShow"></Menu>
       
    </div>
</template>


<script>
import Menu from "./components/Menu.vue";
import {mapGetters,matpActions} from "vuex";


export default {
    name: 'app',

    computed:mapGetters([
        "menuShow"
    ]),
  /*监听路由变化*/ 
    watch:{
        $route(to){
            console.log(to.path);
            if (to.path=="/user") {
                this.$store.dispatch("hideMenu")
            }else {
                this.$store.dispatch("showMenu")
            }
        }
    },
    methods: {
      
    },
  
    components:{
        Menu
    },

}
</script>

<style>

</style>