
// ผลงานนี้ ผม ณัฐภัทร บัวเพชร Logic นี้ผมคิดเองงงงงงงงงงงงงงงงงงงงง
let count = 3; //กำหนดตัวแปรจำนวนที่จะ Loop
let star = ""; // กำหนดตัวแปรเพื่อที่จะนำไป Output
for (let i = 1; i <= count ; i++) { //  Loop จำนวน Input (ลูปนอก)
  for (let j = 0; j < i; j++) {  // (ลูปใน) เอา จำนวน I มา Loop แล้วสร้างตัวแปรใหม่ชื่อว่า "j"
    star += "*"; //ตรงนี้เป็น Assignment operators นะครับ ที่มาของมันคือ start = start + "*" นั่นเองงง
  }
  star += "\n"; // ที่มาของ บรรทัดนี้คือ start = start + "\n" เพื่อเว้นบรรทัด
} 
console.log(star); //แสดงผลข้อมูล Terminallllllll 

// Result : 
// *
// **
// ***
// --------------------------------

let count = 5; //กำหนดตัวแปรจำนวนที่จะ Loop
let star = ""; // กำหนดตัวแปรเพื่อที่จะนำไป Output
for (let i = 1; i <= count ; i++) { //  Loop จำนวน Input (ลูปนอก)
  for (let j = 0; j < i; j++) {  //(ลูปใน) เอา จำนวน I มา Loop แล้วสร้างตัวแปรใหม่ชื่อว่า "j"
    star += "*"; //ตรงนี้เป็น Assignment operators นะครับ ที่มาของมันคือ start = start + "*" นั่นเองงง
  }
  star += "\n"; // ที่มาของ บรรทัดนี้คือ start = start + "\n" เพื่อเว้นบรรทัด
} 
console.log(star); //แสดงผลข้อมูล Terminallllllll 

// Resultttt :
// *
// **
// ***
// ****
// *****
