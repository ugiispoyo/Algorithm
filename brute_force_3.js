function perkalianMatriks(A, B) {
  let n = A.length;
  let C = new Array(n);

  for (let i = 0; i < n; i++) {
    C[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      C[i][j] = 0;
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return C;
}

// Contoh penggunaan:
let A = [
  [1, 2],
  [3, 4],
];

let B = [
  [2, 0],
  [1, 3],
];

let hasil = perkalianMatriks(A, B);
console.log("Hasil perkalian matriks A dan B adalah:");
for (let i = 0; i < hasil.length; i++) {
  console.log(hasil[i].join(" "));
}
