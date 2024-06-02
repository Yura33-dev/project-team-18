import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded',
    function () {
        
        fetchData();
    });

async function fetchData() {
    try {
        const response = await
            fetch('https://portfolio-js.b.goit.study/api/reviews', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        createSlides(data);
    } catch (error) {
        document.getElementById('error-message').innerText = 'Not found';
        console.error('Error fetching data:', error);
    }
}

function createSlides(data) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = '';
    if (data.length === 0) {
        document.getElementById('error-message').innerText = 'Not found';
        return;
    }
    data.forEach(review => {
        
        const slide = document.createElement('li');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `
        <div class="coment-autor" >${review.review}</div>
        <div class="author">
            <img src="${review.avatar_url}"/>
            <div class="name-author">${review.author}</div>
        </div>
        `;
        swiperWrapper.appendChild(slide);
    });

    initializeSwiper();
}

function initializeSwiper() {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        

        spaceBetween: 32,
        keyboard: {
             enabled: true,
             onlyInViewport: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                }
            },
            768: {
                slidesPerView: 1,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                }
            },
            1280: {
                slidesPerView: 2,
                effect: 'coverflow',
                coverflowEffect: {
                    rotate: 20,
                    stretch: 50,
                    slideShadows: true,
                }
            },
        },
    });
    

}