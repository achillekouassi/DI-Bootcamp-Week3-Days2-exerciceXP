 
function world(){
  alert("hello world");
}
setTimeout(world,2000);

const disign = document.getElementById("container");
function helloWorld(){
  const  p = document.createElement('p');
  p.textContent =" hello World";
  disign.appendChild(p);
  
  if(disign.children.length == 5 ){
    clearInterval(interval);  
  }
};
const interval = setInterval(helloWorld,2000);
const button = document.getElementById("clear")
button.addEventListener("click",()=>{
 clearInterval(interval);

});
   
 


