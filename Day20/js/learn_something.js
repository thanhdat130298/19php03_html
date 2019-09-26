
if(rep='No') $("#no").mouseenter(function(){  
	var rep=$('#no').val();
	rep='Yes';
	$('#no').html(rep);
}); 
if (rep='Yes') $("#no").mouseleave(function(){
	var rep=$('#no').val();
	rep='No';
	$('#no').html(rep);
});
