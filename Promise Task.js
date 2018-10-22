'use strict';

function A(){
		let _a;
		let _b;
		let _c;

	let _setA = function(){
		return new Promise((resolve)=>{
            let interval = Math.ceil(Math.random()*80+50);
            setTimeout(()=>{_a = (Math.random() * 10000 + 10)},interval);
            resolve(interval);
		});
	};

    let _setB = function(){
    	return new Promise((resolve)=>{
            let interval = Math.ceil(Math.random()*190+30);
            setTimeout(()=>{_b = (Date.now()/3000000)},interval);
            resolve(interval) ;
		});
	};
	 let _setC = function(value){
             let interval = Math.ceil(Math.random()*290+10);
            setTimeout(()=>{_c = value*10},interval);
            return interval;
	 };
	  this.process = function(){
	  	    return Promise.all([_setA(),_setB()]).then(value => {
                let interval = value.reduce((int,current)=>int+current,0);
                let a = _setC(Math.ceil(interval/2));
                return Math.ceil((a+interval)/3);
	  	    }).then(value =>  value);
	 };
	 this.show = function(){
		console.log("A = "+_a);
		console.log("B = "+_b);
		console.log("C = "+_c);
	 }
}

let c = new A();
let intervalID = setInterval(()=>c.show(),500);

function start() {
    let counter =0;
    repeat();
    function repeat(){
        c.show();
        counter++;
        c.process().then(result=> {
            if (result > 100) {
                if (counter < 10000) {
                    repeat();
                }
                else {
                    clearInterval(intervalID);
                    c.show();
                }
            }
            else {
                c.show();
                clearInterval(intervalID);
                console.log("RESULT = "+result);
            }
        });
    }
}
start();
