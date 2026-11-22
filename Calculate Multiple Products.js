let cart = [100, 200, 300];
let totalAmount = cart.reduce((sum, price) => sum + price, 0);
console.log("Total: ₱" + totalAmount);
