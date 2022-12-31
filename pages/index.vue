<template>
	<v-container grid-list-xs>
		<div>
			<h1 class="text-h3 text-center mb-8">
				<span class="text-center text-h6"></span>Jazzhands Club's Home
			</h1>
			<v-card v-if="bossMessageLoading" :loading="bossMessageLoading">
				<v-card-title class="text-h6 text-mainText">
					Loading...
				</v-card-title>
			</v-card>
			<div
				v-if="homeMessage === ''"
				class="text-h6 text-mainText pa-6"
				align="center"
			>
				That's a bit sad but the boss haven't posted any message yet :(
			</div>
			<v-card :loading="bossMessageLoading">
				<v-card-title class="text-h6 text-mainText">
					Boss' message
				</v-card-title>
				<v-card-text v-html="homeMessage" class="text-mainText" />
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
			bossMessageLoading: true,
		};
	},
	async mounted() {
		Api.getWelcomeMessage().then((response) => {
			this.homeMessage = response.data.attributes.text_content;
			this.bossMessageLoading = false;
		});
	},
};
</script>
<style></style>
