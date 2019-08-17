document.write("-----------Bai 1<br>");
var binh=27;
var i=0;
var minh=binh/3;
document.write("So sach Binh co la " + binh + "<br>");
document.write("So sach Minh co la " + minh + "<br>");
while(binh != (minh * 2)){
	binh--;
	minh++;
	i++;
}
document.write("De so sach Minh gap doi Minh thi Minh phai chuyen cho Minh "+i+" sach <br><=>");
document.write("Binh co " + binh +", ");
document.write("Minh co " + minh +"<br>");
