<template>
  <div>
    Hello Luca! You are the best!
    <v-btn color="info" @click="calculateRanking">Rank memers</v-btn>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in rankings" :key="member.name">
            <td>{{ member.name }}</td>
            <td>{{ member.rank }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import Ranker from "../services/rankingCalculation";

export default {
  name: "homePage",
  data() {
    return {
      rankings: [],
    };
  },
  methods: {
    calculateRanking() {
      this.$store.state.members.forEach((member) => {
        this.rankings.push({
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
    },
  },
};
</script>
<style></style>
