import { createApp } from "vue";
import App from "./App.vue";
import TVirtualKeyboard from "@teleskop150750/t-virtual-keyboard";

import "@teleskop150750/t-virtual-keyboard/styles";
import { ru } from "./ru";

const app = createApp(App);
app.use(TVirtualKeyboard, ru);
app.mount("#app");
