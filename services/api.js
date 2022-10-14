import axios from 'axios';

const LOCAL_BASE_URL = 'http://localhost:1339/api/';
const HOSTED_BASE_URL = 'http://yohark.de:1340/api/';


class Http {

	constructor() {}

	static async get(url) {
		return axios.get(HOSTED_BASE_URL + url);
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