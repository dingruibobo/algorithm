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

**总结 速度：插入 > 选择 > 冒泡**

## 4、希尔排序
希尔排序是希尔（Donald Shell） 于1959年提出的一种排序算法。希尔排序也是一种插入排序，它是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序，同时该算法是冲破O(n2）的第一批算法之一。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。</br>
先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序</br>
增量开始为gap=length/2，缩小增量继续以gap = gap/2的方式，直到gap=1后,当gap为1时这时候也就相当于对整个数组进行插入排序
```
function shellSort(arr) {
	for(let faction = Math.floor(arr.length/2); faction >=1; faction = Math.floor(faction/2)) {
		for(let i = faction; i < arr.length; i++) {
			for(j = i-faction; j>=0 && arr[j] > arr[j+faction]; j-= faction) {
				let temp = arr[j];
				arr[j] = arr[j+faction];
				arr[j+faction] = temp
			}
		}
	}
}
```

## 5、归并排序
基本思想：先递归的拆分数组，再合并数组</br>
（1）将一个数组拆成A、B两个小组，两个小组继续拆，直到每个小组只有一个元素为止。</br>
（2）按照拆分过程逐步合并小组，由于各小组初始只有一个元素，可以看做小组内部是有序的，合并小组可以被看做是合并两个有序数组的过程。</br>
（3）对左右两个小数列重复第二步，直至各区间只有1个数。</br>
下面对数组【42,20,17,13,28,14,23,15】进行归并排序，模拟排序过程如下：</br>
　　第一步：拆分数组，一共需要拆分三次（logN）；</br>
　　　　第一次拆成【42,20,17,13】，【28,14,23,15】，</br>
　　　　第二次拆成【42,20】，【17,13】，【28,14】，【23,15】，、</br>
　　　　第三次拆成【42】，【20】，【17】，【13】，【28】，【14】，【23】，【15】；</br>
　　第二步：逐步归并数组，采用合并两个有序数组的方法，每一步其算法复杂度基本接近于O(N)</br>
　　　　第一次归并为【20,42】，【13,17】，【14,28】，【15,23】</br>
　　　　第二次归并为【13,17,20,42】，【14,15,23,28】，</br>
　　　　第三次归并为【13, 14, 15, 17, 20, 23, 28, 42】</br>
递归代码实现
```
// 合并两个有序数组
function mergeArr(a, b) {
	let tempArr = [];
	let aLen = a && a.length;
	let blen = b && b.length;
	let i = 0
	let j = 0;
	while(i < aLen && j < blen) {
		if(a[i] < b[j]) {
			tempArr.push(a[i++])
		} else {
			tempArr.push(b[j++])
		}
	}
	while(i < aLen) {
		tempArr.push(a[i++])
	}
	while(j < blen) {
		tempArr.push(b[j++])
	}
	return tempArr;
}
// 归并
function mergeSort(arr) {
	if(arr.length == 1) {
		return arr
	}
	
	let min = Math.floor(arr.length/2);
	let leftArr = arr.slice(0, min);
	let rightArr = arr.slice(min)
	return mergeArr(mergeSort(leftArr), mergeSort(rightArr))
}
```
参考链接：https://www.cnblogs.com/CassieHouse/p/9561262.html
## 6、快速排序
快速排序是处理大数据集最快的排序算法之一。它是一种分而治之的算法，通过递归的方 式将数据依次分解为包含较小元素和较大元素的不同子序列。该算法不断重复这个步骤直 到所有数据都是有序的。</br>
这个算法首先要在列表中选择一个元素作为基准值（pivot）。数据排序围绕基准值进行， 将列表中小于基准值的元素移到数组的底部，将大于基准值的元素移到数组的顶部。
```
function quickSort(arr, begin, end) {
	if(begin >= end) return
	let left = begin;
	let right = end;
	let povit = arr[left];  // 基准
	let temp;
	while(left < right) {
		while(arr[right] >= povit && left < right) {
			right--
		}
		while(arr[left] <= povit && left < right) {
			left++
		}
		// 交换左右指针数据
		temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;
	}
	
	[arr[begin], arr[left]] = [arr[left], arr[begin]]
	
	quickSort(arr, begin, left-1)
	quickSort(arr, left+1, end)
}
// 测试
let arr = [];
for (let i = 0; i < 10; i++) {
	arr.push(Math.floor(Math.random() * 100) + 1)
}
quickSort(arr, 0, arr.length-1)
console.log(arr)
```
参考链接：https://www.cnblogs.com/siegaii/p/10744645.html
https://segmentfault.com/a/1190000015488549










