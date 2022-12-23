const arr = [1, 4, 7, 8, 9, 6, 3, 2]

const btn1 = document.getElementById('1')
const btn2 = document.getElementById('2')
const btn3 = document.getElementById('3')
const btn4 = document.getElementById('4')
const btn6 = document.getElementById('6')
const btn7 = document.getElementById('7')
const btn8 = document.getElementById('8')
const btn9 = document.getElementById('9')

let changedValue

const clockwiseBut = document.querySelector('.rotate-btn')
const antiClockwiseButs = document.querySelectorAll('.rotate-btns')

clockwiseBut.addEventListener('click', function () {
  clockwise()
  repaint()
})

for (const but of antiClockwiseButs) {
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
