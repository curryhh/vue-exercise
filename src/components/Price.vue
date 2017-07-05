<template>
<div id="price-c">
    <header class="clearfix">
      <div class="header-main clearfix">
        <a onclick="history.go(-1)"  class="go-back"></a>
        <a class="header-search pr">
          <i class="search-icon pa"></i>
          <input type="text" name="search" placeholder="请输入产品关键字"/>
        </a>
        <a class="header-filtrate"></a>
      </div>
    </header>
   
    <div class="price-main">
      <div class="price-list">
        <div class="scroller"> 
          <ul class="coupon-list clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li class="clearfix" v-for="item in arrList">
                <p><span class="fl">{{item.cgName}}</span><span class="fr">{{item.pname}}</span></p>
                <p><span class="fl">{{item.createDate}}</span><span class="fr"><a href="">查看价格</a></span></p>  
            </li>
          </ul>
          <Loading v-show="loadingLine"></Loading>
        </div>        
      </div>  
    </div>
</div>
 

 
</template>
<style scoped src="../assets/css/price.css">
 

</style>

<script>

import Loading from "./Loading.vue";
  export default {
     data() {
      return {
        arrList:[],
        loading:false,
        loadingLine:false,
      }
    },
    components:{
        Loading
    },
   mounted(){
    var scroller=document.getElementsByClassName("scroller")[0];
    var header=document.getElementsByTagName("header")[0].offsetHeight;
    scroller.style.height=window.innerHeight-header+"px";
   },
    methods:{
      loadMore(){
         this.loading = true;
         this.loadingLine=true;
          var _this=this;
          this.$ajax.get('../src/data/pirce.data').then(function(res){
           
            setTimeout(function(){
              _this.arrList=res.data;
             _this.loadingLine=false;
            },1000);
            
          }).catch(function(err){
            console.log(err);
          });
            
      }
    }
  }
</script>    