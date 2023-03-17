import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, d as each, v as validate_component } from "../../chunks/index3.js";
import { w as writable } from "../../chunks/index2.js";
function createMessages() {
  const { subscribe: subscribe2, set, update } = writable([]);
  return {
    subscribe: subscribe2,
    addMessage: (message) => update((messages2) => [...messages2, message])
  };
}
function createChadLoading() {
  const { subscribe: subscribe2, set, update } = writable(false);
  return {
    subscribe: subscribe2,
    setLoading: (isLoading) => set(isLoading)
  };
}
const loading = createChadLoading();
const messages = createMessages();
const ChatBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_messages;
  $$unsubscribe_messages = subscribe(messages, (value) => value);
  let { scrollToDiv } = $$props;
  let inputRef;
  if ($$props.scrollToDiv === void 0 && $$bindings.scrollToDiv && scrollToDiv !== void 0)
    $$bindings.scrollToDiv(scrollToDiv);
  $$unsubscribe_messages();
  return `<form class="flex items-center gap-4 max-w-lg w-full"><textarea class="textarea textarea-bordered resize-none w-full h-16" placeholder="Вопрос для чада..."${add_attribute("this", inputRef, 0)}>${""}</textarea>

	<button class="btn btn-square btn-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path></svg></button></form>`;
});
const ChatBubble = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { start } = $$props;
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  return `<div class="${"chat chat-" + escape(start ? "start" : "end", true)}"><div class="chat-header ">${slots.role ? slots.role({}) : ``}</div>
	<div class="chat-bubble ">${slots.content ? slots.content({}) : ``}</div></div>`;
});
const MessageSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="chat chat-start animate-pulse"><div class="chat-header ">Chad thinking...</div>
	<div class="chat-bubble bg-gray-700 w-52 h-20"></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $messages, $$unsubscribe_messages;
  let $loading, $$unsubscribe_loading;
  $$unsubscribe_messages = subscribe(messages, (value) => $messages = value);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  let scrollTo;
  $$unsubscribe_messages();
  $$unsubscribe_loading();
  return `<header class="max-w-lg mx-auto mb-10"><h1 class="text-3xl font-bold">Chad GPT 👺</h1></header>

<main class="min-h-screen max-w-lg mx-auto mb-24"><div>${each($messages, ({ content, role }, i) => {
    return `${validate_component(ChatBubble, "ChatBubble").$$render($$result, { start: i % 2 !== 0 }, {}, {
      content: () => {
        return `${escape(content)}`;
      },
      role: () => {
        return `${role === "user" ? `
						you
					` : `
						Chad
					`}`;
      }
    })}`;
  })}

		${$loading ? `${validate_component(MessageSkeleton, "MessageSkeleton").$$render($$result, {}, {}, {})}` : ``}</div></main>

<footer class="bg-base-100 w-full h-24 fixed bottom-0 left-1/2 transform -translate-x-1/2 flex align-center justify-center">${validate_component(ChatBox, "ChatBox").$$render($$result, { scrollToDiv: scrollTo }, {}, {})}</footer>
<div${add_attribute("this", scrollTo, 0)}></div>`;
});
export {
  Page as default
};
