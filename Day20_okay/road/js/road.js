
$('button').click(function(){
    $('#red-car').animate({'top':'5px'}).hide(10, function(){
    	$('#red-car2').show(10).animate({'left':'410px'}).hide(10,function(){
    		$('#red-car3').show(10).animate({'top':'410px'}).hide(10, function(){
    			$('#red-car4').show(10).animate({'left':'5px'});
    		});
    	});	
    });
});

