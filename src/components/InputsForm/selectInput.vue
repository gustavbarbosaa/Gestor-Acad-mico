<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col gap-2 w-full">
    <label :for="idInput" class="font-semibold text-gray-500">{{textLabel}}</label>
    <select :for="idInput" class="font-semibold text-gray-700 p-3 rounded-md shadow-md focus:outline-none">
      <option>Selecione</option>
      <option :value="valueOption1">{{valueOption1}}</option>
      <option :value="valueOption2">{{valueOption2}}</option>
      <option :value="valueOption3">{{valueOption3}}</option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: 'selectComponent',
  props: {
    textLabel: String,
    nameInput: String,
    idInput: String,
    valueOption1: String,
    valueOption2: String,
    valueOption3: String,
  },

};
</script>
