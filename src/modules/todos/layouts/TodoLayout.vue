<template>
  <!-- Navbar -->
  <Navbar />
  <!-- Loading -->
  <!-- Main content -->
  <section class="d-flex">
    <!-- Page title -->
    <article class="col-5">
      <TodosList />
    </article>
    <!-- Page content -->
    <article class="col">
      <RouterView />
    </article>
  </section>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar: defineAsyncComponent(() => import(/* webpackChunkName:"Navbar" */'@/modules/todos/components/NavbarDefault.vue')),
    TodosList: defineAsyncComponent(() => import(/* webpackChunkName:"TodosList" */'@/modules/todos/components/TodosList.vue')),
},
});

</script>