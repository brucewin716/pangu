//hover banner里面的li的时候出现两个箭头
$(function(){
	$(".section .banner").mouseover(function(){
		$(".section .banner a").show();
	}).mouseout(function(){
		$(".section .banner a").hide();
	})
})

//banner部分的轮播

$(document).ready(function () {

	var i = 0;

	var clone = $(".banner ul li").first().clone();//克隆第一张图片
	$(".banner ul").append(clone);//复制到列表最后
	var size = $(".banner ul li").size();

	/*自动轮播*/

	var t = setInterval(function () { i++; move();},2000);

	/*鼠标悬停事件*/

	$(".banner").hover(function () {
	    clearInterval(t);//鼠标悬停时清除定时器
	}, function () {
	    t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
	});

	/*向左按钮*/
	$(".banner .btn_left").click(function () {
	    i--;
	    move();
	})

	/*向右按钮*/
	$(".banner .btn_right").click(function () {
	    i++;
	    move();
	})

	/*移动事件*/
	function move() {
	    if (i == size) {
	        $(".banner ul").css({ left: 0 });
	        i = 1;
	    }
	    if (i == -1) {
	        $(".banner ul").css({ left: -(size - 1) * 1903 });
	        i = size - 2;
	    }
	    $(".banner ul").stop().animate({ left: -i * 1903 }, 500);
	}
});

//车辆展示的移动逻辑

function move(){
	var left=parseInt($(".showList ul").css("left"));		
	if(left==0){
		left-=1000;
		$(".showList ul").css("left",left);
	}else if(left==-1000){
		left+=1000;
		$(".showList ul").css("left","0px");
	}
}
//左边的按钮
$(".btn-l").click(function(){	
	move();
})
//右边的按钮
$(".btn-r").click(function(){	
	move();
})

//hover二维码出现大的二维码
$(".fixed a.er").mouseover(function(){
	$(".fixed .erweima").show();
}).mouseout(function(){
	$(".fixed .erweima").hide();
})

//车辆展示的数据生成

var showCarList=[
	{
		href:'product_view.html',
		img:'image/12.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：112.00元/天'
	},
	{
		href:'product_view.html',
		img:'image/13.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：2000.00元/天'
	},
	{
		href:'product_view.html',
		img:'image/14.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：4000.00元/天'
	},
	{
		href:'product_view.html',
		img:'image/4.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：5000.00元/天'
	},
	{
		href:'product_view.html',
		img:'image/5.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：0.00元/天'
	},
	{
		href:'product_view.html',
		img:'image/6.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：0.00元/天'
	},
	{
		href:'product_view.html',
		img:'image/7.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：0.00元/天'
	},
	{
		href:'product_view.html',
		img:'image/12.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：112.00元/天'
	},
	{
		href:'product_view.html',
		img:'image/5.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：0.00元/天'
	},
	{
		href:'product_view.html',
		img:'image/7.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：0.00元/天'
	},
	{
		href:'product_view.html',
		img:'image/6.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：0.00元/天'
	}
];

function carShow(){
	var carHtml="";
	var carUl=$(".carList ul");
	for(var i=0;i<showCarList.length;i++){
		carHtml+='<li><a href="'+showCarList[i].href+'"><dl><dt><img src="'+showCarList[i].img+'"/></dt>'
				 +'<dd class="carStyle">'+showCarList[i].carStyle+'</dd>'
				 +'<dd>'+showCarList[i].rent+'</dd></dl></a></li>'																		
	}
	carUl.html(carHtml);
}
carShow();

//主要车型的数据生成

var mainCarList=[
	{
		href:'case_view.html',
		img:'image/9.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：123.00元/天'
	},
	{
		href:'case_view.html',
		img:'image/10.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：1500.00元/天'
	},
	{
		href:'case_view.html',
		img:'image/11.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：1600.00元/天'
	},
	{
		href:'case_view.html',
		img:'image/15.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：0.00元/天'
	},
	{
		href:'case_view.html',
		img:'image/16.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：0.00元/天'
	},
	{
		href:'case_view.html',
		img:'image/17.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：0.00元/天'
	},
	{
		href:'case_view.html',
		img:'image/18.jpg',
		carStyle:'车型：车型展示名称',
		rent:'日租：0.00元/天'
	}
];

function mainCar(){
	var maincarHtml="";
	var maincarUl=$(".main_car ul");
	for(var i=0;i<mainCarList.length;i++){
		maincarHtml+='<li><a href="'+mainCarList[i].href+'"><dl><dt><img src="'+mainCarList[i].img+'"/></dt>'
				 +'<dd class="carStyle">'+mainCarList[i].carStyle+'</dd>'
				 +'<dd>'+mainCarList[i].rent+'</dd></dl></a></li>'																		
	}
	maincarUl.html(maincarHtml);
}
mainCar()

/*资质荣誉数据的生成*/
 var honorList=[
	{
		href:'honor_view.html',
		img:'image/honor1.jpg',
		activity:'2013年沈阳盘古妇女节活动报 ...',
	},
	{
		href:'honor_view.html',
		img:'image/honor2.jpg',
		activity:'盘古首张增值税发票',
	},
	{
		href:'honor_view.html',
		img:'image/honor3.jpg',
		activity:'2013年沈阳盘古妇女节活动报 ...',
	},
	{
		href:'honor_view.html',
		img:'image/honor4.jpg',
		activity:'强效出击，直达受众——2013 ...',
	},
	{
		href:'honor_view.html',
		img:'image/honor5.jpg',
		activity:'致力于在互联网时代帮助中国企业',
	},
	{
		href:'honor_view.html',
		img:'image/honor6.jpg',
		activity:'【西中踏浪 盘古远航】——20 ...',
	},
	{
		href:'honor_view.html',
		img:'image/honor7.jpg',
		activity:'强效出击，直达受众——2013 ...',
	}
];

function honor(){
	var honorHtml="";
	var honorUl=$(".honorList ul");
	for(var i=0;i<honorList.length;i++){
		honorHtml+='<li><a href="'+honorList[i].href+'"><dl><dt><img src="'+honorList[i].img+'"/></dt>'
				 +'<dd class="carStyle">'+honorList[i].activity+'</dd></dl></a></li>'																		
	}
	honorUl.html(honorHtml);
}
honor();

//应聘表民族的生成

var nation=[
	{name:"sele",value:"---请选择---"},{name:"han",value:"汉族"},
	{name:"han",value:"蒙古族"},{name:"han",value:"回族"},
	{name:"han",value:"藏族"},{name:"han",value:"维吾尔族"}
	,{name:"han",value:"苗族"},{name:"han",value:"彝族"},
	{name:"han",value:"壮族"},{name:"han",value:"布依族"},
	{name:"han",value:"朝鲜族"},{name:"han",value:"满族"},
	{name:"han",value:"侗族"},{name:"han",value:"瑶族"},
	{name:"han",value:"白族"},{name:"han",value:"土家族"},
	{name:"han",value:"哈尼族"},{name:"han",value:"哈萨克族"},
	{name:"han",value:"傣族"},{name:"han",value:"黎族"},
	{name:"han",value:"傈僳族"},{name:"han",value:"佤族"},
	{name:"han",value:"畲族"},{name:"han",value:"高山族"},
	{name:"han",value:"拉祜族"},{name:"han",value:"水族"},
	{name:"han",value:"东乡族"},{name:"han",value:"纳西族"},
	{name:"han",value:"景颇族"},{name:"han",value:"柯尔克孜族"},
	{name:"han",value:"土族"},{name:"han",value:"达斡尔族"},
	{name:"han",value:"仡佬族"},{name:"han",value:"羌族"},
	{name:"han",value:"布朗族"},{name:"han",value:"撒拉族"},
	{name:"han",value:"毛难族"},{name:"han",value:"仫佬族"},
	{name:"han",value:"锡伯族"},{name:"han",value:"阿昌族"},
	{name:"han",value:"普米族"},{name:"han",value:"塔吉克族"},
	{name:"han",value:"怒族"},{name:"han",value:"乌兹别克族"},
	{name:"han",value:"俄罗斯族"},{name:"han",value:"鄂温克族"},
	{name:"han",value:"崩龙族"},{name:"han",value:"保安族"},
	{name:"han",value:"裕固族"},{name:"han",value:"京族"},
	{name:"han",value:"塔塔尔族"},{name:"han",value:"独龙族"},
	{name:"han",value:"鄂伦春族"},{name:"han",value:"赫哲族"},
	{name:"han",value:"门巴族"},{name:"han",value:"珞巴族"}	
];

function getNation(){
	var mz=$("#mz");
	var mzArray=[];
	for(var i=0;i<nation.length;i++){
		mzArray.push('<option value="'+nation[i].value+'">'+nation[i].value+'</>');
	}
	mz.html(mzArray.join(""));
}
getNation();

//籍贯以及户口所在地数据的生成。

var birthArray=[
	{name:"sele",value:"---请选择---"},{name:"han",value:"北京市"},
	{name:"han",value:"天津市"},{name:"han",value:"河北省"},
	{name:"han",value:"山西省"},{name:"han",value:"内蒙古"}
	,{name:"han",value:"辽宁省"},{name:"han",value:"吉林省"},
	{name:"han",value:"黑龙江"},{name:"han",value:"上海市"},
	{name:"han",value:"江苏省"},{name:"han",value:"浙江省"},
	{name:"han",value:"安徽省"},{name:"han",value:"福建省"},
	{name:"han",value:"江西省"},{name:"han",value:"山东省"},
	{name:"han",value:"河南省"},{name:"han",value:"湖北省"},
	{name:"han",value:"湖南省"},{name:"han",value:"广东省"},
	{name:"han",value:"广  西"},{name:"han",value:"海南省"},
	{name:"han",value:"重庆市"},{name:"han",value:"四川省"},
	{name:"han",value:"贵州省"},{name:"han",value:"云南省"},
	{name:"han",value:"西  藏"},{name:"han",value:"陕西省"},
	{name:"han",value:"甘肃省"},{name:"han",value:"青海省"},
	{name:"han",value:"宁  夏"},{name:"han",value:"新  疆"},
	{name:"han",value:"台湾省"},{name:"han",value:"香  港"},
	{name:"han",value:"澳  门"}
];

function getBirthPlace(){
	var birthPlace=$(".birthPlace");
	var jzhk=[];
	for(var i=0;i<birthArray.length;i++){
		jzhk.push('<option value="'+birthArray[i].value+'">'+birthArray[i].value+'</option>');
	}
	birthPlace.html(jzhk.join(""));
}
getBirthPlace();

/*求职申请表的显示和隐藏*/ 

$(".hrList .recruit .reqDetail a").click(function(){
	// event.preventDefault();
	$(".hrList .recruit").css("display","none");
	$(".hrList .pageBox").css("display","none");
	$("#Application_form").show();	
})


//点击首页主要车型栏，跳出相应的主要车型详情页

$(".caseRight ul li").click(function(){
	var $img=$(this).find('img');
	var $dd=$(this "")
})




