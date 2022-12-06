<template>
  <v-container grid-list-xs>
    <h2 class="text-h5 text-center mb-5">here find the guides page</h2>
    <div v-for="guide in guides" :key="guide.attributes.slug">
      <nuxt-link :to="'guides/' + guide.id" class="text-decoration-none">
        <v-card>
          <v-card-text>
            <span class="text-h6">{{ guide.attributes.title }}</span>
            -
            <span class="font-weight-light">
              by @{{ guide.attributes.author.data.attributes.username }} - on
              {{ guide.attributes.createdAt.split("T")[0] }}
            </span>
          </v-card-text>
        </v-card>
      </nuxt-link>
    </div>
  </v-container>
</template>
<script>
import Api from "../../services/api";

export default {
  name: "guidesPage",
  data() {
    return {
      guides: [],
    };
  },
  async mounted() {
    Api.getGuides().then((response) => {
      this.guides = response.data;
    });
  },
};
</script>
<style></style>
