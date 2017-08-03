
$(function(){
	var index=0;
	$(".lbb li").eq(index).css("left",0);
	$(".biao li").eq(index).addClass("active");
	$(".lbb li:not(:first)").css("left",930);
	var timer=setInterval(move,3000);
	var flag = false;
	var flag1 = false;
	for(var i=0;i<$(".biao li").length;i++){
		$(".biao li").eq(i).get(0).nu=i;
		
	}
	function move(){
		$(".biao li").eq(index).addClass("active").siblings().removeClass("active");				
		$(".lbb li").eq(index).animate({"left":-930},1000,function(){
			flag = true;
		});
		$(".lbb li").eq(index+1).animate({"left":0},1000);
		if(flag){
			$(".lbb li").eq(index).siblings().css("left",930);
		}
		
		$(".biao li").eq(index+1).addClass("active").siblings().removeClass("active");
		index++;
		if(index==($(".lbb li").length)){
			index=0;
			$(".lbb li").eq(index).animate({"left":0},1000);
			$(".biao li").eq(index).addClass("active").siblings().removeClass("active");
		}
		
	}
	
		$(".biao li").on("mouseover",function(){
		clearInterval(timer);
		var num = this.nu; 
		console.log(this.nu)
		$(this).addClass("active").siblings().removeClass("active");
		
		$(".lbb li").eq(index).animate({"left":-930},1000,function(){
			flag1 = true;
		});
		$(".lbb li").eq(num).animate({"left":0},1000);		
		$(".lbb li").eq(num).siblings().css("left",930);		
		index = num;			
	})	
	
			
});

$(function(){
				$.get("../json/data2.json",function(data){					
					var data = data;	
					var html_1 = template("pics",data);	
					var html_2=template("picss",data);
					var html_3=template("picsss",data);
					var html_4=template("picssss",data);
					
					document.getElementById("article3_div_ul1").innerHTML=html_1;
					document.getElementById("article3_div_ul2").innerHTML=html_1;
					document.getElementById("aside3_div_ul").innerHTML=html_2;	
					
					document.getElementById("article4_div_ul1").innerHTML=html_1;
					document.getElementById("article4_div_ul2").innerHTML=html_1;
					document.getElementById("aside4_div_ul").innerHTML=html_3;
					document.getElementById("aside4_div_ul2").innerHTML=html_4;
					
				})
});

$(function(){
var oUl=document.getElementById("nav_li_ul");	
var oLi=oUl.getElementsByTagName("li");
var index = null;
	$("#nav_li_ul .m").mouseenter(function(){
		var _this=this;
		$.get("../json/data2.json",function(data){
			var data =data;		
			var index = $(_this).index();
			console.log(data.txt1[index])
			var html1=template("navv",data.txt1[index]);
				$(".nav_li_li_p").eq(index).html(html1)
				$(".nav_li_li_p").eq(index).show();
		})
		$("#nav_li_ul .m").mouseleave(function(){
		$(_this).find(".nav_li_li_p").hide();
	})
		
	})
	
	
	
})

$(function(){
				$.get("../json/data1.json",function(data){					
					var data = data;					
					var html = template("tabs",data);
					document.getElementById("content1").innerHTML=html;
					$(".list li").on("mouseover",function(){
						$(this).css({"background":"#20252a"}).siblings().css({"background":"#353a40"});
					var index=$(this).index();
						$(".list1").eq(index).show().siblings().hide();				
					})	
					
				})	
});

$(function(){
	var oCon_aside=document.getElementsByClassName("con_aside")[0];	
	var aLi=oCon_aside.getElementsByTagName("li");	
	for(var i=0;i<aLi.length;i++){
		aLi[i].style.backgroundPositionY=-i*49+'px';
	}
		
});


$(function(){
	$(".lb_dl").eq(0).on("click",function(){
		location.href="http://127.0.0.1:8020/chddwork/html/dl.html";		
		
	})
		
});
