$(function(){					
		$.get("json/data.json",function(data){
		var data = data[0];		
		var html = template("productio",data);
		console.log(html)
		$(".main2-content .content").html(html);
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
	
	})

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
	
	$(".tcdPageCode").createPage({
        	pageCount:10,
        	current:1,
        	backFn:function(p){
        	}
    	});
})