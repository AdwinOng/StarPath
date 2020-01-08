function preventBack(){
if(localStorage.getItem('user') < 1)
{
	window.location.href='login.jsp';
}
}

function verify(){
if(document.getElementById("email").value== localStorage.getItem('em3') && document.getElementById("password").value == localStorage.getItem('pw3'))
{
	localStorage.setItem('user', 3);
    return true;
}
else if(document.getElementById("email").value== localStorage.getItem('em1') && document.getElementById("password").value == localStorage.getItem('pw1'))
{
	localStorage.setItem('user', 1);
    return true;
}
else if(document.getElementById("email").value== localStorage.getItem('em') && document.getElementById("password").value == localStorage.getItem('pw'))
{
	localStorage.setItem('user', 6);
    return true;
}
else if(document.login.email.value == localStorage.getItem('em') && document.login.password.value == localStorage.getItem('pw'))
{
	return true;
}
else
{
   alert("Wrong username or password");
   return false;    
}

}

function mainuser(){

localStorage.setItem('em1', 'adwin@gmail.com');
if(localStorage.getItem('pw1') == null)
{
	localStorage.setItem('pw1', '04162000');
}
//localStorage.setItem('pw2', '04162000');
localStorage.setItem('em3', 'kkn@gmail.com');
if(localStorage.getItem('pw3') == null)
{
	localStorage.setItem('pw3', '755304424');
}
//localStorage.setItem('pw4', '04162000');
//localStorage.setItem('pw5', '04162000');
if(localStorage.getItem('user')==1)
{
	document.acc.email.value = localStorage.getItem('em1');
	document.acc.pwd.value = localStorage.getItem('pw1');
	if(localStorage.getItem('name1') == null)
	{
		document.acc.name.value = "Adwin";
	}
	else
	{
		document.acc.name.value = localStorage.getItem('name1');
	}
	if(localStorage.getItem('pn1') == null)
	{
		document.acc.pnum.value = "0103881384";
	}
	else
	{
		document.acc.pnum.value = localStorage.getItem('pn1');
	}
	if(localStorage.getItem('bd1') == null)
	{
		document.acc.birthday.value = "2000-04-16";
	}
	else
	{
		document.acc.birthday.value = localStorage.getItem('bd1');
	}
	document.acc.gender.value = "Male";
}
else if(localStorage.getItem('user')==2)
{
	localStorage.setItem('name2', 'Nicholas');
	document.acc.name.value = localStorage.getItem('name2');
}
else if(localStorage.getItem('user')==3)
{
	document.acc.email.value = localStorage.getItem('em3');
	document.acc.pwd.value = localStorage.getItem('pw3');
	if(localStorage.getItem('name3') == null)
	{
		document.acc.name.value = "Kkn";
	}
	else
	{
		document.acc.name.value = localStorage.getItem('name3');
	}
	if(localStorage.getItem('pn3') == null)
	{
		document.acc.pnum.value = "0195592393";
	}
	else
	{
		document.acc.pnum.value = localStorage.getItem('pn3');
	}
	if(localStorage.getItem('bd3') == null)
	{
		document.acc.birthday.value = "2017-07-07";
	}
	else
	{
		document.acc.birthday.value = localStorage.getItem('bd3');
	}
	document.acc.gender.value = "Male";
}
else if(localStorage.getItem('user')==4)
{
	localStorage.setItem('name4', 'Nikey');
	document.acc.name.value = localStorage.getItem('name4');
}
else if(localStorage.getItem('user')==5)
{
	localStorage.setItem('name5', 'Tan');
	document.acc.name.value = localStorage.getItem('name5');
}
else if(localStorage.getItem('user')==6)
{
	document.acc.name.value = localStorage.getItem('nm');
	document.acc.pnum.value = localStorage.getItem('pn');
	document.acc.email.value = localStorage.getItem('em');
	document.acc.birthday.value = localStorage.getItem('bd');
	document.acc.gender.value = localStorage.getItem('g');
	document.acc.pwd.value = localStorage.getItem('pw');
}
}


function chkformat(){
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.reg.email.value))
{
   	return true;
}
else
{
    alert("Email invalid format");
    document.reg.email.focus();
    return false;
}
}

function save(){
if(document.reg.email.value=="")
{
	alert("Please enter email");
	document.reg.email.focus();
	return false;
}
else if(document.reg.pwd.value=="")
{
	alert("Please enter password");
	document.reg.pwd.focus();
	return false;
}
else if(document.reg.name.value=="")
{
	alert("Please enter name");
	document.reg.name.focus();
	return false;
}
else if(document.reg.pnum.value=="")
{
	alert("Please enter phone number");
	document.reg.pnum.focus();
	return false;
}
else if(document.reg.birthday.value<1)
{
	alert("Please enter birthday");
	document.reg.birthday.focus();
	return false;
}
else if(document.reg.gender.value==0)
{
	alert("Gender");
	document.reg.gender.focus();
	return false;
}
else if(document.reg.chk1.checked==0)
{
	alert("You must agree to Star Path Privacy Policy");
	return false;
}
else
{
	localStorage.setItem('user', 6);
	localStorage.setItem('em', document.reg.email.value);
	localStorage.setItem('pn', document.reg.pnum.value);
	localStorage.setItem('nm', document.reg.name.value);
	localStorage.setItem('bd', document.reg.birthday.value);
	localStorage.setItem('g', document.reg.gender.value);
	localStorage.setItem('pw', document.reg.pwd.value);
	return true;
}
}

function pwtxt(){
    var x = document.reg.pwd;
	if (x.type === "password") 
	{
    x.type = "text";
    } 
    else 
    {
    x.type = "password";
    }
}

function pnumformat(){
if (/^[0-9]+$/.test(document.acc.pnum.value) && document.acc.pnum.value.length == 10 || /^[0-9]+$/.test(document.acc.pnum.value) && document.acc.pnum.value.length == 11)
{
	if(localStorage.getItem('user')==1)
	{
		localStorage.setItem('pn1', document.acc.pnum.value);
		sv();
	}
	else if(localStorage.getItem('user')==3)
	{
		localStorage.setItem('pn3', document.acc.pnum.value);
		sv();
	}
	else if(localStorage.getItem('user')==6)
	{
		localStorage.setItem('pn3', document.acc.pnum.value);
		sv();
	}
}
else
{
	alert("Phone number invalid format");
	return false;
}
}

function ed(){
	document.acc.edit.setAttribute('onclick','return pnumformat();');
	document.acc.edit.setAttribute('value','Save');
	//document.acc.edit.style.display="block";
	//document.acc.save.style.display="none";
	document.acc.pwd.removeAttribute('readonly');
	document.acc.name.removeAttribute('readonly');
	document.acc.pnum.removeAttribute('readonly');
	document.acc.birthday.removeAttribute('readonly');
	document.acc.gender.removeAttribute('disabled');
}

function sv(){
	if(document.acc.pwd.value=="")
	{
		alert("Please enter password");
		document.acc.pwd.focus();
		return false;
	}
	else if(document.acc.name.value=="")
	{
		alert("Please enter name");
		document.acc.name.focus();
		return false;
	}
	else if(document.acc.pnum.value=="")
	{
		alert("Please enter phone number");
		document.acc.pnum.focus();
		return false;
	}
	else if(document.acc.birthday.value<1)
	{
		alert("Please enter birthday");
		document.acc.birthday.focus();
		return false;
	}
	document.acc.edit.setAttribute('onclick','ed();')
	document.acc.edit.setAttribute('value','Edit')
	//document.acc.edit.style.display="block";
	//document.acc.save.style.display="none";
	document.acc.pwd.setAttribute('readonly', 'true');
	document.acc.name.setAttribute('readonly', 'true');
	document.acc.pnum.setAttribute('readonly', 'true');
	document.acc.birthday.setAttribute('readonly', 'true');
	if(localStorage.getItem('user')==1)
	{
		localStorage.setItem('em1', document.acc.email.value);
		localStorage.setItem('pw1', document.acc.pwd.value);
		localStorage.setItem('name1', document.acc.name.value);
		//localStorage.setItem('pn1', document.acc.pnum.value);
		localStorage.setItem('bd1', document.acc.birthday.value);
	}
	else if(localStorage.getItem('user')==3)
	{
		localStorage.setItem('em3', document.acc.email.value);
		localStorage.setItem('pw3', document.acc.pwd.value);
		localStorage.setItem('name3', document.acc.name.value);
		//localStorage.setItem('pn3', document.acc.pnum.value);
		localStorage.setItem('bd3', document.acc.birthday.value);
	}

	else if(localStorage.getItem('user')==6)
	{
		localStorage.setItem('em', document.acc.email.value);
		localStorage.setItem('pw', document.acc.pwd.value);
		localStorage.setItem('nm', document.acc.name.value);
		localStorage.setItem('pn', document.acc.pnum.value);
		localStorage.setItem('bd', document.acc.birthday.value);
	}
}

function chkfav(){
if(localStorage.getItem('fvtpdt1')==1)
{
	document.getElementById("fav1").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt2')==1)
{
	document.getElementById("fav2").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt3')==1)
{
	document.getElementById("fav3").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt4')==1)
{
	document.getElementById("fav4").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt5')==1)
{
	document.getElementById("fav5").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt6')==1)
{
	document.getElementById("fav6").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt7')==1)
{
	document.getElementById("fav7").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt8')==1)
{
	document.getElementById("fav8").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt9')==1)
{
	document.getElementById("fav9").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt10')==1)
{
	document.getElementById("fav10").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt11')==1)
{
	document.getElementById("fav11").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt12')==1)
{
	document.getElementById("fav12").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt13')==1)
{
	document.getElementById("fav13").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt14')==1)
{
	document.getElementById("fav14").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt15')==1)
{
	document.getElementById("fav15").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt16')==1)
{
	document.getElementById("fav16").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt17')==1)
{
	document.getElementById("fav17").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt18')==1)
{
	document.getElementById("fav18").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt19')==1)
{
	document.getElementById("fav19").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt20')==1)
{
	document.getElementById("fav20").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt21')==1)
{
	document.getElementById("fav21").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt22')==1)
{
	document.getElementById("fav22").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt23')==1)
{
	document.getElementById("fav23").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt24')==1)
{
	document.getElementById("fav24").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt25')==1)
{
	document.getElementById("fav25").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt26')==1)
{
	document.getElementById("fav26").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt27')==1)
{
	document.getElementById("fav27").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt28')==1)
{
	document.getElementById("fav28").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt29')==1)
{
	document.getElementById("fav29").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt30')==1)
{
	document.getElementById("fav30").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt31')==1)
{
	document.getElementById("fav31").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt32')==1)
{
	document.getElementById("fav32").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt33')==1)
{
	document.getElementById("fav33").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt34')==1)
{
	document.getElementById("fav34").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt35')==1)
{
	document.getElementById("fav35").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt36')==1)
{
	document.getElementById("fav36").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt37')==1)
{
	document.getElementById("fav37").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt38')==1)
{
	document.getElementById("fav38").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt39')==1)
{
	document.getElementById("fav39").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt40')==1)
{
	document.getElementById("fav40").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt41')==1)
{
	document.getElementById("fav41").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt42')==1)
{
	document.getElementById("fav42").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt43')==1)
{
	document.getElementById("fav43").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt44')==1)
{
	document.getElementById("fav44").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt45')==1)
{
	document.getElementById("fav45").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt46')==1)
{
	document.getElementById("fav46").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt47')==1)
{
	document.getElementById("fav47").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt48')==1)
{
	document.getElementById("fav48").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt49')==1)
{
	document.getElementById("fav49").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt50')==1)
{
	document.getElementById("fav50").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt51')==1)
{
	document.getElementById("fav51").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt52')==1)
{
	document.getElementById("fav52").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt53')==1)
{
	document.getElementById("fav53").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt54')==1)
{
	document.getElementById("fav54").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt55')==1)
{
	document.getElementById("fav55").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt56')==1)
{
	document.getElementById("fav56").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt57')==1)
{
	document.getElementById("fav57").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt58')==1)
{
	document.getElementById("fav58").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt59')==1)
{
	document.getElementById("fav59").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt60')==1)
{
	document.getElementById("fav60").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt61')==1)
{
	document.getElementById("fav61").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt62')==1)
{
	document.getElementById("fav62").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt63')==1)
{
	document.getElementById("fav63").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt64')==1)
{
	document.getElementById("fav64").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt65')==1)
{
	document.getElementById("fav65").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt66')==1)
{
	document.getElementById("fav66").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt67')==1)
{
	document.getElementById("fav67").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt68')==1)
{
	document.getElementById("fav68").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt69')==1)
{
	document.getElementById("fav69").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt70')==1)
{
	document.getElementById("fav70").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt71')==1)
{
	document.getElementById("fav71").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt72')==1)
{
	document.getElementById("fav72").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt73')==1)
{
	document.getElementById("fav73").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt74')==1)
{
	document.getElementById("fav74").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt75')==1)
{
	document.getElementById("fav75").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt76')==1)
{
	document.getElementById("fav76").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt77')==1)
{
	document.getElementById("fav77").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt78')==1)
{
	document.getElementById("fav78").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt79')==1)
{
	document.getElementById("fav79").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt80')==1)
{
	document.getElementById("fav80").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt81')==1)
{
	document.getElementById("fav81").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt82')==1)
{
	document.getElementById("fav82").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt83')==1)
{
	document.getElementById("fav83").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt84')==1)
{
	document.getElementById("fav84").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt85')==1)
{
	document.getElementById("fav85").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt86')==1)
{
	document.getElementById("fav86").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt87')==1)
{
	document.getElementById("fav87").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt88')==1)
{
	document.getElementById("fav88").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt89')==1)
{
	document.getElementById("fav89").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt90')==1)
{
	document.getElementById("fav90").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt91')==1)
{
	document.getElementById("fav91").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt92')==1)
{
	document.getElementById("fav92").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt93')==1)
{
	document.getElementById("fav93").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt94')==1)
{
	document.getElementById("fav94").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt95')==1)
{
	document.getElementById("fav95").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt96')==1)
{
	document.getElementById("fav96").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt97')==1)
{
	document.getElementById("fav97").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt98')==1)
{
	document.getElementById("fav98").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt99')==1)
{
	document.getElementById("fav99").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt100')==1)
{
	document.getElementById("fav100").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt101')==1)
{
	document.getElementById("fav101").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt102')==1)
{
	document.getElementById("fav102").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt103')==1)
{
	document.getElementById("fav103").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt104')==1)
{
	document.getElementById("fav104").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt105')==1)
{
	document.getElementById("fav105").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt106')==1)
{
	document.getElementById("fav106").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt107')==1)
{
	document.getElementById("fav107").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt108')==1)
{
	document.getElementById("fav108").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt109')==1)
{
	document.getElementById("fav109").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt110')==1)
{
	document.getElementById("fav110").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt111')==1)
{
	document.getElementById("fav111").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt112')==1)
{
	document.getElementById("fav112").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt113')==1)
{
	document.getElementById("fav113").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt114')==1)
{
	document.getElementById("fav114").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt115')==1)
{
	document.getElementById("fav115").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt116')==1)
{
	document.getElementById("fav116").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt117')==1)
{
	document.getElementById("fav117").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt118')==1)
{
	document.getElementById("fav118").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt119')==1)
{
	document.getElementById("fav119").style.display = "table-row";
}
if(localStorage.getItem('fvtpdt120')==1)
{
	document.getElementById("fav120").style.display = "table-row";
}
}

function showdlt(){
	document.getElementById("dltbtn1").style.display="inline";
	document.getElementById("dltbtn2").style.display="inline";
	document.getElementById("dltbtn3").style.display="inline";
	document.getElementById("dltbtn4").style.display="inline";
	document.getElementById("dltbtn5").style.display="inline";
	document.getElementById("dltbtn6").style.display="inline";
	document.getElementById("dltbtn7").style.display="inline";
	document.getElementById("dltbtn8").style.display="inline";
	document.getElementById("dltbtn9").style.display="inline";
	document.getElementById("dltbtn10").style.display="inline";
	document.getElementById("dltbtn11").style.display="inline";
	document.getElementById("dltbtn12").style.display="inline";
	document.getElementById("dltbtn13").style.display="inline";
	document.getElementById("dltbtn14").style.display="inline";
	document.getElementById("dltbtn15").style.display="inline";
	document.getElementById("dltbtn16").style.display="inline";
	document.getElementById("dltbtn17").style.display="inline";
	document.getElementById("dltbtn18").style.display="inline";
	document.getElementById("dltbtn19").style.display="inline";
	document.getElementById("dltbtn20").style.display="inline";
	document.getElementById("dltbtn21").style.display="inline";
	document.getElementById("dltbtn22").style.display="inline";
	document.getElementById("dltbtn23").style.display="inline";
	document.getElementById("dltbtn24").style.display="inline";
	document.getElementById("dltbtn25").style.display="inline";
	document.getElementById("dltbtn26").style.display="inline";
	document.getElementById("dltbtn27").style.display="inline";
	document.getElementById("dltbtn28").style.display="inline";
	document.getElementById("dltbtn29").style.display="inline";
	document.getElementById("dltbtn30").style.display="inline";
	document.getElementById("dltbtn31").style.display="inline";
	document.getElementById("dltbtn32").style.display="inline";
	document.getElementById("dltbtn33").style.display="inline";
	document.getElementById("dltbtn34").style.display="inline";
	document.getElementById("dltbtn35").style.display="inline";
	document.getElementById("dltbtn36").style.display="inline";
	document.getElementById("dltbtn37").style.display="inline";
	document.getElementById("dltbtn38").style.display="inline";
	document.getElementById("dltbtn39").style.display="inline";
	document.getElementById("dltbtn40").style.display="inline";
	document.getElementById("dltbtn41").style.display="inline";
	document.getElementById("dltbtn42").style.display="inline";
	document.getElementById("dltbtn43").style.display="inline";
	document.getElementById("dltbtn44").style.display="inline";
	document.getElementById("dltbtn45").style.display="inline";
	document.getElementById("dltbtn46").style.display="inline";
	document.getElementById("dltbtn47").style.display="inline";
	document.getElementById("dltbtn48").style.display="inline";
	document.getElementById("dltbtn49").style.display="inline";
	document.getElementById("dltbtn50").style.display="inline";
	document.getElementById("dltbtn51").style.display="inline";
	document.getElementById("dltbtn52").style.display="inline";
	document.getElementById("dltbtn53").style.display="inline";
	document.getElementById("dltbtn54").style.display="inline";
	document.getElementById("dltbtn55").style.display="inline";
	document.getElementById("dltbtn56").style.display="inline";
	document.getElementById("dltbtn57").style.display="inline";
	document.getElementById("dltbtn58").style.display="inline";
	document.getElementById("dltbtn59").style.display="inline";
	document.getElementById("dltbtn60").style.display="inline";
	document.getElementById("dltbtn61").style.display="inline";
	document.getElementById("dltbtn62").style.display="inline";
	document.getElementById("dltbtn63").style.display="inline";
	document.getElementById("dltbtn64").style.display="inline";
	document.getElementById("dltbtn65").style.display="inline";
	document.getElementById("dltbtn66").style.display="inline";
	document.getElementById("dltbtn67").style.display="inline";
	document.getElementById("dltbtn68").style.display="inline";
	document.getElementById("dltbtn69").style.display="inline";
	document.getElementById("dltbtn70").style.display="inline";
	document.getElementById("dltbtn71").style.display="inline";
	document.getElementById("dltbtn72").style.display="inline";
	document.getElementById("dltbtn73").style.display="inline";
	document.getElementById("dltbtn74").style.display="inline";
	document.getElementById("dltbtn75").style.display="inline";
	document.getElementById("dltbtn76").style.display="inline";
	document.getElementById("dltbtn77").style.display="inline";
	document.getElementById("dltbtn78").style.display="inline";
	document.getElementById("dltbtn79").style.display="inline";
	document.getElementById("dltbtn80").style.display="inline";
	document.getElementById("dltbtn81").style.display="inline";
	document.getElementById("dltbtn82").style.display="inline";
	document.getElementById("dltbtn83").style.display="inline";
	document.getElementById("dltbtn84").style.display="inline";
	document.getElementById("dltbtn85").style.display="inline";
	document.getElementById("dltbtn86").style.display="inline";
	document.getElementById("dltbtn87").style.display="inline";
	document.getElementById("dltbtn88").style.display="inline";
	document.getElementById("dltbtn89").style.display="inline";
	document.getElementById("dltbtn90").style.display="inline";
	document.getElementById("dltbtn91").style.display="inline";
	document.getElementById("dltbtn92").style.display="inline";
	document.getElementById("dltbtn93").style.display="inline";
	document.getElementById("dltbtn94").style.display="inline";
	document.getElementById("dltbtn95").style.display="inline";
	document.getElementById("dltbtn96").style.display="inline";
	document.getElementById("dltbtn97").style.display="inline";
	document.getElementById("dltbtn98").style.display="inline";
	document.getElementById("dltbtn99").style.display="inline";
	document.getElementById("dltbtn100").style.display="inline";
	document.getElementById("dltbtn101").style.display="inline";
	document.getElementById("dltbtn102").style.display="inline";
	document.getElementById("dltbtn103").style.display="inline";
	document.getElementById("dltbtn104").style.display="inline";
	document.getElementById("dltbtn105").style.display="inline";
	document.getElementById("dltbtn106").style.display="inline";
	document.getElementById("dltbtn107").style.display="inline";
	document.getElementById("dltbtn108").style.display="inline";
	document.getElementById("dltbtn109").style.display="inline";
	document.getElementById("dltbtn110").style.display="inline";
	document.getElementById("dltbtn111").style.display="inline";
	document.getElementById("dltbtn112").style.display="inline";
	document.getElementById("dltbtn113").style.display="inline";
	document.getElementById("dltbtn114").style.display="inline";
	document.getElementById("dltbtn115").style.display="inline";
	document.getElementById("dltbtn116").style.display="inline";
	document.getElementById("dltbtn117").style.display="inline";
	document.getElementById("dltbtn118").style.display="inline";
	document.getElementById("dltbtn119").style.display="inline";
	document.getElementById("dltbtn120").style.display="inline";
}

function dltfav(){
if(localStorage.getItem('dltnum')==1)
{
	document.getElementById("fav1").style.display = "none";
	localStorage.setItem('fvtpdt1', 0);
}
if(localStorage.getItem('dltnum')==2)
{
	document.getElementById("fav2").style.display = "none";
	localStorage.setItem('fvtpdt2', 0);
}
if(localStorage.getItem('dltnum')==3)
{
	document.getElementById("fav3").style.display = "none";
	localStorage.setItem('fvtpdt3', 0);
}
if(localStorage.getItem('dltnum')==4)
{
	document.getElementById("fav4").style.display = "none";
	localStorage.setItem('fvtpdt4', 0);
}
if(localStorage.getItem('dltnum')==5)
{
	document.getElementById("fav5").style.display = "none";
	localStorage.setItem('fvtpdt5', 0);
}
if(localStorage.getItem('dltnum')==6)
{
	document.getElementById("fav6").style.display = "none";
	localStorage.setItem('fvtpdt6', 0);
}
if(localStorage.getItem('dltnum')==7)
{
	document.getElementById("fav7").style.display = "none";
	localStorage.setItem('fvtpdt7', 0);
}
if(localStorage.getItem('dltnum')==8)
{
	document.getElementById("fav8").style.display = "none";
	localStorage.setItem('fvtpdt8', 0);
}
if(localStorage.getItem('dltnum')==9)
{
	document.getElementById("fav9").style.display = "none";
	localStorage.setItem('fvtpdt9', 0);
}
if(localStorage.getItem('dltnum')==10)
{
	document.getElementById("fav10").style.display = "none";
	localStorage.setItem('fvtpdt10', 0);
}
if(localStorage.getItem('dltnum')==11)
{
	document.getElementById("fav11").style.display = "none";
	localStorage.setItem('fvtpdt11', 0);
}
if(localStorage.getItem('dltnum')==12)
{
	document.getElementById("fav12").style.display = "none";
	localStorage.setItem('fvtpdt12', 0);
}
if(localStorage.getItem('dltnum')==13)
{
	document.getElementById("fav13").style.display = "none";
	localStorage.setItem('fvtpdt13', 0);
}
if(localStorage.getItem('dltnum')==14)
{
	document.getElementById("fav14").style.display = "none";
	localStorage.setItem('fvtpdt14', 0);
}
if(localStorage.getItem('dltnum')==15)
{
	document.getElementById("fav15").style.display = "none";
	localStorage.setItem('fvtpdt15', 0);
}
if(localStorage.getItem('dltnum')==16)
{
	document.getElementById("fav16").style.display = "none";
	localStorage.setItem('fvtpdt16', 0);
}
if(localStorage.getItem('dltnum')==17)
{
	document.getElementById("fav17").style.display = "none";
	localStorage.setItem('fvtpdt17', 0);
}
if(localStorage.getItem('dltnum')==18)
{
	document.getElementById("fav18").style.display = "none";
	localStorage.setItem('fvtpdt18', 0);
}
if(localStorage.getItem('dltnum')==19)
{
	document.getElementById("fav19").style.display = "none";
	localStorage.setItem('fvtpdt19', 0);
}
if(localStorage.getItem('dltnum')==20)
{
	document.getElementById("fav20").style.display = "none";
	localStorage.setItem('fvtpdt20', 0);
}
if(localStorage.getItem('dltnum')==21)
{
	document.getElementById("fav21").style.display = "none";
	localStorage.setItem('fvtpdt21', 0);
}
if(localStorage.getItem('dltnum')==22)
{
	document.getElementById("fav22").style.display = "none";
	localStorage.setItem('fvtpdt22', 0);
}
if(localStorage.getItem('dltnum')==23)
{
	document.getElementById("fav23").style.display = "none";
	localStorage.setItem('fvtpdt23', 0);
}
if(localStorage.getItem('dltnum')==24)
{
	document.getElementById("fav24").style.display = "none";
	localStorage.setItem('fvtpdt24', 0);
}
if(localStorage.getItem('dltnum')==25)
{
	document.getElementById("fav25").style.display = "none";
	localStorage.setItem('fvtpdt25', 0);
}
if(localStorage.getItem('dltnum')==26)
{
	document.getElementById("fav26").style.display = "none";
	localStorage.setItem('fvtpdt26', 0);
}
if(localStorage.getItem('dltnum')==27)
{
	document.getElementById("fav27").style.display = "none";
	localStorage.setItem('fvtpdt27', 0);
}
if(localStorage.getItem('dltnum')==28)
{
	document.getElementById("fav28").style.display = "none";
	localStorage.setItem('fvtpdt28', 0);
}
if(localStorage.getItem('dltnum')==29)
{
	document.getElementById("fav29").style.display = "none";
	localStorage.setItem('fvtpdt29', 0);
}
if(localStorage.getItem('dltnum')==30)
{
	document.getElementById("fav30").style.display = "none";
	localStorage.setItem('fvtpdt30', 0);
}
if(localStorage.getItem('dltnum')==31)
{
	document.getElementById("fav31").style.display = "none";
	localStorage.setItem('fvtpdt31', 0);
}
if(localStorage.getItem('dltnum')==32)
{
	document.getElementById("fav32").style.display = "none";
	localStorage.setItem('fvtpdt32', 0);
}
if(localStorage.getItem('dltnum')==33)
{
	document.getElementById("fav33").style.display = "none";
	localStorage.setItem('fvtpdt33', 0);
}
if(localStorage.getItem('dltnum')==34)
{
	document.getElementById("fav34").style.display = "none";
	localStorage.setItem('fvtpdt34', 0);
}
if(localStorage.getItem('dltnum')==35)
{
	document.getElementById("fav35").style.display = "none";
	localStorage.setItem('fvtpdt35', 0);
}
if(localStorage.getItem('dltnum')==36)
{
	document.getElementById("fav36").style.display = "none";
	localStorage.setItem('fvtpdt36', 0);
}
if(localStorage.getItem('dltnum')==37)
{
	document.getElementById("fav37").style.display = "none";
	localStorage.setItem('fvtpdt37', 0);
}
if(localStorage.getItem('dltnum')==38)
{
	document.getElementById("fav38").style.display = "none";
	localStorage.setItem('fvtpdt38', 0);
}
if(localStorage.getItem('dltnum')==39)
{
	document.getElementById("fav39").style.display = "none";
	localStorage.setItem('fvtpdt39', 0);
}
if(localStorage.getItem('dltnum')==40)
{
	document.getElementById("fav40").style.display = "none";
	localStorage.setItem('fvtpdt40', 0);
}
if(localStorage.getItem('dltnum')==41)
{
	document.getElementById("fav41").style.display = "none";
	localStorage.setItem('fvtpdt41', 0);
}
if(localStorage.getItem('dltnum')==42)
{
	document.getElementById("fav42").style.display = "none";
	localStorage.setItem('fvtpdt42', 0);
}
if(localStorage.getItem('dltnum')==43)
{
	document.getElementById("fav43").style.display = "none";
	localStorage.setItem('fvtpdt43', 0);
}
if(localStorage.getItem('dltnum')==44)
{
	document.getElementById("fav44").style.display = "none";
	localStorage.setItem('fvtpdt44', 0);
}
if(localStorage.getItem('dltnum')==45)
{
	document.getElementById("fav45").style.display = "none";
	localStorage.setItem('fvtpdt45', 0);
}
if(localStorage.getItem('dltnum')==46)
{
	document.getElementById("fav46").style.display = "none";
	localStorage.setItem('fvtpdt46', 0);
}
if(localStorage.getItem('dltnum')==47)
{
	document.getElementById("fav47").style.display = "none";
	localStorage.setItem('fvtpdt47', 0);
}
if(localStorage.getItem('dltnum')==48)
{
	document.getElementById("fav48").style.display = "none";
	localStorage.setItem('fvtpdt48', 0);
}
if(localStorage.getItem('dltnum')==49)
{
	document.getElementById("fav49").style.display = "none";
	localStorage.setItem('fvtpdt49', 0);
}
if(localStorage.getItem('dltnum')==50)
{
	document.getElementById("fav50").style.display = "none";
	localStorage.setItem('fvtpdt50', 0);
}
if(localStorage.getItem('dltnum')==51)
{
	document.getElementById("fav51").style.display = "none";
	localStorage.setItem('fvtpdt51', 0);
}
if(localStorage.getItem('dltnum')==52)
{
	document.getElementById("fav52").style.display = "none";
	localStorage.setItem('fvtpdt52', 0);
}
if(localStorage.getItem('dltnum')==53)
{
	document.getElementById("fav53").style.display = "none";
	localStorage.setItem('fvtpdt53', 0);
}
if(localStorage.getItem('dltnum')==54)
{
	document.getElementById("fav54").style.display = "none";
	localStorage.setItem('fvtpdt54', 0);
}
if(localStorage.getItem('dltnum')==55)
{
	document.getElementById("fav55").style.display = "none";
	localStorage.setItem('fvtpdt55', 0);
}
if(localStorage.getItem('dltnum')==56)
{
	document.getElementById("fav56").style.display = "none";
	localStorage.setItem('fvtpdt56', 0);
}
if(localStorage.getItem('dltnum')==57)
{
	document.getElementById("fav57").style.display = "none";
	localStorage.setItem('fvtpdt57', 0);
}
if(localStorage.getItem('dltnum')==58)
{
	document.getElementById("fav58").style.display = "none";
	localStorage.setItem('fvtpdt58', 0);
}
if(localStorage.getItem('dltnum')==59)
{
	document.getElementById("fav59").style.display = "none";
	localStorage.setItem('fvtpdt59', 0);
}
if(localStorage.getItem('dltnum')==60)
{
	document.getElementById("fav60").style.display = "none";
	localStorage.setItem('fvtpdt60', 0);
}
if(localStorage.getItem('dltnum')==61)
{
	document.getElementById("fav61").style.display = "none";
	localStorage.setItem('fvtpdt61', 0);
}
if(localStorage.getItem('dltnum')==62)
{
	document.getElementById("fav62").style.display = "none";
	localStorage.setItem('fvtpdt62', 0);
}
if(localStorage.getItem('dltnum')==63)
{
	document.getElementById("fav63").style.display = "none";
	localStorage.setItem('fvtpdt63', 0);
}
if(localStorage.getItem('dltnum')==64)
{
	document.getElementById("fav64").style.display = "none";
	localStorage.setItem('fvtpdt64', 0);
}
if(localStorage.getItem('dltnum')==65)
{
	document.getElementById("fav65").style.display = "none";
	localStorage.setItem('fvtpdt65', 0);
}
if(localStorage.getItem('dltnum')==66)
{
	document.getElementById("fav66").style.display = "none";
	localStorage.setItem('fvtpdt66', 0);
}
if(localStorage.getItem('dltnum')==67)
{
	document.getElementById("fav67").style.display = "none";
	localStorage.setItem('fvtpdt67', 0);
}
if(localStorage.getItem('dltnum')==68)
{
	document.getElementById("fav68").style.display = "none";
	localStorage.setItem('fvtpdt68', 0);
}
if(localStorage.getItem('dltnum')==69)
{
	document.getElementById("fav69").style.display = "none";
	localStorage.setItem('fvtpdt69', 0);
}
if(localStorage.getItem('dltnum')==70)
{
	document.getElementById("fav70").style.display = "none";
	localStorage.setItem('fvtpdt70', 0);
}
if(localStorage.getItem('dltnum')==71)
{
	document.getElementById("fav71").style.display = "none";
	localStorage.setItem('fvtpdt71', 0);
}
if(localStorage.getItem('dltnum')==72)
{
	document.getElementById("fav72").style.display = "none";
	localStorage.setItem('fvtpdt72', 0);
}
if(localStorage.getItem('dltnum')==73)
{
	document.getElementById("fav73").style.display = "none";
	localStorage.setItem('fvtpdt73', 0);
}
if(localStorage.getItem('dltnum')==74)
{
	document.getElementById("fav74").style.display = "none";
	localStorage.setItem('fvtpdt74', 0);
}
if(localStorage.getItem('dltnum')==75)
{
	document.getElementById("fav75").style.display = "none";
	localStorage.setItem('fvtpdt75', 0);
}
if(localStorage.getItem('dltnum')==76)
{
	document.getElementById("fav76").style.display = "none";
	localStorage.setItem('fvtpdt76', 0);
}
if(localStorage.getItem('dltnum')==77)
{
	document.getElementById("fav77").style.display = "none";
	localStorage.setItem('fvtpdt77', 0);
}
if(localStorage.getItem('dltnum')==78)
{
	document.getElementById("fav78").style.display = "none";
	localStorage.setItem('fvtpdt78', 0);
}
if(localStorage.getItem('dltnum')==79)
{
	document.getElementById("fav79").style.display = "none";
	localStorage.setItem('fvtpdt79', 0);
}
if(localStorage.getItem('dltnum')==80)
{
	document.getElementById("fav80").style.display = "none";
	localStorage.setItem('fvtpdt80', 0);
}
if(localStorage.getItem('dltnum')==81)
{
	document.getElementById("fav81").style.display = "none";
	localStorage.setItem('fvtpdt81', 0);
}
if(localStorage.getItem('dltnum')==82)
{
	document.getElementById("fav82").style.display = "none";
	localStorage.setItem('fvtpdt82', 0);
}
if(localStorage.getItem('dltnum')==83)
{
	document.getElementById("fav83").style.display = "none";
	localStorage.setItem('fvtpdt83', 0);
}
if(localStorage.getItem('dltnum')==84)
{
	document.getElementById("fav84").style.display = "none";
	localStorage.setItem('fvtpdt84', 0);
}
if(localStorage.getItem('dltnum')==85)
{
	document.getElementById("fav85").style.display = "none";
	localStorage.setItem('fvtpdt85', 0);
}
if(localStorage.getItem('dltnum')==86)
{
	document.getElementById("fav86").style.display = "none";
	localStorage.setItem('fvtpdt86', 0);
}
if(localStorage.getItem('dltnum')==87)
{
	document.getElementById("fav87").style.display = "none";
	localStorage.setItem('fvtpdt87', 0);
}
if(localStorage.getItem('dltnum')==88)
{
	document.getElementById("fav88").style.display = "none";
	localStorage.setItem('fvtpdt88', 0);
}
if(localStorage.getItem('dltnum')==89)
{
	document.getElementById("fav89").style.display = "none";
	localStorage.setItem('fvtpdt89', 0);
}
if(localStorage.getItem('dltnum')==90)
{
	document.getElementById("fav90").style.display = "none";
	localStorage.setItem('fvtpdt90', 0);
}
if(localStorage.getItem('dltnum')==91)
{
	document.getElementById("fav91").style.display = "none";
	localStorage.setItem('fvtpdt91', 0);
}
if(localStorage.getItem('dltnum')==92)
{
	document.getElementById("fav92").style.display = "none";
	localStorage.setItem('fvtpdt92', 0);
}
if(localStorage.getItem('dltnum')==93)
{
	document.getElementById("fav93").style.display = "none";
	localStorage.setItem('fvtpdt93', 0);
}
if(localStorage.getItem('dltnum')==94)
{
	document.getElementById("fav94").style.display = "none";
	localStorage.setItem('fvtpdt94', 0);
}
if(localStorage.getItem('dltnum')==95)
{
	document.getElementById("fav95").style.display = "none";
	localStorage.setItem('fvtpdt95', 0);
}
if(localStorage.getItem('dltnum')==96)
{
	document.getElementById("fav96").style.display = "none";
	localStorage.setItem('fvtpdt96', 0);
}
if(localStorage.getItem('dltnum')==97)
{
	document.getElementById("fav97").style.display = "none";
	localStorage.setItem('fvtpdt97', 0);
}
if(localStorage.getItem('dltnum')==98)
{
	document.getElementById("fav98").style.display = "none";
	localStorage.setItem('fvtpdt98', 0);
}
if(localStorage.getItem('dltnum')==99)
{
	document.getElementById("fav99").style.display = "none";
	localStorage.setItem('fvtpdt99', 0);
}
if(localStorage.getItem('dltnum')==100)
{
	document.getElementById("fav100").style.display = "none";
	localStorage.setItem('fvtpdt100', 0);
}
if(localStorage.getItem('dltnum')==101)
{
	document.getElementById("fav101").style.display = "none";
	localStorage.setItem('fvtpdt101', 0);
}
if(localStorage.getItem('dltnum')==102)
{
	document.getElementById("fav102").style.display = "none";
	localStorage.setItem('fvtpdt102', 0);
}
if(localStorage.getItem('dltnum')==103)
{
	document.getElementById("fav103").style.display = "none";
	localStorage.setItem('fvtpdt103', 0);
}
if(localStorage.getItem('dltnum')==104)
{
	document.getElementById("fav104").style.display = "none";
	localStorage.setItem('fvtpdt104', 0);
}
if(localStorage.getItem('dltnum')==105)
{
	document.getElementById("fav105").style.display = "none";
	localStorage.setItem('fvtpdt105', 0);
}
if(localStorage.getItem('dltnum')==106)
{
	document.getElementById("fav106").style.display = "none";
	localStorage.setItem('fvtpdt106', 0);
}
if(localStorage.getItem('dltnum')==107)
{
	document.getElementById("fav107").style.display = "none";
	localStorage.setItem('fvtpdt107', 0);
}
if(localStorage.getItem('dltnum')==108)
{
	document.getElementById("fav108").style.display = "none";
	localStorage.setItem('fvtpdt108', 0);
}
if(localStorage.getItem('dltnum')==109)
{
	document.getElementById("fav109").style.display = "none";
	localStorage.setItem('fvtpdt109', 0);
}
if(localStorage.getItem('dltnum')==110)
{
	document.getElementById("fav110").style.display = "none";
	localStorage.setItem('fvtpdt110', 0);
}
if(localStorage.getItem('dltnum')==111)
{
	document.getElementById("fav111").style.display = "none";
	localStorage.setItem('fvtpdt111', 0);
}
if(localStorage.getItem('dltnum')==112)
{
	document.getElementById("fav112").style.display = "none";
	localStorage.setItem('fvtpdt112', 0);
}
if(localStorage.getItem('dltnum')==113)
{
	document.getElementById("fav113").style.display = "none";
	localStorage.setItem('fvtpdt113', 0);
}
if(localStorage.getItem('dltnum')==114)
{
	document.getElementById("fav114").style.display = "none";
	localStorage.setItem('fvtpdt114', 0);
}
if(localStorage.getItem('dltnum')==115)
{
	document.getElementById("fav115").style.display = "none";
	localStorage.setItem('fvtpdt115', 0);
}
if(localStorage.getItem('dltnum')==116)
{
	document.getElementById("fav116").style.display = "none";
	localStorage.setItem('fvtpdt116', 0);
}
if(localStorage.getItem('dltnum')==117)
{
	document.getElementById("fav117").style.display = "none";
	localStorage.setItem('fvtpdt117', 0);
}
if(localStorage.getItem('dltnum')==118)
{
	document.getElementById("fav118").style.display = "none";
	localStorage.setItem('fvtpdt118', 0);
}
if(localStorage.getItem('dltnum')==119)
{
	document.getElementById("fav119").style.display = "none";
	localStorage.setItem('fvtpdt119', 0);
}
if(localStorage.getItem('dltnum')==120)
{
	document.getElementById("fav120").style.display = "none";
	localStorage.setItem('fvtpdt120', 0);
}
}

function lgt(){
	localStorage.setItem('user', 0);
	window.location.href='login.jsp';
	clrfav();
	
}

function clrfav(){
localStorage.removeItem('fvtpdt1');
	localStorage.removeItem('fvtpdt2');
	localStorage.removeItem('fvtpdt3');
	localStorage.removeItem('fvtpdt4');
	localStorage.removeItem('fvtpdt5');
	localStorage.removeItem('fvtpdt6');
	localStorage.removeItem('fvtpdt7');
	localStorage.removeItem('fvtpdt8');
	localStorage.removeItem('fvtpdt9');
	localStorage.removeItem('fvtpdt10');
	localStorage.removeItem('fvtpdt11');
	localStorage.removeItem('fvtpdt12');
	localStorage.removeItem('fvtpdt13');
	localStorage.removeItem('fvtpdt14');
	localStorage.removeItem('fvtpdt15');
	localStorage.removeItem('fvtpdt16');
	localStorage.removeItem('fvtpdt17');
	localStorage.removeItem('fvtpdt18');
	localStorage.removeItem('fvtpdt19');
	localStorage.removeItem('fvtpdt20');
	localStorage.removeItem('fvtpdt21');
	localStorage.removeItem('fvtpdt22');
	localStorage.removeItem('fvtpdt23');
	localStorage.removeItem('fvtpdt24');
	localStorage.removeItem('fvtpdt25');
	localStorage.removeItem('fvtpdt26');
	localStorage.removeItem('fvtpdt27');
	localStorage.removeItem('fvtpdt28');
	localStorage.removeItem('fvtpdt29');
	localStorage.removeItem('fvtpdt30');
	localStorage.removeItem('fvtpdt31');
	localStorage.removeItem('fvtpdt32');
	localStorage.removeItem('fvtpdt33');
	localStorage.removeItem('fvtpdt34');
	localStorage.removeItem('fvtpdt35');
	localStorage.removeItem('fvtpdt36');
	localStorage.removeItem('fvtpdt37');
	localStorage.removeItem('fvtpdt38');
	localStorage.removeItem('fvtpdt39');
	localStorage.removeItem('fvtpdt40');
	localStorage.removeItem('fvtpdt41');
	localStorage.removeItem('fvtpdt42');
	localStorage.removeItem('fvtpdt43');
	localStorage.removeItem('fvtpdt44');
	localStorage.removeItem('fvtpdt45');
	localStorage.removeItem('fvtpdt46');
	localStorage.removeItem('fvtpdt47');
	localStorage.removeItem('fvtpdt48');
	localStorage.removeItem('fvtpdt49');
	localStorage.removeItem('fvtpdt50');
	localStorage.removeItem('fvtpdt51');
	localStorage.removeItem('fvtpdt52');
	localStorage.removeItem('fvtpdt53');
	localStorage.removeItem('fvtpdt54');
	localStorage.removeItem('fvtpdt55');
	localStorage.removeItem('fvtpdt56');
	localStorage.removeItem('fvtpdt57');
	localStorage.removeItem('fvtpdt58');
	localStorage.removeItem('fvtpdt59');
	localStorage.removeItem('fvtpdt60');
	localStorage.removeItem('fvtpdt61');
	localStorage.removeItem('fvtpdt62');
	localStorage.removeItem('fvtpdt63');
	localStorage.removeItem('fvtpdt64');
	localStorage.removeItem('fvtpdt65');
	localStorage.removeItem('fvtpdt66');
	localStorage.removeItem('fvtpdt67');
	localStorage.removeItem('fvtpdt68');
	localStorage.removeItem('fvtpdt69');
	localStorage.removeItem('fvtpdt70');
	localStorage.removeItem('fvtpdt71');
	localStorage.removeItem('fvtpdt72');
	localStorage.removeItem('fvtpdt73');
	localStorage.removeItem('fvtpdt74');
	localStorage.removeItem('fvtpdt75');
	localStorage.removeItem('fvtpdt76');
	localStorage.removeItem('fvtpdt77');
	localStorage.removeItem('fvtpdt78');
	localStorage.removeItem('fvtpdt79');
	localStorage.removeItem('fvtpdt80');
	localStorage.removeItem('fvtpdt81');
	localStorage.removeItem('fvtpdt82');
	localStorage.removeItem('fvtpdt83');
	localStorage.removeItem('fvtpdt84');
	localStorage.removeItem('fvtpdt85');
	localStorage.removeItem('fvtpdt86');
	localStorage.removeItem('fvtpdt87');
	localStorage.removeItem('fvtpdt88');
	localStorage.removeItem('fvtpdt89');
	localStorage.removeItem('fvtpdt90');
	localStorage.removeItem('fvtpdt91');
	localStorage.removeItem('fvtpdt92');
	localStorage.removeItem('fvtpdt93');
	localStorage.removeItem('fvtpdt94');
	localStorage.removeItem('fvtpdt95');
	localStorage.removeItem('fvtpdt96');
	localStorage.removeItem('fvtpdt97');
	localStorage.removeItem('fvtpdt98');
	localStorage.removeItem('fvtpdt99');
	localStorage.removeItem('fvtpdt100');
	localStorage.removeItem('fvtpdt101');
	localStorage.removeItem('fvtpdt102');
	localStorage.removeItem('fvtpdt103');
	localStorage.removeItem('fvtpdt104');
	localStorage.removeItem('fvtpdt105');
	localStorage.removeItem('fvtpdt106');
	localStorage.removeItem('fvtpdt107');
	localStorage.removeItem('fvtpdt108');
	localStorage.removeItem('fvtpdt109');
	localStorage.removeItem('fvtpdt110');
	localStorage.removeItem('fvtpdt111');
	localStorage.removeItem('fvtpdt112');
	localStorage.removeItem('fvtpdt113');
	localStorage.removeItem('fvtpdt114');
	localStorage.removeItem('fvtpdt115');
	localStorage.removeItem('fvtpdt116');
	localStorage.removeItem('fvtpdt117');
	localStorage.removeItem('fvtpdt118');
	localStorage.removeItem('fvtpdt119');
	localStorage.removeItem('fvtpdt120');
}