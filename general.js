jQuery(document).ready(function($){
 
	
	$('.project').bind("click",function(){
		if($("#projectshow").val()==0){
//			$("#projectshow").show();
//			$("#projectshow").val(1);
			$("#projectshow").slideDown(800,function(){
				$("#projectshow").val(1);
			})
		}
	});
	
	$('.closedetails').bind("click",function(){
//		$("#projectshow").hide();
//		$("#projectshow").val(0);
		$("#projectshow").slideUp(800,function(){
			$("#projectshow").val(0);
		})
	});
	
	$('.project').bind("click",function(){
		var $number=0;
		$number=$(this).parent().attr("id");
		$id="#"+$number;
		$('#projectshow').insertAfter($id);
	});
	


	function load(){
		
		var $num=0;
		$num=$(".content", "body").length;
		
		$ids = "#"+$num;
		
//		alert($ids);
		
//		$($ids).after("<div id='test' title='hi' style='background:red' style='clear:both'>我是调用函数创建的</div>");
		
//		$($ids).css('background','red');
		

	}

	
	$(window).scroll(function(){ 
		lazyheight = $(window).height()+$(window).scrollTop();
		if($(document).height()-100 <= lazyheight){
			load();
		}
	});
	
	
	
	
	
	
	
});


