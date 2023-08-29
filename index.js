var clutter = "";
var Time = 45;
var scor = 0;
var ran_hit = 0;

function score (){
    scor += 10;
    document.querySelector(".score").textContent = "Score - "+scor;
}

function bubble(){
    clutter="";
        for(var i=0; i<=125; i++)
{
    var ran = Math.floor(Math.random()*10);
    clutter+= `<div class="bubble">${ran}</div>`;
}

document.querySelector(".bubblediv").innerHTML = clutter;
}

function hit(){
 
 ran_hit = Math.floor(Math.random()*10);

document.querySelector(".hit").textContent = "Hit - "+ran_hit;
bubble();
}


function timer(){

    var time_int = setInterval(function() {
        if (Time>0)
        {
            Time--;
            document.querySelector(".timer").innerHTML = "Time - "+Time;
        }

        else {
            clearInterval(time_int);
            document.querySelector(".bubblediv").innerHTML = `<h3>GAME OVER!<h3>`;
        }
    }, 1000);
}

document.querySelector(".bubblediv").addEventListener("click", function(data){
    var check_num = data.target.textContent;
    if (Number(ran_hit) === Number(check_num))
    {
       bubble();
        score();
        hit();
    }

});

timer();


score();