<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="queries">
    <div id="home" class="flex bg-background-form w-full h-screen">
      <SideBar />
      <div class="container-home flex items-center justify-center w-full gap-10 sm:m-8 sm:gap-0">
        <h1>Queries</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from '../../components/SideBar/index.vue';

export default {
  name: 'MyQueries',
  components: { SideBar },
};
</script>
