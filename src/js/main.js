@@include('./libs/swiper(lib).js')


// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()




function favourite(){
    const favourite = document.querySelectorAll('.favourite')

   favourite.forEach((i)=>{
    i.addEventListener('click', () => {
        i.classList.toggle('checked')
    })
   })
    
   
    console.log(favourite);
}
favourite()

const swiper = new Swiper('.swiper', {
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
  });


  //  Num counter
function numCounter(selector, number, time, step) {
    const counter = document.querySelector(selector)

    let res = 0

    const allTime = Math.round(time / (number / step))

    let interval = setInterval(() => {
        res = res + step

        if (res === number) {
            clearInterval(interval)
        }
        counter.innerHTML = res
    }, allTime)
}

// ДАННАЯ ФУНКЦИЯ МОЖЕТ БЫТЬ ВЫЗВАННА НЕОГРАНИЧЕННОЕ КОЛИЧЕСВТО РАЗ

// Первый аргумент - селектор, куда будем выводить результат ( с . если класс и с # если id). ПРИМЕР: '.num1' или '#num1'
// Второй аргумент - конечное значение которое будет показано на странице
// Третий аргумент - время анмации (миллисекунды)
// Четвертый аргумен - шаг анимации ( например добавляем по 1 или по 10 или по 100)

// Play animation on scroll
// Проиграть анимацию при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Вместо section-3 пишем тот класс секции, при скролле до которой хотим проиграть анимацию
        if (entry.target.classList.contains('counter')) {
            numCounter('#num-1',36000, 0.0000001, 200)
            numCounter('#num-2',46000, 0.0000001, 200)
            numCounter('#num-3',56600, 0.0000001, 200)
            numCounter('#num-4',852000, 0.0000001, 4000)
        }
    })
})
document.querySelectorAll('.counter').forEach((section) => {
    observer.observe(section)
})


