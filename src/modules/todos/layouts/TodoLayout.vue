<template>
  <!-- Navbar -->
  <NavbarDefault />
  <!-- Loading -->
  <!-- Main content -->
  <section>
    <!-- Page title -->
    <!-- Page content -->
    <h1>Content</h1>
    <RouterView />
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavbarDefault from '../components/NavbarDefault.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NavbarDefault,
  },
});

</script>