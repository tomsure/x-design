import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// import xDesign from "x-design";
import VxeUITable from "vxe-table";
import "vxe-table/lib/style.css";

import VxeUI from "vxe-pc-ui";
import "vxe-pc-ui/lib/style.css";
// const app = createApp(App);
// app.use(xDesign, {});
// app.use(VxeUITable, {}).use(VxeUI, {}).mount("#app");

createApp(App).use(VxeUI).use(VxeUITable).mount("#app");
