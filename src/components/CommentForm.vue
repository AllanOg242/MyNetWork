<script>
import { useUserStore } from '../stores/userStore';

export default {
  data() {
    return {
      body: '',
      image: '',
    };
  },
  setup() {
    const store = useUserStore();
    return { store };
  },
  methods: {
    async createPost() {
      if (this.body.length === 0 || this.image.length === 0) {
        alert('Merci de remplir les deux champs');
      } else {
        const data = {
          id: 1,
          contenu: this.body,
          urlImgArticle: this.image,
          like: 0,
          date: new Date().getTime,
          pseudo: this.store.user.pseudo,
          commentaires: [],
        };

        alert('ok');
        await (
          await fetch(`http://localhost:3004/articles`, {
            headers: { ContentType: 'application/json' },
            method: 'POST',
            body: JSON.stringify(data),
          })
        ).json();
        alert('Article ajouté avec succès!');
      }
    },
  },
};
</script>
<template>
  <div class="header">
    <div class="content">
      <h2 style="color: #414141; margin: 0 0 10px 0">Quoi de neuf ?</h2>
      <textarea v-model="body" class="input" rows="5" placeholder="Ecrivez un nouveau post" />
      <input class="input" type="text" v-model="image" placeholder="url de votre image - taille conseillée 1000*200px" />
      <button @click="createPost" class="button">Publier votre nouveau post</button>
    </div>
  </div>
</template>
<style scoped>
.header {
  border: solid 1px #414141;
  margin-bottom: 1em;
}
.input {
  padding: 10px;
  margin: 6px 0;
  border-radius: 5px;
  border: solid 1px aliceblue;
}
.content {
  flex-direction: column;
  justify-content: space-around;
  display: flex;
  justify-items: flex-start;
  flex: 1;
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
