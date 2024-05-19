function ajaxRequest(method,url,data,callback){
	let request = new XMLHttpRequest();
	request.open(method,url,true);
	/*true - URL 替换浏览历史中的当前条目。    false - URL 在浏览历史中创建新的条目。*/
	if(method=="POST"){
		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	}
	request.onreadystatechange = function(){
		if(request.readyState==4){
			if(request.status ==200){
				let response = request.responseText;
				//返回作为一个字符串的响应数据
				callback(response);
			}
			else{
				handleError(request.statusText);
				//	返回状态文本（如 "Not Found" 或 "OK"）
			}
		}
	}
	request.send(data);
}

function handleError(errorText){
	alert(errorText);
}

function doLogin(){
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let url = "php/login.php?username="+username+"&password="+password;
	ajaxRequest('GET',url,"",finishLogin);
}

function finishLogin(response){
	if(response=="-99"){
		alert("Sorry error username or password");
	}
	else{
//		let url = "weather.php?id="+response;
		let uid = response;
		let url = "php/weather.php?uid="+uid;
		ajaxRequest("GET",url,"",displayWeather);
//		alert(response);
	}
}

function displayWeather(response){
	let logout_button = document.getElementById("logout_button");
	logout_button.style.display="block";
	let time = document.getElementById("time");
	time.style.display="flex";
//	let add_button = document.getElementById("add_button");
//	add_button.style.display="block";
	let log = document.getElementById("login_form");
	let weather = document.getElementById("weather");
	log.style.display= "none";
	let add_list = document.getElementById("add_list");
	add_list.style.display="none";
	let detail = document.getElementById("detail");
	detail.style.display="none";
	
	weather.innerHTML = response;
}


function showdate(){
				var xdate=new Date();
				var xyear=xdate.getFullYear();
				var xmonth=xdate.getMonth()+1;
				var xday=xdate.getDate();
				var xweek=xdate.getDay();
				var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
				var xhours=xdate.getHours();
				var xminutes=xdate.getMinutes();
				var xseconds=xdate.getSeconds();
				var str="";
				str = xyear+"."+change(xmonth)+"."+change(xday)+"    "+week[xweek]+"   "+change(xhours)+":"+change(xminutes)+":"+change(xseconds)+"";
//				document.write(str);
				document.getElementById("time").innerHTML=str;
				
			}
			function change(x){
				//return x<=9?"0"+x:x;一样的结果的代码
				var y;
				if(x<=9)
					y="0"+x;
				else
					y=x;
				return y;
			}
			window.onload=function(){
//				showdate();
				window.setInterval(showdate,1000);
			}
			
function doLogout(){
	let url ="php/logout.php";
	ajaxRequest('GET',url,"",finishLogout);
}

function finishLogout(response){
	if(response=="-99"){
		alert("Sorry something wrong");
	}
	else{
		let login_again_button = response;
		let logout_button = document.getElementById("logout_button");
		logout_button.style.display="none";
		let add_button = document.getElementById("add_button");
		add_button.style.display="none";
		let detail = document.getElementById("detail");
		detail.style.display="none";
		let add_list = document.getElementById("add_list");
		add_list.style.display = "none";
		let weather = document.getElementById("weather");
		weather.innerHTML = response;
	}
}

function backLogin(){
	window.location.reload();
}

function doDetail(mywid,myuid){
	let wid = mywid;
	let uid = myuid;
	let url = "php/detail.php?wid="+wid+"&uid="+uid;
	ajaxRequest('GET',url,"",finishDetail);
}

function finishDetail(response){
	let detail = document.getElementById("detail");
	detail.innerHTML = response;
	detail.style.display="block";
	let add_list = document.getElementById("add_list");
	add_list.style.display="none";
	let add_button = document.getElementById("add_button");
	add_button.style.display="block";
}
//	if(detail.style.display=="block"){
//		detail.style.display="none";
//		return;
//	}
//	if(detail.style.display="none"){
//		detail.style.display="block";
//		return;
//	}

function doAdd(myuid){
	let uid = myuid;
	let url = "php/add.php?uid="+uid;
	ajaxRequest('GET',url,"",finishAdd);
}

function finishAdd(response){
	let detail = document.getElementById("detail");
	detail.style.display="none";
	
	let add_list = document.getElementById("add_list");
	add_list.style.display="block";
	add_list.innerHTML = response;
	
	let add_button = document.getElementById("add_button");
	add_button.style.display="none";
}

function doOk(myuid){
	let uid = myuid;
	
	var more = document.getElementsByTagName("input");
	var arr = [];
	for (var i = 0; i < more.length; i++) {
        if(more[i].checked==true){
//      	arr.push(more[i].value);
		let wid = more[i].value;
		url = "php/ok.php?wid="+wid+"&uid="+uid;
		ajaxRequest('GET',url,"",finishOk);
        }
   }
//	doLogin();
	
	


}

function finishOk(response){
//	let detail = document.getElementById("detail");
//	detail.style.display="block";
//	
//	let add_list = document.getElementById("add_list");
//	add_list.style.display="none";
//	
//	let add_button = document.getElementById("add_button");
//	add_button.style.display="block";
//	doLogin();
//	doAdd();
	let uid =response;
	let url0 = "php/weather.php?uid="+uid;
	ajaxRequest("GET",url0,"",displayWeather);
}

function doRemove(mywid, myuid){
	let wid = mywid;
	let uid = myuid;
	url = "php/remove.php?wid="+wid+"&uid="+uid;
	ajaxRequest('GET',url,"",finishRemove);
}

function finishRemove(response){
	let uid =response;
	let url0 = "php/weather.php?uid="+uid;
	ajaxRequest("GET",url0,"",displayWeather);
}
