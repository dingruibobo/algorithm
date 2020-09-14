// 1 1 2 3 5 8 13 21 34...

// 递归
function recurFib(n) {
	if(n == 1 || n == 2) {
		return 1
	}
	return recurFib(n-1) + recurFib(n-2)
}
console.log(recurFib(7))

// 非递归-动态规划
function dtghFib(n) {
	let arr = [];
	for(let i = 0; i < n; i++) {
		arr[i] = 0
	}
	arr[0] = 1;
	arr[1] = 1;
	for(let i = 2; i < n; i++) {
		arr[i] = arr[i-1] + arr[i-2]
	}
	return arr[n-1]
}
console.log(dtghFib(7))

// 非递归-动态规划-不用定义临时数组arr
function dtghFib1(n) {
	let before1 = 1;
	let before2 = 1;
	let rsu = 1;
	for(let i = 2; i < n; i++) {
		rsu = before1 + before2;
		before1 = before2;
		before2 = rsu;
	}
	return rsu;
}
console.log(dtghFib1(9))