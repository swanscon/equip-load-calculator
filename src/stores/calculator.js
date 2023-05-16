import { defineStore } from "pinia";

export const useCalcStore = defineStore('calculator', {
    state: () => {
        return {
            maxLoad: '',
			curLoad: '',
			curEndurance: '',
			status: 'Your current load status is ',
			isCalculated: false,
			isAdvanced: false,
			checkedItems: [],
        }
    },
    actions: {
		onMax(e) {
			this.maxLoad = e.maxLoad.value,
			this.curLoad = e.curLoad.value
		},
		onAdvanced(e) {
			this.curEndurance = e.curEndurance.value
		},
		toggle() {
			if (!this.isCalculated) {
				this.isCalculated = true;
			} else {
				this.isCalculated = false;
				this.maxLoad = '';
				this.curLoad = '';
				this.curEndurance = '';
			}
		},
		advanced() {
			if (!this.isAdvanced) {
				this.isAdvanced = true;
			} else {
				this.isAdvanced = false;
				this.maxLoad = '';
				this.curLoad = '';
				this.curEndurance = '';
			}
		},
		roundedTo(n, place) {
			return +(Math.round(n + "e+" + place) + "e-" + place)
		},
		btnForward() {
			let audio = new Audio('/er-new.mp3')
			audio.play()
		},
		btnBack() {
			let audio = new Audio('/er-reset.mp3')
			audio.play()
		},
		calcMax(n) {
			let curLoad = 45
			if (n > 8 && n < 13) {
				curLoad += ((n - 8)*1.6)
			} else if (n >= 13 && n < 21) {
				curLoad = 52.9 + ((n - 13)*1.6)
			} else if (n >= 21 && n < 26) {
				curLoad = 65.6 + ((n - 21)*1.6)
			} else if (n >= 26 && n < 29) {
				curLoad = 73 + ((n - 26)*1.1)
			} else if (n == 29) {
				curLoad = 76.4
			} else if (n >= 30 && n < 37) {
				curLoad = 77.6 + ((n - 30)*1.3)
			} else if (n >= 37 && n < 39) {
				curLoad = 86.8 + ((n - 37)*1.3)
			} else if (n >= 39 && n < 46) {
				curLoad = 89.5 + ((n - 39)*1.4)
			} else if (n >= 46 && n < 49) {
				curLoad = 99.4 + ((n - 46)*1.4)
			} else if (n == 49 || n == 50) {
				curLoad = 103.7 + ((n - 49)*1.5)
			} else if (n >= 51 && n < 54) {
				curLoad = 106.6 + ((n - 51)*1.5)
			} else if (n >= 54 && n < 61) {
				curLoad = 111 + ((n - 54)*1.5)
			} else if (n == 61) {
				curLoad = 121
			} else if (n >= 62 && n < 66) {
				curLoad = 122.1 + (n - 62)
			} else if (n >= 66 && n < 70) {
				curLoad = 126.2 + (n - 66)
			} else if (n >= 70 && n < 74) {
				curLoad = 130.3 + (n - 70)
			} else if (n >= 74 && n < 78) {
				curLoad = 134.4 + (n - 74)
			} else if (n >= 78 && n < 82) {
				curLoad = 138.5 + (n - 78)
			} else if (n >= 82 && n < 86) {
				curLoad = 142.6 + (n - 82)
			} else if (n >= 86 && n < 90) {
				curLoad = 146.7 + (n - 86)
			} else if (n >= 90 && n < 94) {
				curLoad = 150.8 + (n - 90)
			} else if (n >= 94 && n < 98) {
				curLoad = 154.9 + (n - 94)
			} else if (n == 98 || n == 99) {
				curLoad = 159 + (n - 98)
			}
			if (this.checkedItems.includes("Arsenal Charm")) {
				curLoad *= 1.15
			}
			if (this.checkedItems.includes("Arsenal Charm +1")) {
				curLoad *= 1.17
			}
			if (this.checkedItems.includes("Great-Jar's Arsenal")) {
				curLoad *= 1.19
			}
			if (this.checkedItems.includes("Erdtree's Favor")) {
				curLoad *= 1.05
			}
			if (this.checkedItems.includes("Erdtree's Favor +1")) {
				curLoad *= 1.065
			}
			if (this.checkedItems.includes("Erdtree's Favor +2")) {
				curLoad *= 1.08
			}
			return curLoad
		},
		clear() {
		this.checkedItems = [];
		},
	},
})