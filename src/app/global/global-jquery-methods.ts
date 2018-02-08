declare var $: any;


//Global Variables
let speed = 5;
let sliderContainer;
let remLength;
let scrollable;

export function test(e) {
    console.log($(e).siblings());
}

export function slideLeft(btn) {
    hSliderContainerInit(btn);

    $(sliderContainer).animate({
        scrollLeft: remLength
    }, speed * scrollable);
}

export function slideRight(btn) {
    hSliderContainerInit(btn);

    $(sliderContainer).animate({
        scrollLeft: 0
    }, speed * $(sliderContainer).scrollLeft());
}

export function slideDown(btn) {
    vSliderContainerInit(btn)

    $(sliderContainer).animate({
        scrollTop: remLength
    }, speed * scrollable);
}

export function slideUp(btn) {
    vSliderContainerInit(btn)

    $(sliderContainer).animate({
        scrollTop: 0
    }, speed * $(sliderContainer).scrollTop());
}

export function slideStop(btn){
    $(btn).siblings('.sliderContainer').stop();
}

function hSliderContainerInit(btn) {
    sliderContainer = $(btn).siblings('.sliderContainer');
    remLength = $(sliderContainer)[0].scrollWidth - $(sliderContainer).width();
    scrollable = remLength - $(sliderContainer).scrollLeft();
}

function vSliderContainerInit(btn){
    sliderContainer = $(btn).siblings('.sliderContainer');
    remLength = $(sliderContainer)[0].scrollHeight - $(sliderContainer).height();
    scrollable = remLength - $(sliderContainer).scrollTop();
}