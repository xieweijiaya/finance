<template>
	<div>
		<div>
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/sys/base' }">数据字典</el-breadcrumb-item>
			</el-breadcrumb>
			<el-form :model="mergeFome" ref="mergeFome" :inline="true" class="user-search">
				<el-form-item label="名称">
					<el-input size="small" v-model="mergeFome.likename" placeholder="值"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button size="small" type="primary" icon="el-icon-search" @click="search">查询</el-button>
					<el-button size="small" type="primary" icon="el-icon-plus" @click="addBase">添加数据字典</el-button>
				</el-form-item>

			</el-form>
		</div>
		<!-- 数据表格 -->
		<div>
			<el-table :data="base_dict" border style="width: 100%">
				<el-table-column fixed type="index" width="100px;" label="编号" align="center">
				</el-table-column>
				<el-table-column prop="dname" label="名称" align="center">
				</el-table-column>
				<el-table-column prop="dsynopsis" label="简介" align="center">
				</el-table-column>
				<el-table-column prop="dictIsEditable" label="是否可以操作" align="center">
				</el-table-column>
				<el-table-column fixed="right" label="操作" align="center">
					<i slot-scope="scope" v-if="scope.row.dictIsEditable=='是'">
						<el-button type="text" size="small" @click.native.prevent="editRow(scope.$index, scope.row)">编辑</el-button>
						<el-button type="text" size="small" @click.native.prevent="delRow(scope.$index, scope.row)">删除</el-button>
					</i>
					<i slot-scope="scope" v-else-if="scope.row.dictIsEditable=='否'"></i>
				</el-table-column>

			</el-table>
		</div>
		<!-- 分页 -->
		<div>
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page"
			 :page-sizes="[5,10,15,20]" :page-size="rows" layout="total, sizes, prev, pager, next, jumper" :total="total">
			</el-pagination>
		</div>


		<!-- 模态框 -->
		<el-dialog :title="title" :visible.sync="dialogVisible" width="45%" :before-close="handleClose">
			<table cellpadding="0" cellspacing="0" :model="baseData">
				<!--  -->
				<div v-if="this.title == '编辑'">
					<tr>
						<td>编号：</td>
						<td>
							<el-input readonly="readonly" v-model="baseData.did" style="width: 60px;"></el-input>
						</td>
					</tr>
					<br />
				</div>
				<div >
					<tr>
						<td>名称：</td>
						<td>
							<el-input placeholder="请输入字典名称" v-model="baseData.dname"></el-input>
						</td>
					</tr>
					<br />
					<tr>
						<td>简介：</td>
						<td>
							<el-input placeholder="请输入字典简介" v-model="baseData.dsynopsis"></el-input>
						</td>
					</tr>
					<br />
				</div>


			</table>
			<template align="center">
				<!-- `checked` 为 true 或 false -->
				<el-checkbox v-model="checked">是否可编辑</el-checkbox>{{this.checked}}
			</template>

			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="addComm()">提交</el-button>
			</span>
		</el-dialog>


	</div>









</template>

<script>
	export default {
		name: 'Base',
		data() {
			return {
				title: '新增',
				dialogVisible: false, //模态框
				base_dict: [], //表格数据
				checked: false,
				//模糊查询
				mergeFome: {
					likename:''
				},
				//模态框值
				baseData: {
					did: '',
					dname: '',
					dsynopsis: '',
					dictIsEditable: ''
				},
				//分页
				page: '',
				rows: '',
				total: '',
			}
		},
		methods: {
			search: function() {
				let url = this.axios.urls.SYSTEM_BASE_LISTPAGE;
				let form = {
					rows: this.rows,
					page: this.page,
					dname: this.mergeFome.likename
				}
				this.axios.post(url, form).then(resp => {
					console.log(resp.data);
					this.base_dict = resp.data.dictionaries
					this.total = resp.data.total
					this.rows = resp.data.rows
					this.page = resp.data.page


				}).catch(resp => {
					console.log(resp);
				})
			},

			//关闭
			handleClose: function(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
						this.baseData.dname = ''
						this.baseData.dsynopsis = ''
					})
					.catch(_ => {});
			},

			// 修改界面
			editRow: function(a, i) {
				console.log(i);
				this.title = '编辑'
				this.dialogVisible = true

				//赋值
				this.baseData.did = i.did
				this.baseData.dname = i.dname
				this.baseData.dsynopsis = i.dsynopsis
				if (i.dictIsEditable = '是') {
					this.checked = true
				} else if (i.dictIsEditable = '否') {
					this.checked = false
				}

			},

			//增加界面
			addBase: function() {
				this.i = ''
				this.dialogVisible = true
				console.log(this.checked)
			},

			//增加操作
			addComm: function() {
				if (this.checked == true) {
					this.baseData.dictIsEditable = "是"
				} else if (this.checked == false) {
					this.baseData.dictIsEditable = "否"
				}
				if (this.i == '') {
					let url = this.axios.urls.SYSTEM_BASE_ADD;
					console.log("提交");

					let c = ''
					this.axios.post(url, this.baseData).then(resp => {
						console.log(resp.data.code);
						if (resp.data.code == 200) {
							c = resp.data.message
							this.baseData.dname = ''
							this.baseData.dsynopsis = ''
							this.dialogVisible = false
							this.search();

						} else if (resp.data.code == 500) {
							c = resp.data.message
						}
						this.$message({
							message: c,
							type: 'success',
						});

					}).catch(resp => {

					})

				} else if (this.i == '编辑') {
					console.log("编辑");
					let url = this.axios.urls.SYSTEM_BASE_UPDATE;
					let a = ''
					this.axios.post(url, this.baseData).then(resp => {
						console.log(resp);
						if (resp.data.code == 200) {
							a = resp.data.message
							this.dialogVisible = false
							this.baseData.dname = ''
							this.baseData.dsynopsis = ''
							this.baseData.did = ''
							this.search()
						} else if (resp.data.code == 500) {
							a = resp.data.message
						}
						this.$message({
							message: a,
							type: 'success',
						});
					}).catch(resp => {

					})

				}

			},



			// 删除
			delRow: function(a, i) {
				console.log(i);
				let c = ''
				this.baseData.did = i.did;
				let url = this.axios.urls.SYSTEM_BASE_DELETE;
				this.axios.post(url, this.baseData).then(resp => {
					if (resp.data.code == 200) {
						c = resp.data.message
						this.search()
					} else if (resp.data.code == 500) {
						c = resp.data.message

					}
					this.$message({
						message: c,
						type: 'success',
					});

				}).catch(resp => {
					console.log(resp);
				});

			},
			handleSizeChange: function(rows) {
				console.log(rows);
				this.rows = rows;
				this.search();
			},
			handleCurrentChange: function(page) {
				console.log(page);
				this.page = page;
				this.search();
			},

		},
		created: function() {
			this.search();
		}
	}
</script>

<style scoped>
	/* .user-search{
		margin-top: 15px;
	} */
	/*button样式*/
	.common_button {
		border: #2C59AA 1px solid;
		padding: 1px 2px 0px 2px;
		margin-left: 1px;
		FILTER: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr=#ffffff, EndColorStr=#C3DAF5);
	}

	.op_button {
		border: 0px;
		cursor: hand;
		width: 16px;
	}

	.button_bar {
		text-align: right;
		padding: 1px;
	}

	.query_form_table {
		width: 100%;
		border-collapse: collapse;
		border-top: solid 1px #666;
		border-bottom: solid 1px #666;
	}

	.query_form_table th {
		font-size: 12px;
		font-weight: normal;
		border-bottom: solid 1px #8c8c8c;
		background-color: #6EC2FD;
		font-weight: 400;
		font-size: 13px;
		color: #000;
		height: 30px;
		width: 15%;
	}

	.query_form_table td {
		background-color: #eeeeff;
		border-bottom: solid 1px #8c8c8c;
		border-left: solid 1px #fff;
		width: 18%;
	}

	.table_input {
		width: 160px;
	}
</style>
-->
