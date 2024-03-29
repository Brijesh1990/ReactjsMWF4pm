function lgg()
{
    var em=document.getElementById("email").value;
    var pwd=document.getElementById("pass").value;
    if(em=='bk1990@gmail.com' && pwd=='brij123')
    {
        Swal.fire({
            title: "Cogrates!",
            text: "You are Logged In Successfully!",
            icon: "success"
          });

          window.location='dashboard.html';

    }
    else 
    {
            Swal.fire({
            title: "Sorry!",
            text: "Your email and password are Incorrect try again!",
            icon: "error"
          });
         
    }
}

// for logout here
function lg()
{
  window.location='index.html';
}