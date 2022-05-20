//  MDUI 

var inst = new mdui.Collapse('#collapse');
mdui.$('.toggle').on('mouseover', function() {
    inst.open('.tab');
});
mdui.$('.tab_content').on('mouseover', function() {
    inst.open('.tab');
});
mdui.$('.toggle').on('mouseout', function() {
    inst.close('.tab');
});
mdui.$('.tab_content').on('mouseout', function() {
    inst.close('.tab');
});



// 导航栏
$('.toggle').mouseover(function() {
    var index = $(this).index();
    $('.tab_content').eq(index).show().siblings().hide();
});
$('.sidebar_header li').mouseover(function() {
    $(this).addClass('current');
    var index = $(this).index();
    $('.sidebar_body_cont').eq(index).show();
});
$('.sidebar_header li').mouseout(function() {
    var index = $(this).index();
    $(this).removeClass('current');
    $('.sidebar_body_cont').eq(index).hide();
});

console.log($('.sidebar_body_cont'));
for(var i=0;i<$('.sidebar_body_cont').length;i++){
    $('.sidebar_body_cont').eq(i).mouseover(function(){
        $(this).show();
    })
}
for(var i=0;i<$('.sidebar_body_cont').length;i++){
    $('.sidebar_body_cont').eq(i).mouseout(function(){
        $(this).hide();
    })
}


$('.bigbox_body_size_left').hover(function() {
    $('.bigbox_body_size_icon').css("backgroundColor", "#ff6a00")
}, function() {
    $('.bigbox_body_size_icon').css("backgroundColor", "#b0b0b0")
});
// 智能穿戴
$('.bigbox_body_size_left_black span').mouseover(function() {
    $(this).addClass('current').siblings().removeClass('current');
    var index = $(this).index();
    $('.chuandai').eq(index).show().siblings().hide();
});
// 家电
$('.bigbox_body_size_left_appliances span').mouseover(function() {
    $(this).addClass('current').siblings().removeClass('current');
    var index = $(this).index();
    $('.jiadian').eq(index).show().siblings().hide();
});
// 生活电器
$('.bigbox_body_size_left_life span').mouseover(function() {
    $(this).addClass('current').siblings().removeClass('current');
    var index = $(this).index();
    $('.shenghuo').eq(index).show().siblings().hide();
});
// 厨房电器
$('.bigbox_body_size_left_kitchen span').mouseover(function() {
    $(this).addClass('current').siblings().removeClass('current');
    var index = $(this).index();
    $('.chufang').eq(index).show().siblings().hide();
});
// 智能家居
$('.bigbox_body_size_left_smart span').mouseover(function() {
    $(this).addClass('current').siblings().removeClass('current');
    var index = $(this).index();
    $('.zhineng').eq(index).show().siblings().hide();
});
// 运动出行
$('.bigbox_body_size_left_run span').mouseover(function() {
    $(this).addClass('current').siblings().removeClass('current');
    var index = $(this).index();
    $('.yundong').eq(index).show().siblings().hide();
});
// 日用百货
$('.bigbox_body_size_left_merchandise span').mouseover(function() {
    $(this).addClass('current').siblings().removeClass('current');
    var index = $(this).index();
    $('.riyong').eq(index).show().siblings().hide();
});


// fixednav
menu_top();

function menu_top() {
    $(window).scroll(function() {
        if ($(document).scrollTop() >= 1000) {
            $(".tipnav").show();
        } else if ($(document).scrollTop() < 1000) {
            $(".tipnav").hide();
        }
    })
};
$('.hover').hover(function() {
    var index = $(this).index();
    $('.hover span').eq(index).css("color", "#ff6a00");
    $('.hover .show').eq(index).show();
    $('.hover .hide').eq(index).hide();
}, function() {
    var index = $(this).index();
    $('.hover span').eq(index).css("color", "#b0b0b0");
    $('.hover .show').eq(index).hide();
    $('.hover .hide').eq(index).show();
});
$('.app').hover(function() {
    $('.tip').show();
}, function() {
    $('.tip').hide();
});
