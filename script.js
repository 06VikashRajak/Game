// let heading=document.getElementById("heading");
// console.dir(heading);
// let button=document.getElementById("myid");
// console.dir(button);
// let headings=document.getElementsByClassName("heading"); 
// console.dir(headings);
// let parahs=document.getElementsByTagName("p");
// console.dir(parahs);
// let firstEl=document.querySelector(".heading");
// console.dir(firstEl);
// let allEl=document.querySelectorAll(".heading");
// console.dir(allEl);

// let  h2=document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText=h2.innerText+"from Apna College students";

// let divs=document.querySelectorAll(".box");

// let idx=1;
// for(div of divs){
//   div.innerText=`new unique value ${idx} `;
// }
// console.log(divs[0]);
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";
// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let para=document.querySelector("p");
// consolelog(para.setAttribute("class", "newClass")); 
// div.style.backgroundColor="green";
//  let newBtn=document.createElement("button");
//  newBtn.innerText="click-me!";
//  console.log(newBtn);
// let div=document.querySelector("div");
// div.append(newBtn);
// let newheading=document.createElement("h1");
// newheading.innerHTML="<i>Hi, I am new!</i>";

// document.querySelector("body").prepend(newheading);

// let para=document.querySelector("p");
// para.remove(); 
// let newBtn=document.createElement("button");
// newBtn.innerText="click me!";

// newBtn.style.color="white";
// newBtn.style.backgroundColor="red";

// document.querySelector("body").prepend(newBtn);

// let btn1=document.querySelector("#btn1");
// btn1.onclick=(evt)=>{
//   console.log(evt.type);
//   console.log(evt.target);
  // let a=25;
  // a++;
  // console.log(a);
// };

// btn1.addEventListener("click", ()=>{
//   console.log("button was clicked-handlar1");
// });
// btn1.addEventListener("click", ()=>{
//   console.log("button was clicked-handlar2");
// });

// const handler3=()=>{
//   console.log("button was clicked-handler 3");
// }

// btn1.addEventListener("click", ()=>{
//   console.log("button was clicked-handlar3");
// });
// btn1.addEventListener("click", ()=>{
//   console.log("button was clicked-handlar4");
// });

// btn1.removeEventListener("click", handler3);

// let modeBtn=document.querySelector("#mode");
// let currMode="light";

// modeBtn.addEventListener("click", ()=>{
// if(currMode==="light"){
//   currMode="dark";
//   document.querySelector("body").style.backgroundColor="black";
// }else{
//   currMode="light";
//   document.querySelector("body").style.backgroundColor="white";
// }
// console.log(currMode);
// });

// let userScore:0;
// let compScore:0;
let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
  const options=["rock","paper", "scissors"];
   const randIdx=Math.floor(Math.random() *3);
   return options[randIdx];

};
const drawGame=()=>{
  msg.innerText="Game was Draw. Play again.";
  msg.style.background="#081b31";
};

const showWinner=(userWin, userChoice, compChoice)=> {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.background = "green";

  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost ${compChoice} beats Your ${userChoice}`;
    msg.style.background = "red";
  }
};

const playGame=(userChoice)=>{
 
  const compChoice=genCompChoice();
  

  if(userChoice===compChoice){
  drawGame();
  }else{ 
    let userWin=true;
    if(userChoice==="rock"){
      userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
      userWin=compChoice==="scissors"?false:true;
    }else{
      userWin=compChoice==="rock"?falselse:true;
    }
    showWinner(userWin, userChoice,compChoice);
  }
};

choices.forEach((choice)=>{
  choice.addEventListener("click", ()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
  });
});