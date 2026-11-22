let storeItems = [
    { name: "Rice", price: 50, stock: 20 },
    { name: "Milk", price: 80, stock: 15 },
    { name: "Bread", price: 35, stock: 30 }
];

storeItems.forEach(item => {
    console.log("Product: " + item.name);
    console.log("Price: ₱" + item.price);
    console.log("Stock: " + item.stock);
});
