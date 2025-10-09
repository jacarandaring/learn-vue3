<template>
    <div>
        <h2>게시물 목록</h2>
        <div class="row g-3">
            <div v-for="post in posts" :key="post.id" class="col-4">
                <PostItem
                    :title="post.title"
                    :content="post.content"
                    :created-at="post.createdAt"
                    @click="goPage(post.id)" />
            </div>
        </div>
        <!-- 미리보기 -->
        <AppCard>
            <PostDetailView :id="1" />
        </AppCard>
    </div>
</template>

<script setup>
import AppCard from '@/components/AppCard';
import PostItem from '@/components/posts/PostItem';
import PostDetailView from '@/components/posts/PostDetailView';
import { getPostList } from '@/api/posts';
import { useRouter } from 'vue-router';

const posts = ref([]);
const setPostList = () => {
    posts.value = getPostList();
};
setPostList();

const router = useRouter();
const goPage = (id) => {
    // router.push(`posts/${id}`);
    router.push({
        name: 'PostDetail',
        params: {
            id,
        },
    });
};
</script>