let expBlock = document.querySelector('.expression')
let exp = expBlock.innerHTML
console.log(exp)

let buttons = document.querySelectorAll('button')

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.innerHTML === '=') {
      expBlock.innerHTML = eval(exp)
    } else if (btn.innerHTML === 'C') {
      expBlock.innerHTML = ''
    } else if (btn.innerHTML === '±') {
      if (exp.startsWith('-')) expBlock.innerHTML = exp.slice(1)
      else expBlock.innerHTML = '-' + exp
    } else {
      let con = btn.innerHTML
      if (con === 'X') con = '*'
      if (con === '÷') con = '/'
      expBlock.innerHTML = exp + con
    }

    exp = expBlock.innerHTML
  })
})
