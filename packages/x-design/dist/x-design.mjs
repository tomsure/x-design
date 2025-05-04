import { Button as e } from "./ui.mjs";
import { createElementBlock as s, openBlock as a, createElementVNode as c } from "vue";
const m = { class: "" }, l = {
  __name: "main",
  setup(t) {
    return (o, n) => (a(), s("div", m, n[0] || (n[0] = [
      c("input", { type: "text" }, null, -1)
    ])));
  }
}, r = [
  {
    name: "Button",
    component: e
  },
  {
    name: "Input",
    component: l
  }
], p = (t, o) => {
  r.forEach((n) => {
    t.component(n.name, n.component);
  });
}, i = (t, o) => {
  t.use(p, o);
}, f = {
  version: "0.0.1",
  install: i
};
export {
  e as Button,
  f as default
};
