import $ from 'jquery'
import Panel from './panel.js'

let red = {r: 242, g: 56, b: 90}
let orange = {r: 245, g: 165, b: 3}
let cream = {r: 233, g: 241, b: 223}
let cyan = {r: 74, g: 217, b: 217}
let blue = {r: 54, g: 177, b: 191}

var $canvas1 = $('#canvas-1')
var panel1 = new Panel($canvas1, red)
panel1.startAnimation()

var $canvas2 = $('#canvas-2')
var panel2 = new Panel($canvas2, orange)
panel2.startAnimation()

var $canvas3 = $('#canvas-3')
var panel3 = new Panel($canvas3, cream)
panel3.startAnimation()

var $canvas4 = $('#canvas-4')
var panel4 = new Panel($canvas4, cyan)
panel4.startAnimation()

var $canvas5 = $('#canvas-5')
var panel5 = new Panel($canvas5, blue)
panel5.startAnimation()
