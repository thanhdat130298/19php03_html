function validate(){
var valueIN=true;
var fM=document.getElementById('firstM').value;
var lM=document.getElementById('lastM').value;
var lDay=document.getElementById('lastDay').value;
var fDay=document.getElementById('firstDay').value;
var name=document.getElementById('name').value;
	if(name==''){
		 document.getElementById('errorName')="Khong duoc rong";
		 valueIN=false;
	}
 	else if (fM==''){
        document.getElementById("errorFirsM").innerHTML = "Chỉ nhập giá trị số.";
 		valueIN=false;
 	}
 	else if (lM==''){
 		document.getElementById('errorLastM')="Khong duoc rong";
 		valueIN=false;
 	}
 	else if (fM==''){
 		document.getElementById('errorFirstM')="Khong duoc rong";
 		valueIN=false;
 	}
 	else if (lM==''){
 		document.getElementById('errorLastM')="Khong duoc rong";
 		valueIN=false;
 	}
 	if(valueIN==true){
 		if((lastM-firstM)<=100) alert((lastM-firstM)*1500);
 		else if( ( (lastM-firstM)>100)&&(lastM-firstM)<=200) alert((lastM-firstM)*2000);
 		else if(((lastM-firstM)>200)) alert((lastM-firstM)*3500);
 	}

}