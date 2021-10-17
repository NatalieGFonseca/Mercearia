function toggle(name) {
    div = document.getElementById(name);
  
    if(div.style.display == "none"){
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
  
    event.preventDefault();
  }

  $(document).on("click", ".side-menu > ul > li", function(e){
    if($(this).find('.sub-menu').length>0){
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('active');
        $(this).find('.sub-menu').stop().slideToggle();
    }
    
});