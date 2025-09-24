// console.log("Hello World");
// var a;
// console.log("a="+a);
// var a=23;

// let a=40;
// if(a>10){
// let a=300;
// console.log("a inside:"+a)
// }else{
// console.log("else condtition")
// }
// console.log("a outside="+a);


// let a="20";
// if(a===20){
//     console.log("Equal data")
// }
// else{
//     console.log("not equal");
// }

// const myname="Rahul";
// //console.log("Hiiii....."+myname);
// const data=`Hello...${myname}`;
// console.log(data);

//function as an expression
// const data=function msg(name){
//     return name+" welcome to JS";
// }
//   const msg=data("Rahul");
//   console.log(msg);
// const data=msg("Ram");
// console.log(data);


//Arrow function

// const data=(myname)=>{
//     //console.log("Hiiii....Hellloo"+myname)
//     return "Hiiii....Hellloo"+myname;
// }
// const result=data("Ram");
// console.log(result)

//single line
// const data=msg=>"Hiii..."+msg;
// console.log(data("Greetings...."));

//IIFE

// (function(){
//     console.log("Welcome to JS")
// })();

// (()=>{
//     console.log("Welcome to ABES")
// })();

// setTimeout(()=>{
// console.log("Hiii... I m using Timeout")
// },1000);

// setInterval(()=>{
// console.log("hiiii....how  r u")
// },1000)


// function greetings(msg="Welcome"){
// console.log("Hiii"+msg);

// }
// greetings("rahul");


  function selectlanguage(lang){
    let data;
    if(lang=='java'){
        function javaCompiler(){
            return "Java comiler selected";
        }
        data=javaCompiler();
    }else if(lang=='c'){
        function cCompiler(){
            return "C compiler selected"
        }
        data=cCompiler();
    }
     else{
        data="no such compiler available"
     }
     return data;
  }
selectlanguage('java');

  