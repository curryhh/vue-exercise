<template>
	<div id="user">
		<header>
			<div class="header-main clearfix">
				<a href="" onclick="history.go(-1)"  class="go-back">
				</a>
				<span class="title" href="" >
					登录
				</span>
				<a href="" class="tip">	
						注册
				</a>
			</div>
		</header>
		<div class="login-main">
			<form>
				<div class="bgcf mt10">
					<ul>
						<li class="clearfix">
							<div class="user-icon icon">	
							</div>
							<div class="user-input">
								<input type="text" id="" name="user" placeholder="手机号码/会员名" />
							</div>
						</li>
						<li class="clearfix">
							<div class="password-icon icon">
								
							</div>
							<div class="password-input">
								<input type="text" id="" name="password" placeholder="登录密码" />
							</div>
						</li>
						<li class="clearfix">
							<div class="yzm-icon icon"></div>
							<div class="yzm-input">
								<input type="text" id="" name="yzm" placeholder="验证码" />
							</div>
							<div class="reset-yzm">
								<div class="yzm-img">
									<img src="../assets/images/yzm.jpg"/>
								</div>
								<div class="reset-img">
									<img src="../assets/images/reset-icon.png"/>
								</div>
							</div>
						</li>
					</ul>
	
				</div>
				<p class="login-msg clearfix"><a href="" class="fr text-right forget-p">忘记密码</a></p>
				<div class="box login-submit">
					<button type="submit">登录</button>
				</div>
			</form>	
			<!--验证提示-->
			<div class="alert-tip">请输入用户名和密码</div>
			<!--验证提示-->
		</div>
	</div>
</template>
<style scoped src="../assets/css/login.css">
	
</style>