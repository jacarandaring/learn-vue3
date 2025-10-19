<template>
    <div>
        <h2>Home View</h2>
        <button @click="goToAbout">Go to About</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToAbout = () => {
    router.push('/about');
};
</script>