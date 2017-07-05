<template>
    <div id="menu-c" class="clearfix">
        <div class="mt37_5"></div>
        <div class="menu clearfix">
            <ul>               
                <router-link to="/home" tag="li" active-class="active">
                    <a href="javascript:;" class="clearfix"> 
                        <i class="sub-home"></i>
                        <span>首页</span>
                    </a>
                </router-link>
                 <router-link to="/product" tag="li" active-class="active">
                    <a href="javascript:;" class="clearfix"> 
                        <i class="sub-product"></i>
                        <span>商城</span>
                    </a>
                </router-link>
                 <router-link to="/price" tag="li" active-class="active">
                    <a href="javascript:;" class="clearfix"> 
                        <i class="sub-price"></i>
                        <span>价格行情</span>
                    </a>
                </router-link>
                 <router-link to="/purchase" tag="li" active-class="active">
                    <a href="javascript:;" class="clearfix"> 
                        <i class="sub-purchase"></i>
                        <span>采购</span>
                    </a>
                </router-link>
                 <router-link to="/user" tag="li" active-class="active">
                    <a href="javascript:;" class="clearfix"> 
                        <i class="sub-user"></i>
                        <span>我的</span>
                    </a>
                </router-link>
            </ul>
        </div>    
    </div>
    
</template>