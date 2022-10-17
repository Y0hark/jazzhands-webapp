<template>
  <v-card height="56" color="#121212" elevation="0">
    <v-bottom-navigation
      v-model="value"
      :background-color="color"
      dark
      shift
      app
      hide-on-scroll
    >
      <v-btn to="/">
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/news">
        <span>News</span>

        <v-icon>mdi-newspaper</v-icon>
      </v-btn>

      <v-btn to="/guides">
        <span>Guides</span>

        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn to="/rankings">
        <span>Rankings</span>

        <v-icon>mdi-altimeter</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      color: "#121212",
    };
  },
};
</script>
<style></style>
