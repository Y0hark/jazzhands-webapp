import axios from 'axios';

const LOCAL_BASE_URL = 'http://localhost:1339/api/';
const HOSTED_BASE_URL = 'https://yohark.de/jazzhands/';
const PAGINATION_PARAMS = '?pagination[pageSize]=30';
const POPULATE_PARAMS = '&populate=*';
const SORTING_PARAMS = '&sort=createdAt:desc';
const POPULATE_PARAMS_SOLE_ALL = '?populate=*';
const POPULATE_PARAMS_SOLE_CONTENT = '?populate[content][populate]=*';


class Http {

	constructor() {}

	static async get(url) {
		return axios.get(HOSTED_BASE_URL + url);
	}

}

class Api {

	constructor() {}

	static async getMembers() {
		return (await Http.get('members' + PAGINATION_PARAMS)).data;
	}

	static async getConfig() {
		return (await Http.get('config')).data;
	}

	static async getWelcomeMessage() {
		return (await Http.get('homepage')).data;
	}

	static async getNews() {
		return (await Http.get('news' + PAGINATION_PARAMS + SORTING_PARAMS + POPULATE_PARAMS)).data;
	}

	static async getGuides() {
		return (await Http.get('guides' + PAGINATION_PARAMS + SORTING_PARAMS + POPULATE_PARAMS)).data;
	}

	static async getGuide(id) {
		return (await Http.get('guides/' + id + POPULATE_PARAMS_SOLE_ALL)).data;
	}

	static async getGuideContent(id) {
		return (await Http.get('guides/' + id + POPULATE_PARAMS_SOLE_CONTENT)).data;
	}

	static async getFeed() {
		const news = await this.getNews();
		const guides = await this.getGuides();
		const feed = {
			news: news,
			guides: guides
		}
		return feed;
	}

}


export default Api;