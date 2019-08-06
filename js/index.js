// Your code goes here

// mouseover
let mo=document.querySelectorAll('img');
    // console.log(mo);
mo.forEach(item=>{
    item.addEventListener('mouseover',e=>{
        e.target.style.opacity=1;
    });
    item.addEventListener('mouseout',e=>{
        setTimeout(()=>{e.target.style.opacity=.5},2000);
    });
});

// keydown
let bod=document.querySelector('body');
let boomX=document.getElementById('adventurePic');
let boomY=document.querySelector('#funPic');
let boomZ=document.querySelector('#mainPic');
bod.addEventListener('keydown',e=>{
    switch (e.code){
        case "KeyX":boomX.src="img/xfire.jpeg";
        break;
        case "KeyY":boomY.src="img/boatfire.jpg";
        break;
        case "KeyZ":boomZ.src="img/busfireNew.jpg";
        boomY.src="img/boatfire.jpg";
        boomX.src="img/xfire.jpeg";
        setTimeout(()=>{
            boomX.src="img/adventure.jpg";
            boomY.src="img/fun.jpg";
            boomZ.src="img/fun-bus.jpg";
        },5000);
    };
});

// wheel
boomX.addEventListener('mouseover',e=>{
    boomX.addEventListener('wheel',move,true);
});
boomX.addEventListener('mouseout',e=>{
    boomX.removeEventListener('wheel',move,true);
});

let newTop=0;
function move(e){
    e.preventDefault();
    e.stopPropagation();
    newTop+=e.deltaY;
    e.target.style.top=newTop+"px";
    console.log(e,e.deltaY);
}

// dblclick
let clicks=0;
let buttholeButton=document.getElementById('butt');

buttholeButton.addEventListener('click',e=>{
   if (clicks==0){
       e.target.textContent="NO!";
       e.target.style.color="white"; //#17A2B8
       e.target.style.backgroundColor="#17A2B8";
       clicks++;
   }else if (clicks==1){
        e.target.textContent="NO WAY!";
        e.target.style.color="white"; //#17A2B8
        e.target.style.backgroundColor="#17A2B8";
        clicks++;
   }else if (clicks==2){
        e.target.style.fontSize="2.8rem";
        e.target.style.color="red";
        e.target.style.backgroundColor="#17A2B8";
        e.target.innerHTML=`Knock it off!`;
        clicks++;
   }else{
        e.target.style.fontSize="1.8rem";
        e.target.style.color="red";
        console.log(e.target.style);
        e.target.textContent=`Double Click!`;
        clicks=0;
   }
})

buttholeButton.addEventListener('dblclick',e=>{
    e.target.textContent="Ok, FINE!";
    e.target.style.backgroundColor="red";
    clicks=0;
})

let navs=document.querySelectorAll('nav a');
    navs.forEach(item=>{
        item.addEventListener('click',e=>{
            alert('Aborted!');
            e.target.preventDefault();
    })
})

//Socks
TweenMax.staggerFrom('.nav-link', 4, {
    x: 200,
    ease: Bounce.easeOut,
    y: 500,
    opacity:0,
    delay:1,
    // rotation:360,
    // padding:100
  },.4) 