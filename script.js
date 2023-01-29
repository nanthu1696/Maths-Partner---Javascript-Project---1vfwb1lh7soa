let main = document.querySelector(".card");
let search = document.getElementById("search");
let history = document.getElementById("history");
const cards = JSON.parse(localStorage.getItem("list") || '[]');
let card = createCard();
search.addEventListener("click" , async () =>{
    let opt = document.getElementById("operation").value;
    let exp = encodeURIComponent(document.getElementById("expression").value);
    console.log(exp);
    let res  = await fetch(`https://newton.now.sh/api/v2/${opt}/${exp}`);
    let obj = await res.json();
    card.remove();
    pushObj(obj);
    card.innerHTML = `<p>${obj.operation} : ${obj.expression}</p> \n <p>Answer: ${obj.result}</p>`;
    main.appendChild(card);
});
history.addEventListener("click" , () =>{
    window.location.href = "history.html";
    
});

function createCard(){
    let div = document.createElement("div");
    div.className = "newCard";
    return div;
}
function pushObj(obj)
{
    cards.push(obj);
    localStorage.setItem("list", JSON.stringify(cards));
}