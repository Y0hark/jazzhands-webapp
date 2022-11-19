import axios from 'axios';

const LOCAL_BASE_URL = 'http://localhost:1339/api/';
const HOSTED_BASE_URL = 'https://yohark.de/jazzhands/';
const PAGINATION_PARAMS = '?pagination[pageSize]=30';
const POPULATE_PARAMS = '&populate=*';


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
		return (await Http.get('news' + PAGINATION_PARAMS + POPULATE_PARAMS)).data;
	}

	static async getGuides() {
		return (await Http.get('guides' + PAGINATION_PARAMS + POPULATE_PARAMS)).data;
	}

}


export default Api;