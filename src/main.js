import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import "./style.css";
import App from "./App.vue";

import router from "./router/";

console.info("router", router);

const app = createApp(App);
app.use(router);
app.mount("#app");
