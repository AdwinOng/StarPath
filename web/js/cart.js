function initialization(){
	
var today=new Date();
var day=today.getDate();
var month=today.getMonth()+1;
var year=today.getFullYear();
var word=new Array("","January","February","March","April","May"
,"June","July","August","September","October","November","December");

document.getElementById("date").value = day+" "+word[month]+" "+year;

}

function checking(choose,num){
var price = "price" + num;
	var quan = "quan" + num;
if(choose.selectedIndex!=0)
{
		document.getElementById(quan).disabled = false;
		document.getElementById(quan).focus();
		document.getElementById(price).value=choose.value;
}
}

function calculate(choose,num){
    var totalprice = "total" + num;
	var price = "price" + num;
	var quan=choose.value;
		var subtotal = parseFloat(document.getElementById(price).value)*quan;
		document.getElementById(totalprice).value = subtotal.toFixed(2);
}

function totalcalculate(){
	var p1,p2,p3,p4,p5,s, gst ,total,totalprice;	
	p1 = parseFloat(document.getElementById('total1').value);
	p2 = parseFloat(document.getElementById('total2').value);
	p3 = parseFloat(document.getElementById('total3').value);
	p4 = parseFloat(document.getElementById('total4').value);
	p5 = parseFloat(document.getElementById('total5').value);
	s = parseFloat(document.getElementById('ship').value);
    
		total = p1 + p2 + p3 + p4 + p5 ;
			gst = total * 0.06;
	shipping=s;
	totalprice = total + gst+shipping;
	document.getElementById("gst").innerHTML = "RM" + gst.toFixed(2);
	document.getElementById("totalamount").innerHTML ="RM" + totalprice.toFixed(2);
	document.getElementById("allship").innerHTML = "RM" +shipping.toFixed(2);
}

function cvaild()
{
var q1,q2,q3,q4,q5,total,amount;
q1 = parseFloat(document.getElementById('quan1').value);
	q2 = parseFloat(document.getElementById('quan2').value);
	q3 = parseFloat(document.getElementById('quan3').value);
	q4 = parseFloat(document.getElementById('quan4').value);
	q5 = parseFloat(document.getElementById('quan5').value);
	amount=parseFloat(document.getElementById('totalamount').value);
	total=q1+q2+q3+q4+q5;
	if(total==0)
	{
	alert("The shopping cart is Empty~");
	document.getElementById("item1").focus();
	return false;
    }
    else
    {
    return true;;
    }
	

}

