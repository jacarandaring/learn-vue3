<template>
	<div>
		<h2>게시물 수정</h2>
		<form @submit.prevent>
			<div class="mb-3">
				<label for="title">제목</label>
				<input type="text" class="form-control" id="title" />
			</div>
			<div class="mb-3">
				<label for="contnet">내용</label>
				<textarea class="form-check-label" id="content" rows="3"></textarea>
			</div>
			<div class="pt-4">
				<button class="btn btn-outline-dark me-2" @click="goDetail">
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
const id = route.params.id;
const goDetail = () => router.push({ name: 'PostDetail', params: { id } });
</script>
