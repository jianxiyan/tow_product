$(function(){
				var aInput = $(".dlbox").find("input:not(:last)");
				$("#btn").click(function(){
					if(aInput.val().length==0){
						alert("用户名不能为空!");
						return;
						
					}
					$.post("http://127.0.0.1/tow_product/php/register.php",{userName:aInput.eq(0).val(),password:aInput.eq(1).val()},function(data){
						if(data==1){
							alert("注册成功!");
						}else{
							alert("用户已存在!");
						}
					})
				})
				
				
			})