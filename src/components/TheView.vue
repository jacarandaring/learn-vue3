<template>
	<main>
		<div class="container py-4">
			<div class="row g-3">
				<template v-for="post in posts" :key="post.id">
					<div class="col col-4">
						<AppCard
							:title="post.title"
							:contents="post.contents"
							:is-like="post.isLike"
							:type="post.type"
							@toggle-like="toggleLike(post)"
						/>
					</div>
				</template>
			</div>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import { reactive } from 'vue';
export default {
	components: {
		AppCard,
	},
	setup() {
		const posts = reactive([
			{
				id: 1,
				title: '제목1',
				contents: '내용1',
				isLike: true,
				type: 'news',
				obj: { status: false },
			},
			{
				id: 2,
				title: '제목2',
				contents: '내용2',
				isLike: true,
				type: 'news',
				obj: { status: false },
			},
			{
				id: 3,
				title: '제목3',
				contents: '내용3',
				isLike: true,
				type: 'news',
				obj: { status: false },
			},
			{
				id: 4,
				title: '제목4',
				contents: '내용4',
				isLike: false,
				type: 'notice',
				obj: { status: false },
			},
			{
				id: 5,
				title: '제목5',
				contents: '내용5',
				isLike: false,
				type: 'notice',
				obj: { status: false },
			},
			{
				id: 6,
				title: '제목6',
				contents: '내용6',
				isLike: false,
				type: 'notice',
				obj: { status: false },
			},
		]);
		/**
		 * '좋아요' 여부 토글 메소드
		 * @param post 포스트 객체
		 */
		const toggleLike = post => {
			post.isLike = !post.isLike;
		};
		return { posts, toggleLike };
	},
};
</script>
