function lcs(word1, word2) {
	let max = 0;     // 存放最长公共子串的长度
	let index = 0;   
	// 初始化二维数组
	let lcsArr = new Array(word1.length);
	for(let i = 0; i <= word1.length; i++) {
		lcsArr[i] = new Array(word2.length)
		for(let j = 0; j <= word2.length; j++) {
			lcsArr[i][j] = 0
		}
	}
	// 匹配
	for(let i = 0; i <= word1.length; i++) {
		for(let j = 0; j <= word2.length; j++) {
			if(i == 0 || j == 0) {
				lcsArr[i][j] = 0;
			} else {
				if(word1[i - 1] === word2[j - 1]) {
					lcsArr[i][j] = lcsArr[i-1][j-1] + 1;
				} else {
					lcsArr[i][j] = 0;
				}
			}
			if(max < lcsArr[i][j]) {
				max = lcsArr[i][j];
				index = i;
			}
		}
	}
	let rsuStr = "";
	if(max == 0) {
		return rsuStr
	} else {
		for(var i = index-max; i < index; i++) {
			rsuStr += word2[i]
		}
		return rsuStr
	}
}
console.log(lcs('rravena', 'hgavecwfff'))


