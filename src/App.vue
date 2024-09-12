<template>
  <nav-bar></nav-bar>
  <section class="px-3 lg:px-0">

    <router-view v-slot="{ Component }">
      <transition name="component-view" mode="out-in">
        <component :is="Component"> </component>
      </transition>
    </router-view>
  </section>
</template>

<script setup>
import NavBar from './components/Nav/NavBar.vue';


</script>

<style lang="scss">
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.component-view-enter-from,
.component-view-leave-to {
  opacity: 0;
}

.component-view-enter-active,
.component-view-leave-active {
  transition: opacity 0.2s ease;
}
</style>
