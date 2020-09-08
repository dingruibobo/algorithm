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

```
// 冒泡升序
function bubbleSort(arr) {
	let len = arr.length
	for (let outer = len - 1; outer > 2; outer--) {
		for (let inner = 0; inner < outer; inner++) {
			if (arr[inner] > arr[inner + 1]) {
				swap(arr, inner, inner + 1)
			}
		}
	}
}
```
## 2、选择排序
选择排序从数组的开头开始，将第一个元素和其他元 素进行比较。检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从 第二个位置继续。这个过程一直进行，当进行到数组的倒数第二个位置时，所有的数据便 完成了排序。</br>
选择排序会用到嵌套循环。外循环从数组的第一个元素移动到倒数第二个元素；内循环从第 二个数组元素移动到最后一个元素，查找比当前外循环所指向的元素小的元素。每次内循环 迭代后，数组中最小的值都会被赋值到合适的位置。
```
// 升序
function selectionSort(arr) {
	let len = arr.length;
	for(let i = 0; i < len-2; i++) {
		let minIndex = i
		for(let j = i+1; j < len-1; j++) {
			if(arr[minIndex] > arr[j]) {
				minIndex = j
			}
		}
		console.log(111, i, minIndex)
		swap(arr, i, minIndex)
	}
}
```
## 3、插入排序
插入排序有两个循环。外循环将数组元素挨个移动，而内循环则对外循环中选中的元素及 它后面的那个元素进行比较。如果外循环中选中的元素比内循环中选中的元素小，那么数 组元素会向右移动，为内循环中的这个元素腾出位置
```
function insertionSort(arr) {
	let temp, inner;
	for(let outer = 1; outer < arr.length; outer++) {
		temp = arr[outer];
		inner = outer
		while(inner>0 && (arr[inner-1] >= temp)) {
			arr[inner] = arr[--inner]
		}
		arr[inner] = temp
	}
}

```







