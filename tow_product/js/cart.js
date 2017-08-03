$(function(){
	//存cookle
	function cqcookle(id,sp){
	  var $osp = $("#sp")
	  var str = $.cookie(id);
	  var obj = str? JSON.parse(str) : {};
	  var sum = 0;
	  for(var i in obj){
	  	sum += obj[id];
	  }
	  
	  obj[id] = obj[id] ? obj[id]++ : 1;
	  var objstr = JSON	.stringify(obj);
	  $.cookle(id,objstr,{"path":"/",expires:7});
	  $osp.text(sum);
	}
	
})
