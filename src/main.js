import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import LinkBtn from "./components/ui_element/LinkBtn.vue";

import "./assets/css/main.css";
const app = createApp(App);

app.component("LinkBtn", LinkBtn);

app.use(createPinia());
app.use(router);

app.mount("#app");
