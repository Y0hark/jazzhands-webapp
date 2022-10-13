export const state = () => ({
  count: 0,
  members: [],
  config: {},
})

export const mutations = {
	incrementCounter(state) {
		state.count++
	},

	initializeLocalStorage(state) {
		if (localStorage.getItem('members') === null) {
			localStorage.setItem('members', JSON.stringify(state.members));
		} else {
			state.members = JSON.parse(localStorage.getItem('members'));
		}
	},
	
	setMembers(state, members) {
		state.members = members
	},

	setConfig(state, config) {
		state.config = config
	}
}
