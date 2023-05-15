export default {
  name: 'todos',
  component: () => import(/*webpackChunkName:"todos"*/ '@/modules/todos/layouts/TodoLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import(/*webpackChunkName:"todos"*/ '@/modules/todos/views/NoEntryView.vue')
    },
    {
      path: ':id/detail',
      name: 'todo-detail',
      component: () => import(/*webpackChunkName:"todos"*/ '@/modules/todos/views/EntryView.vue'),
      props: (route: { params: { id: string | number } }) => ({ id: Number(route.params.id) })
    },
    {
      path: ':pathMatch(.*)*',
      name: 'not-found',
      component: () =>
        import(/*webpackChunkName:"todos"*/ '@/modules/todos/components/PageNotFound.vue')
    }
  ]
}
