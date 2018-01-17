// let player_num_select = $("#player_num_select")
// let num_of_players = eval(player_num_select.val())

// let score_bars = $("#score_bars")
// let score_bar_html = $("#score_bars").html()

// player_num_select.on("change", function () {
//     num_of_players = eval(player_num_select.val())
// })

// $(document).ready(function () {
//     let score_to_add = 0
//     let scores = []
//     for (let i = num_of_players - 1; i >= 0; i--) {
//         scores[i] = 0
//     }
    
//     score_bars_init(num_of_players)

//     // eval( .substring(1))
// })


// let score_bars_init = function(n_players){
//     let score_bars_html = ""
//     for (let i = 0; i < n_players; i++) {
//         score_bars_html += score_bar_html.format({player: "i", percent: "0", score: "&ensp;&ensp;0"})
//     }

//     score_bars.html(score_bars_html)
// }


// // 格式化字符串
// String.prototype.format = function(args) {
// 	var result = this;
// 	if (arguments.length > 0) {    
// 		if (arguments.length == 1 && typeof (args) == "object") {
// 			for (var key in args) {
// 				if(args[key]!=undefined){
// 					var reg = new RegExp("({" + key + "})", "g");
// 					result = result.replace(reg, args[key]);
// 				}
// 			}
// 		}
// 		else {
// 			for (var i = 0; i < arguments.length; i++) {
// 				if (arguments[i] != undefined) {
// 					var reg = new RegExp("({[" + i + "]})", "g");
// 					result = result.replace(reg, arguments[i]);
// 				}
// 			}
// 		}
// 	}
// 	return result;
// }


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
				this.players[this.checkedPlayers[index]].value += this.toAdd
			}
			this.toAdd = 0
			let max_score = 0
			for (let i = this.selected - 1; i >= 0; i--) {
				if (max_score < this.players[i].value) {
					max_score = this.players[i].value
				}
			}
			for (let i = this.selected - 1; i >= 0; i--) {
				this.players[i].percentage = this.players[i].value / max_score * 100
			}
			this.checkedPlayers = []
		}
	},
})
