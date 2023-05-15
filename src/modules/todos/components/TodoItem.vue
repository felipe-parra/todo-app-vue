<template>
  <router-link class="todo-item text-decoration-none text-black"
  :to="{name: 'todo-detail', params: {id: todo?.id}}"
  >
    <h5
    :class="{
      'text-decoration-line-through': todo?.completed,
    }"
    >{{ todo?.title }}</h5>
    <i 
    class="fa text-secondary"
    :class="{
      'fa-check-circle': todo?.completed,
      'fa-circle text-white border': !todo?.completed,
    }"
    />
  <!-- <input type="checkbox" :checked="todo?.completed" /> -->
  </router-link>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TodoItem',
  props: {
    todo: Object,
  },
});
</script>
<style lang="scss" scoped>
.todo-item{
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  &:last-child{
    border-bottom: 0;
  }
  h5{
    margin: 0;
  }
}
</style>