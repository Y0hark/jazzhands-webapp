<template>
	<div>
		<nuxt-link
			:to="'guides/' + guide.attributes.slug"
			class="text-decoration-none"
		>
			<v-card class="card-main">
				<v-card-text class="text-h6 text-mainText">
					{{ guide.attributes.title }}
				</v-card-text>
				<span class="font-weight-light text-accent2 mx-4">
					by
					{{ guide.attributes.author.data.attributes.username }}
					- on
					{{ guide.attributes.createdAt.split("T")[0] }}
				</span>
				<v-chip
					class="mx-4 my-4"
					variant="outlined"
					:color="guide.attributes.category.data.attributes.color"
					>{{
						guide.attributes.category.data.attributes.title
					}}</v-chip
				>
			</v-card>
		</nuxt-link>
	</div>
</template>
<script>
export default {
	name: "guideCard",
	props: {
		guide: {
			type: Object,
			required: true,
		},
	},
};
</script>
<style></style>
