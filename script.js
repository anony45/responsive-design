function validate()
{
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var Email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if(fname==="")
  {
    document.getElementById("div1").innerHTML="First Name cannot be empty";
  }
  else
  {
  }
  if(lname==="")
  {
    document.getElementById("div2").innerHTML="Last Name cannot be empty";
  }
  else
  {
    document.getElementById("div2").innerHTML="";
  }
  if(Email.indexOf("@")> -1)
  {
    document.getElementById("div3").innerHTML="";
  }
  else
  {
  document.getElementById("div3").innerHTML="Looks like this is not an email";
  }
  if(password==="")
  {
   document.getElementById("div4").innerHTML="Password cannot be empty";
  }
  else
  {
    document.getElementById("div4").innerHTML="";
  }
  
  }