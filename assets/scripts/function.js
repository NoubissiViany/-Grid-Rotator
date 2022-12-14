let arr = [1, 4, 7, 8, 9, 6, 3, 2]

let btn1 = document.getElementById('1')
let btn2 = document.getElementById('2')
let btn3 = document.getElementById('3')
let btn4 = document.getElementById('4')
let btn5 = document.getElementById('5')
let btn6 = document.getElementById('6')
let btn7 = document.getElementById('7')
let btn8 = document.getElementById('8')
let btn9 = document.getElementById('9')

let changedValue

const clockwiseBut = document.querySelector('.rotate_btn')
const antiClockwiseButs = document.querySelectorAll('.rotate_btns')

clockwiseBut.addEventListener ('click', function () {
  clockwise()
  repaint()
})

for (let but of antiClockwiseButs) {
  but.addEventListener('click', function () {
    anticlockwise()
    repaint()
  })
}

function clockwise () {
    changedValue = arr.shift()
    arr.push(changedValue)
}

function anticlockwise () {
  changedValue = arr.pop()
  arr.unshift(changedValue)
  console.log(arr)
}

function repaint () {
  btn1.innerHTML = arr[0]
  btn2.innerHTML = arr[7]
  btn3.innerHTML = arr[6]
  btn4.innerHTML = arr[1]
  btn6.innerHTML = arr[5]
  btn7.innerHTML = arr[2]
  btn8.innerHTML = arr[3]
  btn9.innerHTML = arr[4]
}
