jQuery(document).ready(function($){
 
//  $('#shang').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
// 
//  $('#xia').click(function(){$('html,body').animate({scrollTop:$('#footer').offset().top}, 800);});
	
	
	$('.project').bind("click",function(){
		if($(".projectshow").val()==0){
			$(".projectshow").show();
			$(".projectshow").val(1);
		}else{
			$(".projectshow").hide();
			$(".projectshow").val(0);
			
		}
	});
	
	$('.closedetails').bind("click",function(){
		$(".projectshow").hide();
		$(".projectshow").val(0);
	});
	
 
});