<template>
	<v-container grid-list-xs>
		<div>
			<img
				src="../assets/images/logo.jpg"
				alt="logo"
				class="mx-auto d-block mb-6 logo rounded-circle neon-logo"
			/>
			<v-card :loading="bossMessageLoading" class="mb-2">
				<v-card-title class="text-h6 text-mainText">
					Boss' message
				</v-card-title>
			</v-card>
			<div
				v-if="homeMessage === ''"
				class="text-h6 text-mainText pa-6"
				align="center"
			>
				That's a bit sad but the boss hasn't posted any message yet :(
			</div>
			<v-card v-if="homeMessage != ''">
				<v-card-text v-html="homeMessage" class="text-mainText" />
			</v-card>
			<v-card :loading="feedLoading" class="mt-10">
				<v-card-title class="text-h6 text-mainText">
					Feed
				</v-card-title>
			</v-card>
			<div
				v-if="
					feed.news[0] === undefined && feed.guides[0] === undefined
				"
				class="text-h6 text-mainText pa-6"
				align="center"
			>
				That's a bit sad but there isn't any post yet :(
			</div>
			<div
				v-if="feed.news[0]"
				v-for="feedNews in feed.news"
				:key="feedNews.attributes.slug"
			>
				<NewsCard :news="feedNews" />
			</div>
			<div
				v-if="feed.guides[0]"
				v-for="feedGuide in feed.guides"
				:key="feedGuide.attributes.slug"
			>
				<GuideCard :guide="feedGuide" />
			</div>
		</div>
	</v-container>
</template>
<script>
import Api from "../services/api";

export default {
	name: "homePage",
	data() {
		return {
			homeMessage: "",
			bossMessageLoading: true,
			feed: {
				news: [],
				guides: [],
			},
			feedLoading: true,
		};
	},
	async mounted() {
		Api.getWelcomeMessage().then((response) => {
			this.homeMessage = response.data.attributes.text_content;
			this.bossMessageLoading = false;
		});

		Api.getFeed().then((response) => {
			const tempFeed = response;
			try {
				this.feed.news.push(tempFeed.news.data[0]);
				this.feed.news.push(tempFeed.news.data[1]);
				this.feed.guides.push(tempFeed.guides.data[0]);
			} catch (error) {}
			this.feedLoading = false;
		});
	},
};
</script>
<style>
.logo {
	width: 200px;
	height: 200px;
	/* neon #460969 effect */
	box-shadow: 0 0 10px #460969, 0 0 20px #460969, 0 0 40px #460969,
		0 0 80px #460969, 0 0 160px #460969;
	/* glowing effect */
	animation: glow 2s ease-in-out infinite alternate;
}
/* glowing animation */
@keyframes glow {
	from {
		box-shadow: 0 0 10px #460969, 0 0 20px #460969, 0 0 40px #460969,
			0 0 80px #460969, 0 0 160px #460969;
	}
	to {
		box-shadow: 0 0 20px #460969, 0 0 40px #460969, 0 0 80px #460969,
			0 0 160px #460969, 0 0 320px #460969;
	}
}
</style>
