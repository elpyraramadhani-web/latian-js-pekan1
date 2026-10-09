//4a dan 4b
//versi 1 menggunakan arrow dan return
function sisaKuota(kuota, terisi){
    return kuota - terisi;
}

//versi 2 tanpa arrow dan return
const sisaKuota2 = (kuota, terisi) => kuota - terisi;


console.log(sisaKuota(10, 5));
console.log(sisaKuota2(10, 5));


function sapa(nama){
    return "Halo, " + nama;
}
console.log(sapa("Budi"));

// 4c diperbaiki dengan return
const jumlah = (a, b) => {return  a + b; };
console.log(jumlah(2, 3));

// 4d
const ekskul = require("./data");
const apakahPenuh = (e) => e.terisi >= e.kuota;

ekskul.forEach((e) => {
  console.log(e.nama, apakahPenuh(e));
});


