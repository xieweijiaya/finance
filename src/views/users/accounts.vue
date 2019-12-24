<template>
	<div>
		<el-container style="height:100%; border: 1px solid #eee">
			<el-aside width="250px" style="background-color: rgb(238, 241, 246)">
				<el-menu :default-openeds="['1', '2']">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>借贷项目</template>
						<el-menu-item index="1-1">借款项目</el-menu-item>
						<el-menu-item index="1-2">还款细明</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>我的账户</template>
						<el-menu-item>我的账户</el-menu-item>
						<el-menu-item><a @click="zhxx">账户信息</a></el-menu-item>
						<el-menu-item>实名认证</el-menu-item>
						<el-menu-item>银行卡管理</el-menu-item>
						<el-menu-item>个人资料</el-menu-item>
						<el-menu-item>登录记录</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>资产详情</template>
						<el-menu-item>账户流水</el-menu-item>
						<el-menu-item>充值明细</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>

			<el-container>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'accounts',
		data() {
			return {}
		},
		methods: {
			zhxx: function() {
				this.$router.push({
					path: "/AccountsBody"
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-header {
		/* background-color: #B3C0D1; */
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}
</style>
