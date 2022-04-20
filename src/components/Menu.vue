<script>
import { useUserStore } from '../stores/userStore';
export default {
  setup() {
    const store = useUserStore();
    return { store };
  },
  methods: {
    logout() {
      this.store.logout();
    },
  },
};
</script>

<template>
  <div class="main" v-if="this.store.isLogged">
    <div class="button">
      <i class="fa-solid fa-house-chimney"></i>
      <RouterLink class="title" to="/">Fils d'actualités</RouterLink>
    </div>
    <div class="button">
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
      <a @click="logout" class="title">Déconnexion</a>
    </div>
  </div>
  <div class="main" v-else>
    <div class="button">
      <i class="fa-solid fa-house-chimney"></i>
      <RouterLink class="title" to="/">Fils d'actualités</RouterLink>
    </div>
    <div class="button">
      <i class="fa-solid fa-user"></i>
      <RouterLink class="title" to="/signin">Créer un profil</RouterLink>
    </div>
    <div class="button">
      <i class="fa-solid fa-right-to-bracket"></i>
      <RouterLink class="title" to="/login">Se connecter</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.main {
  border: solid 1px #414141;
  display: flex;
  flex-direction: column;
  height: 15%;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.button {
  display: flex;
  flex: 1;
  align-items: center;
  border-bottom: 1px solid #414141;
  width: 100%;
  justify-content: center;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #414141;
}
.title {
  color: #414141;
  margin-left: 0.5em;
  cursor: pointer;
}
</style>
