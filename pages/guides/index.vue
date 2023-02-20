<template>
	<v-container grid-list-xs>
		<h2 class="text-h5 text-center mb-5">Jazz Tutorials</h2>
		<v-card v-if="allGuidesLoading" :loading="allGuidesLoading" class="">
			<v-card-title class="text-h6 text-mainText">
				Loading...
			</v-card-title>
		</v-card>
		<div
			v-if="guides[0] === undefined"
			class="text-h6 text-mainText pa-6"
			align="center"
		>
			That's a bit sad but we don't have any guides yet :(
		</div>
		<div v-for="guide in guides" :key="guide.attributes.slug">
			<GuideCard :guide="guide" />
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
			allGuidesLoading: true,
		};
	},
	async mounted() {
		Api.getGuides().then((response) => {
			this.guides = response.data;
			this.allGuidesLoading = false;
		});
	},
};
</script>
<style></style>
