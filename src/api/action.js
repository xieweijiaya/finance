/**
 * 对后台请求的地址的封装，URL格式如下：
 * 模块名_实体名_操作
 */
export default {
	'SERVER': 'http://localhost:8080/p2p', //服务器
	'SYSTEM_USER_DOLOGIN': '/Users/Login', //登陆
	'SYSTEM_USER_REGISTER': '/Users/Register', //注册
	'SYSTEM_USER_YZM': '/Users/AuthRegister', //获取手机验证码.
	
	//资料认证
	'SYSTEM_PERSONAL': '/Personal/personalByName',
	'SYSTEM_IDENTITY': '/Upload',//身份证上传
	'SYSTEM_ADDIDENTITY': '/addIdentity',//身份认证往数据库加一条记录
	'SYSTEM_QUERYIDENTITYBYUNAME': '/queryIdentityByUname',//判断用户是否认证
	'SYSTEM_USER_QUERYTEL': '/Users/queryTel', //查询用户是否绑定手机号
	
	//个人信息完善
	'SYSTEM_ADDPERSONAL': '/Personal/addPersonal',//新增完善信息资料
	
	// 后台
	// 树
	'SYSTEM_TREE_LISTTREE':'/listAll',//树节点
	
	// 数据字典
	'SYSTEM_BASE_LISTPAGE':'Dictionary/listPage',//数据字典分页
	'SYSTEM_BASE_LISTALL':'Dictionary/listDictionary',//数据字典
	'SYSTEM_BASE_ADD':'Dictionary/addDictionary',//数据字典新增
	'SYSTEM_BASE_DELETE':'Dictionary/delDictionary',//数据字典删除
	'SYSTEM_BASE_UPDATE':'Dictionary/upDictionary',//数据字典修改
	
	'SYSTEM_BASE_DETAILS_LISTDETAILS':'Details/listDetails',//数据字典明细查询
	'SYSTEM_BASE_DETAILS_ADD':'Details/addDetails',//数据字典明细增加
	'SYSTEM_BASE_DETAILS_DELETE':'Details/delDetails',//数据字典明细删除
	'SYSTEM_BASE_DETAILS_UPDATE':'Details/upDetails',//数据字典明细删除

	// lsx

	
	
	'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
		return this.SERVER + this[k];
	}
}
