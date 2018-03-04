//top menu
var topMenu = document.querySelector(".block-top-menu");
var topMenuBtn = document.querySelector(".btn-top-menu");

topMenuBtn.addEventListener("click", function(){
   topMenu.classList.toggle("block-top-menu-visible");
});

topMenuBtn.addEventListener("click", function(){
    topMenuBtn.classList.toggle("active");
});
//top menu END

//Slider top
$(function(){
    $(".top-slider").owlCarousel({
        items: 1,
        loop: true,
        navText: ["<i class='arrow-left'><img src='../img/top-slidera-rrow-left.png' alt=''></i>","<i class='arrow-right'><img src='../img/top-slidera-rrow-right.png' alt=''></i>"],
        nav: true,
        autoplay: true,
        autoplayTimeout: 40000,
        autoplaySpeed: 1000,
        fluidSpeed: true,
        autoplayHoverPause: true,
        responsive:
            {
               450:{
                navigation : false,
                navText: [" "]
                },
                500:{
                    navigation : true,
                }
            }

    });

});
//Slider top end

//Slider in tabs
$('.slider').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1

            }
        }]
});

//Slider in tabs end

//Timer

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 13 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('clockdiv', deadline);

//Tabs
$('.js-tabs').dataTabs();
//Tabs END
//Gallery
Galleria.run('.galleria', {
    theme: 'twelve',
    imageCrop: true
})
//Gallery end

//ScrollBar

//ScrollBar end

