function validate(){
var valueIN=true;
var fN=document.getElementById('firstN').value;
var lN=document.getElementById('lastN').value;
var lDay=document.getElementById('lastDay').value;
var fDay=document.getElementById('firstDay').value;
var name=document.getElementById('name').value;
var d1 = Date.parse(lDay);
var d2 = Date.parse(fDay);
	if((name=='')||(!isNaN(name))){
		 document.getElementById('errorName').innerHTML ="Tên không được rỗng hoặc số!";
		 valueIN=false;
	}
	//ten
 	if ((fN=='')){
        document.getElementById("errorFirstM").innerHTML = "Chưa nhập số điện đầu kì!";
 		valueIN=false;
 	}
 	if (isNaN(fN)) {
 		document.getElementById("errorFirstM").innerHTML = "Phải là số!";
 		valueIN=false;	
 	}
 	if (isNaN(lN)) {
 		document.getElementById("errorLastM").innerHTML = "Phải là số!";
 		valueIN=false;	
 	}
 	if (lN==''){
 		document.getElementById('errorLastM').innerHTML ="Chưa nhập số điện cuối kì";
 		valueIN=false;
 	}
 	if ((!isNaN(lN))&&(!isNaN(fN))&&(lN<fN)) {
 		document.getElementById('errorNum').innerHTML="Số điện cuối kì phải lớn hơn số điện đầu kì";
 		valueIN=false;
 	}
 	//Số điện
 	if (fDay==''){
 		document.getElementById('errorFirstDay').innerHTML ="Chưa nhập ngày đầu kì";
 		valueIN=false;
 	}
 	if (lDay==''){
 		document.getElementById('errorLastDay').innerHTML ="Chưa nhập ngày cuối kì";
 		valueIN=false;
 	}
 	if(d2>d1) {
 		valueIN=false;
 		document.getElementById('errorDay').innerHTML="Ngày phải đúng !";
 	}
 	//Ngày
 	var n=lN-fN;
 	console.log(n);
 	var a=0,b=0,c=0;
 	if(valueIN==true){
 		if(n<=100){
 			a=n*1500;
 		}
 		if((n<=300)&&(n>100)){
 			a=100*1500;
 			b=(n-100)*2000;
 		}
 		if(n>=300){
 			a=100*1500;
 			b=200*2000;
 			c=(n-300)*3500;
 		}
	document.getElementById('result').innerHTML=a+b+c;
	var result=a+b+c;
	document.write("<h3>Hóa đơn tiền điện của bạn:</h3><br>");
	document.write("Tên: "+name+"<br>");
	document.write("Hóa đơn từ ngày: "+fDay+" đến ngày "+lDay+"<br>");
	document.write("Sử dụng: "+n+" số<br>");
	document.write("Tổng thanh toán: "+result);
 	}
 	

}