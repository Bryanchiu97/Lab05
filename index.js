var answer = 99;
var myInp = document.getElementById("num");
var numDisp = document.getElementById("numDisplay");

var answer = Math.round(Math.random()*100);
var score = 100;


document.getElementById("guess").addEventListener("click",function(){
    var myNum = parseInt(myInp.value);
    
    
        if(myNum == answer){
            numDisp.innerText = "You win! Score: "+score;
          } else {
          if(myNum < answer){
            numDisp.innerText = "Too small";
          } else {
            numDisp.innerText = "Too big";
          }
            score = score - 1;
        }
});
    

    

    

