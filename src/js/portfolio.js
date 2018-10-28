const Isotope = require('isotope-layout')
const jQueryBridget = require('jquery-bridget')
jQueryBridget('isotope', Isotope, $)

var $grid = $('.grid').isotope({
  itemSelector: '.grid__item',
  layoutMode: 'fitRows'
})

$('.portfolio__list').on('click', 'span', function () {
  var filterValue = $(this).attr('data-filter')
  $grid.isotope({ filter: filterValue })
})

$('.portfolio__list').each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup)
  $buttonGroup.on('click', 'span', function () {
    console.log($buttonGroup)
    $buttonGroup.find('.checked').removeClass('checked')
    $(this).addClass('checked')
  })
})
