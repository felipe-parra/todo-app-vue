import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<ITodo[]>([])
  const todoSelected = ref<ITodo | null>(null)
  const isLoading = ref(false)
  const error = ref<Error | null>(null)

  async function loadTodos() {
    isLoading.value = true
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      todos.value = await response.json()
    } catch (e) {
      console.error({ error: e, message: 'loadingTodos' })
      error.value = new Error('Error loading todos')
    } finally {
      isLoading.value = false
    }
  }

  async function loadTodoById(id: number) {
    isLoading.value = true
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      todoSelected.value = await response.json()
    } catch (e) {
      console.error({ error: e, message: 'loadingTodoById' })
      error.value = new Error('Error loading todo')
    } finally {
      isLoading.value = false
    }
  }
  function addTodo(todo: ITodo) {
    todos.value.push(todo)
  }

  function updateTodo(todo: ITodo) {
    const index = todos.value.findIndex((t) => t.id === todo.id)
    todos.value[index] = todo
  }

  function deleteTodoById(id: number) {
    const index = todos.value.findIndex((t) => t.id === id)
    todos.value.splice(index, 1)
  }

  return {
    // State
    todos,
    todoSelected,
    isLoading,
    error,
    // Getters
    // Actions
    loadTodos,
    loadTodoById,
    addTodo,
    updateTodo,
    deleteTodoById
  }
})

interface ITodo {
  id: number
  title: string
  completed: boolean
  userId: number
}
