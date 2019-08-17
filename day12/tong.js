var lai=0.7/100;
var goc=150000000;
var tong;
var lose=3000000;
var first=3000000;//bat dau lan rut dau tien vs 3 cu
for(var i = 1; i <= 36; i++){
	tong=goc*lai;
}
var sau=tong+goc;
document.write("B nhận được " + (sau) + "VND sau 3 năm chưa tính rút<br>");
//////////
document.write("Lần rút thứ 1 rút "+ first +"<br>");	
document.write("Tổng tiền mất " + lose +"<br>");
for (var j = 2; j < 13; j++){//3 thang 1 lan-> 3 nam 12 lan
	first=first+1000000;//moi lan rut mat them 1 củ
	lose=lose+first;//tong so tien mat di sau moi lan rut
	document.write("Lần rút thứ " + j + " tăng thêm "+ first +"<br>");
	document.write("Tổng tiền mất " + lose +"<br>");
}
document.write("Còn lại gì sau cơn mưa: " + ((sau - lose)) + "VND");