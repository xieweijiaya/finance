import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/users/login'
import AppMain from '@/views/AppMain'
import Content from '@/views/index/content'
import Loan from '@/views/users/loan'
import Accounts from '@/views/users/accounts'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'login',
			component: Login
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
				}

			]
		}

	]
})
