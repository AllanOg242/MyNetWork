<script>
import { useUserStore } from '../stores/userStore';
import { BASE_URL } from '../utils/API';
import router from '../router/index';
import { app } from '../main';

export default {
  data() {
    return {
      pseudo: '',
      email: '',
      password: '',
      confirmPassword: '',
      avatar: '',
    };
  },
  methods: {
    async register() {
      /* const API_URL = `${BASE_URL}/utilisateurs?email=${this.email}&password=${this.password}`;
      const user = (await (await fetch(API_URL)).json())[0];
      if (user) {
        this.store.setUser(user);
        router.push('/');
        app.$toast.open('Vous etes connectés!');
      } */
    },
  },
  setup() {
    const store = useUserStore();
    return { store };
  },
};
</script>

<template>
  <div class="main" style="flex-direction: column">
    <h2>Créer un nouveau profil</h2>
    <input class="input" type="text" v-model="pseudo" placeholder="pseudo" />
    <input class="input" type="email" v-model="email" placeholder="votre@email.fr" />
    <input class="input" type="password" v-model="password" placeholder="mot de passe" />
    <input class="input" type="password" v-model="confirmPassword" placeholder="confirmer mot de passe" />
    <input class="input" type="text" v-model="avatar" placeholder="url de votre image - taille conseillée 1000*200px" />
    <button @click="register" class="button">Créer un nouveau profil</button>
  </div>
</template>
<style scoped>
.main {
  border: solid 1px #414141;
  background-color: rgba(220, 220, 220, 0.3);
  align-items: flex-start;
  justify-content: space-around;
  padding: 12px;
}
.input {
  padding: 10px;
  margin: 12px 0;
  width: 100%;
  border-radius: 5px;
  border: solid 1px aliceblue;
}

.button {
  background-color: #5cb85c;
  color: white;
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid;
  cursor: pointer;
}
</style>
