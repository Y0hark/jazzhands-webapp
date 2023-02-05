<template>
	<div>
		<v-container grid-list-xs>
			<v-card
				v-if="guideLoading"
				:loading="guideLoading"
				class="card-main"
			>
				<v-card-title class="text-h6 text-mainText">
					Loading...
				</v-card-title>
			</v-card>
			<v-card>
				<v-card-text class="text-h3 text-mainText">
					{{ guide.title }}</v-card-text
				>
				<v-card-text class="text-h6 text-mainText">
					by @{{ guide.attributes.author.data.attributes.username }} -

					{{ guide.attributes.createdAt.split("T")[0] }}
				</v-card-text>
				<ContentViewer
					v-for="(content, index) in contents.attributes.content"
					:key="content.id + '' + index"
					:content="content"
					class="text-mainText"
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
		const guideLoading = ref(true);
		const route = useRoute();
		const [{ data: guide }, { data: contents }] = await Promise.all([
			Api.getGuide(route.params.id),
			Api.getGuideContent(route.params.id),
		]);
		guideLoading.value = false;
		return { guide, contents, guideLoading };
	},
};
</script>
<style></style>
