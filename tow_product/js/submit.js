$(function(){
				var aInput = $(".dlbox").find("input:not(:last)");
				$("#btn").click(function(){
					if(aInput.val().length==0){
						$("#list #txt-span").html("不能为空");
						return;						
					}
					$.post("http://127.0.0.1/tow_product/php/submit.php",{userName:aInput.eq(0).val(),password:aInput.eq(1).val()},function(data){
						if(data==0){
							alert("密码输入不正确!");									
						}else if(data==1){
							alert("此用户未注册!");		
						}else{
							alert("登录成功!");
						}
					})
				})		
			})