<template>
  <v-app dark>
    <Nuxt />
    <NavBar />
  </v-app>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import Api from "../services/api";

export default {
  components: { NavBar },
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
