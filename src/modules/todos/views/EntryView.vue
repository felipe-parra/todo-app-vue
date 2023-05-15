<template>
  <h1>Entry view</h1>
  <p v-if="isLoading">Loading...</p>
  <section v-if="todoSelected">
    <h2>{{todoSelected.title}}</h2>
  </section>
  <section v-else>
    <NoEntryView />
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {useTodoStore} from '@/stores/todoStore';
import {storeToRefs} from 'pinia'
const {isLoading,todoSelected} = storeToRefs(useTodoStore());
const {loadTodoById} = useTodoStore()
export default defineComponent({
  name: 'EntryView',
  data(){
    return {
      isLoading,
      todoSelected
    }
  },
  props: {
    id: String,
  },
  mounted() {
    if(this.id){
      loadTodoById(Number(this.id))
    }
  },
  watch: {
    id: {
      immediate: true,
      handler(id) {
        if(id){
          loadTodoById(Number(id))
        } else{
          todoSelected.value = null
        }
      },
    },
  },
});
</script>