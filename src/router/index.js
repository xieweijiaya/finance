import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/users/login'
import AppMain from '@/views/AppMain'
import Content from '@/views/index/content'
import Loan from '@/views/users/loan'
import Accounts from '@/views/users/accounts'
import Admin from '@/views/users/admin'
import Jk from '@/views/users/jk'
import Register from '@/views/users/register'
import AccountsBody from '@/views/users/accountsBody'
import Grzl from '@/views/users/grzl'
import Smrz from '@/views/users/smrz'
/* ---------------------------------------- */
import Index from '@/views/admin/Index'
import Base from '@/views/admin/sys/Base'
import DictionaryDetails from '@/views/admin/sys/DictionaryDetails'
/* --------------------------------------- */

// lsx
import Audit from '@/views/admin/sys/identity/audit'
//lsx

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'login',
			component: Login
		},
		{
			path: '/Admin',
			name: 'Admin',
			component: Admin
		},
		// 后台
		{
			path: '/Index',
			name: 'Index',
			component: Index,
			children: [{
					path: '/sys/base',
					name: 'Base',
					component: Base,
				}, {
					path: '/sys/dictionaryDetails',
					name: 'DictionaryDetails',
					component: DictionaryDetails,
				},
				//lsx
				{
					path: '/views/admin/sys/identity/audit',
					name: '/Audit',
					component: Audit,
				},
				//lsx

			]
		},
		//前台
		{
			path: '/AppMain',
			name: 'AppMain',
			component: AppMain,
			children: [{
					path: '/',
					name: 'Content',
					component: Content,
				},
				{
					path: '/Content',
					name: 'Content',
					component: Content,
				},
				{
					path: '/Loan',
					name: 'Loan',
					component: Loan,
				},
				{
					path: '/Accounts',
					name: 'Accounts',
					component: Accounts,
					children: [{
							path: '/',
							name: 'AccountsBody',
							component: AccountsBody,
						},
						{
							path: '/AccountsBody',
							name: 'AccountsBody',
							component: AccountsBody,
						},
						{
							path: '/Grzl',
							name: 'Grzl',
							component: Grzl,
						},
						{
							path: '/Smrz',
							name: 'Smrz',
							component: Smrz,
						},

					],
				},
				{
					path: '/Jk',
					name: 'Jk',
					component: Jk,
				},
			]
		},
		{
			path: '/Register',
			name: 'Register',
			component: Register,
		},

	]
})
