//HTML SAYFASINDAKİ ELEMENTLERİN SEÇİLMESİ//

let btnDOM = document.querySelector('#liveToastBtn')
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let ullength = document.getElementsByTagName("li")

//LİSTEYİ SİLMEK İÇİN  X BUTONU EKLENMESİ//
for (let index=0; index<ullength.length; index++){
     let closeButton=  document.createElement("span");
     closeButton.textContent= "\u00D7";
     closeButton.classList.add("close");
     closeButton.onclick=removeButton;
     ullength[index].append(closeButton);
     ullength[index].onclick= check;

}

btnDOM.addEventListener('click', elemanEkle)

//fonksiyonlar//

function check(){   
    this.classList.toggle("checked");
}

function removeButton(){
    this.parentElement.remove();
}
function elemanEkle(){
    if (taskDOM.value==""){
        $(".toast").toast("show");
    }
    else{
        $(".success").toast("show");
    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM);
    liDOM.innerHTML= task.value;
    taskDOM.value="";

    liDOM.onclick= check;
    let closeButton =document.createElement("span");
    closeButton.textContent= "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick= removeButton;

    liDOM.append(closeButton);
    listDOM.append(liDOM);
    inputElement.value=("");
}
}

