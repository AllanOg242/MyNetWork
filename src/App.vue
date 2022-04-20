<script>
import Menu from './components/Menu.vue';

export default {
  components: { Menu },
};
</script>

<template>
  <main style="margin: 1em; display: flex; height: 100vh">
    <div class="menu">
      <Menu />
    </div>
    <div style="flex: 4; padding: 0 20px">
      <RouterView />
    </div>
  </main>
</template>

<style>
@import './assets/base.css';
.menu {
  display: flex;
  flex: 1;
  min-height: 6em;
}
</style>
