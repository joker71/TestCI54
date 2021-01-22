// async function getAPI(){
//     const  conn= await fetch(`https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple`)
//     const data=  await conn.json();
//     let arr= data
//     return arr;
// }


// obj= Promise(getAPI());

// console.log(obj);
import "./questionArr.js";
import "./questionCard.js";
import "./headerQues.js"

document.getElementById("app").innerHTML=`
<header-ques></header-ques>
<question-arr></question-arr>`;