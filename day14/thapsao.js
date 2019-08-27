
// Dung vong for cho hang
for (var j = 1; j <= 10; j++) {
	for(var x=10;x>j;x--)	
		document.write("_");
	for (var i = 1; i <=j; i++) {
			document.write("*");
			document.write("_");
	}
	document.write("<br>");
} 