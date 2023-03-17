import { c as create_ssr_component } from "../../chunks/index3.js";
import { inject } from "@vercel/analytics";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  inject({ mode: "production" });
  return `${$$result.head += `<!-- HEAD_undefined_START --><!-- HEAD_undefined_END -->`, ""}

<div class="px-4 py-6 mx-auto ">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
