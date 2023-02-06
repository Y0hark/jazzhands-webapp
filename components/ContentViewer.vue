<template>
	<div>
		<v-card-text v-if="content.__component == 'content.media'">
			<img
				:src="content.media_content.data.attributes.url"
				:alt="content.media_content.data.attributes.name"
			/>
		</v-card-text>
		<v-card-text
			v-if="content.__component == 'content.text'"
			v-html="content.text_content"
			class="ml-4"
		>
		</v-card-text>
		<v-card-text v-if="content.__component == 'content.link'">
			<a
				:href="content.link_content"
				target="_blank"
				rel="noopener noreferrer"
			>
				{{ content.link_name }}
			</a>
		</v-card-text>
	</div>
</template>
<script>
export default {
	props: {
		content: {
			type: Object,
			required: true,
		},
	},
};
</script>
<style>
h1,
h2,
h3,
h4,
h5,
h6 {
	margin-top: 1rem;
	margin-bottom: 1rem;
}
ul,
ol {
	margin-left: 1rem;
}
</style>
