import axios from 'axios';

const BASE_URL = 'http://localhost:1339/api/';


class Http {

	constructor() {}

	static async get(url) {
		return axios.get(BASE_URL + url);
	}

}

class Api {

	constructor() {}

	static async getMembers() {
		return (await Http.get('members')).data;
	}

	static async getConfig() {
		return (await Http.get('config')).data;
	}

}


export default Api;