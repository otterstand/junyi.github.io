// JavaScript Document
$(document).ready(function() {


    // sticky-header
    $(window).bind('scroll resize', function() {
        var $this = $(this);
        var $this_Top = $this.scrollTop();

        if ($this_Top < 1) {
            $('nav.navbar').removeClass("sticky");
        }
        if ($this_Top > 1) {
            $('nav.navbar').addClass("sticky");
        }
    });



    // scrollTop
    $('#goTop').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });


    //workList
    $('#workList .brand').click(function() {
        if ($(this).hasClass('show')) {
            $('#workList .row.mask').fadeIn('slow');
            $('#workList .row.child').fadeIn('slow');
            return false;
        } else if ($(this).hasClass('back')) {
            $('#workList .row.child').fadeOut('slow');
            $('#workList .row.mask').fadeOut('slow');
            return false;
        }
    });


    //workTab
    $('#workFilter .tab').click(function() {
        if ($(this).hasClass('all')) {
            $('.tab').removeClass('selected');
            $(this).addClass('selected');
            $('#workList').animate({
                opacity: 0,
            }, 400, function() {
                $('#workList .col-md-3').removeClass('invisible');
            });
            $('#workList').animate({
                opacity: 1,
            }, 400);
            return false;
        } else if ($(this).hasClass('branding')) {
            $('.tab').removeClass('selected');
            $(this).addClass('selected');
            $('#workList').animate({
                opacity: 0,
            }, 400, function() {
                $('#workList .col-md-3').removeClass('invisible');
                $('#workList .col-md-3').not('.branding').addClass('invisible');
            });
            $('#workList').animate({
                opacity: 1,
            }, 400);
            return false;
        } else if ($(this).hasClass('packaging')) {
            $('.tab').removeClass('selected');
            $(this).addClass('selected');
            $('#workList').animate({
                opacity: 0,
            }, 400, function() {
                $('#workList .col-md-3').removeClass('invisible');
                $('#workList .col-md-3').not('.packaging').addClass('invisible');
            });
            $('#workList').animate({
                opacity: 1,
            }, 400);
            return false;
        } else if ($(this).hasClass('digital')) {
            $('.tab').removeClass('selected');
            $(this).addClass('selected');
            $('#workList').animate({
                opacity: 0,
            }, 400, function() {
                $('#workList .col-md-3').removeClass('invisible');
                $('#workList .col-md-3').not('.digital').addClass('invisible');
            });
            $('#workList').animate({
                opacity: 1,
            }, 400);
            return false;
        }
    });






});