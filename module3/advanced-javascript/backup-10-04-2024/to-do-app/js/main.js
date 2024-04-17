// to do applied crud operations create | read | edit | update | delete
// enable a buttons
function enableBTN(btnId)
{
document.getElementById(btnId).disabled=false;
}
// create onload function or method
window.onload=()=>{
// querySelector | querySelectorAll()
const form1=document.querySelector("#addForm");
let item=document.getElementById("item");
let items=document.getElementById("items");
let submit=document.getElementById("submit");
// edit
let editItem=null;
// when we click on submit button data should be added
form1.addEventListener('submit',additem);
// after delete data should be deleted
items.addEventListener("click",removeitem);

}

// add data
function additem(e)
{
e.preventDefault();
let newitem=document.getElementById("item").value;
// successfully updated 
if(submit.value!="AddData")
{
editItem.target.parentNode.childNodes[0].data=document.getElementById("item").value;  
submit.value="AddData";
document.getElementById("item").value="";
Swal.fire({
title: "success",
text: "Items Updated  successfully",
icon: "success"
})
return false;
}

// add data 
if(newitem.trim()=="" || newitem.trim()==null)
{

Swal.fire({
title: "Oh",
text: "Please input some data",
icon: "error"
}).then((result) => {
/* Read more about isConfirmed, isDenied below */
if (result.isConfirmed) 
{
document.addForm.item.focus();  
return false;
}
});
}
else 
{
document.getElementById("item").value="";
let li=document.createElement("li");
li.className="list-group-item mt-2";

// add delete button
let delBtn=document.createElement("button");
delBtn.className="btn btn-sm btn-danger text-white float-end delete ms-2"; 
delBtn.appendChild(document.createTextNode("Delete"));
// add edit button
let editBtn=document.createElement("button");
editBtn.className="btn btn-sm btn-info text-white float-end edit ms-0"; 
editBtn.appendChild(document.createTextNode("Edit"));

//data stored via createTextNode(newitem)
li.appendChild(document.createTextNode(newitem));
// display data
items.appendChild(li);
// add button for delete data
li.appendChild(delBtn);
// edit button for delete data
li.appendChild(editBtn);

}

}

// delete data
function removeitem(e)
{
e.preventDefault();
//alert('hi')
if(e.target.classList.contains("delete"))
{
if(confirm('Are you sure to delete Items'))
{
let li=e.target.parentNode;
items.removeChild(li);

Swal.fire({
title: "success",
text: "Items Removed successfully",
icon: "success"
})

}
}

if(e.target.classList.contains("edit"))
{
document.getElementById("item").value=e.target.parentNode.childNodes[0].data;
submit.value="Edit"; 
editItem=e;    
}

// removed function over here

}