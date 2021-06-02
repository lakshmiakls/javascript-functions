
// javascript-functions;

function DOB() {
       console.log("25.09.2002");
}
DOB();
 
 

function DOBwithname() {
   let name = "jimmy"
    console.log(`25.09.2002 ${name}`);
 }
DOBwithname(); 


function DOBwithname(name) {
   
    console.log(`25.09.2002 ${name}`);
 }
DOBwithname("real me");
  
  function sq(number) { 
         console.log(number*number);
  }
  sq(9);
   
   
  function twice(x) {
        console.log(2*x);
       
  }
  twice(99);
  
 // prompt;
 
 //// let p = parseInt(prompt("p:"));
 ////let q = parseInt(prompt("q:"));
 
 function add(p,q) {
   console.log(p+q);
  }
 
 add(1,1);
 add(2,2);
 
 
 // return
 
 function tentimes(num) {
     return 10*num;

 }
  result=tentimes(9);
  console.log(result);
  
  
  
  // global scope;
  // local scope;
 
 let p = "welcome";
   
   function greet() {
     let q = "home";
     console.log(`${p} ${q}`)
     
     if(true) { 
       let c = "anu";
         console.log(c);
     }
     //console.log(c);
   }
  // greet();
  greet();
   
  // console.log(q);
  
  
  
  //hoisting;
  
  
  // declare; 
  
  var type;
   console.log(type);
   
   
   console.log(type2);
  var type2;

  // declare and defined;

   var type3 = 876;
   console.log(type3);
   
   console.log(type4);
   var type4 = 87;
   
   
   
   // loop with while or for loops
     
    
     function counting(No) {
       console.log(No);
       
       No = No - 1;
       
       if (No > 0){
         counting(No);
       }
     }
     counting(9);
     
     
     
    




   
  
