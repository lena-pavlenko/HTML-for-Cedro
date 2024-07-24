window.onload = () => {

  const swiperProducts = new Swiper('.swiper-products', {
    spaceBetween: 8,
    slidesPerView: 1.4,
    autoplay: true,
    breakpoints: {
      501: {
        slidesPerView: 2.3,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3.2,
      },
      1200: {
        slidesPerView: 4.2,
        spaceBetween: 32,
      }
    }
  });

  // Функция, которая возвращает ширину скроллбара на странице
  const widthOfPageScrollBar = () => {
    const div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);

    const scrollWidth = div.offsetWidth - div.clientWidth;
    
    div.remove();

    return scrollWidth;
  }

  // Управление меню
  const handlerMenu = (target) => {
    target.classList.toggle('open')
    target.closest('.header').classList.toggle('open-menu')
    target.nextElementSibling.classList.toggle('open')
    target.closest('body').classList.toggle('no-scroll')

    target.closest('body').style.setProperty('--widthScrollBar', `${widthOfPageScrollBar()}px`);
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('.menu-btn')) {
      handlerMenu(e.target.closest('.menu-btn'))
    }
  })
}

