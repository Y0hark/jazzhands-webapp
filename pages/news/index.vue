<template>
	<v-container grid-list-xs>
		<h2 class="text-h5 text-center mb-5">What's Jazzin'?</h2>
		<v-card v-if="allNewsLoading" :loading="allNewsLoading">
			<v-card-title class="text-h6 text-mainText">
				Loading...
			</v-card-title>
		</v-card>
		<div
			v-if="news[0] === undefined"
			class="text-h6 text-mainText pa-6"
			align="center"
		>
			That's a bit sad but we don't have any news yet to show you :(
		</div>
		<v-card v-for="newsContent in news" :key="newsContent.attributes.slug">
			<v-card-title class="pb-0 text-mainText">
				{{ newsContent.attributes.title }}
			</v-card-title>

			<v-card-text>
				<span class="font-weight-thin text-mainText">written by</span>
				{{ newsContent.attributes.author.data.attributes.username }} -
				<span class="font-weight-thin text-mainText">{{
					newsContent.attributes.createdAt.split("T")[0]
				}}</span>
			</v-card-text>

			<v-card-text
				v-html="newsContent.attributes.content"
				class="text-mainText"
			/>
		</v-card>
	</v-container>
</template>
<script>
import Api from "../../services/api";

export default {
	name: "newsPage",
	data() {
		return {
			news: [],
			allNewsLoading: true,
		};
	},
	async mounted() {
		Api.getNews().then((response) => {
			this.news = response.data;
			this.allNewsLoading = false;
		});
	},
};
</script>
<style></style>
