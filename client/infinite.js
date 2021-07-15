Session.set("profLimit", 6);
let lastScrollTop = 0;

$(window).scroll(function(event){
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100){
        let scrollTop = $(this).scrollTop();
        if (scrollTop > lastScrollTop){
            Session.set("profLimit", Session.get("profLimit")+ 3);

        }
        lastScrollTop = scrollTop;
    }
});