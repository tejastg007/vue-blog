import { createRouter, createWebHistory } from "vue-router";
import PostsList from "./pages/PostList.vue";
import PostPage from "./pages/PostPage.vue";
import NewPost from "./pages/NewPost.vue";
import AboutPage from "./pages/AboutPage.vue";
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			redirect: "/posts",
			component: PostsList,
		},
		{
			path: "/posts",
			name: "posts",
			component: PostsList,
		},
		{
			path: "/new-post",
			name: "new-post",
			component: NewPost,
		},
		{
			path: "/post/:id",
			name: "post",
			component: PostPage,
			props: true,
		},
		{
			path: "/about",
			name: "about",
			component: AboutPage,
			props: true,
		},
	],
});

export default router;
