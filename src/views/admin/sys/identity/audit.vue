<template>
	<div>
		<h3>实名审核管理</h3>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item label="状态">
				<el-select v-model="formInline.region" placeholder="审核中">
					<el-option label="审核拒绝" value="shanghai"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="申请时间">
				<el-input v-model="formInline.user" placeholder=""></el-input>
			</el-form-item>
			<el-form-item label="到">
				<el-input v-model="formInline.dao" placeholder=""></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
			</el-form-item>
		</el-form>


		<template>
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="uname" label="用户名" align="center">
				</el-table-column>
				<el-table-column prop="realname" label="真实姓名" align="center">
				</el-table-column>
				<el-table-column prop="sex" label="性别" align="center">
				</el-table-column>
				<el-table-column prop="" label="身份证号码" align="center">
				</el-table-column>
				<el-table-column prop="" label="身份证地址" align="center">
				</el-table-column>
				<el-table-column prop="" label="状态" align="center">
				</el-table-column>
				<el-table-column prop="" label="审核人" align="center">
				</el-table-column>
				<el-table-column prop="" label="操作" align="center">


					<el-button type="text" @click="dialogFormVisible = true">审核</el-button>

					<el-dialog title="实名认证审核" :visible.sync="dialogFormVisible" :append-to-body="true">
						<el-form :model="form" :inline="true">
							<el-divider></el-divider>
							<el-form-item label="用户名" :label-width="formLabelWidth">
								<el-input v-model="form.name" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="真实姓名" :label-width="formLabelWidth">
								<el-input v-model="form.uname" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="身份证号" :label-width="formLabelWidth">
								<el-input v-model="form.sfzh" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="性别" :label-width="formLabelWidth">
								<el-input v-model="form.sex" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="生日" :label-width="formLabelWidth">
								<el-input v-model="form.hp" autocomplete="off"></el-input>
							</el-form-item>
							<el-form-item label="身份证地址" :label-width="formLabelWidth">
								<el-input v-model="form.hname" autocomplete="off"></el-input>
							</el-form-item>

							<!-- <el-form-item label="身份证正面" :label-width="formLabelWidth">
							</el-form-item>
							<el-form-item label="身份证反面" :label-width="formLabelWidth">
							</el-form-item> -->

							<el-form-item label="活动形式" label-width="120px">
								<el-input type="textarea" v-model="form.desc" :rows="3" style="width: 400px;"></el-input>
							</el-form-item>



						</el-form>


						<el-divider></el-divider>
						<div slot="footer" class="dialog-footer">
							<el-button @click="dialogFormVisible = false">关闭</el-button>
							<el-button @click="dialogFormVisible = false" type="success">审核通过</el-button>
							<el-button @click="dialogFormVisible = false" type="warning">审核拒绝</el-button>
						</div>
					</el-dialog>



				</el-table-column>
			</el-table>

			<el-pagination background layout="prev, pager, next" :total="1000">
			</el-pagination>



		</template>



	</div>

</template>

<script>
	export default {

		data() {
			return {
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px',
				tableData: [{

				}],
				formInline: {
					user: '',
					region: '',
					dao: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		},
	}
</script>

<style>
</style>
