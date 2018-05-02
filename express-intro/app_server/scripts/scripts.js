
let i = 1;
function addField(){


  console.log("addfield");
  let ingredient = document.createElement('input');
  let amount = document.createElement('input');

  let divIngredient = document.createElement('div');
  let divAmount = document.createElement('div');

  divIngredient.setAttribute('class', 'form-group row ' +i);

  divAmount.setAttribute('class', 'form-group row ' +i);

  amount.setAttribute('class', 'form-control');
  amount.setAttribute('placeholder', 'amount');
  amount.setAttribute('name' , 'amount' + i);

  ingredient.setAttribute('class', 'form-control');
  ingredient.setAttribute('placeholder', 'Ingredient');
  ingredient.setAttribute('name' , 'ingredient' + i);

  divIngredient.appendChild(ingredient);
  divAmount.appendChild(amount);

  let form = document.getElementById('form');
  form.appendChild(divIngredient);
  form.appendChild(divAmount);
  i++;
}

function removeField() {
  let remove = document.getElementsByClassName(i-1);
  for(let j = remove.length-1; j >= 0; j--){
    let node = remove[j];
    node.parentNode.removeChild(node);
  }
  i--;
}
