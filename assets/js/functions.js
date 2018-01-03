$(function(){
    navMa();
    navMp();
    froala();
});


function navMa() {
    $(".tabs-box").on("click", "li", function(){
        var tabsId = $(this).attr("id");
        $(this).addClass("tab-active").siblings().removeClass("tab-active");
        $("#" + tabsId + "-content-box").addClass("tab-active").siblings().removeClass("tab-active");
    })
}

function navMp() {
    $(".tabs-box-mp").on("click", "li", function(){
        var tabsId = $(this).attr("id");
        $(this).addClass("tab-active").siblings().removeClass("tab-active");
        $("#" + tabsId + "-content-box").addClass("tab-active").siblings().removeClass("tab-active");
    })
}

function froala() {
     $('div#eg-gray-theme').froalaEditor({
      theme: 'gray',
      zIndex: 2001
    })
}
