const ekskul = [
    {id: 1, nama: "Basket", hari: "senin", kuota: 10, terisi: 8, aktif: true},
    {id: 2, nama: "Pramuka", hari: "jumat", kuota: 40, terisi: 40, aktif: true},
    {id: 3, nama: "Robotik", hari: "senin", kuota: 15, terisi: 7, aktif: true},
    {id: 4, nama: "Paduan Suara", hari: "rabu", kuota: 30, terisi: 12, aktif: false},
    {id: 5, nama: "Futsal", hari: "kamis", kuota: 22, terisi: 22, aktif: true},
];

//membuat array berisi nama setiap ekskul
const namaEkskul = ekskul.map((e) => e.nama);

//Mmebuat array teks nama dan sisa kuota setiap ekskul
const sisaKuota = ekskul.map((e) => `${e.nama} - ${e.kuota - e.terisi}`);

//Membuat array objek berisi nama dan sisa kuota setiap ekskul
const sisaKuotaObj = ekskul.map((e) => ({
    nama: e.nama,
    sisa: e.kuota - e.terisi
}));

console.log(ekskul.map((e) => e.nama));
