let dropdown = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("button");
let image1 = document.querySelectorAll(".from img")
let image2 = document.querySelectorAll(".to img")
let fromCurr = document.querySelector(".from select")
let toCurr = document.querySelector(".to select")
let input = document.querySelector(".amount input");
let msg = document.querySelector(".msg");

for( let select of dropdown){
    for(currCode in countryList){
        let newElement = document.createElement("option");
        newElement.innerText = currCode;
        newElement.value = currCode;
        if(select.name === "from" && currCode==="USD"){
            newElement.selected = "selected"
        }
         if(select.name === "to" && currCode === "INR"){
            newElement.selected = "selected"
        }
        select.append(newElement);

        select.addEventListener("change",(evt)=>{
           evt.preventDefault();
           changeFlag(evt.target);
        })
    }
}

function changeFlag(element){
let currCode = element.value;
let countryCode = countryList[currCode];
let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
 img.src = newsrc;
}

btn.addEventListener("click",(evt)=>{
   evt.preventDefault()
    getExchangeRate();
})
let getExchangeRate = async()=>{
let amount = input.value;
if(amount==="" && amount<1){
    amount = 1;
}
// let URL =  `${BASE_URL}.json`;
let BASE_URL =`https://v6.exchangerate-api.com/v6/542ee3b7b135a80a9dfe460c/latest/USD`;

let responce = await fetch(BASE_URL);
let data = await responce.json();
let rateFromCurr = data.conversion_rates[fromCurr.value];
let rateTOCurr = data.conversion_rates[toCurr.value];

let finalAmount = amount/rateFromCurr*rateTOCurr ;
console.log(finalAmount);
msg.innerHTML = `${amount} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`

}


window.addEventListener("load", () => {
    getExchangeRate();
  });