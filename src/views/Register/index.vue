<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="resgister" class="flex bg-home-background-color h-full w-full">
    <SideBar />
    <div class="container-home flex items-center justify-center w-full gap-10 sm:m-8 sm:gap-0">
      <h1>Resgister</h1>
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from '../../components/SideBar/index.vue';

export default {
  name: 'MyResgister',
  components: { SideBar },
};
</script>
