// create a function for clear all result data
function clr()
{
    document.getElementById("result").value="";
}
// create a function for input data via button  in  result
function getValue(val)
{
document.getElementById("result").value+=val;
}
// create a function for backspace a single values   
function bckRemove()
{
    let bck=document.getElementById("result").value;
    let spc=bck.slice(0,-1);
    document.getElementById("result").value=spc;
}
// create a function for perform all airthmatic expressions
function finalResult()
{
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
}
// create a function for square 
function sqResult()
{
    let x=document.getElementById("result").value;
    let y=Math.pow(x,2);
    document.getElementById("result").value=y;
}

// create a function for square root 
function sqrtResult()
{
    let x=document.getElementById("result").value;
    let y=Math.sqrt(x);
    document.getElementById("result").value=y;
}
