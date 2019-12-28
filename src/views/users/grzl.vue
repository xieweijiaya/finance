<template>
	<div>

		<h1>个人资料</h1>
		<el-form :model="grzl" :rules="rules" ref="grxl">
			<table style="border: 1px solid wheat;" cellpadding="0" cellspacing="1" width="100%">
				<tr>
					<td style="text-align: center;">
						<label>用户名</label>
					</td>
					<td>
						<label>{{grzl.uname}}</label>
					</td>
					<td style="text-align: center;">
						<label>真实姓名</label>
					</td>
					<td>
						<span v-if="Identity.realname!=null">
							<label style="color: green;"><span>{{Identity.realname}}</span>【已认证】</label>
						</span>
						<span v-else>
							<label style="color: red;">未认证</label><a href="">[马上认证]</a>
						</span>
						
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">
						<label>身份证号码</label>
					</td>
					<td colspan="3">
						<span v-if="Identity.cartid!=null">
							<label style="color: green;"><span>{{Identity.cartid}}</span>【已认证】</label>
						</span>
						<span v-else>
							<label style="color: red;">未认证</label><a href="">[马上认证]</a>
						</span>
					</td>
				</tr>

				<tr>
					<td style="text-align: center;">手机号码</td>
					<td>
						<el-form-item  style="height: 20px;">
							<el-input style="width: 300px;" v-model="Us.tel" readonly="readonly" ></el-input>
						</el-form-item>
					</td>
					<td style="text-align: center;">个人学历</td>
					<td>
						<el-form-item style="height: 20px;">
							<el-select v-model="grzl.grxl">
								<el-option label="本科" value="本科"></el-option>
								<el-option label="大专" value="大专"></el-option>
							</el-select>
						</el-form-item>
					</td>

				</tr>
				<tr>
					<td style="text-align: center;">月收入</td>
					<td>
						<el-form-item style="height: 20px;">
							<el-select v-model="grzl.profit">
								<el-option label="10000" value="10000"></el-option>
								<el-option label="20000" value="20000"></el-option>
							</el-select>
						</el-form-item>
					</td>
					<td style="text-align: center;">
						婚姻情况
					</td>
					<td>
						<el-form-item style="height: 20px;">
							<el-select v-model="grzl.marriage">
								<el-option label="未婚" value="未婚"></el-option>
								<el-option label="已婚" value="已婚"></el-option>
							</el-select>
						</el-form-item>
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">子女情况</td>
					<td>
						<el-form-item style="height: 20px;">
							<el-select v-model="grzl.thing">
								<el-option label="暂无子女" value="暂无子女"></el-option>
								<el-option label="有子女" value="有子女"></el-option>
							</el-select>
						</el-form-item>
					</td>

					<td style="text-align: center;">
						住房条件
					</td>
					<td>
						<el-form-item style="height: 20px;">
							<el-select v-model="grzl.housing">
								<el-option label="无住房" value="无住房"></el-option>
								<el-option label="有住房" value="有住房"></el-option>
							</el-select>
						</el-form-item>
					</td>
				</tr>
				<tr>
					<td colspan="4" style="text-align: center;">
						<el-form-item>
							<el-button type="success" @click="submitForm('grzl')">资料完善</el-button>
						</el-form-item>
					</td>
				</tr>
			</table>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'grzl',
		data() {
			return {
			  grzl:{
				  uname:'',
				  grxl:'',
				  profit:'',
				  marriage:'',
				  thing:'',
				  housing:'',
			  },
			  Identity:{},
			  //用户对象
			  Us:{}
			}
			
		},
		methods:{
			queryIdentityByUname:function(){
				let _url = this.axios.urls.SYSTEM_QUERYIDENTITYBYUNAME;
				let form = {
					uname:this.grzl.uname
				}
				this.axios.post(_url,form).then(resp=>{
					this.Identity = resp.data.identity;
				}).catch(error=>{
					
				})
			},
			queryTel:function(){
				let _url = this.axios.urls.SYSTEM_USER_QUERYTEL;
				let form = {
					username:this.grzl.uname
				}
				this.axios.post(_url,form).then(resp=>{
					this.Us = resp.data;
					console.log("uuuu==="+resp.data);
				}).catch(error=>{
					
				})
			},
			submitForm:function(){
				let _url = this.axios.urls.SYSTEM_ADDPERSONAL;
				this.axios.post(_url,this.grzl).then(resp=>{
					if (resp.data.code == 0) {
						this.$message({
							message: resp.data.addInfo,
							type: 'success'
						});
					} else {
						this.$message.error(resp.data.addInfo);
					}
				}).catch(error=>{
					
				})
			}
		},
		computed: {
			Users: function() {
				return this.$store.getters.getUsers
			},
		},
		created: function() {
			this.grzl.uname = this.Users.username;
			this.queryIdentityByUname();
			this.queryTel();
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
		text-decoration: none;
	}

	tr {
		height: 55px;
	}

	@import url("../../assets/css/bootstrap.css");
	
</style>
