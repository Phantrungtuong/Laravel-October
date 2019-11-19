function disScroll_body() {
    $('body').css('overflow', 'hidden');
}

function enbleScroll_body() {
    $('body').css('overflow', 'auto');
}

$(document).ready(function () {
    $('#scrolltop').click(function () {
        $('html,body').animate({
            scrollTop: $('body').offset().top
        }, 'slow');
    });
    setTimeout(function () {
        if ($('#pb_loader').length > 0) {
            $('#pb_loader').removeClass('show');
        }
    }, 1000);
    var $carousel = $('.js-carousel'),
        $carouselIcons = ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'];

    function runnCarousel() {
        if (!$().owlCarousel) {
            console.log('carousel: owlCarousel plugin is missing.');
            return true;
        }
        if ($carousel.length > 0) {
            $carousel.each(function () {
                var elem = $(this),
                    carouselNav = elem.attr('data-arrows'),
                    carouselDots = elem.attr('data-dots') || true,
                    carouseldotsData = elem.attr('data-dotsData') || false,
                    carouselAutoPlay = elem.attr('data-autoplay') || false,
                    carouselAutoplayTimeout = elem.attr('data-autoplay-timeout') || 5000,
                    carouselAutoWidth = elem.attr('data-auto-width') || false,
                    resizeHeight = elem.attr('auto-height') || false,
                    carouseAnimateIn = elem.attr('data-animate-in') || false,
                    carouseAnimateOut = elem.attr('data-animate-out') || false,
                    carouselLoop = elem.attr('data-loop') || false,
                    carouselMargin = elem.attr('data-margin') || 0,
                    carouselVideo = elem.attr('data-video') || false,
                    carouselItems = elem.attr('data-items') || 4,
                    carouselItemsLg = elem.attr('data-items-lg') || Number(carouselItems),
                    carouselItemsMd = elem.attr('data-items-md') || Number(carouselItemsLg),
                    carouselItemsSm = elem.attr('data-items-sm') || Number(carouselItemsMd),
                    carouselItemsXs = elem.attr('data-items-xs') || Number(carouselItemsSm),
                    carouselItemsXxs = elem.attr('data-items-xxs') || Number(carouselItemsXs);
                if (carouselItemsMd >= 3) {
                    var carouselItemsSm = elem.attr('data-items-sm') || Number(2);
                }
                if (carouselItemsSm >= 2) {
                    var carouselItemsXs = elem.attr('data-items-xs') || Number(2);
                }
                if (carouselItemsXs >= 1) {
                    var carouselItemsXxs = elem.attr('data-items-xxs') || Number(1);
                }
                if (carouselNav == 'false') {
                    carouselNav = false;
                } else {
                    carouselNav = true;
                }
                if (carouselDots == 'false') {
                    carouselDots = false;
                } else {
                    carouselDots = true;
                }
                if (carouseldotsData == 'true') {
                    carouseldotsData = true;
                } else {
                    carouseldotsData = false;
                }
                if (carouselAutoPlay == 'false') {
                    carouselAutoPlay = false;
                }
                var t = setTimeout(function () {
                    elem.owlCarousel({
                        nav: carouselNav,
                        dots: carouselDots,
                        dotsData: carouseldotsData,
                        thumbs: true,
                        thumbsPrerendered: true,
                        navText: $carouselIcons,
                        autoplay: carouselAutoPlay,
                        autoplayTimeout: carouselAutoplayTimeout,
                        autoplayHoverPause: true,
                        autoWidth: carouselAutoWidth,
                        autoHeight: resizeHeight,
                        loop: carouselLoop,
                        margin: Number(carouselMargin),
                        smartSpeed: Number(1300),
                        video: carouselVideo,
                        animateIn: carouseAnimateIn,
                        animateOut: carouseAnimateOut,
                        video: true,
                        lazyLoad: true,
                        videoWidth: true,
                        videoHeight: true,
                        autoplayHoverPause: true,
                        onInitialize: function (event) {
                            // setTimeout(function () {
                            elem.addClass("owl-carousel owl-theme");
                            //    }, 1000);
                        },
                        responsive: {
                            0: {
                                items: Number(carouselItemsXxs)
                            },
                            480: {
                                items: Number(carouselItemsXs)
                            },
                            768: {
                                items: Number(carouselItemsSm)
                            },
                            992: {
                                items: Number(carouselItemsMd)
                            },
                            1200: {
                                items: Number(carouselItemsLg)
                            }
                        }
                    });
                }, 0);
            });
        }
    }
    runnCarousel();

});


// console.log($(window).width());
$('.goto-introduction').click(function () {
    $('html,body').animate({
        scrollTop: $('.story-introduction').offset().top
    }, 'slow');
});

$('.btn-close').click(function () {
    $('.guide-size').fadeOut('slow');
});

$('input[name="payment_type"]').on('click',function(){
    var type = $(this).val();
    if(type == 2) {
        $('.box-atm').fadeIn();
    }else {
        $('.box-atm').fadeOut();
    }
});
$('.box-atm .lst-bank').on('click','a',function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.infor-bank .infor-item').removeClass('active');
    $('input[name="bank_id"]').prop("checked", false);
    $(this).parent().find('input[name="bank_id"]').prop("checked", true);
    $('#infor-bank-'+$(this).data('id')).addClass('active');
});

var youtube_id = $('.home-video').attr('data-yt');
if ($('#video-home-page').is('visible')) {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/watch?v=";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
    var height
    var width
    if ($(window).width() > 700) {
        width = 500
        height = 1000
    } else if ($(window).width() < 500) {
        console.log(1)
        width = 250
        height = 200
    }

    function onYouTubePlayerAPIReady() {
        player = new YT.Player('home-video', {
            height: width,
            width: height,
            playerVars: {
                autoplay: 0,
                mute: 1
            },
            videoId: youtube_id
        });
    }

    $(window).scroll(function () {
        $("iframe").each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 200) {
                player.playVideo();
            } else {
                player.stopVideo();
            }
        });
    });
}
var owl;
var id = $('.js-slider_video').attr('data-ytbanner')
$(document).ready(function () {
    $('.owl-carousel').mouseup(function () {
        //   function onYouTubePlayerAPIReady() {
        //     player = new YT.Player('video-embed', {
        //       height: '550',
        //       width: '700',
        //       playerVars : {
        //             autoplay : 0
        //         },
        //       videoId: id
        //     });
        //   }
        // //   console.log(player)
        //   player.playVideo();
        //   $("iframe").each( function() {
        //    player.playVideo();
        // }); 
    })
});
var home_vd_player,home_vd_player_pause = 0;
$(document).ready(function () {
    // if ($('.js-slider_video').length > 0) {
    //    alert(1)
    // }
    if ($('#home-video').length > 0) {
        home_vd_player = new Plyr('#home-video', {
            hideControls: false,
            captions: {
                active: true
            }
        });
        home_vd_player.toggleControls(false);

        home_vd_player.on('play', event => {
            home_vd_player.toggleControls(true);
        });
        $(window).scroll(function () {
            $('.section-video').each(function () {
                if (isScrolledIntoView($(this))) {
                    // home_vd_player.playVideo();
                } else {
                    // home_vd_player.stopVideo();
                }
            });
        });

        function isScrolledIntoView(elem) {
            var $elem = $(elem);
            var $window = $(window);

            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();

            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

    }
    if ($('.js-slider_video').length > 0) {
        const slider_video = new Plyr('.js-slider_video', {
            muted: true,
            hideControls: true,
            captions: {
                active: false
            }
        });
        slider_video.toggleControls(false);
        slider_video.on('play', event => {
            slider_video.toggleControls(false);
        });
    }
    owl = $(".js-carousel-home").owlCarousel({
        autoplay: true,
        autoplaySpeed: 3000,
        loop: false,
        navSpeed: 300,
        nav: false,
        items: 1,
        autoHeight: true,
        dots: false,
        margin: 0,
    });
    owl.on('changed.owl.carousel', function (e) {
        // slider_video.pause();
    });


    if ($(window).width() > 575) {
        lightbox.option({
            'wrapAround': true,
            'imageFadeDuration': 230,
            'imageFadeDuration': 230,
            'resizeDuration': 300,
            'showImageNumberLabel': false,
        });
    }


    /* Quantity */
    $('.plus').click(function () {
        $(this).prev().val(+$(this).prev().val() + 1);
    });
    $('.minus').click(function () {
        if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
    });

    /* Collapse */
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    if ($(window).width() < 992) {
        $(".contact .title").attr("data-toggle", "collapse");
        $(".contact .content").addClass("collapse");
        $(".product .title").attr("data-toggle", "collapse");
        $(".product .list").addClass("collapse");
        $(".info .title").attr("data-toggle", "collapse");
        $(".info .list").addClass("collapse");
    }
    $("#close_cart_popup").click(function () {
        $(".cart-popup").css("display", "none");
    });
    $(".cart-popup #nagative_cart_content").click(function () {
        $(".cart-popup").css("display", "none");
    });


    // close spin game
    $('#spin-closer').click(function () {
        enbleScroll_body();
        $(".spin-game-discount").removeClass('active');
        createCookie('setCookieSpin', 'close_spin', 30)
    });


    // getCart();
    // function getCart(){
    //    $.ajax({
    //       type: 'POST',
    //       url: ENV.BASE_URL+"ajax/cart-load",
    //       data: {_token:ENV.token},
    //       dataType: 'json',
    //   }).done(function(json) {
    //    //   console.log(json);
    //    //    if(cookie || $('.js-show-spin').attr('data-cookie')){
    //    //         $('.spin-dance').addClass('bounce-3');
    //    //     }
    //      if( json.data.total > 500000 ){
    //       // removeClass('show-up');
    //       $('.cart-popup').hide();
    //      }
    //      if(json.data.number > 0){
    //       // $('#icon-cart-pop').addClass('bounce-3');
    //       // $('#icon-cart-pop').addClass('cart-buyed');
    //          $('.qty-rece').html('( '+json.data.number+' )')
    //          $('.qty-cart-show').html(json.data.number)
    //          $('.qty-cart-show').show()
    //      }else{
    //       $('.qty-rece').html('(0)')
    //       $('.qty-cart-show').hide()
    //      }
    //   });
    // }

    $('.js-show-spin').click(function () {
        var cookie = $(this).attr('data-cookie')
        // console.log(cookie)
        if (cookie || $('.js-show-spin').attr('data-cookie')) {
            setTimeout(function () {
                var text = 'Mã giảm giá của bạn : "' + cookie + '" .Hạn sử dụng 1 ngày';
                $('#win').addClass('bounce-3');
                Swal.fire({
                    title: 'Thông báo',
                    text: text,
                    type: 'warning',
                });
            }, 2000);
        } else {
            disScroll_body();
            $(".spin-game-discount").addClass('active');
        }
    });
    // var cookie
    //    checkCookieSpin();
    //    function checkCookieSpin(){
    //          cookie = $('.js-show-spin').attr('data-cookie')
    // if( cookie == '' && !shop.cookie.get('setCookieSpin')){
    // alert(shop.cookie.get('setCookieSpin'));
    if (shop.cookie.get('setCookieSpin')) {
        // setTimeout(function () {
        $(".spin-game-discount").removeClass('active');
        enbleScroll_body();
        // }, 6000);
    } else {
        setTimeout(function () {
            disScroll_body();
            $(".spin-game-discount").addClass('active');
        }, 10000);
    }
    // else if(shop.cookie.get('setCookieSpin')){
    //     alert(2);
    //    $(".spin-game-discount").addClass("none");
    // }
    // }
    // setTimeout(function () {
    //    $(".spin-game-discount").removeClass("hide");
    // }, 3000);


    // filter modal mobile control: 
    if ($(window).width() < 768) {

        $('.product-filter').on('click', 'select', function (event) {
            event.preventDefault();
            return false;
        });
        $('.product-filter .filter .chose select option').addClass('d-none');
        $('.product-filter .filter .chose').click(function () {
            $(this).find('.modal-filter-mobile').addClass('show-up');
        });
        $('.close-filter-mobile').click(function (e) {
            e.stopPropagation()
            $(this).parent().parent('.modal-filter-mobile').removeClass('show-up');
        });
        $('.product-filter .options .option').click(function () {
            $('.product-filter .options .option').removeClass('active');
            $(this).addClass('active');
        });
    }

});

//set cookie close spin
function createCookie(name, value, minutes) {
    // var expires;
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));
    } else {
        console.log('Đưa thời gian vô')
    }
    shop.cookie.set(name, value, date, '/');
}


$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('main').addClass('menu-fixed');
        $('.menu-main-fixed').addClass('fixed');
        // $('.logo-left').show()
    } else {
        $('main').removeClass('menu-fixed');
        $('.menu-main-fixed').removeClass('fixed');
        // $('.logo-left').hide();

    }
    if($('#home-video').length > 0) {
        if ($(window).scrollTop() > $('#home-video').offset().top) {
            if ($(window).width() > 768 && home_vd_player_pause == 0) {
                home_vd_player.muted = true;
                home_vd_player.play();
                home_vd_player_pause = 1;
            }
        }
    }
});

// menu mobile
$('.active-class-menu').on('click', function (e) {
    // e.preventDefault();
});


var check_isShow = 0;
$('.js-show-meni-mobile').click(function () {
    $('.menu-wrap').addClass('is-show');
});
$('.js-hide-menu').on('click', function () {
    if (check_isShow == 1) {
        check_isShow = 0;
        $('.child-main-menu.is-show').removeClass('is-show');
    } else {
        $('.menu-wrap').removeClass('is-show');
    }
});

$('.has-child > a').click(function (e) {
    if ($(window).width() < 991) {
        e.preventDefault();
    }
    check_isShow = 1;
    $(this).find('.child-main-menu').addClass('is-show');
});

$('.js-show-search').on('click', function () {
    $('.form-search').addClass('active');
});

$(document).mouseup(function (e) {
    var container = $(".form-search");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.form-search').removeClass('active');
    }
});
$(document).mouseup(function (e) {
    var container = $(".menu-wrap");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.menu-wrap').removeClass('is-show');
    }
});

$('.show-local-store').click(function () {
    $('.man__popup').show();
    disScroll_body();
});
$('.man__popup--wrapper .closed').click(function () {
    $('.man__popup').hide();
    enbleScroll_body();
});
// $(document).mouseup(function(e) {
//     var container = $(".man__popup--wrapper");
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//         $('.man__popup').hide();
//         // enbleScroll_body();
//     }
// });

$(window).scroll(function () {
    //  $('.man__popup').hide();
    //  $('.menu-wrap').removeClass('is-show');
    $('.form-search').removeClass('active');
});


function apply_coupon() {
    var coupon = $('#coupon').val();
    if (coupon != '') {
        shop.ajax_popup('check-coupon', 'post', {
            coupon: coupon,
        }, function (json) {
            // $('#pb_loader').toggleClass('show');
            if (json.error == 1) {
                Swal.fire({
                    title: 'Thông báo',
                    text: json.msg,
                    type: 'warning',
                    confirmButtonText: 'Đồng ý',
                    confirmButtonColor: '#f37d26',
                }).then((result) => {
                    if (result.value) {
                        if (isLogged == true) {} else {
                            $('.js-click-login').click();
                        }
                    }
                });
            } else {
                Swal.fire({
                    title: 'Thông báo',
                    text: 'Áp dụng Coupon thành công!',
                    type: 'success',
                    confirmButtonText: 'Đồng ý',
                    confirmButtonColor: '#f37d26',
                }).then((result) => {
                    var dc = shop.numberFormat(json.data.dccoupon.dccoupon);
                    var is_free_ship = json.data.dccoupon.free_ship;
                    var toto = shop.numberFormat(json.data.total_after_coupon);
                    $('#co').html('<span class="">Số tiền đã giảm</span>\n' +
                        '            <span class="value"> - ' + dc + '</span>');
                    $('#to').html(toto);
                    $("#cpu").val(function () {
                        return this.value = json.data.coupon_info.coupon_code;
                    });
                    // $("#coupon").val(function() {
                    //     return this.value + json.data.coupon_info.coupon_code;
                    // });
                    if (typeof json.data.coupon_info.coupon_code != 'undefined ') {
                        $('#showcou').removeClass('d-none');
                        $("#codecpuo").html('<span class="des" ><b>' + json.data.coupon_info.coupon_code + '</b></span>\n' +
                            '<span class=" code-policy">- ' + (json.data.dccoupon.dccoupon > 0 ? dc : '') + (is_free_ship == 1 ? (json.data.dccoupon.dccoupon > 0 ? ' & ' : '') + i18n.site.phiship : '') + '</span>');

                        if (is_free_ship == 1) {
                            $('.delivery .value').html(0);
                            var ship_fee = parseInt($('.delivery .value').attr('data-number'));
                            var total = parseInt($('.pay .value').attr('data-number'));

                            $('.pay .value').html(shop.priceFormat(total - ship_fee));
                        }
                    }

                    // shop.setGetParameter('coupon_code', json.data.coupon_code);

                });
            }
        });
    }
}

function pure_apply_coupon(coupon) {
    if (coupon != '') {
        shop.ajax_popup('check-coupon', 'post', {
            coupon: coupon,
        }, function (json) {
            // $('#pb_loader').toggleClass('show');
            if (json.error == 1) {

            } else {
                var dc = shop.numberFormat(json.data.dccoupon.dccoupon);
                var is_free_ship = json.data.dccoupon.free_ship;
                var toto = shop.numberFormat(json.data.total_after_coupon);
                $('#co').html('<span class="">Số tiền đã giảm</span>\n' +
                    '            <span class="value"> - ' + dc + '</span>');
                $('#to').html(toto);
                $("#cpu").val(function () {
                    return this.value = json.data.coupon_info.coupon_code;
                });
                // $("#coupon").val(function() {
                //     return this.value + json.data.coupon_info.coupon_code;
                // });
                if (typeof json.data.coupon_info.coupon_code != 'undefined ') {
                    $('#showcou').removeClass('d-none');
                    $("#codecpuo").html('<span class="des" ><b>' + json.data.coupon_info.coupon_code + '</b></span>\n' +
                        '<span class=" code-policy">- ' + (json.data.dccoupon.dccoupon > 0 ? dc : '') + (is_free_ship == 1 ? (json.data.dccoupon.dccoupon > 0 ? ' & ' : '') + i18n.site.phiship : '') + '</span>');

                    if (is_free_ship == 1) {
                        $('.delivery .value').html(0);
                        var ship_fee = parseInt($('.delivery .value').attr('data-number'));
                        var total = parseInt($('.pay .value').attr('data-number'));

                        $('.pay .value').html(shop.priceFormat(total - ship_fee));
                    }
                }
            }
        });
    }
}
$('.js-close-spin').click(function (e) {
    enbleScroll_body();
    $(".spin-game-discount").removeClass('active');
    createCookie('setCookieSpin', 'close_spin', 30)
});

// const $clossa = $('.spin-game-discount');
//
// $(document).mouseup(e => {
//     if ($clossa.is(e.target)){
//         $(".spin-game-discount").removeClass('d-flex');
//         createCookie('setCookieSpin','close_spin',30)
//     }
//     // if ($clossb.is(e.target)){
//     //     $(".spin-game-discount").addClass("hide");
//     //     createCookie('setCookieSpin','close_spin',1000000)
//     // }
// });

function spin(deg, count) {
    let rotate = (deg * 30) + ((count * 3) * 360);
    $('.privy-s2w-text-container').css('transform', 'rotateZ(' + rotate + 'deg)');
    $('.privy-s2w-wheel-middleground').css('transform', 'rotateZ(' + rotate + 'deg)');
    $('.privy-s2w-wheel-pegs').css('transform', 'rotateZ(' + rotate + 'deg)');
}
var count_click = 1;
var emailCheck = false
var emailCheckSub = true
var email = ''
var data_spin

function spin_sever() {
    if (emailCheck) {
        $.ajax({
            type: 'POST',
            url: ENV.BASE_URL + "ajax/random_data_spin",
            data: {
                _token: ENV.token,
                email: email
            },
            dataType: 'json',
        }).done(function (json) {
            count_click++;
            let deg = json.data.data;
            spin(-deg, count_click);
            data_spin = $("[data-spin=" + deg + "]").text();
            var is_check;
            var value;
            var title;
            if (json.msg == 'success') {
                setTimeout(function () {
                    is_check = 'success';
                    value = json.data.textbefore + '"' + json.data.text + '"' + "." + json.data.textafter + '"' + json.data.expired + '"';
                    emailCheck = false;
                    emailCheckSub = false;
                    $('.spin-dance').addClass('bounce-3');
                    title = json.data.nofi;
                    $('#win').html(json.data.text);
                }, 2000);
            } else if (json.msg == 'error') {
                is_check = 'warning'
                value = json.data.text
                emailCheck = false
                title = json.data.nofi
                if (json.data == 'Sorry, try again') {
                    is_check = 'warning'
                    value = json.data.text
                    emailCheck = true
                    title = json.data.nofi
                }
            } else if (json.msg == 'tryagain') {
                is_check = 'warning'
                value = json.data.text
                title = json.data.nofi
                emailCheck = true
            }
            setTimeout(function () {
                Swal.fire({
                    title: title,
                    text: value,
                    type: is_check,
                });
            }, 2000);
        })
    } else if (!emailCheck && email == '') {
        setTimeout(function () {
            Swal.fire({
                title: 'Thông báo',
                text: 'Vui lòng nhập email !!',
                type: 'warning',
            });
        });
    } else if (!emailCheck) {
        setTimeout(function () {
            Swal.fire({
                title: 'Thông báo',
                text: 'Mỗi email chỉ được 1 lần quay . Cảm ơn !!',
                type: 'warning',
            });
        });
    }
}
$('.privy-s2w-text-container').click(function () {
    spin_sever()
});

$('#contact_form').on('click', function (e) {
    e.preventDefault();
    var email = $('#emailspin');

    // if (email.isEmpty){
    if (shop.is_email(email.val())) {
        shop.ajax_popup('checkemaispin', 'post', {
            email: $.trim(email.val()),
        }, function (json) {
            if (json.error == 1) {
                Swal.fire({
                    type: 'warning',
                    title: 'Oops...',
                    text: json.code.text,
                });
            } else {
                shop.ajax_popup('random_data_spin', 'post', {
                    email: $.trim(email.val()),
                }, function (json) {
                    if (json.error == 1) {
                        Swal.fire({
                            type: 'warning',
                            title: 'Oops...',
                            text: json.code.text,
                        });
                    } else {
                        count_click++;
                        let deg = json.data.data;
                        spin(-deg, count_click);
                        data_spin = $("[data-spin=" + deg + "]").text();
                        setTimeout(function(){ 
                            Swal.fire({
                                title: json.data.nofi,
                                html: '<br/>'+json.data.textbefore + '<br/><br/>' + json.data.text + '' + "<br/><br/>" + json.data.textafter + ': ' + json.data.expired + '',
                                type: 'success',
                            }).then(function() {
                                $('.spin-dance').addClass('bounce-3');
                                $('#win').html(json.data.text);
                                $('#codea').html(json.data.text);
                                $('#code_spin').html('<div class="title"><span >' + i18n.site.magiamgiacuabanla + ': </span>' + json.data.text + ' </div>' +
                                    '                        <p class="text-center">( ' + i18n.site.resetsau24h + ' )</p>');
                            });
                        }, 2000);
                    }
                });
            }
        });
    } else {
        Swal.fire({
            type: 'warning',
            title: 'Oops...',
            text: window.i18n.site.emailkhonghople,
        });
        email.focus();
    }
    // }else {
    //     Swal.fire({
    //         type: 'error',
    //         title: 'Oops...',
    //         text: window.i18n.site.chuanhapemail,
    //     });
    // }

    // if(emailCheckSub){
    //       $.ajax({
    //          type: 'POST',
    //          url: ENV.BASE_URL+"ajax/checkemaispin",
    //          data: {_token:ENV.token, email:email },
    //          dataType: 'json',
    //    }).done(function(json) {
    //        alert('fuck');
    // var is_check;
    // var value;
    // var title ;

    // if(json.msg == 'errorEmail'){
    //    // value =
    //    // title = json.data.nofi
    //    // is_check = 'warning'
    //    // emailCheck = false
    //     Swal.fire({
    //         title: json.data.nofi,
    //         text: json.data.text,
    //         type: 'warning',
    //     });
    // }
    // else if(json.msg =='success'){
    //    value = json.data.text
    //    title = json.data.nofi
    //    is_check = 'success'
    //    emailCheck = true
    //    spin_sever()
    // }
    // else if(json.msg =='errorEmail'){
    //    title = json.code.nofi
    //    value = json.code.text
    //    emailCheck = false
    //    is_check = 'warning'
    // }
    //    setTimeout(function(){ Swal.fire({
    //       title: title,
    //       text: value,
    //       type: is_check,
    // });
    //    });
    // })
    // }else if( !emailCheckSub ){
    //    setTimeout(function(){
    //        Swal.fire({
    //           title: 'Thông báo',
    //           text: 'Mỗi email chỉ được 1 lần quay . Cảm ơn !!',
    //           type: 'warning',
    //        })
    //    });
    // }
})


if ($(".cart-fixed-wrap").length > 0) {
    window.onclick = function (event) {
        if ($(event.target).hasClass("cart-fixed-wrap")) {
            handleHideCartFixed();
        }
    }
    $("#close_cart_fixed").click(function () {
        handleHideCartFixed();
    });
}

function handleHideCartFixed() {
    if ($(".cart-fixed-wrap").length > 0) {
        $(".cart-fixed-wrap").removeClass('show');
        $(".cart-fixed").removeClass('show');
        $(".utilities").removeClass('d-none');
        setTimeout(function () {
            $(".cart-fixed-wrap").addClass("d-none");
        }, 400);
    }
}

if ($(".utilities .cart").length > 0 && $(".cart-fixed-wrap").length > 0) {
    $(".utilities .cart").click(() => {
        $(".cart-fixed-wrap").addClass('show');
        $(".cart-fixed-wrap").removeClass('d-none');
        $(".cart-fixed").addClass('show');

        $(".utilities").addClass('d-none');
    });

}

// $(window).bind('load', function () {
//    AOS.init();
// })
$('.btn-close').click(function () {
    $('.guide-size').fadeOut('slow');
});
$('.guide-calculator-size').click(function () {
    $('.guide-size').fadeIn('slow');
});


$(window).bind('load', function(){

    // $('.show-zoom').click(function(){
    //     $('.zoominner_slider').addClass('active');
    // });
    //
    // $('.close-slider').click(function(){
    //     $('.zoominner_slider').removeClass('active');
    // });
    // $('.js-slider-img').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    //     if (!e.namespace)  {
    //       return;
    //     }
    //     var carousel = e.relatedTarget;
    //     $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    // }).owlCarousel({
    //     dots: false,
    //     items: 1,
    //     navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
    //     loop:true,
    //     margin:0,
    //     nav:true
    // });
    //
    // // Instantiate EasyZoom instances
    // var $easyzoom = $('.easyzoom').easyZoom();
    //
    // // Setup thumbnails example
    // var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');
    //
    // $('.thumbnails').on('click', 'a', function(e) {
    //     var $this = $(this);
    //
    //     e.preventDefault();
    //
    //     // Use EasyZoom's `swap` method
    //     api1.swap($this.data('standard'), $this.attr('href'));
    // });
    //
    // // Setup toggles example
    // var api2 = $easyzoom.filter('.easyzoom--with-toggle').data('easyZoom');
    //
    // $('.toggle').on('click', function() {
    //     var $this = $(this);
    //
    //     if ($this.data("active") === true) {
    //         $this.text("Switch on").data("active", false);
    //         api2.teardown();
    //     } else {
    //         $this.text("Switch off").data("active", true);
    //         api2._init();
    //     }
    // });

});

