$(function(){
	var aP = $("ul li:not('#11')")
	aP.hover(function(){
		$(this).find(".aside-list-sty").stop(true).show().animate({"right":35,"opacity":1},1000);
	},function(){
		$(this).find(".aside-list-sty").stop(true).animate({"right":70,"opacity":0},1000).hide(1000);
	})
	aP.last().click(function(){
		$("html,body").animate({"scrollTop":0},2000);
	})
})
//公共属性滑动变色
$(function(){
	function stylemove(cfobj,obj,num){
		cfobj.mouseenter(function(){
				$(this).siblings(obj).stop(true).animate({"width":num},300);
			})
			cfobj.mouseleave(function(){
				$(this).siblings(obj).stop(true).animate({"width":0},300);
			})
		}
	var cfobj1 = $("#main-one .w .item .item-shadow a");
	var obj1 = ".item-shadow-bg"
	stylemove(cfobj1,obj1,110)
	var cfobj2 = $(".more .more-btn");
	var obj2 = ".more-bj";
	stylemove(cfobj2,obj2,302);
	var cfobj3 = $(".main-tow-banner-p .main-tow-banner-btn .main-tow-banner-buy")
	var obj3 = ".main-tow-banner-pbg";
	stylemove(cfobj3,obj3,104);
	var cfobj4 =$(".produ-buy-com div a")
	var obj4 =".produ-buy-shadow";
	stylemove(cfobj4,obj4,120);
})

//main-three模板
$(function(){					
		$.get("json/data.json",function(data){
		var data = data[0];
		var html = template("production",data);
		$("#main-production ul").html(html);
		//main-three特效
		$(".production-box").mouseenter(function(){
		$(this).stop(true).animate({"top":-2},500)
		$(this).find(".production-content-select").stop(true).animate({"height":35},500);
		$(this).find(".produ-buy").stop(true).animate({"height":53},500);
		$(".production-box").mouseleave(function(){
			$(this).stop(true).animate({"top":0},500)
			$(this).find(".production-content-select").stop(true).animate({"height":0},500);
			$(this).find(".produ-buy").stop(true).animate({"height":0},500);
		})
	})
		
		var cfobj4 =$(".produ-buy-com div a")
		var obj4 =".produ-buy-shadow";
		stylemove(cfobj4,obj4,120);
		
		//main-three效果,鞋子的选择;
		var k = 0;
		var _this = null;
		var i =0;
		$(".production-box").mouseenter(function(){
			 k = $(this).index();
			var _this = this;
						
	})
		$(".content-select").mouseenter(function(){
			var i = $(this).index();
		
			$.get("json/data.json",function(data){
				var data = data[0].listone[k].content[0].contentimg[i];
				
				$(".production-content-img img")[k].src = data;
			})			
		})		
		})
		
		
		function stylemove(cfobj,obj,num){
		cfobj.mouseenter(function(){
				$(this).siblings(obj).stop(true).animate({"width":num},300);
			})
			cfobj.mouseleave(function(){
				$(this).siblings(obj).stop(true).animate({"width":0},300);
			})
		}
		
})
	
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>80){
			$("#head-wbottom").css({"position":"fixed","z-index":1000})
			$("#head-wbottom").animate({"top":0},1000)
		}
		if($(window).scrollTop()<80){
			$("#head-wbottom").css({"top":-39,"position":"initial"})
		}
	})
})


//
$(function(){
	var index=0;
	$(".f ul li img").eq(index).css("left",0);
	$(".f p span").eq(index).addClass("active");
	
	var timer=setInterval(move,3000);
	
	function move(){
		$(".f ul li img").eq(index).addClass("active").siblings().removeClass("active");				
		$(".f ul li img").eq(index).animate({"left":-580},1000,function(){
			
		});
		$(".f ul li img").eq(index+1).animate({"left":0},1000);
		
			$(".f ul li img").eq(index).siblings().css("left",580);
		
		
		$(".f p span").eq(index+1).addClass("active").siblings().removeClass("active");
		index++;
		if(index==($(".f ul li img").length)){
			index=0;
			$(".f ul li img").eq(index).animate({"left":0},1000);
			$(".f p span").eq(index).addClass("active").siblings().removeClass("active");
		}
		
	}
	});
	
$(function(){
	var index=0;
	$(".h ul li img").eq(index).css("left",0);
	$(".h p span").eq(index).addClass("active");
	
	var timer=setInterval(move,4000);
	
	function move(){
		$(".h ul li img").eq(index).addClass("active").siblings().removeClass("active");				
		$(".h ul li img").eq(index).animate({"left":-580},1500,function(){
			
		});
		$(".h ul li img").eq(index+1).animate({"left":0},1500);
		
			$(".h ul li img").eq(index).siblings().css("left",580);
		
		
		$(".h p span").eq(index+1).addClass("active").siblings().removeClass("active");
		index++;
		if(index==($(".h ul li img").length)){
			index=0;
			$(".h ul li img").eq(index).animate({"left":0},1500);
			$(".h p span").eq(index).addClass("active").siblings().removeClass("active");
		}
		
	}
	});
