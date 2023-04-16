// let counter=0;
if(!localStorage.getItem('counter')){
    localStorage.setItem('counter',0);
}

function addsup(){
    let counter=localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML=counter;
    localStorage.setItem('counter',counter)

    
   
}
function reset(){
    let resetcounter=0;
    document.querySelector('h1').innerHTML=resetcounter;
    localStorage.setItem('counter',resetcounter)

}
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('h1').innerHTML=localStorage.getItem('counter')
    document.querySelector('button').onclick=addsup;
    setInterval(addsup,1000)
    document.querySelector('#reset').onclick=reset;
  
    
})