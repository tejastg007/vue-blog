import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			posts: [
				{
					id: 1694632223000,
					title: "Complete Project Report",
					body: '"This task involves compiling all \\n the project details, including the research findings, methodology, and conclusions. \\n Ensure that the report is well-structured and free of errors"',
					createdAt: "2024-09-12T07:30:00.000Z",
					lastModifiedAt: "2024-09-12T07:30:00.000Z",
				},
				{
					id: 1694632223001,
					title: "Conduct Team Meeting",
					body: '"Schedule a meeting with the team to discuss the project\'s progress, address any challenges, and set goals for the upcoming week. Encourage active participation and feedback from all team members."',
					createdAt: "2024-09-12T07:31:00.000Z",
					lastModifiedAt: "2024-09-12T07:31:00.000Z",
				},
				{
					id: 1694632223002,
					title: "Develop Marketing Strategy",
					body: '"Research and create a comprehensive marketing plan, including target audience analysis, campaign ideas, and performance metrics. Ensure that the strategy aligns with the company\'s overall goals and objectives"',
					createdAt: "2024-09-12T07:32:00.000Z",
					lastModifiedAt: "2024-09-12T07:32:00.000Z",
				},
				{
					id: 1694632223003,
					title: "Design User Interface",
					body: '"Create a visually appealing and user-friendly interface for the new software application. Ensure that the design is consistent with the brand\'s identity and meets the requirements of the target audience."',
					createdAt: "2024-09-12T07:33:00.000Z",
					lastModifiedAt: "2024-09-12T07:33:00.000Z",
				},
				{
					id: 1694632223004,
					title: "Analyze Customer Feedback",
					body: '"Collect and examine customer feedback from various sources, including surveys, reviews, and social media. Identify patterns and areas for improvement to inform future product development and customer service strategies."',
					createdAt: "2024-09-12T07:34:00.000Z",
					lastModifiedAt: "2024-09-12T07:34:00.000Z",
				},
			],
		};
	},
	mutations: {
		ADD_POST(state, payload) {
			state.posts.push({
				id: new Date().getTime(),
				title: payload.title,
				body: payload.body,
				createdAt: payload.createdAt,
				lastModifiedAt: payload.createdAt,
			});
		},
		async UPDATE_POST(state, payload) {
			const postId = payload.id;
			const postIndex = state.posts.findIndex(
				(post) => post.id === postId
			);
			if (postIndex != -1) {
				state.posts[postIndex] = {
					title: payload.title,
					body: payload.body,
					lastModifiedAt: payload.modifiedAt,
				};
			}
		},
	},
	actions: {
		async addPost(context, payload) {
			try {
				context.commit("ADD_POST", payload);
				return true;
			} catch (e) {
				throw new Error(
					"something went wrong when creating a post :",
					e
				);
			}
		},
	},
	getters: {
		getPosts(state) {
			return state.posts;
		},
		getPost(state) {
			function getPost(postId) {
				return state.posts.find((post) => post.id === postId);
			}
			return getPost;
		},
	},
});

export default store;
