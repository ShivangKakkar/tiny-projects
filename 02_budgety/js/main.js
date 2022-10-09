let data = {
  income: [],
  expenses: [],
}

var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
var date = new Date()

document.getElementById('date').innerHTML =
  months[date.getMonth()] + ' ' + date.getFullYear()

const makeSpan = (type, text) => `<span class=${type}>${text}</span>`

const updateLists = () => {
  let lists = ['income', 'expenses']
  let budgets = []
  for (let i in lists) {
    i = lists[i]
    let list = document.getElementsByClassName(`${i}__list`)
    let budget = document.querySelector(`.budget__${i} .amount`)
    let amount = 0
    // list[0].innerHTML = '<p>Hello</p>'
    list[0].innerHTML = data[i]
      .map((item) => {
        amount += item.amount
        return `<li>
        ${makeSpan('text', item.text)}
        ${makeSpan('amount', item.amount.toFixed(2))}
      </li>`
      })
      .join('')
    amount = amount.toFixed(2)
    budget.innerHTML = amount
    budgets.push(amount)
  }
  let total = budgets[0] - budgets[1]
  total = total.toFixed(2)
  if (total < 0) total = '- ' + String(total).slice(1)
  else total = '+ ' + String(total)
  // console.log(total)
  let budgetTotal = document.querySelector('.budget__total')
  // console.log(budgetTotal)
  budgetTotal.innerHTML = total
}

document.getElementById('amount').addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    event.preventDefault()
    let textEl = document.getElementById('text')
    let amountEl = document.getElementById('amount')
    let dropEl = document.getElementById('drop_down')
    let text = textEl.value
    let amount = Number(amountEl.value)
    let drop = dropEl.value
    if (!text) return

    console.log(text)
    console.log(amount)
    console.log(drop)

    let newItem = { text, amount }

    if (drop === '+') data.income.push(newItem)
    else data.expenses.push(newItem)
    updateLists()

    textEl.value = ''
    amountEl.value = ''
  }
})
