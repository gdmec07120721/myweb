

window.onload = function(){
	

	//变量
	var degrees = [325,270,235]
	var color = "#00c2a9"; 
	var bgcolor = "#222";
	var text;
	
	function init()
	{
		for(var i=0 ; i<degrees.length ; i++){
		
		//初始化画布	
		var canvas = document.getElementById("canvas"+(i+1));
		var ctx = canvas.getContext("2d");
		//纬度
		var W = canvas.width;
		var H = canvas.height;
		//清除画布
		
		ctx.clearRect(0, 0, W, H);
		//画360度的弧
		ctx.beginPath();
		ctx.strokeStyle = bgcolor;
		ctx.lineWidth = 30;
		ctx.arc(W/2, H/2, 100, 0, Math.PI*2, false); 
		ctx.stroke();
		
		//画第二个弧
		//角的弧度* PI / 180 =角度
		var new_degrees =degrees[i]
		var radians = new_degrees * Math.PI / 180;
		
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = 30;
		
		//从最顶开始画
		ctx.arc(W/2, H/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); 
		//显示弧
		ctx.stroke();
		
		//添加中间的值
		ctx.fillStyle = color;
		ctx.font = "50px bebas";
		text = Math.floor(new_degrees/360*100) + "%";
		text_width = ctx.measureText(text).width;
		ctx.fillText(text, W/2 - text_width/2, H/2 + 15);
	}
	}

init();
}