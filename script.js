setInterval(clockdisp,500);
function clockdisp()
{
	var time=new Date();
	var hr=time.getHours();
	var min=time.getMinutes();
	var sec=time.getSeconds();
	var ampm="AM";

	if(hr>12)
	{
		hr=hr-12;
		ampm="PM";
	}
	if(hr<10)
	{
		hr="0"+hr;
	}
	if(sec<10)
	{
		sec="0"+sec;
	}

	document.getElementById('clockdivid').innerHTML=hr+":"+min+":"+sec+" "+ampm;

}