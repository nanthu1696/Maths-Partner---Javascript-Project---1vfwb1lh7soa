let main2 = document.querySelector(".card2");
const cards = JSON.parse(localStorage.getItem("list") || '[]');
function display(){
    console.log(cards);
    for (let i = 0; i < cards.length; i++){
        if(cards[i] == null)
        {
            console.log("hi");
            cards.splice(i,1);
            localStorage.setItem("list", JSON.stringify(cards));
        }
        else{
        let div = document.createElement("div");
        div.className = "newCard2";
        let innerDiv = document.createElement("div");
        innerDiv.innerHTML =`<p>${cards[i].operation} : ${cards[i].expression}</p> \n <p>Solution: ${cards[i].result}</p>`;
        let button = document.createElement("button");
        button.innerHTML = "Delete<i class = 'fa fa-trash-o'></i>";
        div.appendChild(innerDiv);
        div.appendChild(button);
        main2.appendChild(div);
        button.addEventListener("click" , (e) =>{
            div.remove();
            delete cards[i];
            localStorage.setItem("list", JSON.stringify(cards));
            console.log(cards);
        });
    }
    }
}
display();