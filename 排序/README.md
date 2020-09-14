## 准备工作
我们先写一些方法用于交换数组元素和字符串输出
```
function swap(arr, index1, index2) {
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function toString1(arr) {
	let retstr = "";
	for (var i = 0; i < arr.length; ++i) {
		retstr += arr[i] + " ";
		if (i > 0 & i % 10 == 0) {
			retstr += "\n";
		}
	}
	return retstr;
}

// 测试

let arr = [];
for (let i = 0; i < 10; i++) {
	arr.push(Math.floor(Math.random() * 100) + 1)
}
console.log("原始:\n", toString1(arr))
// 调用排序方法
// bubbleSort(arr)
//selectionSort(arr)
console.log("排序后:\n", toString1(arr))
```
## 1、冒泡排序
之所以叫冒泡排序是因为使用这种排序算法排序时，数据值会像气泡一样从数组的一端漂 浮到另一端。假设正在将一组数字按照升序排列，较大的值会浮动到数组的右侧，而较小的值则会浮动到数组的左侧。之所以会产生这种现象是因为算法会多次在数组中移动，比较相邻的数据，当左侧值大于右侧值时将它们进行互换。
