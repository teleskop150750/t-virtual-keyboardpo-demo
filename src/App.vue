<script setup lang="ts">
import { ref } from 'vue';
import { VirtualKeyboardButtonInterface } from "@teleskop150750/t-virtual-keyboard/dist/src/types/types";

const text = ref('');

const clickButtonHandler = (button: VirtualKeyboardButtonInterface) => {
  console.log(button);
};
</script>

<template>
  <div>
    <textarea id="field" v-model="text" name="field" cols="30" rows="10"></textarea>
    <TVirtualKeyboard v-model="text" @click-button="clickButtonHandler" />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 3rem 3rem 1rem;
}

textarea {
  font-size: 1.5rem;
}

div {
  display: grid;
  grid-template-columns: 100%;
  gap: 4rem;
}
</style>
