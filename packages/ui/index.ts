// import { Button, Input } from "./src";
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
  components.forEach((item) => {
    app.component(item.name, item.component);
  });
};
export default installer;
export { Button, Input };
export * from "./src/components/Button";
