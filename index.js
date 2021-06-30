window.addEventListener("load", () => {


const sounds = document.querySelectorAll(".sound");
//all sounds selected here
const pads = document.querySelectorAll(".pads div") // all divs inside pads


const visual = document.querySelector(".visual"); //colour balls
const colors = [
    "#60d394",
   "#d36060",
   "#c060d3",
   "#d3d160",  
   "#6860d3",
   "#60b2d3"
];


pads.forEach((pad , index)=> {  

pad.addEventListener('click',function() {

pad.style.backgroundColor=colors[index];

sounds[index].currentTime = 0; 


sounds[index].play();

const createBubbles = (index) => {
const bubble = document.createElement("div");
visual.appendChild(bubble); 
const currentColor = bubble.style.backgroundColor;
bubble.style.backgroundColor = colors[index];
bubble.style.animation =" jump 1s ease" ;
bubble.addEventListener('animationend', function() {

visual.removeChild(this) ;
bubble.style.backgroundColor = currentColor;
  });
} ;



 createBubbles(index);
});

});


//for ceaating balls
    
const createBubbles = (index) => {
    const bubble =document.createElement("div"); //created a div 
    visual.appendChild(bubble); //  adding bubble to visual div
   bubble.style.backgroundColor = colors[index];
  bubble.style.animation =" jump 1s ease" ;
  bubble.addEventListener('animationend', function() {

  visual.removeChild(this) ;

  });
} ;

}); 

