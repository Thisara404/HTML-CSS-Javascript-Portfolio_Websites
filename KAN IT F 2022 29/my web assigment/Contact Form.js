function conatct_me()
{
     var fn = document.getElementById("fname").value;
     var ln = document.getElementById("lname").value;
     var em = document.getElementById("email").value;
     var su = document.getElementById("subject").value;


     var letters = /^[A-Za-z]+$/;
     let email_val=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if(fn==''|| ln==""||em==""||su=="")
     {
       alert("Can't Be Epmty ..Enter Each Details correctly ");
     }
else if(!letters.test(fn))
{
    alert('First name cannot empty and must contain alphabet only');
}
else if(!letters.test(ln))
{
    alert('Last name cannot empty and must contain alphabet only');
}
else if(!email_val.test(em))
{
    alert('Please enter the valid Email');
}
else if(!letters.test(su))
{
    alert('Write Something you want say....');
}
else
{
    alert("Thank you for your massage :)");
    window.location="#Contact-Form";
}
}