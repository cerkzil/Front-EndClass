let shoppingCart = ['Ram', 'Hdd', 'etc'];
shoppingCart = JSON.stringify(shoppingCart);
shoppingCart = localStorage.setItem('shoppingList', shoppingCart);


console.log(localStorage.getItem('shoppingList'));