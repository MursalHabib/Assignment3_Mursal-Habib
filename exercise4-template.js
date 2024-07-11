/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

function subArray(arr) {
	// your code here
	//-Infinity untuk value yang paling kecil dari angka berapapun
	let maxSum = 0;
	let start = 0;
	let end = 0;
	for (let i = 0; i < arr.length; i++) {
		let currentSum = 0;
		for (let j = i; j < arr.length; j++) {
			currentSum += arr[j];
			console.log("curr", currentSum);
			if (currentSum > maxSum) {
				maxSum = currentSum;
				console.log("max", maxSum);
				start = i;
				end = j;
			}
		}
	}
	console.log("start", start);
	console.log("end", end);
	return [arr.slice(start, end + 1), maxSum];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
