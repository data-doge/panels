import $ from 'jquery'
import Panel from './panel.js'

const colors = [
  {r: 242, g: 56, b: 90},
  {r: 245, g: 165, b: 3},
  {r: 233, g: 241, b: 223},
  {r: 74, g: 217, b: 217},
  {r: 54, g: 177, b: 191}
]

$('.canvas-container').each((i, container) => {
  let $container = $(container)
  let $canvas = $container.find('canvas')
  let $bitContainer = $container.find('.bit-container')
  let panel = new Panel($canvas, $bitContainer, colors[i])
  panel.startAnimation()
})
