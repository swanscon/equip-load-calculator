import { defineStore } from "pinia";

export const useCalcStore = defineStore('calculator', {
    state: () => ({ 
        maxLoad: '',
        curLoad: '',
        curEndurance: '',
        status: 'Your current load status is ',
        isCalculated: false,
        isAdvanced: false,
        checkedItems: [],
        n: 45,
    }),
    getters: {

    },
    actions: {
        reset() {
            this.maxLoad = '';
            this.curLoad = '';
            this.curEndurance = '';
            this.checkedItems = [];
        },
	},
})