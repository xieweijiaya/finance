<template>
	<div>
		<Head></Head>
		<router-view></router-view>
	</div>
</template>

<script>
	import Head from '@/components/nav/head.vue'
	export default {
		name: 'AppMain',
		data() {
			return {}
		},
		components: {
			Head,
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../assets/css/style.css");
</style>
