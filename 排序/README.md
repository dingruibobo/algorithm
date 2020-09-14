# 准备工作
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
# 1、冒泡排序
之所以叫冒泡排序是因为使用这种排序算法排序时，数据值会像气泡一样从数组的一端漂 浮到另一端。假设正在将一组数字按照升序排列，较大的值会浮动到数组的右侧，而较小的值则会浮动到数组的左侧。之所以会产生这种现象是因为算法会多次在数组中移动，比较相邻的数据，当左侧值大于右侧值时将它们进行互换。
### 1.1、算法描述
- 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
- 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
- 针对所有的元素重复以上的步骤，除了最后一个；
- 重复步骤1~3，直到排序完成。
### 1.2、代码实现
```
// 冒泡升序
function bubbleSort(arr) {
	let len = arr.length
	for (let outer = len - 1; outer > 2; outer--) {
		for (let inner = 0; inner < outer; inner++) {
			if (arr[inner] > arr[inner + 1]) {    // 相邻元素凉凉比较
				swap(arr, inner, inner + 1)   // 元素交换
			}
		}
	}
}
```
# 2、选择排序
选择排序从数组的开头开始，将第一个元素和其他元素进行比较。检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从 第二个位置继续。这个过程一直进行，当进行到数组的倒数第二个位置时，所有的数据便 完成了排序。</br>
选择排序会用到嵌套循环。外循环从数组的第一个元素移动到倒数第二个元素；内循环从第 二个数组元素移动到最后一个元素，查找比当前外循环所指向的元素小的元素。每次内循环 迭代后，数组中最小的值都会被赋值到合适的位置。</br>
### 2.1、算法描述
n个记录的直接选择排序可经过n-1趟直接选择排序得到有序结果。具体算法描述如下
- 初始状态：无序区为R[1..n]，有序区为空
- 第i趟排序(i=1,2,3…n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区
- n-1趟结束，数组有序化了
### 2.2、代码描述
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












