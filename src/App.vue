<template>
  <div id="app-root">
    <NavBar/>
    <div class="content">
      <router-view/>
    </div>
    <Toaster />
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue';
import Toaster from '@/components/Toaster/BaseToaster.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    Toaster
  },

  setup(): any {
    return {
    };
  }
};
</script>
