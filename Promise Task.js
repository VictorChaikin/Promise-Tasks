'use strict';

function A(a,b,c){
	//constructor(a,b,c){
		let _a = a;
		let _b = b;
		let _c = c;
	//}
	//let self = this;
	let _setA = function(){
		return new Promise((resolve)=>{
            let interval = Math.ceil(Math.random()*80+50);
             console.log("A = "+interval);
            setTimeout(()=>{_a = Math.random() * 10000 + 10},interval);
            resolve(interval);
		});
	};

    let _setB = function(){
    	return new Promise((resolve)=>{
            let interval = Math.ceil(Math.random()*190+30);
            console.log("B = "+interval);
            setTimeout(()=>{_b = Date.now()/3000000},interval);
            resolve(interval) ;
		});
	};
	 let _setC = function(value){
             let interval = Math.ceil(Math.random()*290+10);
            console.log("C = "+interval);
            setTimeout(()=>{_c = value*10},interval);
            return interval;
	 };
	  this.process = function(){
	  	    Promise.all([_setA(),_setB()]).then(value => {
                let interval = value.reduce((int,current)=>int+current,0);
                let a = _setC(Math.ceil(interval/2));
                let finalInterval = Math.ceil((a+interval)/3);
                console.log("Fin = "+finalInterval);

                // resolve(finalInterval);
                //if(finalInterval<100)
                return finalInterval;
                //else
                    //process(counter++);
	  	    });

	 };
	 this.show = function(){
		console.log("A = "+_a);
		console.log("B = "+_b);
		console.log("C = "+_c);
	 }
}

let c = new A(0,3,3);
let counter =0;
let a;
do{
     a = c.process();
     console.log("A = "+a);
    counter++;
}while(a>100 && counter<10000) ;
//setInterval(c.show,500);
