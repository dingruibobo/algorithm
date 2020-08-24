/* // 初始化二维数组
Array.matrix =  function(numrows, numcols, initial) {
	var arr = []
	for(let i = 0; i < numrows; i++) {
		var columns = []
		for(let j = 0; j < numcols; j++) {
			columns[j] = initial
		}
		arr[i] = columns
	}
	return arr
}

function point(x, y) {
	this.x = x;
	this.y = y;
}
console.log(Array.matrix(2, 5, new point(Math.random(10), Math.random(10)))) */

// 1. 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩 的方法。
function stu(name, score) {
	this.name = name
	this.score = score
}

var stus = []
stus.push(new stu('aa', 90))
stus.push(new stu('bb', 100))
stus.push(new stu('cc', 50))
console.log(stus)

function add(before, current) {
	if( typeof before === 'number') {
		return before + current.score
	} else {
		return before.score + current.score
	}
}

function getAvg(stus) {
	let scoreAvg = 0;
	let sum = stus.reduce(add)
	scoreAvg = sum/stus.length
	return scoreAvg
}

console.log(getAvg(stus))
