<template>
	<div>
		<v-card class="my-3 card-main">
			<v-card-title class="pb-0 text-mainText global-title">
				{{ news.attributes.title }}
			</v-card-title>

			<v-card-text>
				<span class="font-weight-thin text-mainText"
					>written by
					<span class="text-accent2"
						>{{ news.attributes.author.data.attributes.username }}
						-
						{{ news.attributes.createdAt.split("T")[0] }}</span
					></span
				>
			</v-card-text>
			<v-chip
				class="mx-4"
				variant="outlined"
				:color="news.attributes.category.data.attributes.color"
				>{{ news.attributes.category.data.attributes.title }}</v-chip
			>
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
