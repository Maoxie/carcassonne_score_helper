let player_num_select = $("#player_num_select")
let num_of_players = eval(player_num_select.val())

let score_bars = $("#score_bars")
let score_bar_html = $("#score_bars").html()

player_num_select.on("change", function () {
    num_of_players = eval(player_num_select.val())
})

$(document).ready(function () {
    let score_to_add = 0
    let scores = []
    for (let i = num_of_players - 1; i >= 0; i--) {
        scores[i] = 0
    }
    
    score_bars_init(num_of_players)

    // eval( .substring(1))
})


let score_bars_init = function(n_players){
    let score_bars_html = ""
    for (let i = 0; i < n_players; i++) {
        score_bars_html += score_bar_html.format({player: "i", percent: "0", score: "&ensp;&ensp;0"})
    }

    score_bars.html(score_bars_html)
}


// 格式化字符串
String.prototype.format = function(args) {
	var result = this;
	if (arguments.length > 0) {    
		if (arguments.length == 1 && typeof (args) == "object") {
			for (var key in args) {
				if(args[key]!=undefined){
					var reg = new RegExp("({" + key + "})", "g");
					result = result.replace(reg, args[key]);
				}
			}
		}
		else {
			for (var i = 0; i < arguments.length; i++) {
				if (arguments[i] != undefined) {
					var reg = new RegExp("({[" + i + "]})", "g");
					result = result.replace(reg, arguments[i]);
				}
			}
		}
	}
	return result;
}
