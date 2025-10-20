<template>
	<div class="card">
		<div class="card-body">
			<span class="badge bg-secondary">{{ tagName }}</span>
			<h5 class="card-title fw-bold">{{ title }}</h5>
			<p class="card-text">{{ contents }}</p>
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike">
				좋아요
			</a>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
	// props: ['title', 'contents'], // 이름만 작성 가능
	props: {
		type: {
			type: String, // 기본 생성자 및 사용자 정의 타입, 배열로 여러개 설정 가능 ex. [String, Array]
			default: 'notice',
			required: true,
			validator: value => {
				return ['news', 'notice'].includes(value); //--==>> devTool에 warn등급 오류 표현
			},
		},
		title: {
			type: [String, Number],
			required: true,
		},
		contents: {
			type: String,
			required: true,
		},
		isLike: {
			type: Boolean,
			default: true,
		},
		obj: {
			type: Object,
			default: () => ({}),
		},
	},
	setup(props, context) {
		const color = ref('red');

		const tagName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);

		// '좋아요' 여부에 따라 동적 style 클래스
		const isLikeClass = computed(function () {
			return props.isLike ? 'btn-danger' : 'btn-outline-danger';
		});

		const toggleLike = () => {
			context.emit('toggleLike');
		};

		return { color, tagName, isLikeClass, toggleLike };
	},
};
</script>

<style scoped>
.red {
	color: v-bind(color);
}
</style>
