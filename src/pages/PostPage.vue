<template>
    <section class="post-page">
        <base-card>
            <div class="post py-2 px-3 ">
                <h1 class="my-2">{{ post.title }}</h1>
                <p v-html="JSON.parse(post.body)"
                    style="white-space: pre-wrap;word-wrap: break-word;overflow-wrap: break-word;max-width: 100%;"></p>
            </div>
        </base-card>
    </section>
</template>
<script setup>
import { computed, defineProps } from 'vue';
import { useStore } from 'vuex';
const props = defineProps(['id'])
const store = useStore();

const post = computed(() => {
    const getPost = store.getters.getPost
    return getPost(+props.id)
})

</script>
<style scoped></style>