<template>
  <nav class="navbar bg-dark px-2">
    <router-link to="/todos" class="navbar-brand text-white">
      <img src="@/assets/logo.svg" alt="vue logo" width="44" height="44">
    </router-link>
    <article class="d-flex justify-content-around">
      <router-link to="/todos/new" class="text-white mx-2">
        New
      </router-link>
    </article>
  </nav>
</template>