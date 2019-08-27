document.write(">>>>>>>>>>>>>>>>>>>>>>>>>><br>ban co vua<br>");
for( var i = 0; i <= 7; i ++ ){
	for( var j = 0; j < 8; j ++) {
		if ((i+j) % 2 == 0) {
			document.write("<div class='black'></div>");
		}
		else  {
			document.write("<div class='white'></div>");
		}
	}
}
document.write("<br>-------------<br>");
		