
function init(){
	
	loadLiveTime();
	loadingTimer(30 * 60);
}


function loadingTimer(durationSeconds){
	setTimeout(function(){
		loadLiveTime();
		
		
		loadingTimer(durationSeconds);
	}, durationSeconds * 1000);
}


function loadLiveTime()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	  
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("website-live-time").innerHTML= " " + xmlhttp.responseText + " days";
		}
	}
	xmlhttp.open("GET","/api/app/age",true);
	xmlhttp.send();
}

