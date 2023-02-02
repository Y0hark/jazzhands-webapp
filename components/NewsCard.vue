<template>
	<div>
		<v-card class="my-3">
			<v-card-title class="pb-0 text-mainText global-title">
				{{ news.attributes.title }}
			</v-card-title>

			<v-card-text>
				<span class="font-weight-thin text-mainText">written by</span>
				{{ news.attributes.author.data.attributes.username }} -
				<span class="font-weight-thin text-mainText">{{
					news.attributes.createdAt.split("T")[0]
				}}</span>
			</v-card-text>

			<v-card-text
				v-html="news.attributes.content"
				class="text-mainText"
			/>
		</v-card>
	</div>
</template>
<script>
export default {
	name: "newsCard",
	props: {
		news: {
			type: Object,
			required: true,
		},
	},
};
</script>
<style></style>
