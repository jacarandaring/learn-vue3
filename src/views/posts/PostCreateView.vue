<template>
	<div>
		<h2>게시물 생성</h2>
		<form @submit.prevent="save">
			<div class="mb-3">
				<label for="title">제목</label>
				<input
					v-model="form.title"
					type="text"
					class="form-control"
					id="title"
				/>
			</div>
			<div class="mb-3">
				<label for="contnet">내용</label>
				<textarea
					v-model="form.content"
					class="form-check-label"
					id="content"
					rows="3"
				></textarea>
			</div>
			<div class="pt-4">
				<button class="btn btn-outline-dark me-2" @click="goList">목록</button>
				<button class="btn btn-primary">저장</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { createPost } from '@/api/posts';
import { useRouter } from 'vue-router';

/**
 * form 데이터 생성
 */
const form = ref({
	title: null,
	content: null,
});
const save = async () => {
	try {
		await createPost({
			...form.value,
			createdAt: Date.now(),
		});
		goList();
	} catch (error) {
		console.error(error);
	}
};

/**
 * 라우팅 - 목록 페이지
 */
const router = useRouter();
const goList = () => router.push({ name: 'PostList' });
</script>
