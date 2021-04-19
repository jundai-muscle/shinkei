'use strict';
let len=16;
const ng=document.getElementById('new-game');
let omote=0;
let player=0;
var player1score=0;
var player2score=0;
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
            document.getElementsByClassName('card')[i-1].style.border="solid 1px black"
            document.getElementById('cell-'+i).classList.add('back-card');
        }
        document.getElementById('player-1-score').textContent=0;
        document.getElementById('player-2-score').textContent=0;
    })
})




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
            if(player===0){
                player1score++;
                document.getElementById('player-1-score').textContent=player1score;
            }else{
                player2score++;
                document.getElementById('player-2-score').textContent=player2score;
            }
        }else{
            cell.textContent="";
            set.textContent="";
            set.classList.remove("card-"+cards[index].toLowerCase());
            set.classList.add("card-back");
            omote=0
            set=undefined;
            if(player===0){
                player=1;
            }else{
                player=0;
            }
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

document.addEventListener('DOMContentLoaded', function(){
	function cardClick(e){
        if(omote===2){
            return;
        }
        let index=Number(e.target.id.substr(e.target.id.indexOf('-')+1))-1;
        if(omote===0){
            e.target.classList.remove("card-back");
            e.target.classList.add('card-'+cards[index].toLowerCase());
            e.target.textContent=cards[index];
            set=e.target;
            omote=1;
        }else{
            omote++;
            e.target.textContent=cards[index];
            check(e.target,set)
        }
	}

	const card = document.getElementsByClassName('card');
	for(let i = 0; i < 16; i++) {
    	card[i].addEventListener('click', cardClick);
	}
    
});
