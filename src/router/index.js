import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView';
import AboutView from '@/views/AboutView';
import PostListView from '@/views/posts/PostListView';
import PostCreateView from '@/views/posts/PostCreateView';
import PostDetailView from '@/views/posts/PostDetailView';
import PostEditView from '@/views/posts/PostEditView';

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