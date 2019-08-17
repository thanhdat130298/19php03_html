
document.write("----------BÀI 2<br>");
/*2k mua keo, 1 keo gia 200, 2 vo =1 vien. 2k mua dc nhieu ?*/
var k=6;
var t=2;
var s=k; 
var i=0;
var j=0;
/*Giai thuật:
1)Khi số kẹo > 1 thì:
a) nếu số kẹo chẵn thì số kẹo bằng gấp rưỡi
b) ngược, nếu số kẹo lẻ thì 
	->số kẹo = số kẹo chẵn( nhỏ hơn số kẹo lẻ ) + 1kẹo
	<=> số kẹo sẽ bằng gấp rưỡi +1kẹo (=> dư 1 vỏ, cất 1 vỏ để dành)
Lặp cho tới khi số kẹo = 1 thì nhận đc tổng kẹo S và i(số vỏ dư)
2) Nếu (S lẻ) và (0 dư vỏ) thì k sao
Nếu (S lẻ) và (dư 2 vỏ trở lên) thì lấy (tổng + (số vỏ dư (chia 2 lấy nguyên))
Nếu (S chẵn) thì lấy (k+i)/2 (vì k lặp xong = 1, như vậy thì đương nhiên sẽ dư ra thêm 1 vỏ nữa, bước này nhằm gom nó lại để tạo kẹo)
=>Sau đó đưa ra kết quả...
 */
while (k!=1){
	if (k%2==0) k=k/2; 
	else if (k%2!=0){
			i++;
			k=(k/2)-0.5;//chia 2 lấy phần nguyên
	}
	s+=k;	
}
if ((s%2!=0)&&(i>1)) s=s+(i/2);
else if(s%2==0){
		k+=i;
		s+=(k/2);	
	}
document.write("May` co' "+s+" cai keo!");
	