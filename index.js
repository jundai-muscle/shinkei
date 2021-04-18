new Vue({
    el:'#game',
    data:{
        card1:'',card2:'',card3:'',card4:'',
        card5:'',card6:'',card7:'',card8:'',
        card9:'',card10:'',card11:'',card12:'',
        card13:'',card14:'',card15:'',card16:'',
        number:[],
        len:8,
        pair1:'',
        pair2:'',
        set:undefined
    },
    created: function(){
        function shuffle(num){
            const n=num.length;
            for(let i=n-1;i>0;i--){
                let r=Math.floor(Math.random()*(i+1));
                [num[i],num[r]]=[num[r],num[i]];
            }
            return num;
        }
        
        let that=this;
        for(let i=0;i<2;i++){
            for(let j=1;j<=that.len;j++){
                that.number.push(j);
            }
        }

        this.number=shuffle(this.number);
    },
    methods:{
        onclick:function(e){
            if(this.pair1!==""&&this.pair2!==""){
                return;
            }
            function checked(that){
                function faild(){
                    console.log(e);
                    console.log(that.set.id);
                    e.target.textContent="";
                    that.set.textContent="";
                    that.pair1="";
                    that.pair2="";
                    that.set=undefined;
                    return;
                }
                function match(){
                    document.getElementById(e.target.id).style.border="none";
                    document.getElementById(that.set.id).style.border="none";
                    e.target.textContent="";
                    that.set.textContent="";
                    that.pair1="";
                    that.pair2="";
                    that.set=undefined;
                    return;
                }
                if(that.pair1!==that.pair2){
                    return new Promise(resolve=>{
                        setTimeout(()=>{resolve(faild());},500);
                    })
                }else{
                    return new Promise(resolve=>{
                        setTimeout(()=>{resolve(match());},500);
                    })
                }
            }
            async function check(that){
                await checked(that)
                return;
            }

            let Id=e.target.id;
            let index=Number(Id.substr(Id.indexOf('-')+1))-1;
            e.target.textContent=this.number[index];
            if(this.set===undefined){
                this.set=e.target;
            }
            if(this.pair1===""){
                this.pair1=this.number[index];
            }else{
                this.pair2=this.number[index];
                check(this);
            }

        }
    }
});