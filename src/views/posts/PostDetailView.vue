<template>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">{{ post.createdAt }}</p>
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goList">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEdit">수정</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger" @click="remove">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { deletePost, getPostById } from '@/api/posts';

const props = defineProps({
	id: String, // route.params.id -> routes 상수에서 props 활성화
});

/**
 * post 정보 조회 및 반영
 */
const post = ref({});
const setPostData = async () => {
	const { data } = await getPostById(props.id);
	setPost(data);
};
const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};
setPostData();

/**
 * post 삭제
 */
const remove = async () => {
	try {
		if (!confirm('삭제하시겠습니까?')) return;
		await deletePost(props.id);
		goList();
	} catch (error) {
		console.error(error);
	}
};

/**
 * 라우팅 - 목록/수정 페이지
 */
const router = useRouter();
const goList = () => router.push({ name: 'PostList' });
const goEdit = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>
