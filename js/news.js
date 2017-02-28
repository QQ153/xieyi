$(function(){
	
	$index = 0;
	$shu=[];
		
	$(".pagination .ma").on("click",function(){
		$(this).addClass("active").siblings('li').removeClass('active');
		$index= $(this).text();	
		$index--;	
		add();
	})

	$(".pagination .shang").on("click",function(){
		if($index<1){
			$(".pagination .shang").addClass("disabled");
		}else{
			$index--;
			$(".pagination .ma").eq($index).addClass("active")
			.siblings('li').removeClass('active');
			$(".pagination .xia").removeClass("disabled");
			console.log($index);
			add();
		}
		
	})

	$(".pagination .xia").on("click",function(){
		if($index>3){
			$(".pagination .xia").addClass("disabled");
		}else{
			$index++;
			$(".pagination .ma").eq($index).addClass("active")
			.siblings('li').removeClass('active');
			$(".pagination .shang").removeClass("disabled");
			console.log($index);
			add();
		}
		
	})

	function suiji(){
		$shu = [];
		for(var i=0;$shu.length<4;i++){
			$zi = Math.floor(Math.random()*3+1);
			$shu.push($zi);
		};
		return $shu;
	}

	function add(){
		$(".kt").empty();
		suiji();
		$(".kt").append("<div class='lei'>"+
			  				"<img src='img/img0"+$shu[0]+".png' class='img-main'/>"+
			  				"<div class='text-main'>"+
			  					"<h4><strong>新闻标题</strong></h4>"+
			  					"<i></i>"+
				  				"<p class='txt'>拥有数百位员工的写意集团，每个月中旬举行的员工生日会成为员工与公司之间、部门与"+
				  					  "部门之间、员工与员工之间沟通的一座桥梁。每个月由HR部门牵头组织，为当月的寿星举"+
				  					  "行生日Party，集体为寿星祝贺的同时，也为其他同事提供一次美食当下，把“酒“言欢的"+
				  					  "机会。"+
									"</p>"+
									"<div class='clearfix'>"+
										"<span>2015年7月16日</span>"+
										"<a class='more'>&gt;&gt;更多</a>"+
									"</div>"+
			  				"</div>"+
			  				"<div class='xian'></div>"+
			  			"</div>"+
			  			"<div class='lei'>"+
			  				"<img src='img/img0"+$shu[1]+".png' class='img-main'/>"+
			  				"<div class='text-main'>"+
			  					"<h4><strong>新闻标题</strong></h4>"+
			  					"<i></i>"+
				  				"<p class='txt'>拥有数百位员工的写意集团，每个月中旬举行的员工生日会成为员工与公司之间、部门与"+
				  					  "部门之间、员工与员工之间沟通的一座桥梁。每个月由HR部门牵头组织，为当月的寿星举"+
				  					  "行生日Party，集体为寿星祝贺的同时，也为其他同事提供一次美食当下，把“酒“言欢的"+
				  					  "机会。"+
									"</p>"+
									"<div class='clearfix'>"+
										"<span>2015年7月16日</span>"+
										"<a class='more'>&gt;&gt;更多</a>"+
									"</div>"+
			  				"</div>"+
			  				"<div class='xian'></div>"+
			  			"</div>"+
			  			"<div class='lei'>"+
			  				"<img src='img/img0"+$shu[2]+".png' class='img-main'/>"+
			  				"<div class='text-main'>"+
			  					"<h4><strong>新闻标题</strong></h4>"+
			  					"<i></i>"+
				  				"<p class='txt'>拥有数百位员工的写意集团，每个月中旬举行的员工生日会成为员工与公司之间、部门与"+
				  					  "部门之间、员工与员工之间沟通的一座桥梁。每个月由HR部门牵头组织，为当月的寿星举"+
				  					  "行生日Party，集体为寿星祝贺的同时，也为其他同事提供一次美食当下，把“酒“言欢的"+
				  					  "机会。"+
									"</p>"+
									"<div class='clearfix'>"+
										"<span>2015年7月16日</span>"+
										"<a class='more'>&gt;&gt;更多</a>"+
									"</div>"+
			  				"</div>"+
			  				"<div class='xian'></div>"+
			  			"</div>"+
			  			"<div class='lei'>"+
			  				"<img src='img/img0"+$shu[3]+".png' class='img-main'/>"+
			  				"<div class='text-main'>"+
			  					"<h4><strong>新闻标题</strong></h4>"+
			  					"<i></i>"+
				  				"<p class='txt'>拥有数百位员工的写意集团，每个月中旬举行的员工生日会成为员工与公司之间、部门与"+
				  					  "部门之间、员工与员工之间沟通的一座桥梁。每个月由HR部门牵头组织，为当月的寿星举"+
				  					  "行生日Party，集体为寿星祝贺的同时，也为其他同事提供一次美食当下，把“酒“言欢的"+
				  					  "机会。"+
									"</p>"+
									"<div class='clearfix'>"+
										"<span>2015年7月16日</span>"+
										"<a class='more'>&gt;&gt;更多</a>"+
									"</div>"+
			  				"</div>"+
			  				"<div class='xian'></div>"+
			  			"</div>"
			  			);
	}

})
