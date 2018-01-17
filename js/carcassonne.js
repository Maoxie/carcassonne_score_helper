app = new Vue({
	el: '#app',
	data: {
		selected: 3,
		playerNumOptions: [
			{ text: '2人', value: 2 },
			{ text: '3人', value: 3 },
			{ text: '4人', value: 4 },
			{ text: '5人', value: 5 },
			{ text: '6人', value: 6 },
		],
		players: [],
		toAdd: 0,
		checkedPlayers: []
	},
	created: function () {
		this.players_init()
	},
	methods: {
		players_init: function(event) {
			this.players = []
			for (let i = this.selected - 1; i >= 0; i--) {
				this.players[i] = { id: i, score: 0, percentage: 0, color: 0 }
				this.checkedPlayers = []
			}
		},
		toAddIncrease: function(point) {
			this.toAdd += point
			if (this.toAddd < 0) {
				this.toAdd = 0
			}
		},
		toAddClear: function() {
			this.toAdd = 0
		},
		commitAddScore: function() {
			if (this.toAdd <= 0 || this.checkedPlayers.length <=0 ) {
				return
			}
			for (let index in this.checkedPlayers) {
				this.players[this.checkedPlayers[index]].score += this.toAdd
			}
			this.toAdd = 0
			let max_score = 0
			for (let i = this.selected - 1; i >= 0; i--) {
				if (max_score < this.players[i].score) {
					max_score = this.players[i].score
				}
			}
			for (let i = this.selected - 1; i >= 0; i--) {
				this.players[i].percentage = this.players[i].score / max_score * 100
			}
			this.checkedPlayers = []
		}
	},
})
