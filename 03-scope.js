// 3a: let dan cakupan blok
let x = 5;

if (true) {
  let x = 10;
  console.log("di dalam blok:", x);
}

console.log("di luar blok:", x);

// 3e: var vs let
if (true) {
  var p = 1;
  let q = 2;
}
console.log(p);
// console.log(q);  

// 3g: == vs === 
console.log(20 == "20");          
console.log(20 === "20");         
console.log(0 == "");             
console.log(0 === "");            
console.log(null == undefined);   

// 3j: truthy dan falsy 
if ([]) console.log("[] masuk");
if ({}) console.log("{} masuk");
if ("0") console.log('"0" masuk');
if (0) console.log("0 masuk");
if (" ") console.log('" " masuk');

//  3k: cek array kosong 
const daftarEkskul = [];

if (!daftarEkskul) {
  console.log("Cara salah: tercetak");
}

if (daftarEkskul.length === 0) {
  console.log("Cara benar: tercetak");
}