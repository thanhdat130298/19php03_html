//Nhập vào 1 số có từ 1 đến 4 chữ số. In ra cách đọc số đó bằng tiếng Việt 
var n = prompt("Hay nhap vao so co 4 chu so: ");
while  ((n>9999)||(n<=0)) n = prompt("Hay nhap vao so co 1 - 4 chu so: ");
parseInt(n);


document.write(n+ ":  ");

////////////////////////////////////////////////////////////// <99
if( n < 11) {
	switch (n) {
		case '1':
			document.write("Một");
			break;
		case '2':
			document.write("Hai");
			break;
		case '3':
			document.write("Ba");
			break;
		case '4':
			document.write("Bốn");
			break;
		case '5':
			document.write("Năm");
			break;
		case '6':
			document.write("Sáu");
			break;
		case '7':
			document.write("Bảy");
			break;
		case '8':
			document.write("Tám");
			break;
		case '9':
			document.write("Chín");
			break;
		case '10':
			document.write("Mười");
			break;
	}
}
else if (n<100){
	var hangchuc = parseInt(n/10);
	var donvi=n%10;
	switch(hangchuc){
		case 1:
			document.write(" Mười ");
			break;
		case 2:
			document.write("Hai Mươi ");
			break;
		case 3:
			document.write("Ba Mươi ");
			break;
		case 4:
			document.write("Bốn Mươi ");
			break;
		case 5:
			document.write("Năm Mươi ");
			break;
		case 6:
			document.write("Sáu Mươi ");
			break;
		case 7:
			document.write("Bảy Mươi ");
			break;
		case 8:
			document.write("Tám Mươi ");
			break;
		case 9:
			document.write("Chín Mươi ");
			break; 
	}

	switch(donvi){
		case 1:
			if (n<20) document.write("Một");
			else document.write("Mốt");
			break;
		case 2:
			document.write("Hai");
			break;
		case 3:
			document.write("Ba");
			break;
		case 4:
			document.write("Bốn");
			break;
		case 5:
			document.write("Lăm");
			break;
		case 6:
			document.write("Sáu");
			break;
		case 7:
			document.write("Bảy");
			break;
		case 8:
			document.write("Tám");
			break;
		case 9:
			document.write("Chín");
			break;
	}
}


////////////////////////////////////////////////////////////////////////////   >99
if((n>99)&&(n<1000)){
var donvi = n % 10;
var chuc = parseInt((n%100)/10);
var tram=parseInt(n/100);
switch(tram){
		case 1:
			document.write("Một");
			break;
		case 2:
			document.write("Hai");
			break;
		case 3:
			document.write("Ba");
			break;
		case 4:
			document.write("Bốn");
			break;
		case 5:
			document.write("Năm");
			break;
		case 6:
			document.write("Sáu");
			break;
		case 7:
			document.write("Bảy");
			break;
		case 8:
			document.write("Tám");
			break;
		case 9:
			document.write("Chín");
			break;
	}
	document.write(" Trăm ");
	switch(chuc){
		case 0:
			if(donvi!=0) document.write("Lẻ");
		case 1:
			if (chuc==1) document.write(" Mười ");
			break;
		case 2:
			document.write("Hai");
			break;
		case 3:
			document.write("Ba");
			break;
		case 4:
			document.write("Bốn");
			break;
		case 5:
			document.write("Năm");
			break;
		case 6:
			document.write("Sáu");
			break;
		case 7:
			document.write("Bảy");
			break;
		case 8:
			document.write("Tám");
			break;
		case 9:
			document.write("Chín");
			break;
	}
	if (chuc>1) document.write(" Mươi");
	switch(donvi){
		case 1:
			if((chuc==1)||(chuc==0)) document.write(" Một");
			else document.write(" Mốt");
			break;
		case 2:
			document.write(" Hai");
			break;
		case 3:
			document.write(" Ba");
			break;
		case 4:
			document.write(" Bốn");
			break;
		case 5:
			if(chuc>0) document.write(" Lăm");
			else document.write(" Năm");
			break;
		case 6:
			document.write(" Sáu");
			break;
		case 7:
			document.write(" Bảy");
			break;
		case 8:
			document.write(" Tám");
			break;
		case 9:
			document.write(" Chín");
			break;
	}

}
///////////////>999
if((n>999)&&(n<10000)){

var donvi = n % 10;
var chuc = parseInt((n%100)/10);
var tram= parseInt((n%1000)/100);
var nghin= parseInt(n/1000);
switch(nghin){
		case 1:
			document.write("Một");
			break;
		case 2:
			document.write("Hai");
			break;
		case 3:
			document.write("Ba");
			break;
		case 4:
			document.write("Bốn");
			break;
		case 5:
			document.write("Năm");
			break;
		case 6:
			document.write("Sáu");
			break;
		case 7:
			document.write("Bảy");
			break;
		case 8:
			document.write("Tám");
			break;
		case 9:
			document.write("Chín");
			break;
	}
	document.write(" Nghìn ");
switch(tram){
		case 0:
			if((tram==0)&&(donvi!=0)) document.write("Không Trăm " );
			else if((chuc!=0)&&(tram==0)) document.write("Không Trăm ");
			break;
		case 1:
			document.write("Một Trăm ");
			break;
		case 2:
			document.write("Hai Trăm ");
			break;
		case 3:
			document.write("Ba Trăm ");
			break;
		case 4:
			document.write("Bốn Trăm ");
			break;
		case 5:
			document.write("Năm Trăm ");
			break;
		case 6:
			document.write("Sáu Trăm " );
			break;
		case 7:
			document.write("Bảy Trăm ");
			break;
		case 8:
			document.write("Tám Trăm ");
			break;
		case 9:
			document.write("Chín Trăm ");
			break;
	}
	
	switch(chuc){
		case 0:
			if(donvi!=0) document.write("Lẻ");
		case 1:
			if (chuc==1) document.write(" Mười ");
			break;
		case 2:
			document.write("Hai");
			break;
		case 3:
			document.write("Ba");
			break;
		case 4:
			document.write("Bốn");
			break;
		case 5:
			document.write("Năm");
			break;
		case 6:
			document.write("Sáu");
			break;
		case 7:
			document.write("Bảy");
			break;
		case 8:
			document.write("Tám");
			break;
		case 9:
			document.write("Chín");
			break;
	}
	if (chuc>1) document.write(" Mươi");
	switch(donvi){
		case 1:
			if((chuc==1)||(chuc==0)) document.write(" Một");
			else document.write(" Mốt");
			break;
		case 2:
			document.write(" Hai");
			break;
		case 3:
			document.write(" Ba");
			break;
		case 4:
			document.write(" Bốn");
			break;
		case 5:
			if(chuc>0) document.write(" Lăm");
			else document.write(" Năm");
			break;
		case 6:
			document.write(" Sáu");
			break;
		case 7:
			document.write(" Bảy");
			break;
		case 8:
			document.write(" Tám");
			break;
		case 9:
			document.write(" Chín");
			break;
	}

}