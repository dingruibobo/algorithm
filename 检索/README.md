在列表中查找数据有两种方式：顺序查找和二分查找</br>
顺序查找适用于元素随机排列的列表；二分查找适用于元素已排序的列表。二分查找效率更高，但是你必须在进行查找之前花费额外的时间将列表中的元素排序。

## 1、顺序查找
#### 1.1、查找指定元素
```
function seqSearch(arr, data) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === data)
			return i
	}
	return -1
}
// 测试
let arr = [  23, 2, 10, 51, 100, 66, 73, 3, 90]
console.log(seqSearch(arr, 51));
```

#### 1.2、顺序查找 查找最小值
```
function findMin(arr) {
	let min = arr[0];   // 默认第一个元素就是的当前的最小值， 后面循环从第二个元素开始
	for(let i = 1; i < arr.length; i++) {
		if(arr[i] < min) min = arr[i]
	}
	return min;
}
// 测试
let arr = [  23, 2, 10, 51, 100, 66, 73, 3, 90]
console.log(findMin(arr, 51));
```

## 2、二分查找
```
function bindSearch(arr, data) {
	let lower = 0;
	let upper = arr.length - 1;
	while(lower <= upper) {
		console.log(lower, upper)
		let mid = Math.floor((lower + upper) / 2)
		if(arr[mid] > data) {
			upper = mid - 1;
		} else if(arr[mid] < data) {
			lower = mid + 1;
		} else {
			return mid
		}
	}
	return -1
}
// 测试
let arr = [ 2, 3, 10, 23, 51, 66, 73, 90, 100]
console.log(bindSearch(arr, 51));
```

## 对比
在这个超高速处理器的时代，除非面向大数据集，否则要测量顺序查找和二分查找耗时上 的区别变得越来越困难。然而，处理大数据集时二分查找要要比顺序查找速度快，这一观 点在数学理论上已经得到了证明。这是由于在决定算法性能的每一步循环嵌套中，二分查 找减少了一半的查找量（数组中的元素）。


