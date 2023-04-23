<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="forum">
    <div id="home" class="flex bg-background-form w-full h-screen">
      <SideBar/>
      <div>
        <h1>Forum</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from '../../components/SideBar/index.vue';

export default {
  name: 'MyForum',
  components: { SideBar },
};
</script>
