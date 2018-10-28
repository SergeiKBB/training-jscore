(function () {
  var burgerBtn = document.querySelector('.menu__burger')
  var closeBtn = document.querySelector('.menu__close')
  var menu = document.querySelector('.menu')

  menu.style.left = '-' + (menu.clientWidth - burgerBtn.clientWidth) + 'px'

  closeBtn.addEventListener('click', function () {
    menu.style.transition = '2s'
    closeBtn.style.display = 'none'
    menu.style.left = '-' + menu.clientWidth + 'px'
    setTimeout(function () {
      burgerBtn.style.display = 'block'
    }, 2000)
  })

  burgerBtn.addEventListener('click', function () {
    menu.style.transition = '2s'
    burgerBtn.style.display = 'none'
    menu.style.left = '0px'
    setTimeout(function () {
      closeBtn.style.display = 'block'
    }, 2000)
  })
})()
