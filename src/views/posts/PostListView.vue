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
    </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem';
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