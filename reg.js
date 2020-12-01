function registration()
{

var name= document.getElementById("t1").value;
var email= document.getElementById("t2").value;
var branch=document.getElementById("t3").value;
var college=document.getElementById("t4").value;
var state=document.getElementById("t5").value;
var addr=document.getElementById("t6").value;
var age=document.getElementById("t7").value;
var phno=document.getElementById("t8").value;
var uname= document.getElementById("t9").value;
var pwd= document.getElementById("t10").value;
var cpwd= document.getElementById("t11").value;

var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
var letters = /^[A-Za-z, ]+$/;
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var num= /^[0-9]+$/;
var phone= /^\d{10}$/;
if(name=='')
{
alert('Please enter your name');
}
else if(!letters.test(name))
{
alert('Name field requires only alphabets');
}
else if(email=='')
{
alert('Please enter your user email id');
}
else if (!filter.test(email))
{
alert('Invalid email');
}
else if(branch=='')
{
alert('Please enter the branch');
}
else if(!letters.test(branch))
{
alert('Branch field requires only alphabets');
}
else if(college=='')
{
alert('Please enter the College/ University');
}
else if(!letters.test(college))
{
alert('College field requires only alphabets');
}
else if(state=='')
{
alert('Please enter the state');
}
else if(!letters.test(state))
{
alert('State field requires only alphabets');
}
else if(addr=='')
{
alert('Please enter the address');
}
else if(age=='')
{
alert('Please enter the age');
}
else if(!num.test(age))
{
alert('Age field requires only positive numeric values');
}
else if(!phone.test(phno))
{
alert('Phone number should be numeric and 10 digits');
}
else if(uname=='')
{
alert('Please enter the User name');
}
else if(!letters.test(uname))
{
alert('User name field requires only alphabets');
}
else if(pwd=='')
{
alert('Please enter Password');
}
else if(cpwd=='')
{
alert('Enter Confirm Password');
}
else if(!pwd_expression.test(pwd))
{
alert ('Upper case, Lower case, Special character and Numeric letter are required in Password');
}
else if(pwd != cpwd)
{
alert ('Password not Matched');
}
else if(document.getElementById("t10").value.length < 6)
{
alert ('Password minimum length is 6');
}
else if(document.getElementById("t10").value.length > 12)
{
alert ('Password max length is 12');
}
else
{                            
  alert('Thank You for registering in Techovid');
  window.location="doc.html";
}
}
