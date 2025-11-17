<template>
	<div>
		<h2>게시물 수정</h2>
		<form @submit.prevent="edit">
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
				<label for="content">내용</label>
				<textarea
					v-model="form.content"
					class="form-control"
					id="content"
					rows="3"
				></textarea>
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
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
const route = useRoute();
const id = route.params.id;

/**
 * form 정보 조회 및 반영
 */
const form = ref({
	title: null,
	content: null,
});
const setPostData = async () => {
	try {
		const { data } = await getPostById(id);
		setForm(data);
	} catch (error) {
		console.error(error);
	}
};
const setForm = ({ title, content }) => {
	form.value.title = title;
	form.value.content = content;
};
setPostData();

/**
 * form 수정
 */
const edit = async () => {
	try {
		await updatePost(id, {
			...form.value,
		});
		goDetail();
	} catch (error) {
		console.error(error);
	}
};

/**
 * 라우팅 - 상세 페이지
 */
const router = useRouter();
const goDetail = () => router.push({ name: 'PostDetail', params: { id } });
</script>
