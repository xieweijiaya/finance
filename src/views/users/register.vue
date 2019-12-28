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
					<a @click="login" class="curspan">立即登录</a>
					<span>|</span>
					<a href="problem.html">常见问题</a>
				</div>
			</div>
		</div>
		<!-- end  -->
		<div class="reg_con_wper">
			<div class="reg_con px1000">
				<div class="reg_box clearfix">
					<div class="reg_box_l fl">
						<img src="../../assets/img/loan/reg_pic01.png" alt="">
					</div>
					<div class="reg_box_r fl">
						<h2 class="lg_sec_tit clearfix">
							<span class="fl">注册</span>
							<em class="fr">没有帐号，<a href="#">立即登录</a></em>
						</h2>
						<!-- <form> -->
						<el-form :model="registerForm" :rules="rules" ref="registerForm">
							<fieldset>
								<el-form-item class="mt20" prop="username">
									<el-input type="text" v-model="registerForm.username" placeholder="用户名"></el-input>
								</el-form-item>
								<el-form-item class="mt20" prop="password">
									<el-input type="password" v-model="registerForm.password" placeholder="密码"></el-input>
								</el-form-item>
								<div style="font-size: 12px;color: red;height: 0px;">{{pwd}}</div>
								<el-form-item class="mt20" prop="password2">
									<el-input type="password" v-model="registerForm.password2" placeholder="确认密码"></el-input>
								</el-form-item>
								<div style="font-size: 12px;color: red;height: 0px;">{{pwd}}</div>
								<el-form-item class="mt20" prop="tel">
									<el-input type="text" v-model="registerForm.tel" placeholder="手机号"></el-input>
								</el-form-item>
								<div style="font-size: 12px;color: red;height: 0px;">{{msg}}</div>
								<el-form-item class="mt20 yanzheng" prop="yzm">
									<el-input type="text" style='width: 150px;' v-model="y" placeholder="验证码"></el-input>
									<el-button type="warning" size="mini" @click="yzm" round>{{content}}</el-button>
									<p class="pt10"><a href="#">使用条款</a>&nbsp;&nbsp;<a href="#">隐私条款</a></p>
								</el-form-item>
								<el-form-item>
									<el-button type="primary" class="lg_btn" style="width: 100%;" @click="register('registerForm')">立即注册</el-button>
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
						<li class="pt10"><a href="#"><img src="images/app.png" alt=""></a>
						</li>
						<li>
							<p class="pb20">服务热线</p>
							<strong>400-027-0101</strong>
						</li>
						<li>
							<p class="pb10 linkpic">
								<a href="#"><img src="images/ft_sina.png" alt=""></a>
								<a href="#"><img src="images/ft_weixin.png" alt=""></a>
								<a href="#"><img src="images/ft_erji.png" alt=""></a>
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
		name: 'register',
		data() {
			return {
				registerForm: {
					username: '',
					password: '',
					password2: '',
					tel: '',
				},
				content: '发送验证码', // 按钮里显示的内容
				totalTime: 60, //记录具体倒计时时间
				msg: '',
				pwd: '',
				inspect: 0,
				y: '',
				rules: {
					username: [{
						required: true,
						message: '请填写用户名',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请填登录密码',
						trigger: 'blur'
					}],
					password2: [{
						required: true,
						message: '请确认登录密码',
						trigger: 'blur'
					}],
					tel: [{
						required: true,
						message: '请填写手机号码',
						trigger: 'blur'
					}],
				}
			}
		},
		methods: {
			login: function() {
				this.$router.push({
					path: "/"
				})
			},
			yzm: function() {
				let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if (this.registerForm.tel == '') {
					this.msg = "请输入手机号码";
				} else if (!reg.test(this.registerForm.tel)) {
					this.msg = "手机格式不正确";
				} else {
					let clock = window.setInterval(() => {
						this.totalTime--
						this.content = this.totalTime + 's后重新发送'
						if (this.totalTime == 0) {
							clearInterval(clock)
						}
					}, 1000)
					let url = this.axios.urls.SYSTEM_USER_YZM;
					let form = {
						tel: this.registerForm.tel
					}
					this.axios.post(url, form).then(resp => {
						this.inspect = resp.data;
					}).catch(resp => {})
				}
			},
			register: function(registerForm) {
				this.$refs[registerForm].validate(valid => {
					if (valid) {
						/**
						 * 使用api工具获取url地址
						 */
						let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
						if (this.registerForm.tel == '') {
							this.msg = "请输入手机号码";
						} else if (!reg.test(this.registerForm.tel)) {
							this.msg = "手机格式不正确";
						} else {
							this.msg = '';
							if (this.registerForm.password != this.registerForm.password2) {
								this.pwd = "两次密码不一致，请重新输入";
							} else {
								this.pwd = '';
								if (this.y == this.inspect && this.y!='') {
									let url = this.axios.urls.SYSTEM_USER_REGISTER;
									this.axios.post(url, this.registerForm).then(resp => {
										this.$message({
											message: resp.data.RegisterInfo,
											type: 'success'
										});
										this.$router.push({
											path: "/"
										})
									}).catch(resp => {
										console.log(resp);
									})
								} else {
									alert("验证码错误");
								}
							}

						}
					} else {
						console.log("error form");
						return false;
					}
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../assets/css/style.css");
</style>
