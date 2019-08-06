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

// drag / drop

// focus

// resize

// select

// dblclick
let clicks=0;
let buttholeButton=document.getElementById('butt');

buttholeButton.addEventListener('click',e=>{
   if (clicks==0){
       e.target.textContent="NO!";
       clicks++;
   }else if (clicks==1){
        e.target.textContent="NO WAY!";
        clicks++;
   }else if (clicks==2){
    e.target.innerHTML=`<span style='font-size:200%;color:red;'>Knock it off!</span>`;
    clicks++;
   }else{
    e.target.innerHTML=`<span style='font-size:100%;color:white;'>Try Double Click</span>`;
    clicks=0;
   }
})

buttholeButton.addEventListener('dblclick',e=>{
    e.target.textContent="Ok, FINE!";
})

// let mo=document.querySelectorAll('img');
// mo.addEventListener('mouseover',e=>{
// })