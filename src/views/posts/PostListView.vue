<template>
	<div>
		<h2>게시물 목록</h2>
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createdAt"
					@click="goPage(post.id)"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import PostItem from '@/components/posts/PostItem.vue';
import { getPostList } from '@/api/posts';
import { useRouter } from 'vue-router';

const posts = ref([]);
const setPostList = async () => {
	const { data } = await getPostList();
	// console.dir(response); // Object 타입에 적합
	posts.value = data;
};
setPostList();

const router = useRouter();
const goPage = id => {
	// router.push(`posts/${id}`);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};
</script>
