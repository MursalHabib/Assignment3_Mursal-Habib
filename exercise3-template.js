/**
  Diberikan function yang menerima 2 parameter, yaitu :
    parameter 1: array of integer (unsorted) 
    parameter 2: integer. 
  Function tersebut akan mengembalikan array 2 dimensi.
  Masing-masing dimensi array terdiri 2 angka yang jika dijumlahkan mempunyai nilai yang sama dengan parameter 2.
 */

function sumArray(array, jumlah) {
	// your code here
	let result = [];
	for (let i = 0; i < array.length; i++) {
		//for loop kedua untuk perbandingan dengan loop pertama
		for (let j = i + 1; j < array.length; j++) {
			//untuk mengecek jika penjumlahan value di loop pertama & kedua sama dengan jumlah array
			if (array[i] + array[j] === jumlah) {
				//jika sesuai, maka nilai array loop pertama & kedua di-push ke variabel penampung array (result)
				result.push([array[i], array[j]]);
			}
		}
	}
	return result;
}

// Test Cases
console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
console.log(sumArray([1, 2, 3, 4, 5], 10)); // []
