<template>
	<div>
		<el-container style="height:100%; border: 1px solid #eee">
			<el-container>
				<el-main>
					<div>
						<img src="../../../build/logo.png" style="width: 100px;border: 1px solid wheat;" />
						<span style="position: absolute;">用户名:sdf</span>
						<span style="position: absolute;top: 220px;">最后登录时间:sdf</span>
						<span style="position: absolute;top: 260px;left: 420px;">
							<el-button type="primary" size="small">账户充值</el-button>
							<el-button type="danger" size="small">账户提现</el-button>
						</span>
					</div>
					<hr />
					<div>
						<el-col :span="6">
							<p class="grid-content bg-purple">账户总额:元</p>
							<p class="grid-content bg-purple">代收利息:元</p>
							<span><img src="../../../build/logo.png" style="width: 50px;"></span>
							<span style="position:absolute;margin-top: 5px;">实名认证</span>
							<span style="position: absolute;margin-top: 25px;font-size: 9px;">已认证<a href="">[查看]</a></span>
						</el-col>
						<el-col :span="6">
							<p class="grid-content bg-purple">可用金额: &yen;3033.7元</p>
							<p class="grid-content bg-purple">代收本金:元</p>
							<span><img src="../../assets/img/user/QQ图片20191222170637.png" style="width: 50px;height: 50px;"></span>
							<span style="position:absolute;margin-top: 5px;">手机认证</span>
							<span style="position: absolute;margin-top: 25px;font-size: 9px;">已认证<a href="">[查看]</a></span>
						</el-col>
						<el-col :span="8">
							<p class="grid-content bg-purple">冻结金额:0元</p>
							<p class="grid-content bg-purple">待还本息:元</p>
							<span><img src="../../../build/logo.png" style="width: 50px;"></span>
							<span style="position:absolute;margin-top: 5px;">邮箱验证</span>
							<span style="position: absolute;margin-top: 25px;font-size: 9px;">已认证<a href="">[查看]</a></span>
						</el-col>
						<el-col :span="6">
							<span><img src="../../../build/logo.png" style="width: 50px;"></span>
							<span style="position:absolute;margin-top: 5px;">VIP会员</span>
							<span style="position: absolute;margin-top: 25px;font-size: 9px;">普通用户<a href="">[查看]</a></span>
						</el-col>
					</div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'accountsBody',
		data() {
			return {}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}

	p,
	span {
		font-size: 12px;
		margin-left: 15px;
	}

	a {
		text-decoration: none;
	}
	hr{
		color: white;
	}
</style>
