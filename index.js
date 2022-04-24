// load hone p sare sound store ho jae aur div
window.addEventListener('load',()=>{
  const sound= document.querySelectorAll(".sound");
  const pads= document.querySelectorAll(".pads div")
  const visual= document.querySelector(".visual");
  const color=["rgb(180, 225, 64)",
               "rgb(186, 45, 114)",
               "rgb(53, 75, 155)",
               "rgb(140, 131, 23)",
               "rgb(195, 96, 30)",
               "rgb(139, 29, 196)"
  ]




  console.log(sound);
  //pads loop chalaega index use krke hr ek sound access krenege
  // addevent listener s click function ko call krenge
  //hr baar click p sound start ho islie currenttime=0
  pads.forEach((pad,index)=> {
    pad.addEventListener("click",function (){
      sound[index],currentTime=0;
      sound[index].play();

      createBubble(index);
    })
  })


  //ek function jo ki viual banaega
  const createBubble=(index)=>{
    //createBubble function bubble banaega
    const bubble= document.createElement("div");
    //bubble var m naya element n=banae div
    visual.appendChild(bubble);
    //visual m dalne k lie isko usi m add kr die
    bubble.style.backgroundColor= color[index];
    //bubble ka background usi box k color p set kr die
    bubble.style.animation= "jump 1s ease";
    //bubble p animation lagae
    bubble.addEventListener("animationend",function() {
      visual.removeChild(this);
    })
  }
});
