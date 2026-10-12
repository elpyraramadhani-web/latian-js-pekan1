const ekskul = [
    { nama: "Basket", aktif: true, kuota: 10, terisi: 8, hari: "Senin" },
    { nama: "Robotik", aktif: true, kuota: 10, terisi: 10, hari: "Selasa" },
    { nama: "Paskibra", aktif: false, kuota: 20, terisi: 5, hari: "Rabu" },
    { nama: "Pramuka", aktif: true, kuota: 20, terisi: 10, hari: "Kamis" },
]

const saring = (daftar, syarat) => {
    const hasil = [];

    for (const item of daftar) {
        if (syarat(item)) {
            hasil.push(item);
    }
}
return hasil;
}

console.log(saring(ekskul, (e) => e.aktif));
console.log(saring(ekskul, (e) => e.kuota > 10));
console.log(saring(ekskul, (e) => e.hari === "Senin"));

console.log(saring(ekskul, (e) => e.terisi >= 10));
