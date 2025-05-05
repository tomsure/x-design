import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import xDesign from "x-design";
const app = createApp(App);
app.use(xDesign, {}).mount("#app");
