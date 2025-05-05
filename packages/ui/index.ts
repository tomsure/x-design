import VXETable from "vxe-table";
import XEUtils from "xe-utils";
import Button from "./src/components/Button";
import Input from "./src/components/Input";

import type { Component, App } from "vue";

const components = [
  {
    name: "Button",
    component: Button,
  },
  {
    name: "Input",
    component: Input,
  },
];
const installer = (app: App, globalCoonfig: any) => {
  VXETable.setConfig({
    emptyCell: "-",
  });
  app.use(VXETable);
  components.forEach((item) => {
    app.component(item.name, item.component);
  });
};
export default installer;
export { VXETable, XEUtils, Button, Input };
export * from "./src/components/Button";
