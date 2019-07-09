$(document).ready(function()
    {
    $(".page-scroll").on('click', function(event) 
        {      
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate(
            {
            scrollTop: $(hash).offset().top - 50
            }, 1000);
        });
    });