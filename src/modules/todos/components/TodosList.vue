<template>
  <section>
    <article>
      <h1>Todo Lists</h1>
    </article>
    <article>
      <p v-if="isLoading">Loading...</p>
      <section v-if="todos" class="scrollable-area">
        <article v-for="todo in todos" :key="todo.id">
          <TodoItem :todo="todo" />
        </article>
      </section>
      <section v-else>
        <p>No todos found</p>
      </section>
    </article>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {useTodoStore} from '@/stores/todoStore';
import {storeToRefs} from 'pinia'
import { defineAsyncComponent } from 'vue';
const {todos, isLoading} = storeToRefs(useTodoStore());
const {loadTodos} = useTodoStore()
export default defineComponent({
  name: 'TodosList',
  components: {
    TodoItem: defineAsyncComponent(() => import('@/modules/todos/components/TodoItem.vue')),
  },
  data(){
    return {
      todos,
      isLoading
    }
  },
  mounted() {
    loadTodos()
    console.log('TodosList mounted', this.todos);
  },
});
</script>
<style lang="scss" scoped>
.scrollable-area{
  height: calc( 100vh - 110px );
  overflow: scroll;
}
</style>