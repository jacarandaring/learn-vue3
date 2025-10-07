import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';

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
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
