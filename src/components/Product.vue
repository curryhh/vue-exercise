<template>
<div id="product-c">
	<header class="clearfix">
		<div class="header-main clearfix">
			<a onclick="history.go(-1)"  class="go-back"></a>
			<a class="header-search pr">
				<i class="search-icon pa"></i>
				<input type="text" name="search" placeholder="请输入产品关键字"/>
			</a>
			<a class="header-login">
				&nbsp;
			</a>
		</div>
	</header>
	<div class="product-main">
		<div class="product-list-submenu clearfix">
			<span  @click="listDefault" :class="{active: cListDefault}"><a href="javascript:;">综合</a></span>
			<span @click="sales" :class="{active: cSales}"><a href="javascript:;">销量</a></span>
			<span @click="price" class="screen-span" :class="{active:cPrice}"><a href="javascript:;">价格<span class="screen-state"  v-bind:class="{ 'screen-state-up': priceUp, 'screen-state-down': priceDown }"></span></a></span>
			<span class="screen-btn"><i class="screen"></i>筛选</span>
		</div>
		<div class="product-list-item mt10">
			<ul class="scroller" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<li class="clearfix" v-for="item in arrList">
					<a :href="sid">
						<div class="product-img">
							<img :src="item.purl"/>
						</div>
						<div class="product-text">
							<h3>{{item.sproductName}}</h3>
							<p>{{item.sproductId}}元/{{item.sunitName}}</p>
							<p>{{item.sshopName}}</p>
						</div>
					</a>
				</li>
				
			</ul>
			<Loading v-show="loadingLine"></Loading>
		</div>
		<!--screen-cpm-->
		<div class="screen-cpm">
			<div class="screen-cpm-box pr">
				<!--<h2><i class="glyphicon glyphicon-remove screen-close-btn"></i>筛选</h2>-->
				<h2><i class="screen-close-btn"></i>筛选</h2>
				<div class="screen-cpm-content">
					<p class="area">地区
						<i class="glyphicon glyphicon-menu-down fr"></i>
						<input type="text" name="city" id="city" value="所有地区" readonly="readonly" />
						<input id="city2" type="hidden" />
					</p>
					<div class="texture">
						<h3>材质<i class="glyphicon glyphicon-menu-down fr"></i><span>不限</span></h3>
						<ul>
							<li class="active">不限<i class="glyphicon glyphicon-ok"></i></li>
							<li>PVC<i class="glyphicon glyphicon-ok"></i></li>
							<li>PE<i class="glyphicon glyphicon-ok"></i></li>
							<li>PVC-M<i class="glyphicon glyphicon-ok"></i></li>
							<li>PVC-C<i class="glyphicon glyphicon-ok"></i></li>
							<li>HDPE<i class="glyphicon glyphicon-ok"></i></li>
							<li>PPR<i class="glyphicon glyphicon-ok"></i></li>
							<li>钢塑复合<i class="glyphicon glyphicon-ok"></i></li>
							<li>PP<i class="glyphicon glyphicon-ok"></i></li>
							<li>钢管<i class="glyphicon glyphicon-ok"></i></li>
							<li>PVC-U<i class="glyphicon glyphicon-ok"></i></li>
							<li>MPP<i class="glyphicon glyphicon-ok"></i></li>
							<li>CFRP<i class="glyphicon glyphicon-ok"></i></li>
							<li>玻璃纤维<i class="glyphicon glyphicon-ok"></i></li>
						</ul>
					</div>
					<div class="price-range clearfix">
						<p>价格范围</p>
						<input type="text" placeholder="最低价"/>
						<input type="text" placeholder="最高价"/>
					</div>
				</div>
				<div class="control-btn">
					<button type="button" class="empty-btn">
						清空
					</button>
					<button type="button" class="affirm-btn">
						确定
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
	
</template>

<style scoped src="../assets/css/product-list.css">
	
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
        priceUp:false,
        priceDown:false,
        // class
        cListDefault:true,
        cSales:false,
        cPrice:false
      }
    },
    components:{
        Loading
    },
    computed:{
    	
    },
   mounted(){
    var scroller=document.getElementsByClassName("scroller")[0];
    var header=document.getElementsByTagName("header")[0].offsetHeight;
    var purchase=document.getElementsByClassName("product-list-submenu")[0].offsetHeight;
    scroller.style.height=window.innerHeight-header+"px";
   
   },
    methods:{
      loadMore(){
         this.loading = true;
         this.loadingLine=true;
          var _this=this;
          this.$ajax.get('../src/data/product.data').then(function(res){
            setTimeout(function(){
              _this.arrList=res.data;
             _this.loadingLine=false;
              console.log(_this.arrList)
            },1000);
          }).catch(function(err){
            console.log(err);
          });  
      },

      listDefault(e){

      	// class
		this.cListDefault=true;
		this.cSales=false;
		this.cPrice=false;

        
	       
          var newdata=this.arrList;
          function sortprice(a,b){  
                 return b.id-a.id;
              };
              this.arrList=newdata.sort(sortprice);  
      },
      sales(e){
        //console.log(e.target.parentNode.children);
        this.priceUp=false;
        this.priceDown=false;

        // class
		this.cListDefault=false;
		this.cSales=true;
		this.cPrice=false;

        
    		var newdata=this.arrList;
    		function sortprice(a,b){  
               return a.sid-b.sid;
            };
            this.arrList=newdata.sort(sortprice);  
    	},
    	price(e){
        //console.log(e.target.parentNode.children);
        // class
		this.cListDefault=false;
		this.cSales=false;
		this.cPrice=true;
	       
	        function priceUp(){

	        	var newdata=_this.arrList;
	        
	    		function sortprice(a,b){  
	               return b.sproductId-a.sproductId;
	            };
	            _this.arrList=newdata.sort(sortprice);  
	        }

	        function priceDown(){
	        	var newdata=_this.arrList;
	        	
	    		function sortprice(a,b){  
	               return a.sproductId-b.sproductId;
	            };
	            _this.arrList=newdata.sort(sortprice);  
	        }


         if (this.priceUp || this.priceDown){
        	if(this.priceUp){
        		this.priceUp=false;
        		this.priceDown=true;
        		var _this=this;
        		priceDown();
        	}
        	else {
        		this.priceUp=true;
        		this.priceDown=false;
        		var _this=this;
        		priceUp();
        	}
         }else {
         	this.priceUp=true;
         	var _this=this;
			priceUp();
         }
        
    		
    	}
    }
  }
	
</script>