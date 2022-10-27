// ITERATION 1

function updateSubtotal(product) {  
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');
      
  let subTotalValue = Number(price.innerText) * Number(quantity.value);
  subTotal.innerText = subTotalValue.toFixed(2);
  return subTotalValue;  
}

function calculateAll() {
  
  // ITERATION 2
  const productsList = document.getElementsByClassName('product');
  console.log(productsList.length);
  
  let theBill = 0

  for( let i = 0; i < productsList.length; i++) {
    theBill += updateSubtotal(productsList[i]);     
  }
  
  // ITERATION 3  
  const Total = document.querySelector('#total-value span');
  Total.innerText = theBill.toFixed(2);
  return theBill;  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
