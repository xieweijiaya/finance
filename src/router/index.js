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
					children:[
						{
							path: '/AccountsBody',
							name: 'AccountsBody',
							component: AccountsBody,
						}
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
