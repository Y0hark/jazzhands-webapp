<template>
	<div>
		<v-container grid-list-xs>
			<v-card>
				<v-card-text class="text-h3"> {{ guide.title }}</v-card-text>
				<v-card-text class="text-h6">
					by @{{ guide.attributes.author.data.attributes.username }} -

					{{ guide.attributes.createdAt.split("T")[0] }}
				</v-card-text>
				<ContentViewer
					v-for="(content, index) in contents.attributes.content"
					:key="content.id + '' + index"
					:content="content"
				/>
			</v-card>
		</v-container>
	</div>
</template>
<script>
import Api from "../../services/api";
export default {
	name: "guidesIdPage",
	async setup() {
		const route = useRoute();
		const [{ data: guide }, { data: contents }] = await Promise.all([
			Api.getGuide(route.params.id),
			Api.getGuideContent(route.params.id),
		]);
		return { guide, contents };
	},
};
</script>
<style></style>
