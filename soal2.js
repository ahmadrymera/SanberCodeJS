var _ = require('lodash');

// variable yang berisi json
let productBin = {
  requestId: null,
  data: [
    {
      id: 100000057465,
      storageId: 10000008207,
      code: "A01-01-01-A",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 76,
      createdTime: "2021-12-21T13:54:48Z",
    },
    {
      id: 100000057466,
      storageId: 10000002181,
      code: "A01-01-01-B",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 71,
      createdTime: "2021-12-21T13:54:48Z",
    },
    {
      id: 100000065224,
      storageId: 10000008884,
      code: "Tgt00-A-A-01",
      productId: 110000081009,
      productName: "FloBrand-DressBSPink",
      productCode: "FBR00040101",
      quantity: 10,
      createdTime: "2022-02-08T10:35:19Z",
    },
  ],
  message: "success",
};

// keyword untuk memfilter json
let key = "FBR00040101"
// variable yang berisi array kosong untuk menampung qty di tiap array yang terfilter
let qty = []
// looping array productBin dan hanya mengambil data yang mempunyai roductCode yang sesuai dengan keyword
for (const get_qty of productBin.data.filter( data_with => data_with.productCode === key)){
    // push hasil looping (ambil data qty saja) ke dalam variable qty
    qty.push(get_qty.quantity)
}

// tampilkan hasil sum dari variable qty
console.log(`product code ${key} mempunyai total quantity product sebanyak ` + _.sum(qty)+ ` product`)
