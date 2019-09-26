$('.changeContent').click(function () {
	// body...
	$('#demo1').html('Content has been changed');
});

$('#changeAttribute').click(function(){
	$('.demo2').attr('src','fiora.png');
	$('.demo2').attr('alt','fiora');

});

$('.changeNone').click(function(){
	$('#demo3').css('display','none');
});
$('.changeBlock').click(function(){
	$('#demo3').css('display','block');
});
$('.changeStyle').click(function(){
	$('#demo3').css('color','red');
});

$('#register').click(function(){
	var name=$('#name').val();
	alert(name);
});



//////////////////

$('#cong').click(function(){
	var one=$('#one').val();
	var two=$('#two').val();
	var a=parseInt(one);
	var b=parseInt(two);
	$('#result').html('Ket qua: '+(a+b) );
});
$('#tru').click(function(){
	var one=$('#one').val();
	var two=$('#two').val();
	var a=parseInt(one);
	var b=parseInt(two);
	$('#result').html('Ket qua: '+(a-b));
});
$('#nhan').click(function(){
	var one=$('#one').val();
	var two=$('#two').val();
	var a=parseInt(one);
	var b=parseInt(two);
	$('#result').html('Ket qua: '+(a*b));
});
$('#chia').click(function(){
	var one=$('#one').val();
	var two=$('#two').val();
	var a=parseInt(one);
	var b=parseInt(two);
	$('#result').html('Ket qua: '+(a/b));
});

