<template>
	<div>
		<!-- header start -->
		<div class="zxcf_top_wper">
			<div class="zxcf_top px1000 clearfix">
				<div class="zxcf_top_l fl">
					<img src="images/zxcf_phone.png" alt="">
					400-027-0101(在线时间9:00-17:30)
					<a href="#"><img src="../../assets/img/login/zxcf_weixin.png" alt=""></a>
					<a href="#"><img src="../../assets/img/login/zxcf_sina.png" alt=""></a>
					<a href="#"><img src="../../assets/img/login/zxcf_qq.png" alt=""></a>
				</div>
				<div class="zxcf_top_r fr">
						<span v-if="Users.username!=''">
							<span class="curspan">欢迎:{{Users.username}}进入平台</span>
						</span>
						<span v-else>
							<a @click="login" class="curspan">立即登录</a>
						</span>
					<span>|</span>
					<a @click="register">免费注册</a>
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
					<span @click="accounts" title="进入个人中心">个人中心<img src="images/zxcf_icon01.png" alt=""></span>
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
				<a @click="loan">我要借款</a>
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
					path: "/Jk"
				})
			},
			accounts: function() {

				this.$store.commit({
					type: 'setUsers',
					username:this.Users.username,
					password:this.Users.password
				})
				this.$router.push({
					path: "/Accounts"
				})
			},
			register: function() {
				this.$router.push({
					path: "/Register"
				})
			},
		},
		computed: {
			Users: function() {
				return this.$store.getters.getUsers
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../assets/css/style.css");
</style>
