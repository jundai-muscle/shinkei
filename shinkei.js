'use strict';
let len=16;
const ng=document.getElementById('new-game');
let omote=0;
var player1=0;
var player2=0;
var set;
let cards;


ng.addEventListener('click',()=>{
    ng.disabled=true;
    dealCards()
    .then(v=>{cards=v;})
    .then(()=>{ng.disabled=false;})
    .catch(()=>{ng.disabled=false;})
    .finally(()=>{
        for(let i=1;i<=16;i++){
            document.getElementById('cell-'+i).classList.add('back-card');
        }
        document.getElementById('player-1-score').textContent=0;
        document.getElementById('player-2-score').textContent=0;
    })
})
/*
let cell1=document.getElementById('cell-1');
let cell2=document.getElementById('cell-2');
let cell3=document.getElementById('cell-3');
let cell4=document.getElementById('cell-4');
let cell5=document.getElementById('cell-5');
let cell6=document.getElementById('cell-6');
let cell7=document.getElementById('cell-7');
let cell8=document.getElementById('cell-8');
let cell9=document.getElementById('cell-9');
let cell10=document.getElementById('cell-10');
let cell11=document.getElementById('cell-11');
let cell12=document.getElementById('cell-12');
let cell13=document.getElementById('cell-13');
let cell14=document.getElementById('cell-14');
let cell15=document.getElementById('cell-15');
let cell16=document.getElementById('cell-16');
*/

function checked(cell,set){
    let index=Number(cell.id.substr(cell.id.indexOf('-')+1))-1;
    let index2=Number(set.id.substr(set.id.indexOf('-')+1))-1;
    function checkout(){
        if(cell.textContent===set.textContent){
            cell.textContent="";
            set.textContent="";
            cell.style.border="none";
            set.style.border="none";
            cards[index]="";
            cards[index2]="";
            omote=0
            set=undefined;
        }else{
            cell.textContent="";
            set.textContent="";
            set.classList.remove("card-"+cards[index].toLowerCase());
            set.classList.add("card-back");
            omote=0
            set=undefined;
            }
        }
        return new Promise(resolve=>{
            setTimeout(()=>{resolve(checkout());},1000);
        })
}

async function check(cell,set){
    const result=await checked(cell,set)
    return;
}
/*
cell1.addEventListener('click',(e)=>{
    if(omote===0){
        cell1.classList.remove("card-back");
        cell1.classList.add('card-'+cards[0].toLowerCase());
        cell1.textContent=cards[0];
        set=e.target;
        omote=1;
    }else{
        cell1.textContent=cards[0];
        check(e.target,set)
    }
})

cell2.addEventListener('click',(e)=>{
    if(omote===0){
        cell2.classList.remove("card-back");
        cell2.classList.add('card-'+toLowerCase(cards[1]));
        cell2.textContent=cards[1];
        set=e.target;
        omote=1;
    }else{
        cell2.textContent=cards[1];
        check(e.target,set)
    }
})

cell3.addEventListener('click',(e)=>{
    if(omote===0){
        cell3.classList.remove("card-back");
        cell3.classList.add('card-'+toLowerCase(cards[2]));
        cell3.textContent=cards[2];
        set=e.target;
        omote=1;
    }else{
        cell3.textContent=cards[2];
        check(e.target,set)
    }
})*/


document.addEventListener('DOMContentLoaded', function(){
	function cardClick(){
	    console.log(1);
	}

	const card = document.getElementsByClassName('card');
	for(let i = 0; i < 16; i++) {
    	card[i].addEventListener('click', cardClick);
	}
    
});
