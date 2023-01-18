<template>
	<div>
		<nuxt-link :to="'guides/' + guide.id" class="text-decoration-none">
			<v-card>
				<v-card-text>
					<span class="text-h6 text-mainText">{{
						guide.attributes.title
					}}</span>
					-
					<span class="font-weight-light text-mainText">
						by @{{
							guide.attributes.author.data.attributes.username
						}}
						- on
						{{ guide.attributes.createdAt.split("T")[0] }}
					</span>
				</v-card-text>
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
