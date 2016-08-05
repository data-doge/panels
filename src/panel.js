import range from 'lodash.range'
import rand from 'lodash.random'

class Panel {
  constructor ($canvas) {
    this.$canvas = $canvas
    this.canvas = canvas[0]
    this.ctx = canvas.getContext('2d')
    this.rowWidth = this.$canvas.width()
    this.currentRow = this.generateFreshRow()
    this.pixel = this.ctx.createImageData(1,1)
    this.pixelData = this.pixel.data
    this.currentY = 0
  }

  generateFreshRow () {
    let row = range(this.rowWidth).map(() => {
      return rand()
    })
    row[parseInt(row.length / 2)] = 1
    return row
  }

  printRow () {
    let y = this.currentY
    this.currentRow.forEach((cell, x) => {
      this.drawPixel(x, y, cell)
    })
  }

  drawPixel (x, y, cell) {
    let rgb = cell === 1 ? {r: 255, g: 255, b: 255} : {r: 0, g: 0, b: 0}
    this.ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`
    this.ctx.fillRect(x, y, 1, 1)
  }
}

export default Panel
