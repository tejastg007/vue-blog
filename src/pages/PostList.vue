<template>
    <section class="post-list relative">
        <div class="post-container bg-slate-50 mt-3">
            <post-item @click="openPost(post.id)" v-for="post in posts" :key="post.id" :post="post"></post-item>
        </div>
    </section>
</template>
<script setup>
import PostItem from '@/components/Post/PostItem.vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter()
const posts = computed(() => {
    return store.getters.getPosts
})

function openPost(postId) {
    router.push({ name: 'post', params: { id: postId } })
}

</script>
<style scoped></style>
