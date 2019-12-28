<template>
	<div style="margin: 130px;">
		<el-col :span="8">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>信用贷</span>
				</div>
				<span style="font-size: 12px;"> 认证后可借金额 &yen;1000</span>
				<p style="font-size: 10px;"><a href="">申请条件</a></p>
				<p style="font-size: 10.3px;">仅限长沙地区</p>
				<ul>
					<li>
						<i style="font-size: 11.5px;">填写基本资料</i>
						<i v-if="person.pstatus == '1' ">
							<i class="el-icon-check" style="font-size: 11.5px;color: green;"></i>
						</i>
						<i v-else>
							<i class="el-icon-close" style="font-size: 11.5px;color: red;"></i>
						</i>
					</li>
					<li>
						<i style="font-size: 11.5px;">身份认证</i>
						<i class="el-icon-close" style="font-size: 11.5px;color: red;"></i>
					</li>
					<li>
						<i style="font-size: 11.5px;">材料认证分数达到30分</i>
						<i class="el-icon-close" style="font-size: 11.5px;color: red;"></i>
					</li>
					<li>
						<i style="font-size: 11.5px;">视频认证</i>
						<i class="el-icon-check" style="font-size: 11.5px;color: green;"></i>
					</li>
				</ul>
				<center>
					<el-button v-if="Users.username!=''" type="primary" @click="request" size="mini" round>申请</el-button>
					<el-button v-else type="primary" @click="login" size="mini" round>登陆后申请</el-button>
				</center>
			</el-card>
		</el-col>
		<el-col :span="8">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>车易贷</span>
				</div>
				<span style="font-size: 12px;"> 认证后可借金额 &yen;20,000.00</span>
				<p style="font-size: 10px;"><a href="">申请条件</a></p>
				<p style="font-size: 10.3px;">仅限长沙地区</p>
				<ul>
					<li><i style="font-size: 11.5px;">填写基本资料</i></li>
					<li><i style="font-size: 11.5px;">身份认证</i></li>
					<li><i style="font-size: 11.5px;">材料认证分数达到30分</i></li>
					<li><i style="font-size: 11.5px;">提交车辆抵押相关资料</i></li>
					<li><i style="font-size: 11.5px;">视频认证</i></li>
				</ul>
				<center>
					<el-button type="primary" size="mini" round>登录后申请</el-button>
				</center>
			</el-card>

		</el-col>
		<el-col :span="8">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>房易贷</span>
				</div>
				<span style="font-size: 12px;"> 认证后可借金额 &yen;30,0000.00</span>
				<p style="font-size: 10px;"><a href="">申请条件</a></p>
				<p style="font-size: 10.3px;">仅限长沙地区</p>
				<ul>
					<li><i style="font-size: 11.5px;">填写基本资料</i></li>
					<li><i style="font-size: 11.5px;">身份认证</i></li>
					<li><i style="font-size: 11.5px;">材料认证分数达到30分</i></li>
					<li><i style="font-size: 11.5px;">视频认证</i></li>
				</ul>
				<center>
					<el-button type="info" size="mini" disabled="disabled" round>敬请期待</el-button>
				</center>
			</el-card>
		</el-col>
	</div>
</template>

<script>
	export default {
		name: 'jk',
		data() {
			return {

				person: {}

			}
		},
		methods: {
			personal: function() {
				let url = this.axios.urls.SYSTEM_PERSONAL;
				let form = {
					uname: this.Users.username
				}
				this.axios.post(url, form).then(resp => {
					// if (resp.data.code == 0) {
					// this.$message({
					// 	message: resp.data.loginfo,
					// 	type: 'success'
					// });
					// this.$router.push({
					// 	path: '/AppMain'
					// });
					// } else {
					// 	this.$message.error(resp.data.loginfo);
					// }
					this.person = resp.data
					console.log(resp.data);
				}).catch(resp => {
					console.log(resp);
				})
			},
			request: function() {
				this.$router.push({
					path: "/Loan"
				})
			},
			login: function() {
				this.$router.push({
					path: "/"
				})
			}
		},
		computed: {
			Users: function() {
				return this.$store.getters.getUsers
			}
		},
		created: function() {
			this.personal()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.item {
		margin-bottom: 18px;
	}

	.box-card {
		width: 350px;
	}

	a {
		text-decoration: none;
	}

	i {
		color: black;
	}

	ul li {
		list-style-type: square;
		color: red;
	}
</style>
