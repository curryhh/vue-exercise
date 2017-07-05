<template>
	<div id="purchase">
		<header class="clearfix">
			<div class="header-main clearfix">
				<a onclick="history.go(-1)"  class="go-back"></a>
				<a class="header-search pr">
					<i class="search-icon pa"></i>
					<input type="text" name="search" placeholder="请输入产品关键字"/>
				</a>
				<a class="header-login">发布</a>
			</div>
		</header>
		<div class="purchase-list-main">
			<div class="purchase-list-submenu clearfix">
				<span @click="listDefault" class="active">默认</span>
				<span @click="hot" >热度</span>
				<span class="screen-btn"><i class="screen"></i>筛选</span>
			</div>
			<div class="purchase-listl">
				<div class="scroller">
					<ul class="coupon-list clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
           
						<li class="clearfix" v-for="item in arrList">
              <router-link :to="'/Article/'+item.id">
                  <a>
                    <p class="clearfix"><span class="fl">{{item.cgName}}</span><span class="fr">报价中</span></p>
                    <p class="clearfix"><span class="fl">发布日期：{{item.createDate}}</span><span class="fr">大量采购</span></p>
                    <p class="clearfix"><span class="fl">报价截止日期：还剩{{day(item.modifyDate)-day(item.createDate)}}天</span><span class="fr">{{item.pname}}</span></p>
                  </a>  
              </router-link>
						</li>
					</ul>
					<Loading v-show="loadingLine"></Loading>
				</div>
				
			</div>	
		</div>
	</div>
</template>
<style scoped src="../assets/css/purchase-list.css">
	
</style>
<style type="text/css">
	.scroller{overflow: scroll;}
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
    computed:{
    	
    },
    methods:{
      loadMore(){
         this.loading = true;
         this.loadingLine=true;
          var _this=this;
          this.$ajax.get('../src/data/purchase.data').then(function(res){
           
            setTimeout(function(){
              _this.arrList=res.data;
             _this.loadingLine=false;
            },1000);
            
          }).catch(function(err){
            console.log(err);
          });  
      },
      day(sDate){
    		var sArr = sDate.split("-");
			var sRDate = new Date(sArr[0], sArr[1], sArr[2])/(24*60*60*1000);
    		return sRDate;
    	},
      listDefault(e){
          //console.log(e.target.parentNode.children);
          for (var i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].className="";
          }
          e.target.className="active";
          var newdata=this.arrList;
          function sortprice(a,b){  
                 return b.id-a.id;
              };
              this.arrList=newdata.sort(sortprice);  
      },
    	hot(e){
        //console.log(e.target.parentNode.children);
        for (var i = 0; i < e.target.parentNode.children.length; i++) {
          e.target.parentNode.children[i].className="";
        }
        e.target.className="active";
    		var newdata=this.arrList;
    		function sortprice(a,b){  
               return a.id-b.id;
            };
            this.arrList=newdata.sort(sortprice);  
    	}
    },
    mounted(){
      this.listDefault();
      var scroller=document.getElementsByClassName("scroller")[0];
      var header=document.getElementsByTagName("header")[0].offsetHeight;
      var purchase=document.getElementsByClassName("purchase-list-submenu")[0].offsetHeight;
      scroller.style.height=window.innerHeight-header+"px";
     },
  }
	
</script>