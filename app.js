// // const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


// // const dropdowns=document.querySelectorAll(".dropdown select")
// //  const btn=document.querySelector("form button");
// // const fromCurr=document.querySelector(".from select");
// // const toCurr=document.querySelector(".to select");
// // const msg=document.querySelector(".msg")

// // for(let select of dropdowns){
// // for(currCode in countryList){
// //    let newOption=document.createElement("option");
// //    newOption.innerText=currCode;
// //    newOption.value=currCode;
// //    if(select.name=="from" && currCode=="USD"){
// //     newOption.selected="selected";
// //    }
// //    else if(select.name=="to" && currCode=="INR"){
// //     newOption.selected="selected"
// //    }
// //    select.append(newOption);
// // }


// // select.addEventListener("change",(evt) => {
// //     updateFlag(evt.target);
// // })
// // }
// // const updateFlag=(element)=>{
// //     let currCode=element.value;
// //     let countryCode=countryList[currCode];
// //     let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
// //     let img=element.parentElement.querySelector("img");
// //     img.src=newsrc;
// // }

// // btn.addEventListener("click",async(evt)=>{
// //     evt.preventDefault();
// //     let amount=document.querySelector(".amount input");
// //     let amtval=amount.value;
// //     if(amtval=="" ||amtval<1){
// //         amtval=1;
// //         amount.val="1";
// //     }

// //     // console.log(fromCurr.value,toCurr.value)
// //     const url=`${BASE_URL}/${fromCurr.value.toLowerCase}/${toCurr.value.toLowerCase}.json`;
// //     let reponse =await fetch(url)
// //     let data=await reponse.json();
// //     let rate=data[toCurr.value.toLowerCase()];

// //     let finalamount=amtval*rate;
// //     msg.innerText=`${amtval} ${fromCurr.value} =${finalamount}${toCurr.value}`
// // })

// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//     for (currCode in countryList) {
//         let newOption = document.createElement("option");
//         newOption.innerText = currCode;
//         newOption.value = currCode;
//         if (select.name == "from" && currCode == "USD") {
//             newOption.selected = "selected";
//         } else if (select.name == "to" && currCode == "INR") {
//             newOption.selected = "selected";
//         }
//         select.append(newOption);
//     }

//     select.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//     });
// }

// const updateFlag = (element) => {
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newsrc;
// };

// btn.addEventListener("click", async (evt) => {
//     evt.preventDefault();
//     let amount = document.querySelector(".amount input");
//     let amtval = amount.value;
//     if (amtval == "" || amtval < 1) {
//         amtval = 1;
//         amount.value = "1"; // ✅ fixed
//     }

//     const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

//     let response = await fetch(url);
//     let data = await response.json();
//     let rate = data[toCurr.value.toLowerCase()];

//     let finalamount = amtval * rate;
//     msg.innerText = `${amtval} ${fromCurr.value} = ${finalamount} ${toCurr.value}`;
// });
const BASE_URL ="https://v6.exchangerate-api.com/v6/41413882ba69fbe4d9ff0e55/latest/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name == "from" && currCode == "USD") {
      newOption.selected = "selected";
    } else if (select.name == "to" && currCode == "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`; // ✅ backticks
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtval = amount.value;
  if (amtval == "" || amtval < 1) {
    amtval = 1;
    amount.value = "1"; // ✅ fixed
  }

  const url = `${BASE_URL}${fromCurr.value}`; // ✅ backticks
  // console.log(url);

  let response = await fetch(url); // ✅ spelling fixed
  let data = await response.json();

  let rate = data.conversion_rates[toCurr.value]; // ✅ correct key
  let finalamount = (amtval * rate).toFixed(2); // optional: round to 2 decimals

  msg.innerText = `${amtval} ${fromCurr.value} = ${finalamount} ${toCurr.value}`; // ✅ backticks
});

