<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="construction">
    <div id="home" class="flex bg-home-background-color">
      <SideBar />
      <div class="container-home flex items-center justify-center w-full gap-10 sm:m-8 sm:gap-0">
        <h1>Construction</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from '../../components/SideBar/index.vue';

export default {
  name: 'PagConstruction',
  components: { SideBar },
};
</script>
