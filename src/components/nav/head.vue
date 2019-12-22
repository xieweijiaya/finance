<template>
	<div>
		<!-- header start -->
		<div class="zxcf_top_wper">
			<div class="zxcf_top px1000 clearfix">
				<div class="zxcf_top_l fl">
					<img src="images/zxcf_phone.png" alt="">
					400-027-0101(工作时间9:00-17:30)
					<a href="#"><img src="../../assets/img/login/zxcf_weixin.png" alt=""></a>
					<a href="#"><img src="../../assets/img/login/zxcf_sina.png" alt=""></a>
					<a href="#"><img src="../../assets/img/login/zxcf_qq.png" alt=""></a>
				</div>
				<div class="zxcf_top_r fr">
					<a href="login.html" class="curspan">立即登录</a>
					<span>|</span>
					<a href="register.html">免费注册</a>
					<span>|</span>
					<a href="problem.html">常见问题</a>
				</div>
			</div>
		</div>
		<!-- end top -->
		<div class="zxcf_nav_wper">
			<div class="zxcf_nav clearfix px1000">
				<div class="zxcf_nav_l fl"><img src="../../assets/img/login/login03.png" alt=""></div>
				<div class="zxcf_nav_r fr">
					<img src="../../assets/img/login/lg_pic01.png" alt="">
					<span @click="accounts">我的账户<img src="images/zxcf_icon01.png" alt=""></span>
					<ul class="zxcf_perinfo" style="display:none;">
						<li><a href="#">111</a></li>
						<li><a href="#">111</a></li>
						<li><a href="#">111</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="zxcf_menu_wper">
			<div class="zxcf_menu px1000">
				<a @click="index">首页</a>
				<a href="invest.html">我要投资</a>
				<a @click="loan" >我要借款</a>
				<a href="#">实时财务</a>
				<a href="noticelist.html">新手指引</a>
				<a href="#" style="margin-right:0;">关于我们</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'head',
		data() {
			return {}
		},
		methods: {
			index: function() {
				this.$router.push({
					path: "/Content"
				})
			},
			loan: function() {
				this.$router.push({
					path: "/Loan"
				})
			},
			accounts: function() {
				this.$router.push({
					path: "/Accounts"
				})
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../assets/css/style.css");
</style>
