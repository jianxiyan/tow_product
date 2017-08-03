$(function(){
	var index = 0;
	var timer = null;
	for(var i=0;i<$("#banner #bannerNav li").length;i++){
		$("#banner #bannerNav li").eq(i).get(0).nu=i;
		
	}
	console.log($("#banner #bannerNav li").eq(0).get(0))
	 timer=setInterval(move,3000);
	$("#banner #bannerList li").eq(index).find("a").eq(1).animate({"left":0},1000);
	function move(){
		$("#banner #bannerNav li").eq(index).addClass("nsty").siblings().removeClass("nsty");	
		$("#banner #bannerList li").eq(index).animate({"left":-1920},1000,function(){
			$("#banner #bannerList li").find("a").eq(1).css("left",-1920);
			$("#banner #bannerList li").eq(2).find("a").eq(1).css("left",-1920);
			$("#banner #bannerList li").eq(3).find("a").eq(1).css("top",550);
			$("#banner #bannerNav li").css("left",1920);
		}).siblings().css("left",1920);
		
		$("#banner #bannerList li").eq(index+1).animate({"left":0},1000,function(){
			$("#banner #bannerList li").eq(index).find("a").eq(1).animate({"left":0,"top":0},1000);
			$("#banner #bannerNav li").eq(index-1).css("left",1920);
		});
		
		$("#banner #bannerNav li").eq(index+1).addClass("nsty").siblings().removeClass("nsty");
		index++;		
		if(index == $("#banner #bannerList li").length){
			index=0;
			$("#banner #bannerList li").eq(index).animate({"left":0},1000,function(){
				$("#banner #bannerList li").eq(index).find("a").eq(1).animate({"left":0},1000);
			});
			$("#banner #bannerNav li").eq(index).addClass("nsty").siblings().removeClass("nsty");
		}
		
	}
	
	$("#banner #bannerNav li").on("mouseenter",function(){
		clearInterval(timer);
		var num = this.nu; 
		console.log(num)
		$(this).addClass("nsty").siblings().removeClass("nsty");
		
		$("#banner #bannerList li").eq(index).animate({"left":-1920},1000,function(){
			$("#banner #bannerList li").find("a").eq(1).css("left",-1920);
			$("#banner #bannerList li").eq(2).find("a").eq(1).css("left",-1920);
			$("#banner #bannerList li").eq(3).find("a").eq(1).css("top",550);
		});
		$("#banner #bannerList li").eq(num).animate({"left":0},1000,function(){
			$("#banner #bannerList li").eq(index).find("a").eq(1).animate({"left":0,"top":0},1000);
		});
		$("#banner #bannerList li").eq(num).siblings().css("left",1920);		
		index = num;			
	})
	$("#banner #bannerNav li").mouseleave(function(){
		timer=setInterval(move,3000);
	})
	$("#bannerBtns .btn").first().click(function(){
		
		
	})
	$("#bannerBtns .btn").last().click(function(){
		clearInterval(timer);		
		move()	
		timer=setInterval(move,3000);
	})
})


//$(function(){
//	var index = 0;
//	var timer=setInterval(move,3000);
//	$("#banner #bannerList li").eq(index).find("a").eq(1).animate({"left":0},1000);
//	function move(){
//		$("#banner #bannerNav li").eq(index).addClass("nsty").siblings().removeClass("nsty");	
//		$("#banner #bannerList li").eq(index).animate({"left":-1920},1000,function(){
//			
//		}).siblings().css("left",1920);
//		
//		$("#banner #bannerList li").eq(index+1).animate({"left":0},1000,function(){
//			$("#banner #bannerList li").eq(index).find("a").eq(1).animate({"left":0,"top":0},1000);
//			
//		});
//		
//		$("#banner #bannerNav li").eq(index+1).addClass("nsty").siblings().removeClass("nsty");
//		index++;		
//		if(index == $("#banner #bannerList li").length){
//			index=0;
//			$("#banner #bannerList li").eq(index).animate({"left":0},1000,function(){
//				$("#banner #bannerList li").eq(index).find("a").eq(1).animate({"left":0},1000);
//			});
//			$("#banner #bannerNav li").eq(index).addClass("nsty").siblings().removeClass("nsty");
//		}
//		
//	}
//})
