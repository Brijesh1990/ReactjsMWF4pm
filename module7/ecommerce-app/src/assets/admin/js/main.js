// 
function lg()
{
    var em=document.getElementById("email").value;
    var pwd=document.getElementById("pwd").value;
    if(em=='superadmin@gmail.com' && pwd=='admin123')
    {
        alert('You are Logged in successfully')
        window.location='dashboard.html';
    }
    else 
    {
        alert('Your email and password are incorrect try again')
        window.location='index.html';
    }
}

//logout here 
function logout_btn()
{
    alert('Your are logout successfully');
    window.location='index.html';
}