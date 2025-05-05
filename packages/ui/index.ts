import VXETable from "vxe-table";
import XEUtils from "xe-utils";
import Button from "./src/components/Button";
import Input from "./src/components/Input";
import XTable from "./src/components/Table";
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
  {
    name: "x-table",
    component: XTable,
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
export { VXETable, XEUtils, Button, Input, XTable };
export * from "./src/components/Button";
