<template>
  <v-container grid-list-xs>
    <div>
      <h1 class="text-h3 text-center mb-8">
        <span class="text-center text-h6">welcome to <br /></span>Jazzhands
        Club!
      </h1>
      <h3 class="text-h5 font-italic">Club's Boss message:</h3>
      <v-card>
        <v-card-text v-html="homeMessage" />
      </v-card>
    </div>
  </v-container>
</template>
<script>
import Api from "../services/api";

export default {
  name: "homePage",
  data() {
    return {
      homeMessage: "",
    };
  },
  async mounted() {
    Api.getWelcomeMessage().then((response) => {
      this.homeMessage = response.data.attributes.text_content;
    });
  },
};
</script>
<style></style>
