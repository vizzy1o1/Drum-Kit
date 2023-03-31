var buttonCount=document.querySelectorAll(" .drum").length;
for(var i=0;i<buttonCount;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var text=this.innerText;
makesound(text);
buttonAnimation(text);
});

}
var keyPressed=document.addEventListener("keydown",(event)=>{
  var text=event.key;
  makesound(text);
  buttonAnimation(text);
});
function makesound(text){
  switch (text) {
    case "w":
      var audio=new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "a":
      var audio=new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "s":
      var audio=new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "d":
      var audio=new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    
    case "j":
      var audio=new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 'k':
      var audio=new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "l":
      var audio=new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    default:
      break;
  }
}
function buttonAnimation(currentKey){
var cllick=document.querySelector("."+currentKey);
cllick.classList.add("pressed");
setTimeout(function(){
  cllick.classList.remove("pressed");
},100);
}
/*    var audio=new Audio('sounds/snare.mp3');
audio.play();
  */