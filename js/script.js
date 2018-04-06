'use strict';

$(document).ready(function () {
    $('.get-inspired-crsl').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }]
    });
    $('.our-team-carousel').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }]
    });
    new WOW().init();
    $(document).scroll(function () {
        var $nav = $(".navbar");
        var $bottomBtn = $('.scroll-to-top');
        $bottomBtn.toggleClass('show-btn', $(this).scrollTop() > 300);
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        if ($nav.hasClass('scrolled')) {
            $('#headerNavLogo').attr('src', './dist/images/logo-black.png');
        } else {
            $('#headerNavLogo').attr('src', './dist/images/logo.png');
        }
    });
    $('.navbar').find('a').on('click',function () {
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        $('html, body').animate({ scrollTop: $anchor.top - 40 }, 'slow');
        return false;
    });
    $('.scroll-top-btn').on('click',function () {
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        $('html, body').animate({ scrollTop: $anchor.top - 40 }, 'slow');
        return false;
    });
    $('#contact_form').on('submit', function (e) {
        e.preventDefault();

        var name = $("#nameInput").val();
        var email = $("#emailInput").val();
        var subject = $("#subjectInput").val();
        var telephone = $("#telephone").val();
        var numberOfTravelers = $("#numberOfTravelers").val();
        var dateTravelFrom = $("#dateTravelInputFrom").val();
        var dateTravelTo = $("#dateTravelInputTo").val();
        var message = $("#messageTextarea").val();
        var hearaboutus = $("#hearaboutus").val();

        var dataForm = {
            "name": name,
            "email": email,
            "subject": subject,
            "telephone": telephone,
            "numberOfTravelers": numberOfTravelers,
            "dateTravelFrom": dateTravelFrom,
            "dateTravelTo": dateTravelTo,
            "message": message,
            "hearaboutus":hearaboutus
        };

        $.ajax({
            type: 'get',
            url: 'contact.php',
            data: dataForm,
            success: function success(error) {
                if (error) {
                    var allErrors = $.parseJSON(error);
                    var div = "<ul>";
                    if (allErrors.name) div += "<li><b>name :</b>" + allErrors.name + "</li>";
                    if (allErrors.email) div += "<li><b>email :</b>" + allErrors.email + "</li>";
                    if (allErrors.subject) div += "<li><b>subject :</b>" + allErrors.subject + "</li>";
                    if (allErrors.telephone) div += "<li><b>phone :</b>" + allErrors.subject + "</li>";
                    if (allErrors.numberOfTravelers) div += "<li><b>number Of Travelers :</b>" + allErrors.numberOfTravelers + "</li>";
                    if (allErrors.dateTravelFrom) div += "<li><b>date Travel From :</b>" + allErrors.dateTraveFrom + "</li>";
                    if (allErrors.dateTravelTo) div += "<li><b>date Travel To :</b>" + allErrors.dateTraveTo + "</li>";

                    div += "</ul>";
                    $("#success_alert").addClass("hidden");
                    $("#errors_alert").removeClass("hidden").empty().append(div);
                } else {
                    $("#errors_alert").addClass("hidden");
                    $("#success_alert").removeClass("hidden").empty().append("Your mail sent successfully");
                    $("#nameInput").val('');
                    $("#emailInput").val('');
                    $("#subjectInput").val('');
                    $("#telephone").val('');
                    $("#numberOfTravelers").val('');
                    $("#dateTravelInputFrom").val('');
                    $("#dateTravelInputTo").val('');
                    $("#messageTextarea").val('');
                    $("#hearaboutus").val('');
                    
                }
            }
        });
    });
    $('#navbarSupportedContent a').on('click', function() {
      $('.navbar-collapse').collapse('hide');
    });
});