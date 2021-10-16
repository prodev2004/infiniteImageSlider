const images = document.querySelectorAll('.slider img');
const slider_container = document.querySelector('.slider_container');
const inner_slider = document.querySelector('.slider');

const prevBtn = document.querySelector('.leftBtn');
const nextBtn = document.querySelector('.rightBtn');

let current = 1;
const imgSize = images[0].clientWidth
// this will give us the width of one of the images (images have the same size)
// but first we want to add ......
// follow me
// but we want the image with snow to be the first one
// we want it to be the default
inner_slider.style.transform = `translateX(${-imgSize}px)`;

// we fixed that bug no let's add the overflow hidden and this project is finished
// if you need help with explanation comment down below
prevBtn.addEventListener('click', () => {
    if (current <= 0) return;
    inner_slider.style.transition = '200ms ease-in-out transform';
    current--;
    inner_slider.style.transform = `translateX(${-imgSize * current}px)`;
})
nextBtn.addEventListener('click', () => {
    if (current >= images.length - 1) return;
    inner_slider.style.transition = '200ms ease-in-out transform';
    current++;
    inner_slider.style.transform = `translateX(${-imgSize * current}px)`;
})

// when we get to the last image we want it to get to the first image ...
inner_slider.addEventListener('transitionend', () => {
    if (images[current].classList.contains('first_img')) {
        // if we remove the transition
        // it works but kinda not the way we want
        // we want it to loop
        inner_slider.style.transition = 'none';
        current = images.length - 2;
        inner_slider.style.transform = `translateX(${-imgSize * current}px)`;
        // you can see it loops
    }
    if (images[current].classList.contains('last_img')) {
        inner_slider.style.transition = 'none';
        current = images.length - current;
        inner_slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
})
// this happens because we click faster than the transition time
// we can fix this
// but there's a problem when we click fast