<template>
	<v-bottom-navigation
		mode="shift"
		fixed="true"
		:model-value="this.$route.name"
		mandatory="true"
		class="text-mainText"
	>
		<v-btn
			v-for="(btn, index) in buttons"
			:key="index"
			:to="btn.link"
			:value="btn.value"
		>
			<v-icon>{{ btn.icon }}</v-icon>

			<span>{{ btn.text }}</span>
		</v-btn>
	</v-bottom-navigation>
</template>
<script>
export default {
	data() {
		return {
			buttons: [
				{
					value: "home",
					icon: "mdi-home",
					text: "Home",
					link: "/",
				},
				{
					value: "news",
					icon: "mdi-newspaper",
					text: "News",
					link: "/news",
				},
				{
					value: "guides",
					icon: "mdi-book-open-variant",
					text: "Guides",
					link: "/guides",
				},
				{
					value: "rankings",
					icon: "mdi-chart-box",
					text: "Rankings",
					link: "/rankings",
				},
			],
		};
	},
};
</script>
<style></style>
