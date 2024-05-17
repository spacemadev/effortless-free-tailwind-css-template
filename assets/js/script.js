new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {                       
        delay: 3000,  
    },
    pagination: {                      
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        const offset = 88;
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});
});