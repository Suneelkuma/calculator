let inputValue="";

let buttons=document.querySelectorAll('.button')
// console.log(typeof buttons);
 Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    // console.log(this.innerHTML);
if(e.target.innerHTML=="="){
    inputValue=eval(inputValue);
    document.querySelector('input').value=inputValue;
}
else if(e.target.innerHTML=="C"){
    inputValue="";
    document.querySelector('input').value=inputValue;
}else{
    // console.log(e.target);
    inputValue=inputValue+e.target.innerHTML;
    document.querySelector('input').value=inputValue;
    // console.log(inputValue);
}
})
 })
//  let input=document.querySelector('input').value;

//  input.addEventListener('change',(e)=>{
//     console.log(e.target.value);
//  })