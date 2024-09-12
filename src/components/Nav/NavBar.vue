<template>
    <nav class="flex p-4 bg-orange-200 sticky top-0 z-50">
        <div class="logo basis-1/4">
            <router-link to="/">
                <p class="h2 sm:h1">
                    Vue Blog
                </p>
            </router-link>
        </div>
        <div class="menu basis-3/4 ">
            <ul class="menu-list flex justify-end">
                <li
                    class="menu-item ">
                    <router-link :to="{ name: 'posts' }"> Posts</router-link>
                </li>
                <li class="menu-item">
                    <router-link :to="{ name: 'new-post' }">New Post</router-link>
                </li>
                <li
                    class="menu-item ">
                    <router-link to="/about"> About</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.menu {
    .menu-list {
        .menu-item {
            @apply hover:bg-orange-800 hover:text-white;

            a {
                @apply inline-block py-2 px-4 w-full h-full
            }
        }
    }
}

.router-link-active {
    @apply bg-orange-700 text-white
}
</style>
