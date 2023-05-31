const listaFazer = [];
let editTask;
let task;
const ul = document.querySelector("main ul");
const entrada = document.querySelector(".text");
const lis = document.getElementsByTagName("li");
const check = document.getElementsByClassName("checkbox");
const sumido = document.querySelector(".sumido");
const edits = document.getElementsByClassName("edit-box"); 

entrada.focus();
function addTarefa(){    
    ul.innerHTML += `
                        <li > 
                            <div class="checkbox" onclick="feito(this); marcador(this);"><p class="sumido" >✔</p></div> 
                            <span><p>${entrada.value}</p></span>
                            <ion-icon name="create-sharp" onclick="editBox(); editText();"></ion-icon>
                            <ion-icon  class="trash" name="trash-sharp" onclick="apagar(this)"></ion-icon>
                            <div class="edit-box sumido">
                                <input type="text" value="${entrada.value}" maxlength="40">
                                <button class="edit" onclick=" changeText();">Edit</button>
                                <button class="cancel" onclick="cancelEdit()">Cancel</button>
                            </div>
                        </li>  
                    `
    entrada.value = "";
    entrada.focus();     
}


function feito(elemento){
    const classFeito = document.querySelector(".classFeito");
    elemento.nextElementSibling.classList.toggle('classFeito');     
}

function marcador(elemento){    
    elemento.firstChild.classList.toggle('sumido');  
}

function editBox(){ 
    [...lis].forEach(element =>{
        element.addEventListener("click", function(e){
           this.lastChild.previousSibling.classList.remove('sumido');           
        });
    });    
}

function editText(){      
    [...lis].forEach(element =>{
        element.addEventListener("click", function(e){
            editTask = this.lastChild.previousSibling.firstChild.nextSibling.value;
            inputEdit = this.lastChild.previousSibling.firstChild.nextSibling
            inputEdit.focus();    
        });
    });   
}

function changeText(){       
    [...lis].forEach(element =>{                
        element.addEventListener("click", function(e){                     
           task = this.firstChild.nextSibling.nextSibling.nextSibling.firstChild;
           task.innerHTML = editTask
           this.lastChild.previousSibling.classList.add('sumido')
        });        
    }); 
       
}

function cancelEdit(){   
    [...lis].forEach(element =>{
        element.addEventListener("click", function(e){
            this.lastChild.previousSibling.classList.add('sumido');            
        });
    });     
}

function apagar(elemento){
    elemento.parentElement.remove();    
}

