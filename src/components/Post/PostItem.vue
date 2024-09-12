<template>
    <section>
        <base-card>
            <div class="post p-3">
                <h3 class="post-title">{{ post.title }}
                </h3>
                <p>{{ postBody }}</p>
            </div>

        </base-card>
    </section>
</template>
<script setup>
import { computed, defineProps } from 'vue';
const props = defineProps(['post']);
const post = computed(() => {
    return props.post;
})

const postBody = computed(() => {
    const body = JSON.parse(post.value.body);
    if (body.length > 200)
        return body.slice(0, 200) + '.......';
    else
        return body
})
</script>
<style scoped></style>