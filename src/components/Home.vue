<template>
	<div id="home">
		<header class="clearfix">
            <div class="header-main clearfix">
                <a class="header-logo"></a>
                <a class="header-search pr">
                    <i class="search-icon pa"></i>
                    <input type="text" name="search" placeholder="请输入产品关键字"/>
                </a>
                <a class="header-login">登录</a>
            </div>
        </header>

        <div class="main clearfix">
            <div class="banner clearfix">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">  
                  <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  </ol>
                  <div class="carousel-inner" role="listbox">
                   <div class="item active">
                      <img src="../assets/images/banner-1.jpg"/>
                    </div>
                    <div class="item">
                      <img src="../assets/images/banner-2.jpg"/>
                    </div>
                    
                  </div>
                </div>
                
            </div>
            <!--new-->
            <div class="submenu clearfix">
                <ul>
                     <router-link to="/product" tag="li" active-class="active">
                         <a href="">
                            <img src="../assets/images/menu-1.png" />
                            <p>分类</p>
                        </a>
                    </router-link>
                     <router-link to="/price" tag="li" active-class="active">
                        <a href="javascript:;" class="clearfix"> 
                            <img src="../assets/images/menu-2.png" />
                            <p>价格行情</p>
                        </a>
                    </router-link> 
                    <router-link to="/purchase" tag="li" active-class="active">
                        <a href="">
                                <img src="../assets/images/menu-3.png" />
                                <p>采购</p>
                            </a>      
                    </router-link>
                     <router-link to="/pipeknow" tag="li" active-class="active">
                        <a href="">
                            <img src="../assets/images/menu-4.png" />
                            <p>管知道</p>
                        </a>
                    </router-link>           
                </ul>
            </div>
            <div class="partner mt10 bgcf clearfix">
                <div class="partner-titel clearfix">
                    <h2>品牌推荐</h2>
                    <a href="">更多>></a>
                </div>
                <div class="partner-list clearfix">
                    <ul>
                        <li><img src="../assets/images/brand-1..png"/></li>
                        <li><img src="../assets/images/brand-1..png"/></li>
                        <li><img src="../assets/images/brand-1..png"/></li>
                        <li><img src="../assets/images/brand-1..png"/></li>
                        <li><img src="../assets/images/brand-1..png"/></li>
                        <li><img src="../assets/images/brand-1..png"/></li>
                        <li><img src="../assets/images/brand-1..png"/></li>
                        <li><img src="../assets/images/brand-1..png"/></li>
                        <li><img src="../assets/images/brand-1..png"/></li>
                    </ul>
                </div>
            </div>
            <div class="classify mt10 bgcf clearfix">
                <div class="partner-titel clearfix">
                    <h2>行业市场</h2>
                </div>
                <div class="classify-list">
                    <ul>
                        <li>
                            <a href=""><img src="../assets/images/classify-1.png"/></a>
                        </li>
                        <li>
                            <a href=""><img src="../assets/images/classify-1.png"/></a>
                        </li>
                        <li>
                            <a href=""><img src="../assets/images/classify-1.png"/></a>
                        </li>
                        <li>
                            <a href=""><img src="../assets/images/classify-1.png"/></a>
                        </li>
                        <li>
                            <a href=""><img src="../assets/images/classify-1.png"/></a>
                        </li>
                        <li>
                            <a href=""><img src="../assets/images/classify-1.png"/></a>
                        </li>
                        <li>
                            <a href=""><img src="../assets/images/classify-1.png"/></a>
                        </li>
                        <li>
                            <a href=""><img src="../assets/images/classify-1.png"/></a>
                        </li>
                        <li>
                            <a href=""><img src="../assets/images/classify-more.png"/></a>
                        </li>
                    </ul>
                </div>
            </div>  
        </div>
	</div>
</template>
<style>
   
</style>
