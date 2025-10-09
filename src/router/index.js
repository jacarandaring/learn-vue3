import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';

import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

const routes = [
	{
		name: 'Home',
		path: '/',
		component: HomeView,
	},
	{
		name: 'About',
		path: '/about',
		component: AboutView,
	},
	{
		name: 'PostList',
		path: '/posts',
		component: PostListView,
	},
	{
		name: 'PostCreate',
		path: '/posts/create',
		component: PostCreateView,
	},
	{
		name: 'PostDetail',
		path: '/posts/:id',
		component: PostDetailView,
	},
	{
		name: 'PostEdit',
		path: '/posts/:id/edit',
		component: PostEditView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
	{
		path: '/nested',
		name: 'Nested',
		component: NestedView,
		children: [
			{
				// /nested
				path: '',
				name: 'NestedHome',
				component: NestedHomeView,
			},
			{
				// /nested/one
				path: 'one',
				name: 'NestedOne',
				component: NestedOneView,
			},
			{
				// /nested/two
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwoView,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
