<template>
	<v-container grid-list-xs>
		<h2 class="text-h5 text-center mb-4">Jazzers Top Charts</h2>
		<div class="mb-2">
			<i>
				This page displays a ranking of all the players within Jazzhands
				Club. The calculatopn is based on several factors, which are
				explained below.
			</i>
		</div>
		<v-expansion-panels class="text-mainText">
			<v-expansion-panel
				title="How to improve my score?"
				class="text-mainText"
			>
				<v-expansion-panel-text class="pa-4 text-mainText">
					The score is calculated with very simple rules. It takes in
					consideration several things from your achievements:
					<ul>
						<li>Your Miracle scores: your best performance</li>
						<li>Your Desolated Lands scores</li>
						<li>Your best Point War rank</li>
						<li>Your best score in Sentinel Hunt</li>
						<li>Your best Temporal Tower Score</li>
						<li>Your best Infinity Tower Score</li>
					</ul>
					<br />
					<i>You can improve them by doing these:</i>
					<ul>
						<li>For Miracles: go for higher tier or faster run</li>
						<li>
							For Desolated Lands: no need to speed things up,
							improving your score should be the only focus
						</li>
						<li>
							For Point War: easy right? just aim for higher rank!
						</li>
						<li>
							For Sentinel Hunt: improve your score as we don't
							take the time you take into consideration. This is
							one of the mechanics that gives the more points.
						</li>
						<li>
							For Temporal Tower: this is a bit special. If you
							didn't clear TT50, it gives your score a
							<b>"-5"</b> for every 5 floors your are below 50.
						</li>
						<li>
							For Infinity Tower: Aim for higher floors and more
							stars. This is one of the mechanics that gives the
							more points.
						</li>
					</ul>
					<br />
					Need help for this? Anytime you can ask the team to help you
					out! We'll be happy yo provide help and advice.<br />

					<b class="text-accent2">Important note:</b> this is not a
					race. This is simply a number to help you out tracking you
					own progress.
				</v-expansion-panel-text>
			</v-expansion-panel>
		</v-expansion-panels>
		<br />
		<v-card
			v-if="rankingLoading"
			:loading="rankingLoading"
			class="card-main"
		>
			<v-card-title class="text-h6 text-mainText">
				Loading...
			</v-card-title>
		</v-card>
		<div
			v-if="rankings[0] === undefined && rankingLoading === false"
			class="text-h6 text-mainText pa-6"
			align="center"
		>
			That's a bit sad but we don't have any players ranked to show you :(
		</div>
		<v-table class="text-mainText card-main">
			<thead>
				<tr>
					<th class="text-left">Club Rank</th>
					<th class="text-left">Member</th>
					<th class="text-left">Score</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(member, index) in rankings"
					:key="index"
					:class="{ 'bg-primary2': index in [0, 1, 2] }"
				>
					<td>{{ index + 1 }}</td>
					<td>{{ member.name }}</td>
					<td>{{ member.rank }}</td>
				</tr>
			</tbody>
		</v-table>
	</v-container>
</template>
<script>
import Ranker from "../services/rankingCalculation";
import { useStore } from "../store/main";
import Api from "../services/api";

export default {
	name: "rankingsPage",
	async setup() {
		const rankingLoading = ref(true);
		const store = useStore();
		const rankings = [];
		await Api.getConfig().then((response) => {
			store.config = response.data.attributes.rankingConf;
		});
		await Api.getMembers().then((response) => {
			store.members = response.data;
		});
		const members = store.members;
		members.forEach((member) => {
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
					member.attributes.infinityTowerFloor,
					member.attributes.infinityTowerStars,
					member.attributes.temporalTowerFloor,
					member.attributes.cbrWinner,
					member.attributes.cbrSecond,
					member.attributes.cbrThird,
					store.config
				),
			});
		});
		rankings.sort((a, b) => (a.rank < b.rank ? 1 : -1));
		rankingLoading.value = false;
		return { store, rankings, rankingLoading };
	},
	data() {
		return {
			panel: [0],
		};
	},
};
</script>
<style scoped>
ul {
	margin-left: 2em;
}

li {
	margin-bottom: 0.5em;
}
</style>
