<template>
  <v-app dark>
    <Nuxt />
  </v-app>
</template>

<script>
import Api from "../services/api";

export default {
  name: "DefaultLayout",
  mounted() {
    this.$store.subscribe((mutation, state) => {
      localStorage.setItem("store", JSON.stringify(state));
    });
  },
  async beforeCreate() {
    this.$store.commit("incrementCounter");
    this.$store.commit("initializeLocalStorage");

    this.$store.commit("incrementCounter");
    this.$store.commit(
      "setConfig",
      (await Api.getConfig()).data.attributes.rankingConf
    );

    this.$store.commit("incrementCounter");
    this.$store.commit("setMembers", (await Api.getMembers()).data);
  },
};
</script>
