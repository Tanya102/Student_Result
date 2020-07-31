function validation()
	{

		var fname= document.getElementById("firstName").value;
		var lname= document.getElementById("lastName").value;
		var class= document.getElementById("class").value;
		var yop= document.getElementById("yop").value;
		var marks= document.getElementById("marks").value;
		var submit= document.getElementById("submit").value;			
		
		
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^[a-zA-Z0-9]+$/;
		var num= /^[0-9]+$/;

		if(fname=='')
		{
			alert('Please enter your name');
		}
		else if(lname=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(fname))
		{
			alert('Name field required only alphabet characters');
		}
		else if(!letters.test(lname))
		{
			alert('Last Name field required only alphabet characters');
		}
		else if(lname.length>20)
		{
			alert('Last Name field should have less than 20 characters');
		}
		else if(fname.length>20)
		{
			alert('Name field should have less than 20 characters');
		}
		else if(class=='')
		{
			alert('Please enter your class');
		}
		else if (!filter.test(class))
		{
			alert('Invalid class');
		}
		else if(marks=='')
		{
			alert('Please enter your marks');
		}
		else if(!num.test(marks))
		{
			alert('Marks field required only numbers');
		}
		else if(yop=='')
		{
			alert('Please enter your year of passing');
		}

		else
		{		submit.disabled=true;		                            
               alert('Thank You for your submission!');
		}
	}
