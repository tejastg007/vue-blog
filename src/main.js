import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router.js";
import Store from "./store.js";

import BaseCard from "./components/UI/BaseCard.vue";

import "./index.css";
const app = createApp(App);
app.use(Router);
app.use(Store);
app.component("BaseCard", BaseCard);
app.mount("#app");
