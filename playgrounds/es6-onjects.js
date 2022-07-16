// OBJECT PROPERTY SHORTHAND
const name = 'Pranay';
const myAge = 25;

// we can use this shorthand only when the key and value providing var-name are same
const person = {
    name,
    age: myAge,
    location: 'Bangalore'
}

console.log(person);

// OBJECT DESTRUCTURING
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
}

// Uusal way
// const label = product.label;
// const stock = product.stock;

// shorter way
// const { price, stock } = product;
// console.log(price);
// console.log(stock);

// syntax => actual-var-name:var-name-desired, unknown items would be 'undefined'
// const { salePrice:productPriceForSale, rating } = product;
// console.log(productPriceForSale);
// console.log(rating);

// syntax => default vaules can be provided if the item is not present in the object
// const { label:productLabel = 'No label', rating: productRating = 5 } = product;
// console.log(productLabel);
// console.log(productRating);

// using DESTRUCTURING in a function parameter
const transaction = (type, { label:productLabel, stock, rating=5 }) => {
    console.log(type, productLabel, stock, rating);
}

transaction('order', product);