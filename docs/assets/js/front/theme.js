/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Project:  cv@0.2.4 - Modern CV, Resume and Portfolio website
 * Homepage: https://github.com/chethanrraj90/MyResume
 * License:  MIT
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 */
/*!
 * Project:     cv
 * File:        ./assets/js/front/theme.js
 * Copyright(c) 2021-present Chethan R <chethanrraj90@gmail.com>
 * License:     MIT
 */
/*!
 * Theme Name:  IAMX
 * Author:      Trendy Theme
 * Author URL:  http://trendytheme.net
 */
/*!
  =   Preloader
  =   Animated scrolling / Scroll Up
  =   Full Screen Slider
  =   Sticky Menu
  =   Back To Top
  =   Countup
  =   Progress Bar
  =   More skill
  =   Shuffle
  =   Magnific Popup
  =   Google Map
 */
var jQuery=jQuery||window.jQuery||window.$;jQuery((function(e){"use strict";e(window).on("load",(function(){e("#pre-status").fadeOut(),e("#tt-preloader").delay(150).fadeOut("slow")})),e('a[href*="#"]').bind("click",(function(t){var o=e(this);e("html, body").stop().animate({scrollTop:e(o.attr("href")).offset().top},1e3),t.preventDefault()})),e(".tt-fullHeight").height(e(window).height()),e(window).resize((function(){e(".tt-fullHeight").height(e(window).height())})),e(".header").sticky({topSpacing:0}),e("body").scrollspy({target:"#navbar-custom",offset:70}),e(window).scroll((function(){e(this).scrollTop()>100?e(".scroll-up").fadeIn():e(".scroll-up").fadeOut()})),e(".count-wrap").bind("inview",(function(t,o,i,n){e(this).find(".timer").each((function(){var t=e(this);o?e({Counter:0}).animate({Counter:t.data("original-text")},{duration:2e3,easing:"swing",step:function(){t.text(Math.ceil(this.Counter))}}):(e({Counter:0}),t.text(Math.ceil(t.data("original-text"))))}))})),e(".skill-progress").bind("inview",(function(t,o,i,n){o&&e.each(e("div.progress-bar"),(function(){e(this).css("width",null).css("width",e(this).attr("aria-valuenow")+"%")}))})),e(".more-skill").bind("inview",(function(t,o,i,n){o&&e(".chart").easyPieChart({easing:"easeOut",barColor:"#68c3a3",delay:2500,lineWidth:8,rotate:0,scaleColor:!1,size:140,trackColor:"#3a4149",animate:{duration:2500,enabled:!0},onStep:function(e,t,o){this.el.children[0].innerHTML=Math.round(o)}})})),e(".image-link").magnificPopup({gallery:{enabled:!0},removalDelay:300,mainClass:"mfp-with-zoom",type:"image"}),new window.WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,scrollContainer:null,resetAnimation:!1,callback:function(e){}}).init(),e("#contactForm").on("submit",(function(t){t.preventDefault(),console.log("contactForm SUBMIT Action");var o=e(this).prop("action"),i=e(this).serialize(),n=e(this);n.prevAll(".alert").remove(),e.post(o,i,(function(e){"error"===e.response&&n.before('<div class="alert alert-danger">'+e.message+"</div>"),"success"===e.response&&(n.before('<div class="alert alert-success">'+e.message+"</div>"),n.find("input, textarea").val(""))}),"json")})),function(){let e,t,o,i,n,a,s,l,r;t=parseFloat("12.9121"),o=parseFloat("77.6446"),e=new window.google.maps.LatLng(t,o),i=[{featureType:"landscape",stylers:[{color:"#f7f7f7"}]},{featureType:"road",stylers:[{hue:"#fff"},{saturation:-70}]},{featureType:"poi",stylers:[{hue:""}]}],n={zoom:10,scrollwheel:!1,center:e,mapTypeId:window.google.maps.MapTypeId.ROADMAP,disableDefaultUI:!0,styles:i},a=new window.google.maps.Map(document.getElementById("mapCanvas"),n),s=new window.google.maps.Marker({position:e,map:a,animation:window.google.maps.Animation.DROP,title:"I@Bengaluru"}),l="Hello, Visitor!",r=new window.google.maps.InfoWindow({content:"Hello, Visitor!"}),window.google.maps.event.addListener(s,"click",(function(){r.open(a,s)}))}()}));
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Package:  cv@0.2.4
 * Build:    production-b2
 * Compiled: 2021-02-04T15:00:30 UTC
 * Commit:   68976695d61ccc3db336b04685aa8cc4d6417950
 */
