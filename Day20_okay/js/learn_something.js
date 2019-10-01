var i;
{
		$('#left').mouseenter(function(){
			$('.xe').animate({left: '320px'},500);
		});

		$('#right').mouseenter(function(){
			$('.xe').animate({left: '420px'},500);
		});
		$('#start').click(function(){
			$('#road').animate({top:'10000px'}, 50000);
		});
		$('#stop').click(function(){
			$('#road').stop();
		});
		

}