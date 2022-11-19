<template>
  <v-container grid-list-xs>
    <h2 class="text-h5 text-center mb-5">what's new?</h2>
    <v-card v-for="newsContent in news" :key="newsContent.attributes.slug">
      <v-card-title class="pb-0">
        {{ newsContent.attributes.title }}
      </v-card-title>

      <v-card-text>
        <span class="font-weight-thin">written by</span>
        {{ newsContent.attributes.author.data.attributes.username }} -
        <span class="font-weight-thin">{{
          newsContent.attributes.createdAt.split("T")[0]
        }}</span>
      </v-card-text>

      <v-card-text v-html="newsContent.attributes.content" />
    </v-card>
  </v-container>
</template>
<script>
import Api from "../../services/api";

export default {
  name: "newsPage",
  data() {
    return {
      news: [],
    };
  },
  async mounted() {
    Api.getNews().then((response) => {
      this.news = response.data;
    });
  },
};
</script>
<style></style>
