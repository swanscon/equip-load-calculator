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
        round() {
            let num = this.maxLoad
            return Math.round((num*.2999 + Number.EPSILON) * 100 ) / 100;
        },
        medium() {
            let num = this.maxLoad
            return Math.round((num*.6999 + Number.EPSILON) * 100 ) / 100;
        },
        heavy() {
            let num = this.maxLoad
            return Math.round((num*.9999 + Number.EPSILON) * 100 ) / 100;
        },
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