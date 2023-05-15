<template>
  <h1>Entry view</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'EntryView',
  props: {
    id: String,
  },
  mounted() {
    console.log('EntryView mounted');
    
  },
});
</script>