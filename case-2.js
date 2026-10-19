const products = [
    { name: "Laptop", price: 1000, active: true },
    { name: "Mouse", price: 20, active: false },
    { name: "Keyboard", price: 50, active: true }
];

const activeProducts = products.filter(function(product) {
    return product.active === true;
});

const productNames = activeProducts.map(function(product) {
    return product.name.toUpperCase();
});

const totalPrice = activeProducts.reduce(function(total, product) {
    return total + product.price;
}, 0);

console.log("Active products:", activeProducts);
console.log("Product names:", productNames);
console.log("Total price:", totalPrice); 