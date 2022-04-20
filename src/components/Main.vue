<script>
import Comment from './Comment.vue';
import formatDate from '../includes/formatDate';
import Menu from './Menu.vue';
import { useUserStore } from '../stores/userStore.js';
import CommentForm from './CommentForm.vue';
import { BASE_URL } from '../utils/API';

const API_URL = `${BASE_URL}/articles`;

export default {
  data: () => ({
    articles: null,
  }),
  created() {
    this.fetchData();
    this.formatDate = formatDate.formatDate;
  },
  methods: {
    async fetchData() {
      this.articles = await (await fetch(API_URL)).json();
    },
  },
  components: { Comment, Menu, CommentForm },
  setup() {
    const store = useUserStore();
    return { store };
  },
};
</script>

<template>
  <div class="main">
    <div class="group">
      <div v-if="this.store.isLogged">
        <CommentForm />
      </div>
      <div class="article" v-for="article in articles">
        <div class="header">
          <div style="display: flex">
            <h3>{{ article.pseudo }}</h3>
            <img alt="Qries" v-bind:src="article.urlImgArticle" width="30" height="30" style="border-radius: 3em; margin-left: 1em" />
          </div>
          <p>Posté le {{ formatDate(article.date) }}</p>
        </div>
        <div class="article-body">
          <div class="image" v-bind:style="{ 'background-image': 'url(' + article.urlImgArticle + ')' }"></div>
          <p>{{ article.contenu }}</p>
        </div>
        <div class="article-footer">
          <div class="social">
            <div class="comment">
              <i class="far fa-comment-alt"></i>
              <p style="background-color: rgba(98, 193, 9, 0.5)" class="badge">{{ article.commentaires.length }}</p>
            </div>
            <div class="like">
              <i class="far fa-thumbs-up"></i>
              <p style="background-color: cornflowerblue" class="badge">{{ article.like }}</p>
            </div>
          </div>
          <div class="social_2">
            <h3 style="margin: 0.5em">Commentaires :</h3>
            <div class="message" v-for="comment in article.commentaires">
              <Comment :comment="comment" />
            </div>
            <div class="add-comment message" v-if="this.store.isLogged">
              <h3 style="margin: 0.5em">Ajouter un commentaire:</h3>
              <textarea v-model="body" class="input" rows="5" placeholder="Ecrivez un nouveau post" />
              <button @click="register" class="button">Laisser un commentaire</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.main {
  flex: 1;
  justify-content: center;
  display: flex;
  margin-left: 1em;
  margin-right: 1em;
}
</style>
<style scoped>
.group {
  display: flex;
  flex-direction: column;
  flex: 1;
}

h3 {
  color: #414141;
}

.message {
  border-top: solid 1px #414141;
  margin-top: 0.5em;
}
.social_2 {
  display: flex;
  flex-direction: column;
}
.social {
  display: flex;
  background-color: rgba(220, 220, 220, 0.3);
  padding: 5px;
}
.like {
  margin-left: 1em;
  display: flex;
  align-items: center;
}
.badge {
  font-size: 12px;
  width: 1.5em;
  text-align: center;
  border-radius: 0.2em;
  margin-left: 0.5em;
  font-weight: bold;
}
.comment {
  margin-left: 1em;
  display: flex;
  align-items: center;
}
.image {
  width: 100%;
  height: 250px;
}

.article-body {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.article-body p {
  text-align: justify;
  text-justify: inter-word;
  margin: 10px;
}
.article {
  border: 1px solid #414141;
  border-radius: 2px;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7em;
  background-color: rgba(220, 220, 220, 0.3);
}

h3 {
  font-size: 1.2rem;
}
.input {
  padding: 10px;
  margin: 6px 0;
  border-radius: 5px;
  border: solid 1px #414141;
}

.button {
  background-color: #5cb85c;
  color: white;
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid;
  cursor: pointer;
  width: 170px;
  margin-bottom: 5px;
}

.add-comment {
  padding: 0 15px;
  flex-direction: column;
  justify-content: space-around;
  display: flex;
}
</style>
