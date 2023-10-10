const addInput = document.querySelector('#addItem');
const itemUl = document.querySelector('#item');


addInput.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
    if(!this.value)  return ;    
const newone =(this.value);
const newLi= document.createElement('li');
newLi.innerText = newone;
itemUl.appendChild(newLi);

    }
   
})