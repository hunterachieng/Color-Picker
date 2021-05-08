const colors = ["grey","purple","brown","rgb(200,200,34)","rgb(150,70,100)","rgb(175,134,89)","#FFF000","#F0FFFF"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = randomNumbers();

    //targeting the body
    document.body.style.backgroundColor= colors[randomNumber];//change color per click
    color.textContent=colors[randomNumber]; //Change color name per click
})

function randomNumbers(){
    return Math.floor(Math.random()*colors.length);
    //to change the random numbers from 0.1 to 1.1 and then round down
}