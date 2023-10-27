function hitungFaktorial(n) {
  if (n === 0) {
    return 1;
  }

  let hasil = 1;
  for (let i = 1; i <= n; i++) {
    hasil *= i;
  }

  return hasil;
}

// Contoh penggunaan:
let n = 5;
console.log(`Hasil dari ${n}! adalah:`, hitungFaktorial(n));
