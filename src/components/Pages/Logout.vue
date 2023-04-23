<!-- eslint-disable max-len -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="logout">
    <a :href="route">
      <div class="flex items-center justify-start w-full gap-2 px-2 my-2 font-bold text-sm text-font-sidebar-color rounded-md hover:text-gray-300">
        <i :class="img"></i>
        <h2>{{text}}</h2>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LogoutComponent',
  props: {
    img: String,
    text: String,
    route: String,
  },
});
</script>
