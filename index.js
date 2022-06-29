/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}

2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

////////////////////////////////////////////////////////////////////////////////////////////////////

function getUniqueProductCount ( listOfProducts ) {
    let obj = {};
    
    for (let i = 0; i < listOfProducts.length; i++) {
        if (obj[listOfProducts[i].productName] === undefined) obj[listOfProducts[i].productName] = 1;
        else obj[listOfProducts[i].productName]++;
    }
    console.log(obj);
}
getUniqueProductCount ( listOfProducts );

////////////////////////////////////////////////////////////////////////////////////////////////////

function getUniquePrducts ( listOfProducts ) {
    let output = [];
    let products = [];
    for (let i = 0; i < listOfProducts.length; i++) {
        products.push(listOfProducts[i].productName);
    }
    let unique = [... new Set(products)];
    
    for (let i = 0; i < unique.length; i++) {
        let obj = {};
        let flag = 0;
        let qty = 0;
        let name = "";
        let des = "";
        for (let j = 0; j < listOfProducts.length; j++) {
            if (unique[i] === listOfProducts[j].productName) {
                flag = 1;
                qty += listOfProducts[j].quantity;
                name = listOfProducts[j].productName;
                des = listOfProducts[j].description;
            }
        }
        if (flag == 1) {
            obj.productName = name;
            obj.quantity = qty;
            obj.description = des;
            output.push(obj);
        };
    }
    console.log(output);
}
getUniquePrducts ( listOfProducts );
