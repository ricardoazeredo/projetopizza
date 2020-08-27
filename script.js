//encurtando comandos querySelector e querySelectorAll. 
const query = (element)=>document.querySelector(element);
const queryAll = (element) => document.querySelectorAll(element);

pizzaJson.map((item, index)=>{
   let pizzaItem = query('.models .pizza-item').cloneNode(true);
   //preencher as informações em pizza item.

   pizzaItem.querySelector('.pizza-item--img img').src = item.img;
   pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2).replace('.',',')}`;
   
   pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
   pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;   


   query('.pizza-area').append(pizzaItem);
});