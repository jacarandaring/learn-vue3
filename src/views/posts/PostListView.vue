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

/**
 * post 목록 조회
 */
const posts = ref([]);
const setPostList = async () => {
	try {
		const { data } = await getPostList();
		// console.dir(response); // Object 타입에 적합
		posts.value = data;
	} catch (error) {
		console.error(error);
	}
};
setPostList();

/**
 * 라우팅 - 상세 페이지
 */
const router = useRouter();
const goPage = id => {
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};
</script>
