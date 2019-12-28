<template>
	<div>
		<el-container style="height:100%; border: 1px solid #eee">
			<el-container>
				<el-main>
					<div>
						<img src="../../assets/img/user/u=1912113785,1587702892&fm=26&gp=0.jpg" style="width:100px; height:100px; border-radius:50%; border: 1px solid #8D8D8D;" />
						<span style="position: absolute;">用户名:{{Users.username}}</span>
						<span style="position: absolute;top: 220px;">最后登录时间:{{datetime}}</span>
						<span style="position: absolute;top: 260px;left: 420px;">
							<el-button type="primary" size="small">账户充值</el-button>
							<el-button type="danger" size="small">账户提现</el-button>
						</span>
					</div>
					<hr />
					<div>
						<el-col :span="6">
							<p class="grid-content bg-purple">账户总额: &yen;元</p>
							<div style="height: 10px;"></div>
							<p class="grid-content bg-purple">代收利息: &yen;元</p>
							<div style="height: 10px;"></div>
							<span><img src="../../assets/img/user/db7d9056-d513-4873-8ff8-e1cbfd6b01a2.jpg" style="width: 50px;"></span>
							<span style="position:absolute;margin-top: 5px;">实名认证</span>
							<span style="position: absolute;margin-top: 25px;font-size: 9px;">已认证<a href="">[查看]</a></span>
						</el-col>
						<el-col :span="6">
							<p class="grid-content bg-purple">可用金额: &yen;3033.7元</p>
							<div style="height: 10px;"></div>
							<p class="grid-content bg-purple">代收本金: &yen;元</p>
							<div style="height: 5px;"></div>
							<span><img src="../../assets/img/user/QQ图片20191222170637.png" style="width: 50px;height: 50px;"></span>
							<span style="position:absolute;margin-top: 5px;">手机认证</span>
							<span style="position: absolute;margin-top: 25px;font-size: 9px;">已认证<a href="">[查看]</a></span>
						</el-col>
						<el-col :span="8">
							<p class="grid-content bg-purple">冻结金额: &yen;0元</p>
							<div style="height: 10px;"></div>
							<p class="grid-content bg-purple">待还本息: &yen;元</p>
							<div style="height: 10px;"></div>
							<span><img src="../../assets/img/user/timg.jpg" style="width: 65px;height: 45px;"></span>
							<span style="position:absolute;margin-top: 5px;">邮箱验证</span>
							<span style="position: absolute;margin-top: 25px;font-size: 9px;">已认证<a href="">[查看]</a></span>
						</el-col>
						<el-col :span="6">
							<div style="height: 25px;"></div>
							<span><img src="../../assets/img/user/29a5b486beec4e5243e41dcde106f4db.jpg" style="width: 50px;"></span>
							<span style="position:absolute;margin-top: 0px;">VIP会员</span>
							<span style="position: absolute;margin-top: 20px;font-size: 9px;">普通用户<a href="">[查看]</a></span>
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
		},
		methods:{
			
		},
		computed: {
			Users: function() {
				return this.$store.getters.getUsers
			},
			datetime:function(){
				return new Date().toLocaleString()
			}
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

	hr {
		color: white;
	}
</style>
