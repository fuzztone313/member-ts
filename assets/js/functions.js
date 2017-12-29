$(function(){
    navTabs();
});


function navTabs() {
    $(".tabs-box").on("click", "li", function(){
        var tabsId = $(this).attr("id");
        $(this).addClass("tab-active").siblings().removeClass("tab-active");
        $("#" + tabsId + "-content-box").addClass("tab-active").siblings().removeClass("tab-active");
    })
}