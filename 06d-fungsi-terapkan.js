const terapkan = (angka, fungsi) => fungsi(angka);

console.log(terapkan(5, (n) => n * 2));
console.log(terapkan(5, (n) => n + 100));
console.log(terapkan(5, (n) => n * n));
