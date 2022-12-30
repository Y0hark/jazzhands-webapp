<template>
	<v-container grid-list-xs>
		<h2 class="text-h5 text-center mb-4">this is the ranking page</h2>
		<!-- <v-expansion-panels v-model="panel">
			<v-expansion-panel>
				<v-expansion-panel-header>
					How to improve my score?
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					The score is calculated with very simple rules. It takes in
					consideration several things from your achievements:
					<ul>
						<li>
							Your Miracle scores: your best performance
							(displayed on you profile)
						</li>
						<li>
							Your Desolated Lands scores (also on your profile)
						</li>
						<li>Your best Point War rank (on your player card)</li>
						<li>Your best score in Sentinel Hunt</li>
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
							take the time you take into consideration.
						</li>
					</ul>
					<br />
					Need help for this? Anytime you can ask the team to help you
					out! We'll be happy yo provide help and advice.<br />

					<b>Important note:</b> this is not a race. This is simply a
					number to help you out tracking you own progress.
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels> -->
		<br />
		<!-- <v-simple-table dense>
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
		</v-simple-table> -->
	</v-container>
</template>
<script>
import Ranker from "../services/rankingCalculation";
import { useStore } from "../store/main";
import Api from "../services/api";

export default {
	name: "rankingsPage",
	setup() {
		const store = useStore();
		const rankings = [];
		Api.getConfig().then((response) => {
			store.config = response.data.attributes.rankingConf;
		});
		Api.getMembers().then((response) => {
			response.data.forEach((element) => {
				store.addMember(element);
			});
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
					store.config
				),
			});
		});

		rankings.sort((a, b) => (a.rank < b.rank ? 1 : -1));

		return { store, rankings };
	},
	data() {
		return {
			panel: [0],
		};
	},
};
</script>
<style></style>
