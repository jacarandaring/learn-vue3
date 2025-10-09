<template>
	<div>
		<h2>title</h2>
		<p>content</p>
		<p class="text-muted">createdAt</p>
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
				<button class="btn btn-outline-danger">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
const props = defineProps({
	id: String, // route.params.id -> routes 상수에서 props 활성화
});
// 라우팅
const router = useRouter();
const goList = () => router.push({ name: 'PostList' });
const goEdit = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
// post 정보 조회
const form = ref({});
const setPostData = () => {
	const data = getPostById(props.id);
	form.value = { ...data };
};
setPostData();
</script>
