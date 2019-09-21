function validate() {
	// body...

	var name=document.getElementById('name').value;
	var date=document.getElementById('birthday').value;
	var place=document.getElementById('select').value;
	var sex;
	var sex= document.getElementsByName('sex');
	var man=document.getElementById('man');
	var woman=document.getElementById('woman');
	var ok=true;
	if (name=='') {
		document.getElementById('errorName').innerHTML='Đăng ký mà không nhập tên à?<br>';
		ok=false;
	}
	else if (!isNaN(name)) {
		document.getElementById('errorName').innerHTML='Tên không phải số nha!<br>';	
	}
	else document.getElementById('errorName').innerHTML='';
	if (date=='') {
		document.getElementById('errorDay').innerHTML='Ngày chưa nhập kìa !<br>';
		ok=false;
	}
	else document.getElementById('errorDay').innerHTML='';
	if(place==""){
		document.getElementById('errorAddress').innerHTML="Please chọn tỉnh thành!";
		ok=false;
	}
	else document.getElementById('errorAddress').innerHTML=''; 


	//var d1 = Date.parse(date);
	var date=new Date(date).getFullYear();
	var current=new Date().getFullYear();
	var tuoi=(current-date);
	if(ok==true){
		if((tuoi)<18) {
			for(i = 0; i < sex.length; i++) { 
                if(sex[i].checked) document.getElementById('output').innerHTML="<center>INFORMATION</center>"+"<br>Họ và tên: "+name+"<br>Tuổi: " + tuoi +"<br>Giới tính: "+sex[i].value+ "<br>Quê quán: "+place;
			}
			document.getElementById('output').style.color='green';
		
		}
		else if (tuoi>21){
			for(i = 0; i < sex.length; i++) { 
    	        if(sex[i].checked) document.getElementById('output').innerHTML="Họ và tên: "+name+"<br>Tuổi: " + tuoi +"<br>Giới tính: "+sex[i].value+ "<br>Quê quán: "+place;
			}
			document.getElementById('output').style.color='yellow';console.log(tuoi);
		}
		else if ((tuoi>=18)&&(tuoi<=21)) {
			for(i = 0; i < sex.length; i++) { 
    	        if(sex[i].checked) document.getElementById('output').innerHTML="Họ và tên: "+name+"<br>Tuổi: " + tuoi +"<br>Giới tính: "+sex[i].value+ "<br>Quê quán: "+place;
			}
			document.getElementById('output').style.color='blue';
			console.log(tuoi);
		}
		document.getElementById('output').style.fontSize='10px';			
		if(man.checked==true) 	document.getElementById('output').style.fontSize='30px';			
		else if (woman.checked==true) document.getElementById('output').style.fontSize='20px';
	
		var select=document.getElementById('select');
		var result=select.options[select.selectedIndex];
		
		if ((result.id=='dn')||(result.id=='qn')||(result.id=='hue')){
			document.getElementById('output').style.fontWeight='Bold';
			document.getElementById('output').style.fontStyle='Normal';
				console.log(result.id);
}
		else {		console.log(result.id);

			document.getElementById('output').style.fontStyle='italic';
			document.getElementById('output').style.fontWeight='Normal';
		}

	}
}
				
			
	


