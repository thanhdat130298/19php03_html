document.write("--------------Bai 3");
var dem = 0;
for (var i = 0; i <= 100/3; i++)
	for (var j = 0; j < 100/2; j++)
		if((3 * i + 2 * j) <= 100){
			document.write(i + " to 3000 " + j + " to 2000 va " + (100-3*i-2*j) + " to 1000<br>");
			dem++;
		}
		document.write("--------------" + dem +" Ket qua!");
