import xDesign from "../ui";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { VXETable, XEUtils } from "../ui";
// import mdmsDirectivesPlugin from "../directives/src/index";
import type { App } from "vue";
// import { type MdmsConfigProviderContext } from "../tokens/src/index";
import packageInfo from "./package.json";

const install = (app: App, globalConfig: any) => {
  app.use(ElementPlus, globalConfig);
  app.use(xDesign, globalConfig);
};
const installer = {
  version: packageInfo.version,
  install,
};
export * from "element-plus";
export * from "../ui";
export { VXETable, XEUtils };
export default installer;
