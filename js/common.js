	$(function(){
		//显示全部作品
		$("#portfolio_h3").click(function(){
			$(".portfolio2").css("display","block");
			$("#portfolio_h3").css("display","none");
		});
		//滑动遮罩
		$(".thumbnail").each(function(index, element) {
            $(this).hover(function(){
				 $(this).find(".main").addClass("opacity_layer");
				 $(this).find(".text").show().animate({"left":"0px"},500);
			},function(){
				$(this).find(".main").removeClass("opacity_layer");	
				$(this).find(".text").css("left","-318px").hide();
			})	
        });
		//滚动监听
		$('body').scrollspy({ target: '.navbar-collapse' });
		//页面滑动
		$(".navbar-collapse a").click(function(i){
			var href_div=$(this).attr("href")
			$('html,body').animate({scrollTop:$(href_div).offset().top}, 500);
		});
		//固定导航
		$(window).scroll(function(){
		  if($(document).scrollTop()>=80){
			$(".navbar").addClass("fixednav"); 
		  }else{
		   $(".navbar").removeClass("fixednav");
		  }
		
		})  
	});
