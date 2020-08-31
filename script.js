let modalQtd = 2;

//encurtando comandos querySelector e querySelectorAll. 
const query = (element)=>document.querySelector(element);
const queryAll = (element) => document.querySelectorAll(element);

//Listagem das pizzas
pizzaJson.map((item, index)=>{
   let pizzaItem = query('.models .pizza-item').cloneNode(true);
   //preencher as informações em pizza item.

   pizzaItem.querySelector('.pizza-item--img img').src = item.img;
   pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2).replace('.',',')}`;
   
   pizzaItem.setAttribute('data-key', index);
   pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
   pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;   
   pizzaItem.querySelector('a').addEventListener('click', (e)=>{
      e.preventDefault();
      let key = e.target.closest('.pizza-item').getAttribute('data-key');
      modalQtd = 1;
      query('.pizzaBig img').src = pizzaJson[key].img;
      query('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
      query('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
      query('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2).replace('.',',')}`;
      query('.pizzaInfo--size.selected').classList.remove('selected');
      queryAll('.pizzaInfo--size').forEach((size,sizeIndex)=>{      
         if(sizeIndex == 2) {
            size.classList.add('selected');
         }  
         size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
      });
      
      query('.pizzaInfo--qt').innerHTML = modalQtd;

      query('.pizzaWindowArea').style.opacity = 0;                  
      query('.pizzaWindowArea').style.display = 'flex';
      setTimeout(()=>{
         query('.pizzaWindowArea').style.opacity = 1;                  
      },200);      
   });

   query('.pizza-area').append(pizzaItem);
});

//Eventos do modal
function closeModal(){
   query('.pizzaWindowArea').style.opacity = 0;   
   setTimeout(()=>{
      query('.pizzaWindowArea').style.display = 'none';
   },500);
}

queryAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
   item.addEventListener('click', closeModal);
});