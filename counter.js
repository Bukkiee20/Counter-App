var resultValue= document.getElementById("resultValue");

let score= 0;
function decrease(){
    score--;
    resultValue.innerHTML= score;
    if(score < 0){
        resultValue.style.color= "red";
    }
    else if(score==0){
        resultValue.style.color= "black";
    }
}

function reset(){
   score = 0;
   resultValue.innerHTML= score;
   if(score == 0){
    resultValue.style.color= "black";
  }
}

function increase(){
   score++;
   resultValue.innerHTML= score;
   if(score >=1){
      resultValue.style.color= "green";
    }
   else if(score==0){
       resultValue.style.color= "black";
    }
}

