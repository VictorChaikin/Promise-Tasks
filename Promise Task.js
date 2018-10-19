'use strict';

function A(){
	//constructor(a,b,c){
		let _a;
		let _b;
		let _c;
		let int = 3;
	//}
    this._getInt= function () {
        return int;

    };
    let setInt = function(val){
        int = val;
    };
	//let self = this;
	let _setA = function(){
		return new Promise((resolve)=>{
            let interval = Math.ceil(Math.random()*80+50);
             console.log("Interval A = "+interval);
            setTimeout(()=>{_a = (Math.random() * 10000 + 10)},interval);
            resolve(interval);
		});
	};

    let _setB = function(){
    	return new Promise((resolve)=>{
            let interval = Math.ceil(Math.random()*190+30);
            console.log("Interval B = "+interval);
            setTimeout(()=>{_b = (Date.now()/3000000)},interval);
            resolve(interval) ;
		});
	};
	 let _setC = function(value){
             let interval = Math.ceil(Math.random()*290+10);
            console.log("Interval C = "+interval);
            setTimeout(()=>{_c = value*10},interval);
            return interval;
	 };
	  this.process = function(){
	  	    return Promise.all([_setA(),_setB()]).then(value => {
                let interval = value.reduce((int,current)=>int+current,0);
                let a = _setC(Math.ceil(interval/2));
                //console.log("C interval ="+a);
                let finalInterval = Math.ceil((a+interval)/3);
                //console.log("Fin = "+finalInterval);
                setInt(finalInterval);
                return finalInterval;
	  	    }).then(value =>  value);
	 };
	 this.show = function(){
		console.log("A = "+_a);
		console.log("B = "+_b);
		console.log("C = "+_c);
	 }
}

let c = new A();
const intervalTimer = setInterval(()=>c.show(),500);

function start() {
    let counter =0;
    repeat();
    function repeat(){
        counter++;
        c.process().then(result=> {
            if (result > 100) {
                if (counter < 10000) {
                    repeat();
                }
                else {
                    c.show();
                    clearInterval(intervalTimer);
                }
            }
            else {
                c.show();
                console.log("RESULT = "+result);
                clearInterval(intervalTimer);
            }
        });
    }
}
start();
//setInterval(c.show,500);
