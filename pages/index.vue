<template>
  <div>
    Hello Luca! You are the best!
    <v-btn color="info" @click="calculateRanking">Rank players</v-btn>
    {{ rankings }}
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
          member: member.attributes.name,
          ranking: Ranker.calculation(
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
