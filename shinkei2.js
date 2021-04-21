'use strict';
let len=16;
const ng=document.getElementById('new-game');
let omote=0;
let player=0;
var player1score=0;
var player2score=0;
var set;
//var v;

function newGame(){
    return new Promise((resolve,reject)=>{
        resolve(dealCards());
        reject(new Error("Promise error"));
    })
}
function deal(el,i){
  return new Promise((resolve,reject)=>{
    resolve(for(let i=0;i<16;i++){
      
    });
  })
}
ng.addEventListener('click',async()=>{
    await newGame()
    .then(async (v)=>{
        console.log(v);
        await deal(v);
        for(let i=1;i<=16;i++){
            //doument.getElementsByClassName('card')[i-1].style.visibility="visible";
            document.getElementsByClassName('card')[i-1].style.display="none";
            document.getElementsByClassName('field')[i-1].style.border="solid 1px black";
            document.getElementById('cell-'+i).classList.add('card-back');
            document.getElementById('player2').style.opacity="0.5";
        }
        document.getElementById('player-1-score').textContent=0;
        document.getElementById('player-2-score').textContent=0;
        ng.disabled=false;
    })
    .catch(()=>{ng.disabled=false;})
  
})
/*
    ng.disabled=true;
    dealCards()
    .then(value=>{
        v=value;
        console.log(v);
        for(let i=1;i<=16;i++){
            //document.getElementsByClassName('card')[i-1].style.visibility="visible";
            document.getElementsByClassName('card')[i-1].textContent=v[i-1];
            document.getElementsByClassName('card')[i-1].style.display="none";
            document.getElementsByClassName('field')[i-1].style.border="solid 1px black";
            document.getElementById('cell-'+i).classList.add('card-back');
            document.getElementById('player2').style.opacity="0.5";
        }
        document.getElementById('player-1-score').textContent=0;
        document.getElementById('player-2-score').textContent=0;
        
    })
    .then(()=>{ng.disabled=false;})
    .catch(()=>{ng.disabled=false;})
*/


function checked(set,cell){
    function checkout(){
        if(cell.textContent===set.textContent){
            set.classList.remove("card-"+set.firstElementChild.textContent.toLowerCase());
            cell.classList.remove("card-back");
            set.classList.remove("card-back");
            cell.style.border="none";
            set.style.border="none";
            //set.firstElementChild.style.visibility="hidden";
            //cell.firstElementChild.style.visibility="hidden";
            set.firstElementChild.textContent="";
            cell.firstElementChild.textContent="";
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
            set.firstElementChild.style.display="none";
            cell.firstElementChild.style.display="none";
            set.classList.remove("card-"+set.textContent.toLowerCase());
            set.classList.add("card-back");
            omote=0
            set=undefined;
            if(player===0){
                player=1;
                document.getElementById('player1').style.opacity="0.5";
                document.getElementById('player2').style.opacity="1.0";
            }else{
                document.getElementById('player2').style.opacity="0.5";
                document.getElementById('player1').style.opacity="1.0";
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

        let get=e.target;
        if(omote===2 || get.textContent===""){
            return;
        }
        //let index=Number(e.target.id.substr(e.target.id.indexOf('-')+1))-1;
        if(omote===0){
            get.classList.remove("card-back");
            get.classList.add('card-'+get.textContent.toLowerCase());
            get.firstElementChild.style.display="block";
            set=get;
            omote=1;
        }else{
            omote++;
            get.firstElementChild.style.display="block";
            check(set,e.target)
        }
	}
	const card = document.getElementsByClassName('field');
	for(let i = 0; i < 16; i++) {
    	card[i].addEventListener('click', cardClick);
	}
    
});
