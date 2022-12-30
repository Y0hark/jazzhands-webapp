import * as core from "@vueuse/core";
import { defineStore } from "pinia";

export const useStore = defineStore( "main", {
	  state: () => ({
		counter: 0,
		members: core.useLocalStorage("members", []),
		config: core.useLocalStorage("config", {}),
	  }),
	  
	 getters: {
			getCounter: (state) => state.counter,

			getMembers: (state) => state.members,

			getConfig: (state) => state.config,
	  },

	  actions: {
		reset() {
				this.counter = 0;
		},

		increment() {
				this.counter++;
		},
		
		addMember(member) {
			this.members.push(member);
		},
	  },
});