$(window).scroll(function(){
    let demo= $("#demo").offset().top;
    windowScroll=$(window).scrollTop();
    if(windowScroll > demo-50)
    {
        $("#nav").css("backgroundColor","red");
        $("#btnUp").fadeIn(1000);


    }
    else
    {
        $("#nav").css("backgroundColor","transparent");
        $("#btnUp").fadeOut(1000);

    }
})
$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:0},2000);
})
$("#nav a").click(function(e){
    let linkHref= $(e.target).attr("href");
    let sectionOffest=$(linkHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffest},2000);
  
  })
  $(document).ready(function() {
    $(".load .spinner").fadeOut(1000,function(){
        $(".load").fadeOut(1000,function(){
            $(".load").remove();
        })
    });
  })
