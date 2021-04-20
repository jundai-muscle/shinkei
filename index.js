'use strict';
let len=16;
const ng=document.getElementById('new-game');
let omote=0;
let player=0;
var player1score=0;
var player2score=0;
var set;



ng.addEventListener('click',()=>{
    ng.disabled=true;
    dealCards()
    .then(v=>{
        console.log(v);
        for(let i=1;i<=16;i++){
            document.getElementsByClassName('card')[i-1].textContent=v[i-1];
            //document.getElementsByClassName('card')[i-1].style.visibility="hidden";
            document.getElementsByClassName('card')[i-1].style.opacity="0";
            document.getElementsByClassName('field')[i-1].style.border="solid 1px black"
            document.getElementById('cell-'+i).classList.add('back-card');
            document.getElementById('player2').style.opacity="0.5";
        }
        document.getElementById('player-1-score').textContent=0;
        document.getElementById('player-2-score').textContent=0;
    })
    .then(()=>{ng.disabled=false;})
    .catch(()=>{ng.disabled=false;})
})




function checked(set,cell){
    function checkout(){
        if(cell.textContent===set.textContent){
            cell.textContent="";
            set.textContent="";
            cell.parentNode.style.border="none";
            set.parentNode.style.border="none";
            //set.style.visibility="hidden";
            //set.style.visibility="hidden";
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
            cell.style.opacity="0";
            set.style.opacity="0";
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
            get.style.opacity="1.0";
            set=get;
            omote=1;
        }else{
            omote++;
            get.style.opacity="1.0";
            check(set,e.target)
        }
	}
	const card = document.getElementsByClassName('card');
	for(let i = 0; i < 16; i++) {
    	card[i].addEventListener('click', cardClick);
	}
    
});
