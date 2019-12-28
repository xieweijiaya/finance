<template>
	<el-container class="main-container">
		<el-aside v-bind:class="asideClass">
			<LeftNav></LeftNav>
		</el-aside>
		<el-container>
			<el-header class="main-header">
				<TopNav></TopNav>
			</el-header>
			<el-main class="main-center">
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import TopNav from '@/components/adnav/TopNav.vue'
	import LeftNav from '@/components/adnav/LeftNav.vue'

	export default {
		name: 'Index',
		data() {
			return {}
		},
		components: {
			LeftNav,
			TopNav
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/* @import url("../assets/css/style.css"); */
	
	 .main-container {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .main-aside-collapsed {
    /* 在CSS中，通过对某一样式声明! important ，可以更改默认的CSS样式优先级规则，使该条样式属性声明具有最高优先级 */
    width: 64px !important;
    height: 100%;
    background-color: #334157;
    margin: 0px;
  }

  .main-aside {
    width: 240px !important;
    height: 100%;
    background-color: #334157;
    margin: 0px;
  }

  .main-header {
    padding: 0px;
    border-left: 2px solid #333;
  }

  .main-center {
    padding: 20px;
    border-left: 2px solid #333;
  }
	
</style>
