import Product from "../classes/product";

const $form = document.getElementById("newProductForm");

const submitForm = (event) => {
  event.preventDefault();

  const category = document.getElementById("newProductCategory").value;
  const name = document.getElementById("newProductName").value;
  const desc = document.getElementById("newProductDesc").value;
  const weight = document.getElementById("newProductWeight").value;
  const volume = document.getElementById("newProductVolume").value;
  
  const newProduct = new Product(category, name, desc, weight, volume);
  newProduct.addToMenu();

  clearForm();

};

const clearForm = () => {
  const $formInputs = document.querySelectorAll('.new-product__input');
  $formInputs.forEach(el => {
    el.value = '';
  })

  const $formSelect = document.querySelector('.new-product__select');
  $formSelect.value = 'Не выбрано';

}

$form.addEventListener("submit", submitForm);


