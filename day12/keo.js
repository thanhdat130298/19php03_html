
document.write("----------BÀI 2<br>");
/*2k mua keo, 1 keo gia 200, 2 vo =1 vien. 2k mua dc nhieu ?*/

var i,n;
var d=0, k=11;
n=k;
while(n!=0)
{
	if(n-2!=0){
		d++;
	}
	n=n-1;
}
document.write("Mày có "+ (k + d) +" cái ẹo");