<template>
	<div>
		<!-- header start -->
		<div class="zxcf_top_wper">
			<div class="zxcf_top px1000 clearfix">
				<div class="zxcf_top_l fl">
					<img src="../../assets/img/login/zxcf_phone.png" alt="">
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
					<span>
						<a href="#">返回首页</a></span>

				</div>
			</div>
		</div>
		<!-- end  -->
		<div class="login_con_wper">
			<div class="login_con px1000 ">
				<div class="lg_section clearfix">
					<div class="lg_section_l fl">
						<img src="../../assets/img/login/login01.png">
					</div>
					<!-- end l -->
					<div class="lg_section_r fl">
						<h2 class="lg_sec_tit clearfix">
							<span class="fl">登录</span>
							<em class="fr">没有帐号，<a href="#">立即注册</a></em>
						</h2>
						<el-form>
							<fieldset>
								<el-form-item class="mt20">
									<el-input type="password" placeholder="请输入用户账号" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item class="mt20">
									<el-input type="password" placeholder="请输入用户密码" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item class="clearfix lg_check">
									<span class="fl">
										<input type="checkbox">记住用户名
									</span>
									<a href="#" class="fr">忘记密码？找回</a>
								</el-form-item>
								<el-form-item>
									<el-button type="primary" class="lg_btn" style="width: 100%;" @click="login('ruleForm')">立即登录</el-button>
								</el-form-item>
							</fieldset>
						</el-form>
					</div>
				</div>
			</div>
		</div>
		<!-- footer start -->
		<div class="zscf_aboutus_wper">
			<div class="zscf_aboutus px1000 clearfix">
				<div class="zscf_aboutus_l fl">
					<ul class="zscf_aboutus_lul clearfix">
						<li class="pt10"><a href="#"><img src="../../assets/img/login/app.png" alt=""></a>
						</li>
						<li>
							<p class="pb20">服务热线</p>
							<strong>400-027-0101</strong>
						</li>
						<li>
							<p class="pb10 linkpic">
								<a href="#"><img src="../../assets/img/login/ft_sina.png" alt=""></a>
								<a href="#"><img src="../../assets/img/login/ft_weixin.png" alt=""></a>
								<a href="#"><img src="../../assets/img/login/ft_erji.png" alt=""></a>
							</p>
							<p><a href="#">kefu@zhongxincaifu.com</a></p>
						</li>
					</ul>
				</div>
				<!-- end left -->
				<div class="zscf_aboutus_r fl clearfix">
					<a href="#" class="fl ft_ewm"><img src="images/ft_erweima.png" alt=""></a>
					<ul class="fl clearfix">
						<li><a href="#">联系我们</a></li>
						<li><a href="#">我要融资</a></li>
						<li><a href="problem.html">帮助中心</a></li>
						<li><a href="#">友情链接</a></li>
						<li><a href="#">招贤纳士</a></li>
						<li><a href="#">收益计算器</a></li>
					</ul>
				</div>
				<!-- end right -->

			</div>
		</div>

		<div class="zscf_bottom_wper">
			<div class="zscf_bottom px1000 clearfix">
				<p class="fl">© 2014 zhongxincaifu &nbsp; &nbsp;&nbsp; 中兴财富金融信息服务股份有限公司 &nbsp;&nbsp;&nbsp; 来源:<a href="http://www.mycodes.net/"
					 target="_blank">源码之家</a></p>
				<p class="fr">
					<a href="#"><img src="images/360.png" alt=""></a>
					<a href="#"><img src="images/kexin.png" alt=""></a>
					<a href="#"><img src="images/norton.png" alt=""></a>
				</p>
			</div>
		</div>
		<!-- footer end -->
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				ruleForm: {

				},

			}
		},
		methods: {
			login: function() {
				this.$router.push({
					path: '/AppMain'
				});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../assets/css/style.css");
</style>
