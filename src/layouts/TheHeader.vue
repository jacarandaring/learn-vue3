<template>
	<div>
		<ul>
			<li>
				<RouterLink to="/"> Home </RouterLink>
			</li>
			<li>
				<RouterLink to="/about"> About </RouterLink>
			</li>
			<li>
				<RouterLink to="/posts"> 게시글 </RouterLink>
			</li>
			<li>
				<RouterLink to="/nested"> Nested </RouterLink>
			</li>
		</ul>
		<div>
			<button @click="goPage">글쓰기</button>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goPage = () => {
	// router.push('/posts/create');
	router.push({
		name: 'PostCreate',
	});
};
</script>
