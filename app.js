let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const output=document.querySelector("#output");
const scoreuser=document.querySelector("#user");
const scorecomp=document.querySelector("#comp");

const generatecomp=()=> {
    //rock,paper,scissor
    const options=["rock","paper","scissors"];
    let randomidx= Math.floor(Math.random()*3);
      return options[randomidx];
};

const playgame=(urmove)=>{
//generate comp move
let compmove=generatecomp();
console.log(compmove);
let userwin=1;
if(urmove==compmove){
return -1; 
}
else if(urmove==="rock"){
userwin=compmove==="paper"?0:1;
return userwin;
}
else if(urmove==="paper"){
    userwin=compmove==="scissor"?0:1;
    return userwin;
    }
else if(urmove==="scissor"){
        userwin=compmove==="rock"?0:1;
        return userwin;
        }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const urmove= choice.getAttribute("id");
        let ans=playgame(urmove);
        if(ans==1){
            userscore++;
            scoreuser.innerText= userscore;
           output.innerText="You Win!";
           output.style.backgroundColor="green";
        }
        else if(ans==-1){
            output.innerText="It is a Draw";
            output.style.backgroundColor="#081b31";
        }
        else{
            compscore++;
            scorecomp.innerText= compscore;
            output.innerText="You Lose!";
            output.style.backgroundColor="red";
        }

    })
})
