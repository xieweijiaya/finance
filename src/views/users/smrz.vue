<template>
	<div>

		<h1>实名认证</h1>
		<el-form :model="loginForm" :rules="rules" ref="loginForm">
			<table class="table table-bordered table-striped" width="100%">
				<tr>
					<td style="text-align: center;">
						<label>用户名</label>
					</td>
					<td>
						<label>{{smrzForm.uname}}</label>
					</td>
					<td style="text-align: center;">
						<label>真实姓名</label>
					</td>
					<td>
						<el-form-item style="height: 29px;">
							<el-input v-model="smrzForm.realname" readonly="readonly" style="width: 300px;"></el-input>
						</el-form-item>
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">
						<label>性别</label>
					</td>
					<td>
						<el-form-item style="height: 20px;">
							<el-select v-model="smrzForm.sex">
								<el-option label="男" value="男"></el-option>
								<el-option label="女" value="女"></el-option>
							</el-select>
						</el-form-item>
					</td>
					<td style="text-align: center;">证件号码</td>
					<td>
						<el-form-item style="height: 20px;">
							<el-input v-model="smrzForm.cartid" readonly="readonly" style="width: 300px;"></el-input>
						</el-form-item>
					</td>
				</tr>

				<tr>

					<td style="text-align: center;">出生日期</td>
					<td>
						<el-form-item style="height: 20px;">
							<el-date-picker v-model="smrzForm.bosdy" readonly="readonly" type="date" placeholder="选择日期">
							</el-date-picker>
						</el-form-item>
					</td>
					<td style="text-align: center;">证件地址</td>
					<td>
						<el-form-item style="height: 20px;">
							<el-input v-model="smrzForm.idaddress" readonly="readonly" style="width: 300px;"></el-input>
						</el-form-item>
					</td>
				</tr>
				<tr>
					<td style="text-align: center;">
						身份证照片
					</td>
					<td>
						<a href="" style="font-size: 13px;color: red;">请点击"选择图片",选择证件的正反两面照片。可自动填充输入框内的值</a>
					</td>
				</tr>
				<tr>
					<td colspan="4">
						<el-upload :action="actionUrl" class="upload-demo" :on-success="res" :limit="2" :on-change="change"
						 multiple :file-list="fileList">
							<el-button size="small" type="primary" >点击上传</el-button>
							<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
						</el-upload>
					</td>
				</tr>
				<tr>
					<td colspan="4" style="text-align: center;">
						<el-form-item>
							<el-button type="primary" @click="submitForm('ruleForm')">认证</el-button>
						</el-form-item>
					</td>
				</tr>
			</table>
		</el-form>

	</div>
</template>

<script>
	export default {
		name: 'smrz',
		data() {
			return {
				actionUrl:"http://localhost:8080/p2p/Upload",
				length: 0,
				fileList: [], //文件存储中间量
				uploadLogo: '',
				smrzForm: {
					iid:'',
					uname: '',
					realname: '',
					sex: '',
					cartid: '',
					bosdy: '',
					idaddress: ''
				}
			}
		},
		methods: {
			res: function(response, file, fileList) {
				this.smrzForm.realname = response.data.info.name
				this.smrzForm.sex = response.data.info.sex
				this.smrzForm.cartid = response.data.info.number
				this.smrzForm.idaddress = response.data.info.address
				this.smrzForm.bosdy = response.data.info.year + "-" + response.data.info.month + "-" + response.data.info.day
				this.smrzForm.iid = response.data.info.number.substring(14,18);
			},
			submitForm: function() {
				let _url = this.axios.urls.SYSTEM_ADDIDENTITY;
				this.axios.post(_url, this.smrzForm).then(resp => {
					if (resp.data.code == 0) {
						this.$message({
							message: resp.data.addInfo,
							type: 'success'
						});
					} else {
						this.$message.error(resp.data.addInfo);
					}
				}).catch(error => {

				})
			}
		},
		computed: {
			Users: function() {
				return this.$store.getters.getUsers
			},
		},
		created: function() {
			this.smrzForm.uname = this.Users.username
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a {
		color: #42b983;
		text-decoration: none;
	}

	tr {
		height: 75px;
	}

	@import url("../../assets/css/bootstrap.css");
</style>
