<template>
	<div>
		<div>
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/sys/DictionaryDetails' }">数据字典明细</el-breadcrumb-item>
			</el-breadcrumb>
			<el-form :model="mergeFome" ref="mergeFome" :inline="true" class="user-search">
				<el-form-item label="名称">
					<el-input size="small" v-model="mergeFome.detailsName" placeholder="值"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button size="small" type="primary" icon="el-icon-search" @click="query()">查询</el-button>
					<el-button size="small" type="primary" icon="el-icon-plus" @click="addBase">新建</el-button>
				</el-form-item>

			</el-form>
		</div>
		<!-- 字典分组 -->

		<div>
			<div style="float: left;">
				<el-menu router background-color="#E2E2E2" style="color: #0D3349;width: 150px;">
					<div class="logobox">
						字典分组
					</div>
					<el-menu-item-group>
						<el-menu-item style="font-size: 13px;" v-for="tn3 in dict_group" :index="tn3.did" :key="tn3.did" @click="hh($event,tn3)">{{tn3.dname}}</el-menu-item>
					</el-menu-item-group>
				</el-menu>
			</div>

			<!-- 数据表格 -->
			<div style="float: right;margin-right: 60px;">
				<el-table :data="base_dict" style="width: 100%">
					<el-table-column fixed type="index" width="100px;" label="编号" align="center">
					</el-table-column>
					<el-table-column prop="detailsName" label="名称" width="120">
					</el-table-column>
					<el-table-column prop="dname" label="类型" width="120">
					</el-table-column>
					<el-table-column label="操作" width="180">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>

				<!-- 分页 -->
				<div>
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page"
					 :page-sizes="[5,10,15,20]" :page-size="rows" layout="total, sizes, prev, pager, next, jumper" :total="total">
					</el-pagination>
				</div>
			</div>

		</div>

		<!-- 模态框 -->
		<el-dialog :title="title" :visible.sync="dialogVisible" width="45%" :before-close="handleClose">
			<table cellpadding="0" cellspacing="0" :model="baseDetails">
				<div v-if="this.title == '修改'">
					<td>编号：</td>
					<td><el-input readonly="readonly"  v-model="baseDetails.detailsId" style="width: 60px;"></el-input ></td>
					<br />
				</div>
				<div>
					<tr>
						<td>名称：</td>
						<td>
							<el-input placeholder="请输入字典名称" v-model="baseDetails.detailsName"></el-input>
						</td>
					</tr>
					<br/>
					<tr>
						<td>类型：</td>
						<td>
							<el-autocomplete class="inline-input" v-model="baseDetails.dname" :fetch-suggestions="querySearch" placeholder="请输入字典类型" @select="handleSelect()"></el-autocomplete>
						</td>
					</tr>
				</div>

			</table>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="addComm()">提交</el-button>
			</span>
		</el-dialog>



	</div>


</template>

<script>
	export default {
		name: 'DictionaryDetails',
		data() {
			return {
				title: '新增',
				dialogVisible: false, //模态框
				dict_group: [], //字典分组
				base_dict: [],
				//模糊查询
				mergeFome: {
					detailsName:''
				},
				//模态框值
				baseDetails:{
					detailsName:'',
					dname:'',
					detailsId:''
				},
				page: '',
				rows: '',
				total: '',

				restaurants: [

				],
				state1: 'a',
				state2: ''
			}
		},
		methods: {
			//类型
			search: function() {
				let url = this.axios.urls.SYSTEM_BASE_LISTALL;
				this.axios.post(url).then(resp => {
					console.log(resp);
					this.dict_group = resp.data

				}).catch(resp => {
					console.log(resp);
				})
			},

			//点击类型进行查询
			hh: function(a, i) {
				console.log("hh");
				let url = this.axios.urls.SYSTEM_BASE_DETAILS_LISTDETAILS;
				let from = {
					dname: i.dname
				}
				this.axios.post(url, from).then(resp => {
					console.log(resp);
					this.base_dict = resp.data
				}).catch(resp => {
					console.log(resp);
				})
			},


			//查询
			query: function() {
				let url = this.axios.urls.SYSTEM_BASE_DETAILS_LISTDETAILS;
				let from={
					detailsName:this.mergeFome.detailsName
				}
				this.axios.post(url,from).then(resp => {
					console.log(resp);
					this.base_dict = resp.data
				}).catch(resp => {

				})
			},

			//增加界面
			addBase: function() {
				this.title="新增";
				this.dialogVisible = true;
				
			},
			
			//修改界面
			handleEdit: function(a,i) {
				this.title="修改";
				this.dialogVisible = true;
				console.log(i);
				
				//赋值
				this.baseDetails.detailsId = i.detailsId;
				this.baseDetails.dname = i.dname;
				this.baseDetails.detailsName = i.detailsName
				
			},
			
			
			//增加操作
			addComm:function(){
				let c='';
				if(this.title == '增加'){
					let url =this.axios.urls.SYSTEM_BASE_DETAILS_ADD;
					this.axios.post(url,this.baseDetails).then(resp=>{
						console.log(resp);
						if (resp.data.code == 200) {
							c = resp.data.message
							this.baseDetails.detailsName = ''
							this.baseDetails.dname = ''
							this.dialogVisible = false
							this.query();
						
						} else if (resp.data.code == 500) {
							c = resp.data.message
						}
						this.$message({
							message: c,
							type: 'success',
						});
					}).catch(resp=>{
						console.log(resp);
					})
				}else if(this.title == '修改'){
					console.log("修改");
					let url = this.axios.urls.SYSTEM_BASE_DETAILS_UPDATE;
					this.axios.post(url, this.baseDetails).then(resp => {
						console.log(resp);
						if (resp.data.code == 200) {
							c = resp.data.message
							this.dialogVisible = false
							this.baseDetails.dname = ''
							this.baseDetails.detailsName = ''
							this.baseDetails.dname = ''
							this.query()()
						} else if (resp.data.code == 500) {
							c = resp.data.message
						}
						this.$message({
							message: c,
							type: 'success',
						});
					}).catch(resp => {
					
					})
					
				}
				
				// 
			
			},
			
			
			//删除
			handleDelete:function(a,i){
				console.log("删除");
				console.log(i);
				let c = ''
				let from={
					detailsId:i.detailsId
				}
				let url = this.axios.urls.SYSTEM_BASE_DETAILS_DELETE;
				this.axios.post(url, from).then(resp => {
					if (resp.data.code == 200) {
						c = resp.data.message
						this.query()()
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
			



			querySearch: function(queryString, cb) {
				console.log("querySearch-----------");
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter: function(queryString) {
				console.log("createFilter-----------");
				return (restaurant) => {
					return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			loadAll: function() {

				return [{
						"value": "月收入"
					},
					{
						"value": "学历情况"
					},
					{
						"value": "住房情况",
						"address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
					},
					{
						"value": "子女情况",
						"address": "天山西路438号"
					},
					{
						"value": "用户认证文件类型",
						"address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
					},
					{
						"value": "婚姻情况",
						"address": "上海市长宁区金钟路633号"
					}
					
				];
			},
			handleSelect: function(item) {
				console.log("------hhhhhh-----" + item);
			}






			// 			// 修改
			// 			editRow: function(a, i) {
			// 				console.log("修改")
			// 				let code = "";
			// 				if (i.dictIsEditable == "否") {
			// 					code = "不能进行编辑"
			// 					this.$message({
			// 						message: code,
			// 						type: 'success',
			// 					});
			// 				} else {
			// 					this.$store.commit({
			// 						type: 'setBaseEdit',
			// 						baseEdit: i
			// 					})
			// 					this.$router.push({
			// 						path: '/sys/editBase'
			// 					})
			// 				}
			// 
			// 			},
			// 			// 删除
			// 			delRow: function(a, i) {
			// 				let code = "删除成功";
			// 				if (i.dictIsEditable == "是") {
			// 					this.base_dict.dictId = i.dictId;
			// 					let url = this.axios.urls.SYSTEM_BASDICT_DEL;
			// 					this.axios.post(url, this.base_dict).then(resp => {
			// 						console.log(resp);
			// 						// code="删除成功";
			// 						this.search()
			// 
			// 					}).catch(resp => {
			// 						console.log(resp);
			// 					});
			// 				} else {
			// 					code = "不能进行删除"
			// 				}
			// 				this.$message({
			// 					message: code,
			// 					type: 'success',
			// 				});
			// 			},
			// 			handleSizeChange: function(rows) {
			// 				this.rows = rows;
			// 				this.search();
			// 			},
			// 			handleCurrentChange: function(page) {
			// 				this.page = page;
			// 				this.search();
			// 			},
			// 			//增加界面
			// 			addBase: function() {
			// 				console.log("增加")
			// 				// 			  this.$router.push({
			// 				// 			    path: '/sys/addBase'
			// 				// 			  })
			// 				this.$router.push({
			// 					path: '/sys/addBase'
			// 				})
			// 			},

		},
		mounted: function() {
			console.log("mounted");
			this.restaurants = this.loadAll();
		},
		created: function() {
			this.search();
			this.query();
		},


	}
</script>

<style scoped>
	.logobox {
		height: 20px;
		line-height: 20px;
		color: #14B2E2;
		font-size: 20px;
		text-align: center;
		padding: 10px 0px;
	}














	a {
		text-decoration: none
	}

	.groupTable tr {
		height: 40px;

	}

	.groupTable tr td {
		text-align: center;
		background-color: #E2E2E2;

	}

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




	/* //======================================================= */
	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.box-card {
		width: 480px;
	}
</style>
-->
