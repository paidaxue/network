jQuery(document).ready(function($){
 
//  $('#shang').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
// 
//  $('#xia').click(function(){$('html,body').animate({scrollTop:$('#footer').offset().top}, 800);});
	
	
	$('.project').bind("click",function(){
		if($("#projectshow").val()==0){
			$("#projectshow").show();
			$("#projectshow").val(1);
		}
	});
	
	$('.closedetails').bind("click",function(){
		$("#projectshow").hide();
		$("#projectshow").val(0);
	});
	
	$('.project').bind("click",function(){
		var $number=0;
		$number=$(this).parent().attr("id");
		$id="#"+$number;
		$('#projectshow').insertAfter($id);
	});
	
	
	
	var totalheight = 0;     //定义一个总的高度变量
	function loaata()
	{ 
	    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop()+100);     //浏览器的高度加上滚动条的高度 
		
		

	    if ($(document).height() <= totalheight)     //当文档的高度小于或者等于总的高度的时候，开始动态加载数据
	    { 
	        //加载数据
	        $("#container").append("我是新加载出来的数据<br/>我是新加载出来的数据<br/>我是新加载出来的数据<br/>");
	    } 
	} 

	$(window).scroll( function() { 
	    console.log("滚动条到顶部的垂直高度: "+$(document).scrollTop()); 
	    console.log("页面的文档高度 ："+$(document).height());
	    console.log('浏览器的高度：'+$(window).height());
	    loaata();
	}); 
	
	
	
	
	
//	$.fn.smartFloat = function() { 
//	    var position = function(element) { 
//	        var top = element.position().top; //当前元素对象element距离浏览器上边缘的距离 
//	        var pos = element.css("position"); //当前元素距离页面document顶部的距离 
//	        $(window).scroll(function() { //侦听滚动时 
//	            var scrolls = $(this).scrollTop(); 
//	            if (scrolls > top) { //如果滚动到页面超出了当前元素element的相对页面顶部的高度 
//	                if (window.XMLHttpRequest) { //如果不是ie6 
//	                    element.css({ //设置css 
//	                        position: "fixed", //固定定位,即不再跟随滚动 
//	                        top: 0 //距离页面顶部为0 
//	                    }).addClass("shadow"); //加上阴影样式.shadow 
//	                } else { //如果是ie6 
//	                    element.css({ 
//	                        top: scrolls  //与页面顶部距离 
//	                    });     
//	                } 
//	            }else { 
//	                element.css({ //如果当前元素element未滚动到浏览器上边缘，则使用默认样式 
//	                    position: pos, 
//	                    top: top 
//	                }).removeClass("shadow");//移除阴影样式.shadow 
//	            } 
//	        }); 
//	    }; 
//	    return $(this).each(function() { 
//	        position($(this));                          
//	    }); 
//	}; 
//	
//	$('.details').smartFloat();
	 
});