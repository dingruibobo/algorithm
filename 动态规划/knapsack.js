/* 背包问题是算法研究中的一个经典问题。试想你是一个保险箱大盗，打开了一个装满奇珍 异宝的保险箱，但是你必须将这些宝贝放入你的一个小背包中。
保险箱中的物品规格和价 值不同。你希望自己的背包装进的宝贝总价值最大
如果在我们例子中的保险箱中有 5 件物品，它们的尺寸分别是 3、4、7、8、9，而它们的 价值分别是 4、5、10、11、13，且背包的容积为 16，
那么恰当的解决方案是选取第三件 物品和第五件物品，他们的总尺寸是 16，总价值是 23。 */

function max (a, b) {
	return a>b ? a :b
}
// 递归解决
function knapsack(capacity, size, val, n) {
	if(n == 0 || capacity == 0) {
		return 0;
	}
	if(size[n-1] > capacity) {
		return knapsack(capacity, size, val, n-1)
	} else {
		return max(val[n-1] + knapsack(capacity-size[n-1], size, val, n-1),
					knapsack(capacity, size, val, n-1))
	}
}


// 使用递归方案能解决的问题，都能够使用动态规划技巧来解决，而且还能够提高程序的执行效率。背包问题绝对可以用动态规划的方式来重写，要做的只是使用一个数组来保存临 时解，直到获得最终的解为止。
// 动态规划解决
function dKnapsack(capacity, size, val, n) {
	let arr = [];
	// 初始化arr
	for(let i = 0; i <= capacity+1; i++) {
		arr[i] = [];
	}
	for(let i = 0; i <= n; i++) {
		for(let j = 0; j <= capacity; j++) {
			if(i == 0 || j == 0) {
				arr[i][j] = 0;
			} else if (size[i - 1] <= j) {
				arr[i][j] = max(val[i - 1] + arr[i-1][j-size[i-1]], arr[i-1][j])
			} else {
				arr[i][j] = arr[i - 1][j]
			}
		}
	}
	return arr[n][capacity]
}

let val = [13, 4, 11, 5, 10]
let size = [ 9, 3, 8, 4, 7]
let capacity = 16;
let n = 5
// console.log(knapsack(capacity, size, val, n))  // 23
console.log(dKnapsack(capacity, size, val, n))  // 23




