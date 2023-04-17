<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="side-bar" class="bg-sidebar-background-color w-52 h-screen">
    <div id="logo" class="flex items-center gap-2 mx-2 pt-3 pb-4 border-b border-border-color">
      <img src="../../assets/images/icon-e-ga.png" alt="" class="w-11 h-11">
      <h2 class="text-font-sidebar-color font-bold text-sm">Projeto e-GA</h2>
    </div>
    <div id="pages-side-bar">

    </div>
    <div id="logout">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBar',
});
</script>
