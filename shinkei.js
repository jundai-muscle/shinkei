'use strict';

let number=[];
let len=8;
let pair1="";
let pair2="";
let set=undefined;

function shuffle(num){
    const n=num.length;
    for(let i=n-1;i>0;i--){
        let r=Math.floor(Math.random()*(i+1));
        [num[i],num[r]]=[num[r],num[i]];
    }
}

for(let i=0;i<2;i++){
    for(let j=1;j<=len;j++){
        number.push(j);
    }
}

shuffle(number);

let open = document.getElementsByClassName('card').addEventListener('click', (e)=>{
    console.log(e);
});

