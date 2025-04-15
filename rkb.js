document.addEventListener('DOMContentLoaded', function() {
    // Set 2024 as the default for Administration section
    document.getElementById("btn5").style.background = "#FFF2E2";
    document.getElementById("btn1").style.background = "inherit";
    document.getElementById("btn2").style.background = "inherit";
    document.getElementById("cards2022").style.display = "none";
    document.getElementById("cards2023").style.display = "none";
    document.getElementById("cards2024").style.display = "inherit";
    
    // Set 2024 as the default for Council section
    document.getElementById("btn6").style.background = "#FFF2E2";
    document.getElementById("btn3").style.background = "inherit";
    document.getElementById("btn4").style.background = "inherit";
    document.getElementById("b_cards2022").style.display = "none";
    document.getElementById("b_cards2023").style.display = "none";
    document.getElementById("b_cards2024").style.display = "inherit";
});

document.querySelector("#btn1").addEventListener("click", function(e)
{
    document.getElementById("btn1").style.background = "#FFF2E2"; 
    document.getElementById("btn2").style.background = "inherit";
    document.getElementById("btn5").style.background = "inherit";
    document.getElementById("cards2022").style.display = "none";
    document.getElementById("cards2023").style.display = "inherit";
    document.getElementById("cards2024").style.display = "none";
})


document.querySelector("#btn2").addEventListener("click", function(e)
{
    document.getElementById("btn2").style.background = "#FFF2E2";
    document.getElementById("btn1").style.background = "inherit";
    document.getElementById("btn5").style.background = "inherit";
    document.getElementById("cards2022").style.display = "inherit"; 
    document.getElementById("cards2023").style.display = "none"; 
    document.getElementById("cards2024").style.display = "none";
})

document.querySelector("#btn5").addEventListener("click", function(e)
{
    document.getElementById("btn5").style.background = "#FFF2E2";
    document.getElementById("btn1").style.background = "inherit";
    document.getElementById("btn2").style.background = "inherit";
    document.getElementById("cards2022").style.display = "none"; 
    document.getElementById("cards2023").style.display = "none"; 
    document.getElementById("cards2024").style.display = "inherit";
})


document.querySelector("#btn3").addEventListener("click", function(e)
{
    document.getElementById("btn3").style.background = "#FFF2E2";
    document.getElementById("btn4").style.background = "inherit";
    document.getElementById("btn6").style.background = "inherit";
    document.getElementById("b_cards2022").style.display = "none";
    document.getElementById("b_cards2023").style.display = "inherit";
    document.getElementById("b_cards2024").style.display = "none";
})


document.querySelector("#btn4").addEventListener("click", function(e)
{
    document.getElementById("btn4").style.background = "#FFF2E2";
    document.getElementById("btn3").style.background = "inherit";
    document.getElementById("btn6").style.background = "inherit";
    document.getElementById("b_cards2022").style.display = "inherit"; 
    document.getElementById("b_cards2023").style.display = "none"; 
    document.getElementById("b_cards2024").style.display = "none";
})

document.querySelector("#btn6").addEventListener("click", function(e)
{
    document.getElementById("btn6").style.background = "#FFF2E2";
    document.getElementById("btn3").style.background = "inherit";
    document.getElementById("btn4").style.background = "inherit";
    document.getElementById("b_cards2022").style.display = "none"; 
    document.getElementById("b_cards2023").style.display = "none"; 
    document.getElementById("b_cards2024").style.display = "inherit";
})

let phla = document.querySelector(".phla");
let burger = document.querySelector("#burger");
let flag = false;

document.addEventListener('DOMContentLoaded',function()
{

burger.addEventListener('click', handleClick);


function handleClick()
{
    if(flag===false)
    {
      phla.style.transform = "translateX(-50%)";
      flag = true;
    }
    else{
      phla.style.transform = "translateX(0%)";
      flag = false;
    }
   
}
})

//

var prev = document.getElementById('prev');
var next = document.getElementById('next');
var slider = document.getElementById('slider');
var total = 0, step = 100;

prev.addEventListener('click', slide);
next.addEventListener('click', slide);

function slide()
{
  if(this.getAttribute('id') == 'prev')
  {
    if(total == 0)
    {
      total = -400;
      slider.style.left = total + '%';
    }
    else
    {
      total += step;
      slider.style.left = total + '%';
    }
  }
  else
  {
    if(total == -400)
    {
      total = 0;
      slider.style.left = total;
    }
    else
    {
      total -= step;
      slider.style.left = total + '%';
    }
  }
}
