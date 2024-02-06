function conatct_me()
{
     var fn = document.getElementById("fname").value;
     var ln = document.getElementById("lname").value;
     var em = document.getElementById("email").value;
     var su = document.getElementById("subject").value;


     var letters = /^[A-Za-z]+$/;
     var email_val = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(!letters.test(fn))
{
    alert('First name cannot empty and must contain alphabet only');
}
if(!letters.test(ln))
{
    alert('Last name cannot empty and must contain alphabet only');
}
if(!email_val.test(em))
{
    alert('Please enter the valid Email');
}
if(!letters.test(su))
{
    alert('Write Something you want say....');
}
else
{
    alert("Thank you for your massage :)");
    window.location="Index.html";
}
}