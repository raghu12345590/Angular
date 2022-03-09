var data=new XMLHttpRequest();
var cObj;

data.open('GET','https://reqres.in/api/users?page=2');
data.responseType = 'text';
data.send(null);

data.onload = function() {
     if(data.status === 200) {
	 cObj = JSON.parse(data.responseText);
	 console.log(cObj);
	 
	 var iconcode = cObj.data[0].avatar;
		console.log(iconcode);
		var icon_path = "https://reqres.in/img/faces/8-image"+iconcode+".jpg";
		document.getElementById('r1c2').src=iconcode;
		 
	 document.getElementById('firstName').innerHTML=cObj.data[0].first_name;
	 document.getElementById('lastName').innerHTML=cObj.data[0].last_name;
	 document.getElementById('emailId').innerHTML=cObj.data[0].email;
	 document.getElementById('id').innerHTML=cObj.data[0].id;
	 
	 }
	 };
	