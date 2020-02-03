$(document).ready(function()
    {
    $(".page-scroll").on('click', function(event) 
        {      
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate(
            {
            scrollTop: $(hash).offset().top - 100
            }, 1000);
        });
    
    // $(window).scroll(function()
    //     {
    //     var y = $(window).scrollTop();

    //     if(y >= 585)
    //         {  
    //         $('#navbarTest').slideDown(500).css('background-color','#f4f4f4');
    //         $('#navbarTest').slideDown(500).css('background', '#ffffff');
    //         }
    //     else
    //         {
    //         $('#navbarTest').css('background-image','none')
    //         }
    //     });

    });
