function hitungPangkat(a, n) {
  if (n === 0) {
    return 1;
  }

  let hasil = 1;
  for (let i = 1; i <= n; i++) {
    hasil *= a;
  }

  return hasil;
}

// Contoh penggunaan:
let a = 2;
let n = 3;
console.log(`Hasil dari ${a} pangkat ${n} adalah:`, hitungPangkat(a, n));
