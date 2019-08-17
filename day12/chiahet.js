
for (var n =1; n <= 100; n++) {
	if ((n%3!=0)&&(n%5!=0)) document.write(n + " khong chia het cho 3, 5, 15<br>");
	if(n<15){
		if ((n % 3 == 0 ) && (n % 5 != 0)) {
			document.write(n + " chia het cho 3<br>");
			document.write(n + " Khong chia het cho 5, 15<br>");
		}
		if ((n % 3!=0)&&(n%5==0)) {
			document.write(n + " chia het cho 5<br>");
			document.write(n + " Khong chia chet cho 3, 15<br>");
		}
	}
	else {
		if ((n % 3 == 0 ) && (n % 5 != 0) && (n % 15 != 0)) {
			document.write(n + " chia het cho 3<br>");
			document.write(n + " Khong chia het cho 5, 15<br>");
		}
		if ((n % 3!=0)&&(n%5==0)&&(n%15!=0)) {
			document.write(n + " chia het cho 5<br>");
			document.write(n + " Khong chia chet cho 3, 15<br>");
		}
		if ((n % 3 == 0) && (n % 5 == 0)) document.write(n + " chia het cho 3, 5, 15<br>");
	}
}
document.write("<br>");