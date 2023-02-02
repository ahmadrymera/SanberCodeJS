
const prompt = require("prompt-sync")({sigint:true}); 

// ambil input dari user dan simpan di variable number
const number = prompt("Masukan nomor: ");

if (number < 0){
    console.log("Tidak bisa input bilangan negatif");
}
//check apakah number adalah bilangan ganjil
else if(number % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil");
}else{
    // lakukan perhitungan sqrt dengan nilai yang berasal dari variable number
    console.log(`akar pangkat 2 dari angka "${number}" adalah: ` + Math.sqrt(number))
}