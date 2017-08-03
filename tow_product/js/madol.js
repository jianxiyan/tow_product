//header-nav模板
$(function(){
	$(".nav-li:not(:first,:last)").mouseenter(function(){
		var i = $(this).index()-1;
		var _this = this;
		$.get("json/nav.json",function(data){
			var data = data.headernav[i];
			var html = template("navl",data);
			
			$(_this).get(0).innerHTML += html;
		})
	})
	
	
})

//header-meun模板
			
			