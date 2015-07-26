jQuery(document).ready(function($){
 
	
	//滚动条滚动到底部时加载内容；
	function load(){		
		var $num=0;
		$num=$(".content", "body").length;		
		$ids = "#"+$num;
//		$($ids).after("<div id='test' title='hi' style='background:red' style='clear:both'>我是调用函数创建的</div>");
	}
	
	
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

		//将指定id的div滚动到可视化窗口顶部；
		a = $('.content').height()*$number;
		$("html,body").animate({scrollTop:a}, 'slow'); 
		
		$('#projectshow').insertAfter($id);
	});
	


	$(window).scroll(function(){ 
		
		lazyheight = $(window).height()+$(window).scrollTop();
		if($(document).height()-100 <= lazyheight){
			load();
		}
	});
	
	
	
	$(window).scroll(function(){ 
//		alert($('#projectshow').height());
//		alert($('.details').height());
//		alert($(".details").scrollTop());
//		alert($(window).scrollTop());
		
		  x=$(".details").offset();
		  y=$("#projectshow").offset();

		  z=x.top-y.top;
		  
		  t = x.top-$(window).scrollTop();
		  
//		  alert(t);

		  
//		  alert(y.top);
		  
		  
		  
//		  alert(z);
		  
		  detheight=z+$('.details').height()+92;
		  
//		  alert(detheight);
		  

		  
		  
//		  if(detheight == $('#projectshow').height()){
//			  $(".details").css('position','absolute');
//			  $(".details").css('top',$('#projectshow').height());
//			  d=$('.details').offset();
//			  dd = d.top;
			  
//		  }
//		  alert(dd);
//		  alert(x.top);
	});
	
	

});


