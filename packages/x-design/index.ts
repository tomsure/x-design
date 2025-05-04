import xDesign from "../ui";
// const installer = (app, globalConfig) => {
//   app.use(xDesign);
// };
// export default installer;
// import Mdesign3 from "mdesign3";
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
// import zhCn from 'element-plus/es/locale/lang/zh-cn';
// import mdmsComponentsPlugin from "../components";
// import { VXETable, XEUtils, dataSourceManager } from "../components";
// import mdmsDirectivesPlugin from "../directives/src/index";
import type { App } from "vue";
// import { type MdmsConfigProviderContext } from "../tokens/src/index";
// import packageInfo from "./package.json";

const install = (app: App, globalConfig: any) => {
  app.use(xDesign, globalConfig);
};
const installer = {
  version: "0.0.1",
  install,
};
// export * from "mdesign3";
export * from "../ui";
// export { VXETable, XEUtils, dataSourceManager };
export default installer;
