import range from 'lodash.range'
import rand from 'lodash.random'
import BitArray from 'node-bitarray'
import zipObject from 'zip-object'
import loop from 'raf-loop'

class Panel {
  constructor ($canvas) {
    this.$canvas = $canvas
    this.canvas = $canvas[0]
    this.ctx = this.canvas.getContext('2d')
    this.rowWidth = this.$canvas.width()
    this.canvasHeight = this.$canvas.height()
    this.currentRow = this.generateFreshRow()
    this.pixel = this.ctx.createImageData(1,1)
    this.pixelData = this.pixel.data
    this.currentY = 0
    this.ruleMap = this.generateRuleMap()
    this.engine = null
  }

  startAnimation () {
    this.engine = loop((dt) => {
      this.printRow(this.currentRow)

      this.currentRow = this.currentRow.map((cell, i, arr) => {
        let leftIndex = i - 1 < 0 ? this.rowWidth - 1 : i - 1
        let rightIndex = i + 1 > this.rowWidth - 1 ? 0 : i + 1
        let threeBitStr = [arr[leftIndex], cell, arr[rightIndex]].join('')
        return this.ruleMap[threeBitStr]
      })

      if (this.currentY++ > this.canvasHeight) {
        this.currentY = 0
        this.ruleMap = this.generateRuleMap(rand(256))
        this.currentRow = this.generateFreshRow(this.rowWidth)
      }
    }).start()
  }

  generateFreshRow () {
    let row = range(this.rowWidth).map(() => {
      return rand()
    })
    row[parseInt(row.length / 2)] = 1
    return row
  }

  generateRuleMap () {
    var bitArray = BitArray.parse(rand(256), true)
    var threeBitPermutations = ['111','110','101','100','011','010','001','000']
    return zipObject(threeBitPermutations, bitArray)
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
