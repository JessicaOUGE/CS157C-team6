function btnclick() {
	var inputUsername = document.getElementById("username").value;
	var inputPassword = document.getElementById("userPassword").value;
	var inputRePassword = document.getElementById("userRePassword").value;
	var inputFirstName = document.getElementById("userFirstName").value;
	var inputLastName = document.getElementById("userLastName").value;
	var inputgender = null;
	var obj = document.getElementsByName("userGender");
	for(var i = 0; i < obj.length; i++) {
		if(obj[i].checked) {
			inputgender = obj[i].value;
		}
	}

	if(inputPassword != inputRePassword) {
		alert("Entered different password!");
	} else {
		var user = {username:inputUsername, password:inputPassword, firstName:inputFirstName, lastName:inputLastName, gender:inputgender};
//		alert(user + "username is: "+user.username+" password is: "+user.password+" name is: "+user.firstName+" "+user.lastName+" gender is: "+user.gender);
        sendJson(user);
    }
}

function sendJson(data) {
   var xmlhttp;
   if(window.XMLHttpRequest) {
       xmlhttp = new XMLHttpRequest();
   }else {
       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
   }
   xmlhttp.onreadystatechange = function () {
       if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
           console.log("success");
       }
   };
   xmlhttp.open("POST","/sign_up", true);
   xmlhttp.setRequestHeader("Content-Type", "application/json");
   xmlhttp.send(JSON.stringify(data));
   alert("Create Success!");

}