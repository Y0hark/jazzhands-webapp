<template>
  <v-container grid-list-xs>
    <h2 class="text-h5 text-center">this is the ranking page</h2>
    <br />
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Club Rank</th>
            <th class="text-left">Member</th>
            <th class="text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in rankings" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ member.name }}</td>
            <td>{{ member.rank }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
import Ranker from "../services/rankingCalculation";

export default {
  name: "rankingsPage",
  data() {
    return {};
  },
  computed: {
    rankings() {
      const rankings = [];
      this.$store.state.members.forEach((member) => {
        rankings.push({
          name: member.attributes.name,
          rank: Ranker.calculation(
            member.attributes.tierKronos,
            member.attributes.timeKronos,
            member.attributes.tierApep,
            member.attributes.timeApep,
            member.attributes.tierFafnir,
            member.attributes.timeFafnir,
            member.attributes.bestPointWar,
            member.attributes.shadowgale,
            member.attributes.shadowstream,
            member.attributes.shadowfire,
            member.attributes.darkstarlord,
            this.$store.state.config
          ),
        });
      });
      rankings.sort((a, b) => (a.rank < b.rank ? 1 : -1));
      return rankings;
    },
  },
};
</script>
<style></style>
