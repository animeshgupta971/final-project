$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("sticky");
        } else {
           $(".header").removeClass("sticky");
        }
    });
});



 $(document).ready(function() {
    $(".merox-variants").click(function() {
        $(".merox-variants").removeClass("active");
        $(this).addClass("active");
    });

    $('.cartBtn').click(function() {
        var thiss = $(this);
        var id = $(this).parents().find(".merox-variants.active").attr('data-var-id');
        addItemToCart(id, thiss);
    });
   
    function addItemToCart(variant_id, thiss) {
        jQuery.ajax({
            type: 'POST',
            url: '/cart/add.js',
            data: {
                "id": variant_id,
                "quantity": 1
            },
            dataType: 'json',
            success: function() {
                thiss.text("ADDED")
                window.location = "/cart";
            }
        });
    }
});














































