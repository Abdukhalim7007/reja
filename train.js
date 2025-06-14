console.log("TRAIN AREA!");
 
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boshliq tanlang va ko'proq hato qiling", // 20-30
//     "o'zingizni ishlaringizni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60 
// ];

//  //callback 
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//      setInterval(function () {
//         callback(null, list[5]);
//      }, 1000); 
//   }
// }

// console.log("passed here 0");
// // Misol uchun chaqirish:
// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else { console.log("javob:", data);
//    }
// });
// console.log("passed here 1");

 // ASYN functions
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(list[5]);
//         }, 5000);
//     });
    
//   }
// }
// // call via then/catch
// // console.log("passed here 0");
// // maslahatBering(60)
// //   .then((data) => {
// //     console.log("javob:", data);
// //   })
// //   .catch((err) => {
// //     console.log("ERROR:", err);
// //   });
// // console.log("passed here 1");

// // call via async/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }

// run();

// D- TASK

class Shop {
    constructor(non, lagmon, cola) {
        this.products = {
            non: non,
            lagmon: lagmon,
            cola: cola
        };
    }

    _getTime() {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0'); 
        const minutes = String(date.getMinutes()).padStart(2, '0'); 
        return `${hours}:${minutes}`;
    }

    sotish(mahsulot, miqdor) {
        if (!(mahsulot in this.products)) {
            console.log(`Mahsulot ${mahsulot} do'konimizda yo'q!`);
            return;
        }
        if (this.products[mahsulot] >= miqdor) {
            this.products[mahsulot] -= miqdor;
            console.log(`hozir ${this._getTime()}da ${miqdor}ta ${mahsulot} sotildi!`);
        } else {
            console.log(`hozir ${this._getTime()}da ${mahsulot}dan yetarli miqdorda mavjud emas!`);
        }
    }

    qoldiq() {
        console.log(`hozir ${this._getTime()}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`);
    }

    qabul(mahsulot, miqdor) {
        if (!(mahsulot in this.products)) {
            console.log(`Mahsulot ${mahsulot} do'konimizda yo'q!`);
            return;
        }
        this.products[mahsulot] += miqdor;
        console.log(`Hozir ${this._getTime()}da ${miqdor}ta ${mahsulot} qabul qilindi!`);
    }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq(); 
shop.sotish('non' , 3);  
shop.qabul('cola' , 4); 
shop.qoldiq();


// C-TASK
// let gap1 = "mitgroup27";
// let gap2 = "itm2gourp7";
// function checkContent(gap1, gap2) {
//   let qolipGap1 = gap1.toLowerCase().split('').sort().join('');
//   let qolipGap2 = gap2.toLowerCase().split('').sort().join('');

//   return qolipGap1 === qolipGap2 ;

// }

// console.log(checkContent(gap1, gap2));


// B-TASK
// function countDigits(str) {
//     let soni = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (!isNaN(str[i]) && str[i] !== ' ') {
//         soni++;
//       }
//     }
//     return soni;
//   }
  
//   const javob = countDigits("ad2a54y79wet0sfgb9");
//   console.log("javob:", javob);

// A-TASK
// function countLetter(letter, text) {
//     let count = 0;
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetter("e", "engineer"));

 
