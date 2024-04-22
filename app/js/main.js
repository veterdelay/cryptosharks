//get user ip

let userIpAdress;
let userAgent;

$(document).ready(function(){
    $.ajax({
        url: '/getIp.php',
        method: 'post',
        success: function(res){
            let result = JSON.parse(res);
            userIpAdress = result.ip;
            userAgent = result.userAgent;
        }
        });
});

//burger open

$('.cs_header_burger').click(function(){
    $('.cs_header_nav').toggleClass('active');
    $('.overflow').addClass('burger-hidden');
});

//burger close

$(document).mouseup( function(e){ 
    let burger = $('.cs_header_nav'); 
    if ( !burger.is(e.target) 
        && burger.has(e.target).length === 0 ) { 
            burger.removeClass('active');
            $('.overflow').removeClass('burger-hidden');
    }
});

$('.cs_header_burder_close').click(function(){
    let burger = $('.cs_header_nav'); 
    burger.removeClass('active');
    $('.overflow').removeClass('burger-hidden');
});

//hero parallax

$(document).ready(function(){

    let iconsHero = $('.img_parallax');
    let iconsAbout = $('.about_parallax');
    let iconsDuti = $('.duti_parallax');
    let iconsFaq = $('.faq_parallax');


    $('.cs_hero').on( "mousemove", function( e ) {

        iconsHero.each(function( index ) {
            
            let animationFactor = $(this).attr('data-parallax');

            let deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
            let deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;
            let itemDuration = $(this).attr('data-duration');

            gsap.to($(this), { x: deltaX, y: deltaY, duration: itemDuration });

        });

    });

    $('.cs_about').on( "mousemove", function( e ) {

        iconsAbout.each(function( index ) {
            
            let animationFactor = $(this).attr('data-parallax');

            let deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
            let deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;
            let itemDuration = $(this).attr('data-duration');

            gsap.to($(this), { x: deltaX, y: deltaY, duration: itemDuration });

        });

    });

    $('.cs_duti').on( "mousemove", function( e ) {

        iconsDuti.each(function( index ) {
            
            let animationFactor = $(this).attr('data-parallax');

            let deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
            let deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;
            let itemDuration = $(this).attr('data-duration');

            gsap.to($(this), { x: deltaX, y: deltaY, duration: itemDuration });

        });

    });

    $('.cs_faq').on( "mousemove", function( e ) {

        iconsFaq.each(function( index ) {
            
            let animationFactor = $(this).attr('data-parallax');

            let deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
            let deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;
            let itemDuration = $(this).attr('data-duration');

            gsap.to($(this), { x: deltaX, y: deltaY, duration: itemDuration });

        });

    });

});

//accordion

$(".cs_faq_item_title").on("click", function(e) {

    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("accordion-active")) {
        $(".cs_faq_content").slideUp(400);
        $('.cs_faq_item').removeClass("accordion-active");
        $(".cs_faq_item_title").removeClass("accordion-active");
        $('.faq_svg_arrow').removeClass('accordion__rotate');
    }

    $this.parent().toggleClass("accordion-active");
    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $('.faq_svg_arrow',this).toggleClass('accordion__rotate');
});

$(document).ready(function(){
    $(".cs_faq_item_title").first().trigger('click');
});

//blocks animation

$(document).ready(function(){

    gsap.utils.toArray('.cs_animate').forEach(function(elem) {
        ScrollTrigger.create({
            trigger: elem,
            scroller: '.overflow',
            start: 'top 50%',
            once: true,
            onEnter: () => {
            elem.classList.add('animation_active');
            },
        });
    });

});

//anchor & burger close
let burger = $('.cs_header_nav'); 
gsap.utils.toArray(".nav-link").forEach(function(a) {
    a.addEventListener("click", function(e) {
        e.preventDefault();
        if(burger.hasClass('active')){
            burger.removeClass('active');
            $('.overflow').removeClass('burger-hidden');
        }
        gsap.to('.overflow', {
            duration: 1,
            scrollTo: e.target.getAttribute("href")
        });
    });
});

//question & burger close

$('.questionary').click(function (e) {
    e.preventDefault();
    let burger = $('.cs_header_nav'); 
    if(burger.hasClass('active')){
        burger.removeClass('active');
        $('.overflow').removeClass('burger-hidden');
    }
});

//form

$(".main_radio_label").on("click", function() {
    let radio = $("#" + $(this).attr("for")),
      name = radio.attr("name"),
      hasRadio = radio.attr("type") == "radio";
    if (!hasRadio) return;
    if (radio.data("is-checked") == false) {
      radio.data("is-checked", true);
      radio.prop("checked", true).change();
    }
    $('input[type="radio"][name="' + name + '"]')
      .not("#" + $(this).attr("for"))
      .data("is-checked", false);  
      if($(this).attr("for") == 'telegrammain'){
        if(!$('.main_login_box').hasClass('active')){
            $('.main_login_box').addClass('active');
        }
    }else{
        $('.main_login_box').removeClass('active');
    }
});

$(".modal_radio_label").on("click", function() {
    let radio = $("#" + $(this).attr("for")),
      name = radio.attr("name"),
      hasRadio = radio.attr("type") == "radio";
    if (!hasRadio) return;
    if (radio.data("is-checked") == false) {
      radio.data("is-checked", true);
      radio.prop("checked", true).change();
    }
    $('input[type="radio"][name="' + name + '"]')
      .not("#" + $(this).attr("for"))
      .data("is-checked", false);
      if($(this).attr("for") == 'telegrammodal'){
        if(!$('.modal_login_box').hasClass('active')){
            $('.modal_login_box').addClass('active');
        }
    }else{
        $('.modal_login_box').removeClass('active');
    }
});


function checkRequ(parent){
    let res = true;
    $(''+parent+' .requirecheck').each(function() {
        if($(this).val() == ''){
            $(this).addClass('input_error');
            if($(this).parent().hasClass('phone_input_wrapper')){
                $(this).parent().next().css('display','block');
                $(this).parent().parent().parent().find('.form-error-wrapper').addClass('error-active');
            }else{
                $(this).next().css('display','block');
                $(this).parent().parent().find('.form-error-wrapper').addClass('error-active');
            }
            res = false;
        }else{
            $(this).removeClass('input_error');
            if($(this).parent().hasClass('phone_input_wrapper')){
                $(this).parent().next().css('display','none');
            }else{
                $(this).next().css('display','none');
                $(this).parent().parent().find('.form-error-wrapper').removeClass('error-active');
            }
        }
    });
    return res;
}

//get fb server-side info

function getRandomArbitrary(e, t) {
    return Math.random() * (t - e) + e
}

function eventId(e) {
    for (var t = ""; t.length < e;) t += Math.random()
        .toString(36)
        .substring(2);
    return t.substring(0, e)
}

function getCookieByName(e) {
    for (var t = e + "=", a = decodeURIComponent(document.cookie)
            .split(";"), n = 0; n < a.length; n++) {
        for (var i = a[n];
            " " == i.charAt(0);) i = i.substring(1);
        if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
    }
    return ""
}

function getParameterByName(e, t) {
    t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
    var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)")
        .exec(t);
    return a ? a[2] ? decodeURIComponent(a[2].replace(/\+/g, " ")) : "" : null
}

function getFbc() {
    let e = getParameterByName("fbclid", window.location.href),
        t = getCookieByName("_fbc");
    return "" === t ? null === e ? "" : "fb.1." + Date.now() + "." + e : t
}


function fbServerInfo(form){
    const fbUserPhone = form.find("input[name=phone]").val().replace(/[\D]+/g, "");
    const fbUserIp = userIpAdress;
    const fbUserAgent = userAgent;
    const fbEventId = eventId(getRandomArbitrary(8, 12));
    const fbFbp = getCookieByName("_fbp");
    const fbFbc = getFbc();
    const fbUrl = window.location.href;

    form.find('input[name="fbEventId"]').val(fbEventId);
    form.find('input[name="fbPhone"]').val(fbUserPhone);
    form.find('input[name="fbIp"]').val(fbUserIp);
    form.find('input[name="fbUa"]').val(fbUserAgent);
    form.find('input[name="fbUrl"]').val(fbUrl);
    form.find('input[name="fbFbp"]').val(fbFbp);
    form.find('input[name="fbFbc"]').val(fbFbc);

    return form.serialize();
}

$( ".mainform" ).on( "submit", function( event ) {
    if(checkRequ(".mainform")){
        event.preventDefault();
        let thisForm = $(this);
        $.ajax({
            url: '/getanket.php',
            method: 'post',
            dataType: 'html',
            data: fbServerInfo($(this)),
            success: function(data){
                if(data = 'ok'){
                    fbq('track', 'Lead', {}, {
                        eventID: thisForm.find('input[name="fbEventId"]').val()
                    });
                    openModal('#tnxmodal');
                    thisForm.trigger('reset');
                }else{
                    openModal('#errormodal');
                }
            }
            });
    }else{
        event.preventDefault();
    }
});

$( ".modalform" ).on( "submit", function( event ) {
    if(checkRequ(".modalform")){
        event.preventDefault();
        let thisForm = $(this);
        $.ajax({
            url: '/getanket.php',
            method: 'post',
            dataType: 'html',
            data: fbServerInfo($(this)),
            success: function(data){
                if(data = 'ok'){
                    fbq('track', 'Lead', {}, {
                        eventID: thisForm.find('input[name="fbEventId"]').val()
                    });
                    $("#formmodal").removeClass("fade_active");
                    openModal('#tnxmodal');
                    thisForm.trigger('reset');
                }else{
                    openModal('#errormodal');
                }
            }
            });
    }else{
        event.preventDefault();
    }
});

$(document).ready(function(){
    $('.phonemodal').inputmask({"mask": "+38 (999) 999 99 99"});
    $('.phoneinput').inputmask({"mask": "+38 (999) 999 99 99"});
});

//modals

function openModal(modalName){
    $(modalName).addClass('fade_active');
    $('.overflow').addClass('overflow-hidden');
    return false;
}

$('.questionary').click(function(e) {
    e.preventDefault();
    openModal('#formmodal');
});			

$('.close_modal').click(function(e) {
        $(this).parent('.modal').parent('.modal_fade').removeClass('fade_active');	
        $('.overflow').removeClass('overflow-hidden');			
});

$('.modal_fade').click(function(e) {
    if ($(e.target).closest('.modal').length == 0) {
        $(this).removeClass('fade_active');	
        $('.overflow').removeClass('overflow-hidden');			
    }
});






