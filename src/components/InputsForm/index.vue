<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col gap-2 w-full">
    <label :for="idInput" class="font-semibold text-gray-500">{{textLabel}}</label>
    <input :type="typeInput" :name="nameInput" :id="idInput" :placeholder="placeholder" class="font-semibold text-gray-700 p-3 rounded-md shadow-md focus:outline-none">
  </div>
</template>

<script lang="ts">
export default {
  name: 'inputComponent',
  props: {
    textLabel: String,
    typeInput: String,
    nameInput: String,
    idInput: String,
    placeholder: String,
  },

};
</script>
