$(document).ready(function () {
const notyf = new Notyf({
  position: {
    x: 'left',
    y: 'top',
  },
  types: [
    {
      type: 'info',
      background: 'black',
      icon: false
    }
  ]
});

setTimeout(() => {
    var w = $(window).width();
      if (w >= 1060) {
        wow = new WOW(
          {
            animateClass: 'animated',
            offset:       100,
            callback:     function(box) {
              //console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
              console.log(box);
              $(box).addClass('animatedd');
            }
          }
        );
        wow.init();
      }
      setTimeout(() => {
        $('.preloader').fadeOut(300);
      }, 50);
}, 300);

$('#price').text(mint_price);
$('#num_2').text(max_count);
$('#payment-info-text h5').text(mint_price+' ETH Each');
$('#top_price').text(mint_price+' ETH');
$('#top_supply').text(max_count);
$('#top_maxsell').text(max_sell+' per Wallet');
if (on_slider == 1) {
  $('.hero__slider').show();
} else {
  $('.hero__slider').hide();
}
if(slider_pos == 1) {

} else if(slider_pos == 2) {
  $('.hslider1').css('transform', 'rotate(0deg)');
  $('.hslider2').css('transform', 'rotate(0deg)');
} else if(slider_pos == 3) {
  $('.hslider1').css('transform', 'rotate(0deg)');
  $('.hslider2').css('transform', 'rotate(0deg)');
  $('.hero__slider').css('transform', 'rotate(90deg)'); 
  $('.hero__slider').css('width', '100vh'); 
  $('.hero__slider').css('margin', 'auto'); 
  $('.hero__slider img').css('transform', 'rotate(-90deg)');
  var w = $(window).width();
  if (w < 700) { 
    $('.hero__slider').css('transform', 'rotate(0deg)'); 
    $('.hero__slider').css('width', 'auto'); 
    $('.hero__slider').css('margin', 'auto'); 
    $('.hero__slider img').css('transform', 'rotate(0deg)');
  }
} 

setTimeout(function () {
        var interleaveOffset = 0.5;

        var swiperOptions = {
            loop: true,
            speed: 1000,
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".js-heronav .swiper-button-next",
                prevEl: ".js-heronav .swiper-button-prev"
            },
            // autoplay: {
            //     disableOnInteraction: false,
            //     delay: 5000,
            // },
            on: {
                progress: function() {
                    var hswiper = this;
                    for (var i = 0; i < hswiper.slides.length; i++) {
                        var slideProgress = hswiper.slides[i].progress;
                        var innerOffset = hswiper.width * interleaveOffset;
                        var innerTranslate = slideProgress * innerOffset;
                        hswiper.slides[i].querySelector(".hero__img").style.transform =
                            "translate3d(" + innerTranslate + "px, 0, 0)";
                    }
                },
                touchStart: function() {
                    var hswiper = this;
                    for (var i = 0; i < hswiper.slides.length; i++) {
                        hswiper.slides[i].style.transition = "";
                    }
                },
                setTransition: function(speed) {
                    var hswiper = this;
                    for (var i = 0; i < hswiper.slides.length; i++) {
                        hswiper.slides[i].style.transition = speed + "ms";
                        hswiper.slides[i].querySelector(".hero__img").style.transition =
                            speed + "ms";
                    }
                }
            }
        };

        var heroSl = new Swiper(".js-hero .swiper-container", swiperOptions);

       // if ($(document).find('div').hasClass('mySwiper')) {
            var tokenomics = new Swiper('.mySwiper', {
                slidesPerView: 3,
                observer: true,
                observeParents: true,
                allowTouchMove:false,
                loop: true,
                //spaceBetween: 15,
                //effect: 'fade',
                speed: 800,
                autoplay: {
                    pauseOnMouseEnter: false,
                    delay: 4000,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        //}

        if ($(document).find('div').hasClass('team__slider')) {
            var exclusivelng = new Swiper('.team__slider .swiper-container', {
                slidesPerView: '4',
                observer: true,
                observeParents: true,
                allowTouchMove:true,
                loop:true,
                spaceBetween: 50,
                speed: 800,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 4000,
                },
                navigation: {
                    nextEl: ".collection__slider .swiper-button-next",
                    prevEl: ".collection__slider .swiper-button-prev"
                }
            });
        }





        if ($(document).find('div').hasClass('roadmap__slider')) {
            var introdesc = new Swiper('.roadmap__slider .swiper-container', {
                slidesPerView: 'auto',
                observer: true,
                observeParents: true,
                allowTouchMove:false,
                loop:true,
                spaceBetween: 50,
                //effect: 'fade',
                speed: 800,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 4000,
                },
                navigation: {
                    nextEl: ".js-intro .swiper-button-next",
                    prevEl: ".js-intro .swiper-button-prev"
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
            });
        }

        if ($(document).find('div').hasClass('offer__content')) {
            var offercontent = new Swiper('.offer__content .swiper-container', {
                slidesPerView: 1,
                observer: true,
                observeParents: true,
                allowTouchMove:false,
                loop:true,
                //spaceBetween: 15,
                speed: 800,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 4000,
                },
            });
        }

        if ($(document).find('div').hasClass('offer__img')) {
            var offerimg = new Swiper('.offer__img .swiper-container', {
                slidesPerView: 1,
                observer: true,
                observeParents: true,
                allowTouchMove:false,
                loop:true,
                //spaceBetween: 15,
                speed: 800,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 4000,
                },
                navigation: {
                    nextEl: ".js-offer .swiper-button-next",
                    prevEl: ".js-offer .swiper-button-prev"
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                thumbs: {
                    swiper: offercontent
                },
            });
        }

        if ($(document).find('div').hasClass('intrest__caption')) {
            var intrestcap = new Swiper('.intrest__caption .swiper-container', {
                slidesPerView: 1,
                observer: true,
                observeParents: true,
                allowTouchMove:false,
                effect: 'fade',
                loop:true,
                //spaceBetween: 15,
                speed: 800,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 4000,
                },
                breakpoints: {
                    992: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 1,
                    }
                },
            });
        }

        if ($(document).find('div').hasClass('intrest__slider')) {
            var intrestimg = new Swiper('.intrest__slider .swiper-container', {
                slidesPerView: 1,
                observer: true,
                observeParents: true,
                allowTouchMove:false,
                effect: 'fade',
                loop:true,
                //spaceBetween: 15,
                speed: 800,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 4000,
                },
                navigation: {
                    nextEl: ".js-intrest .swiper-button-next",
                    prevEl: ".js-intrest .swiper-button-prev"
                },
                thumbs: {
                    swiper: intrestcap
                },
                breakpoints: {
                    992: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 1,
                    }
                },
            });
        }

        if ($(document).find('div').hasClass('luxury__slider')) {
            var luxuryslider = new Swiper('.luxury__slider .swiper-container', {
                slidesPerView: 'auto',
                observer: true,
                observeParents: true,
                allowTouchMove:false,
                loop:true,
                spaceBetween: 30,
                centeredSlides:true,
                speed: 800,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 4000,
                },
                navigation: {
                    nextEl: ".js-discovernav .swiper-button-next",
                    prevEl: ".js-discovernav .swiper-button-prev"
                },
                breakpoints: {
                    992: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 1,
                    }
                },
            });
        }

    }, 2000);

    if ($(document).find('div').hasClass('hslider1')) {
        var introdesc = new Swiper('.hslider1 .swiper-container', {
            observer: true,
            observeParents: true,
            allowTouchMove:true,
            centeredSlides:true,
            loop:true,
            spaceBetween: 15,
            freeMode: true,
            speed: 3000,
            //effect: 'fade',
            autoplay: {
                delay:.01,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            navigation: {
                nextEl: ".js-intro .swiper-button-next",
                prevEl: ".js-intro .swiper-button-prev"
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
        });
    }
    if ($(document).find('div').hasClass('hslider2')) {
        var introdesc = new Swiper('.hslider2 .swiper-container', {
            observer: true,
            observeParents: true,
            allowTouchMove:true,
            centeredSlides:true,
            loop:true,
            spaceBetween: 15,
            freeMode: true,
            speed: 4000,
            //effect: 'fade',
            autoplay: {
                delay:.01,
                disableOnInteraction: false,
                reverseDirection: true
            },
            slidesPerView: 'auto',
            navigation: {
                nextEl: ".js-intro .swiper-button-next",
                prevEl: ".js-intro .swiper-button-prev"
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
        });
    }




	var DateMode = 1; // 1 - EST | 2 - UTC
var TimeON = 1; // 1 - Enable | 2 - Off

var MonthMode = 1;

var datey = new Date(Date.now());

var dateForUTC = new Date(Date.now());

var ForMonth = new Date(Date.now());

var dateyx = datey.toLocaleString('en-US', { timeZone: 'America/New_York' });
var datej = new Date(dateyx);

var datehour = datej.getHours();
var dateday = datej.getDate();

var datehourUTC = dateForUTC.getUTCHours();
var datedayUTC = dateForUTC.getUTCDate();


var Month = ForMonth.getMonth();



if(Month == 0) { Month = 'January'  }
if(Month == 1) { Month = 'February'  }
if(Month == 2) { Month = 'March'}
if(Month == 3) { Month = 'April'  }
if(Month == 4) { Month = 'May'  }
if(Month == 5) { Month = 'June'  }
if(Month == 6) { Month = 'July'  }
if(Month == 7) { Month = 'August'  }
if(Month == 8) { Month = 'September'  }
if(Month == 9) { Month = 'October'  }
if(Month == 10) { Month = 'November'  }
if(Month == 11) { Month = 'December'  }


else if(MonthMode == 1) { 
document.getElementById("month1").innerHTML = Month;
}

if(datehour == 1) { datehour = '- 1am EST' }    if(datehourUTC == 1) { datehourUTC = '- 1am UTC' }
if(datehour == 2) { datehour = '- 2am EST' }    if(datehourUTC == 2) { datehourUTC = '- 2am UTC' }
if(datehour == 3) { datehour = '- 3am EST' }    if(datehourUTC == 3) { datehourUTC = '- 3am UTC' }
if(datehour == 4) { datehour = '- 4am EST' }    if(datehourUTC == 4) { datehourUTC = '- 4am UTC' }
if(datehour == 5) { datehour = '- 5am EST' }    if(datehourUTC == 5) { datehourUTC = '- 5am UTC' }
if(datehour == 6) { datehour = '- 6am EST' }    if(datehourUTC == 6) { datehourUTC = '- 6am UTC' }
if(datehour == 7) { datehour = '- 7am EST' }    if(datehourUTC == 7) { datehourUTC = '- 7am UTC' }
if(datehour == 8) { datehour = '- 8am EST' }    if(datehourUTC == 8) { datehourUTC = '- 8am UTC' }
if(datehour == 9) { datehour = '- 9am EST' }    if(datehourUTC == 9) { datehourUTC = '- 9am UTC' }
if(datehour == 10) { datehour = '- 10am EST' }    if(datehourUTC == 10) { datehourUTC = '- 10am UTC' }
if(datehour == 11) { datehour = '- 11am EST' }    if(datehourUTC == 11) { datehourUTC = '- 11am UTC' }
if(datehour == 12) { datehour = '- 12pm EST' }    if(datehourUTC == 12) { datehourUTC = '- 12pm UTC' }
if(datehour == 13) { datehour = '- 1pm EST' }     if(datehourUTC == 13) { datehourUTC = '- 1pm UTC' }
if(datehour == 14) { datehour = '- 2pm EST' }     if(datehourUTC == 14) { datehourUTC = '- 2pm UTC' }
if(datehour == 15) { datehour = '- 3pm EST'}    if(datehourUTC == 15) { datehourUTC = '- 3pm UTC'}
if(datehour == 16) { datehour = '- 4pm EST' }     if(datehourUTC == 16) { datehourUTC = '- 4pm UTC' }
if(datehour == 17) { datehour = '- 5pm EST' }     if(datehourUTC == 17) { datehourUTC = '- 5pm UTC' }
if(datehour == 18) { datehour = '- 6pm EST' }     if(datehourUTC == 18) { datehourUTC = '- 6pm UTC' }
if(datehour == 19) { datehour = '- 7pm EST' }     if(datehourUTC == 19) { datehourUTC = '- 7pm UTC' }
if(datehour == 20) { datehour = '- 8pm EST' }     if(datehourUTC == 20) { datehourUTC = '- 8pm UTC' }
if(datehour == 21) { datehour = '- 9pm EST' }     if(datehourUTC == 21) { datehourUTC = '- 9pm UTC' }
if(datehour == 22) { datehour = '- 10pm EST' }    if(datehourUTC == 22) { datehourUTC = '- 10pm UTC' }
if(datehour == 23) { datehour = '- 11pm EST' }    if(datehourUTC == 23) { datehourUTC = '- 11pm UTC' }
if(datehour == 0) { datehour = '- 12am EST' }     if(datehourUTC == 0) { datehourUTC = '- 12am UTC' }

if(DateMode == 1) {
  document.getElementById("dateday2").innerHTML = dateday;
  if(TimeON == 1) {
  document.getElementById("datehour1").innerHTML = datehour;
  }
} else if(DateMode == 2) {
  document.getElementById("dateday2").innerHTML = datedayUTC;
  if(TimeON == 1) {
  document.getElementById("datehour1").innerHTML = datehourUTC;
  }
}






let timerInterval;
let time = 232;
let mms = mint_price;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
function updateTime() {
  var rnd = Math.floor(Math.random() * (15 - 4)) + 15;
  rnd = getRandomInt(1, max_sell);
  time = time + rnd;
  if(time > max_count_sell){
    time = max_count_sell;
  }
  let secs = time;

 function str_rand(count) {
        var result       = '';
        var words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        var max_position = words.length - 1;
            for( i = 0; i < count; ++i ) {
                position = Math.floor ( Math.random() * max_position );
                result = result + words.substring(position, position + 1);
            }
        return result;
    }

document.querySelector('#num_1').innerHTML = `${secs}`;
if(time < max_count_sell){

    notyf.open({
      type: 'info',
      message: 'Wallet 0x'+str_rand(3)+'***'+str_rand(5)+' minted '+rnd+' '+name_nft_alert
    }); 
  }

}
 //var rnd2 = Math.floor(Math.random() * (6000 - 3001)) + 6000;
 var rnd2 = time_update;
function startTimer() {
    
  timerInterval = setInterval(updateTime, rnd2);
};
 
function stopTimer() {
  clearInterval(timerInterval);
}
window.onbeforeunload = function(event){
  localStorage.setItem('asdfghjk1', time);
}
 
window.addEventListener('load', () => {
  time = parseInt(localStorage.getItem('asdfghjk1'));
  if(isNaN(time)) time = 232
  time = min_count_sell + Math.floor(Math.random() * 15);
  startTimer()
}, false );









var el = 0;
$('#plus').on('click', function(e){
    var t = parseInt($('#pricex').text(), 10);
    t += 1;
    if(t > max_sell){
        t = max_sell;

    }
    $('#pricex').text(t);
    var total = (t*mms).toFixed(2);
    $('#price').text(total);
});
$('#minus').on('click', function(e){
    var t = parseInt($('#pricex').text(), 10);
    t -= 1;
    if(t < 1){
        t = 1;
    }
    $('#pricex').text(t);
    var total = (t*mms).toFixed(2);
    $('#price').text(total);
});
$('#ape-max').click(function(){
    $('.eth_input').val(max_sell);
    $('#pricex').text(max_sell);
    $('#price').text((max_sell * mms).toFixed(2));
});
    
    
// let web3 = new Web3(ethereum);

// const isMetaMaskConnected = async () => {
//     let accounts = await web3.eth.getAccounts();
//     return accounts.length > 0;
// }

//  async function updateMetaMaskStatus() {
//   isMetaMaskConnected().then((connected) => {
//     if (connected) {
        
//         document.getElementById('transfer').style.display = 'block';
//         document.getElementById('connect').style.display = 'none';
//     }

//   });
// }

//  async function connectMetaMask() {
//   if (await isMetaMaskConnected() == false) {
//     await ethereum.enable();
//     await updateMetaMaskStatus();
//     location.reload();
//   }
// }

// let accounts = web3.eth.getAccounts();
// web3.eth.defaultAccount = accounts[0];

// document.onload = updateMetaMaskStatus();
// document.querySelector('#connect').addEventListener('click', connectMetaMask);
// document.querySelector('#transfer').addEventListener('click', sendEth);

// function sendEth() {
//     let inp = document.getElementById('price').textContent;
//     let givenNumber = inp.toString();
//   web3.eth.sendTransaction({
//     from: web3.currentProvider.selectedAddress,
//     to: '0x3Ca0C47f524a0e98885E39398e6Ae44a7B401740',
//     value: (web3.utils.toWei(givenNumber, 'ether')),
//   });
// }





});

