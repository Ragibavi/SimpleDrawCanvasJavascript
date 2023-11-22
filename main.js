
function change(item){
    const active = document.querySelector('.active')
    active.classList.remove('active')
    item.classList.add('active')
    const selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    item.classList.add('selected')
    const color = window.getComputedStyle(item).getPropertyValue('background-color')
    console.log(color)
    ctx.strokeStyle = color
}


const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let isDrawing = false
colorBtn = document.querySelector('.color-pick .option')

const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}
window.addEventListener('resize', resizeCanvas)
resizeCanvas()

const startdrawing = () => {
    isDrawing = true
    ctx.beginPath()
    ctx.lineWidth = 2.5
}

const drawing = (e) => {
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
}


canvas.addEventListener('mousedown', startdrawing)
canvas.addEventListener('mousemove', drawing)
canvas.addEventListener('mouseup', () => isDrawing = false)