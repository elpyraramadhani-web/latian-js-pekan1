const formatJadwal = (nama, jam = "15.00", hari) => 
    `${nama} - ${hari}, ${jam}`;

console.log(formatJadwal("Basket", "Senin"));
console.log(formatJadwal("Robotik", "Senin", "16.30"));