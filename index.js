window.addEventListener("load", () => {
//after content is loaded funciton will be generated

const sounds = document.querySelectorAll(".sound");
//all sounds selected here
const pads = document.querySelectorAll(".pads div") // all divs in side pads

//console.log(sounds[0]); 

const visual = document.querySelector(".visual"); //colour balls ke liye hai ye
const colors = [
    "#60d394",
   "#d36060",
   "#c060d3",
   "#d3d160",  //these are like strings
   "#6860d3",
   "#60b2d3"
];

//lets get going with the sounds here

pads.forEach((pad , index)=> { //pad me ek ek krke value store hogi
    //har pad ke liye run krega
    //saath me index number bhi access krega eg 0 1 2 3 etc. 

pad.addEventListener('click',function() {
//normal funtion is used to access 'this'

pad.style.backgroundColor=colors[index];

sounds[index].currentTime = 0; //click krne se pehle hr sound ka time reset horha hai
//to fir iska mtlb dusri baar click krenge to instantly sound play hojayega 


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




















 createBubbles(index);//hume index chahiye tha , jo is funtion me hi hai, 
 //to humfunctioon me index pass krke niche le lenge
});

});


//create a funtion that makes balls

const createBubbles = (index) => {
    const bubble =document.createElement("div"); //creeated a div 
    visual.appendChild(bubble); // i am adding bubble to visual in indexhtml
   bubble.style.backgroundColor = colors[index];
  bubble.style.animation =" jump 1s ease" ;
  bubble.addEventListener('animationend', function() {

  visual.removeChild(this) ;

  });
} ;

}); 

