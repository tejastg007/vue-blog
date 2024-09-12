<template>
    <section class="new-post ">
        <form @submit.prevent="createNewPost" ref="createPostForm">
            <input type="text" name="post-title" id="post-title" placeholder="Title goes here...." autofocus
                autocomplete="off" v-model="title">
            <textarea class="w-full" placeholder="write your thoughts here...." rows="10" autofocus
                autocomplete="off" v-model="body"></textarea>
            <button type="submit" class="bg-orange-500 text-white py-2 px-4 float-end rounded-md">Save Post</button>
        </form>

    </section>
</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
const title = ref('')
const body = ref('');
const store = useStore();
const createPostForm = ref();

async function createNewPost() {
    try {
        await store.dispatch('addPost', {
            title: title.value,
            body: JSON.stringify(body.value),
            createdAt: new Date().getTime(),
        });
        console.log('created post successfully');
        createPostForm.value.reset();
    } catch (e) {
        console.error('error occured while creating post', e);
    }

}



</script>
<style scoped>
input,
textarea {
    @apply my-2 rounded-md border border-gray-300 p-2 w-full
}
</style>