<template>
	<div>
		<TheHeader />
		<TheView />
	</div>
</template>

<script>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from '@/layouts/TheView.vue';
export default {
	components: {
		TheHeader,
		TheView,
	},
};
</script>
