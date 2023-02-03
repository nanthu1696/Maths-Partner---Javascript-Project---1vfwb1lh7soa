let main = document.querySelector(".card");
let search = document.getElementById("search");
let history = document.getElementById("history");
const cards = JSON.parse(localStorage.getItem("list") || '[]');
let problem = document.querySelectorAll(".problems");
let card = createCard();
search.addEventListener("click" , async () =>{
    let opt = document.getElementById("operation").value;
    let obj = {};
    if( opt != "tangent" && opt != "area" )
    { 
    let exp = encodeURIComponent(document.getElementById("expression").value);
    let res  = await fetch(`https://newton.now.sh/api/v2/${opt}/${exp}`);
    obj = await res.json();
    }
    else if (opt == "tangent")
    {
        let x = document.getElementById("x").value;
        let f = document.getElementById("f_x").value;
        let exp = encodeURIComponent(`${x}|${f}`);
        let res = await fetch(`https://newton.now.sh/api/v2/${opt}/${exp}`);
        obj = await res.json();
    }
    else if ( opt == "area")
    {
        let start = document.getElementById("start").value;
        let end = document.getElementById("end").value;
        let f = document.getElementById("f_x_a").value;
        let exp = encodeURIComponent(`${start}:${end}|${f}`);
        let res = await fetch(`https://newton.now.sh/api/v2/${opt}/${exp}`);
        obj = await res.json();
    }
    card.remove();
    pushObj(obj);
    card.innerHTML = `<p>${obj.operation} : ${obj.expression}</p> \n <p>Solution: ${obj.result}</p>`;
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
function getInput()
{
    let optionValue = document.getElementById("operation").value;
    if(optionValue == "tangent")
    {
        removeProb();
        problem[1].style.display = "block";
    }
    else if ( optionValue == "area")
    {
        removeProb();
        problem[2].style.display = "block";
    }
    else{
        removeProb();
        problem[0].style.display = "block";
    }
}
function removeProb()
{
    problem.forEach(element => {
        element.style.display = "none";
    });
}
removeProb();
problem[0].style.display = "block";
/*function ecode(arg)
{
    let arr = arg.split("/");
    console.log(arr);
    if(arr.length == 1)
    {
        return arg;
    }
    if(arr.length > 1)
    {
        let arg1;
        for ( let i = 0; i< arr.length ;i++)
        {
            if ( i == 0)
            {
                arg1 = arr[i] + "(over)";
            }
            else if ( i  == arr.length-1)
            {
                arg1 = arg1 + arr[i];
                console.log(arg1);
                return arg1;
            }
            else
            {
                arg1 = arg1+ arr[i] + "(over)";
            }
        } 
    }
    
}
*/
