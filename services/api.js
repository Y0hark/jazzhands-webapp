import axios from 'axios';

const LOCAL_BASE_URL = 'http://localhost:1339/api/';
const HOSTED_BASE_URL = 'https://yohark.de/jazzhands/';
const PAGINATION_PARAMS = '?pagination[pageSize]=30';


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

}


export default Api;