//TUGAS INFINITE LEARNING

//1. if else
let a = 2;
if(a === 1){
    console.log("Ini angka" + a)
} else (a != 1);
console.log("ini bukan angka 1")


//2. nested if
let score = 10;
let abs = 80;

if (abs >= 60) {
  // Jika absensi mencukupi
  if (score >= 90) {
    console.log("Nilai Anda A");
  } else if (score >= 80) {
    console.log("Nilai Anda B");
  } else if (score >= 60) {
    console.log("Nilai Anda C");
  } else if (score < 60){ 
    console.log("Nilai Anda E");
  }
} else {
  console.log("Anda tidak lulus karena absensi kurang.");
}


//3. switch case
let hari = "Selasa";

switch (hari) {
    case "Senin":
      console.log("Hari ini adalah Senin.");
      break;
    case "Selasa":
      console.log("Hari ini adalah Selasa.");
      break;
    case "Rabu":
      console.log("Hari ini adalah Rabu.");
      break;
    default:
      console.log("Hari ini bukan hari kerja.");
  }
  

//4. for
for (let i = 1; i <= 6; i++) {
    console.log("ini nilai ke-" + i);
  }


//5. while
let count = 1;
while (count <= 9) {
  console.log("Perulangan ke-" + count);
  count++;
}

//6. Menggunakan do while
let angka = 10;
do {
  console.log("Ini Angka: " + angka);
  angka--;
} while (angka >= 5);


//7. fucntion
function greet2(nama2){
    return nama2 + ' ' + 'ganteng ';
}

// let nama3 = greet2('farrel');
console.log(greet2('farrel'));












// //ALERT
// // alert("Ini alert");
// // confirm("Ini confirm");
// // prompt("ini prompt");




// // js code new 
// console.log('hello world');

// //variabel
// // let untuk dynamic bisa dirubah sewaktu-waktu
// // const itu tetap 
// // contoh 

// let pria = {
//     nama:'hafiz',
//     age:20
// };

// //dot notation
// pria.nama='afta';

// //bracket notation
// let cowo = 'nama';
// pria['nama'] = 'gabriel';
// console.log(pria.nama);
// // document.write(pria);


// // LIST PAKAI SQUARE BRACKET
// let warna = ['merah' , 'tosca'];
// warna[1]='hijau';
// console.log(warna); 



// //function performing a task
// function greet(nama){
//     console.log('hello ' + nama)
// }

// greet('john')



// //looping
// let n = 0;
// let x = 0;
// while (n<3){
//     n++;
//     x += n;
//     console.log(n);
// }