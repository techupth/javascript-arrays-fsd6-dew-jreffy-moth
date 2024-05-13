// ให้เขียนโค้ดตามโจทย์ต่อไปนี้

// กำหนดให้ Variable isArray มีค่าเท่ากับ ผลลัพธ์ที่ได้จากการตรวจสอบว่า Array orders เป็น Array จริงๆ หรือไม่
// กำหนดให้ Variable creditCardTypeOfBlindermann มีค่าเท่ากับ Value ที่มาจาก Key creditCardType ของลูกค้าชื่อ Toinette Blindermann
// ให้ Reassign ค่าของ Key creditCardType ของลูกค้าชื่อ Toinette Blindermann ให้เป็น “visa"
// กำหนดให้ Variable productQuantityOfJoannet มีค่าเป็น Value ที่มาจาก Key productQuantity ของลูกค้าชื่อ Anjela Joannet
// กำหนดให้ Variable totalPurchaseOfDary มีค่าเป็น Value เกิดจากการคำนวนยอดซื้อสินค้ารวมของลูกค้าชื่อ Celia Dary 🕵🏼‍♀️  Hint: ยอดซื้อสินค้ารวมหมายถึง ราคาสินค้า x จำนวนสินค้า
// ให้ลบ Object ของลูกค้าชื่อ Brenn Hugk ที่อยู่ใน Array orders
// เมื่อลบ Object เสร็จแล้วให้ทำการแสดงผลค่าของ orders ออกมาดูทางหน้าจอ


let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
];

// Start coding here
let isArray = Array.isArray(orders);
let creditCardTypeOfBlindermann = orders[2]["creditCardType"];
let productQuantityOfJoannet = orders[3]["productQuantity"];
let totalPurchaseOfDary = orders[1]["productPrice"]*orders[1]["productQuantity"];

console.log(isArray);
console.log(creditCardTypeOfBlindermann);
console.log(productQuantityOfJoannet);
console.log(totalPurchaseOfDary);
