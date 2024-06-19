const btn = document.querySelector('#convertBtn')
btn.addEventListener('click', convert)
const output = document.querySelector('#output')

const conversionRatesTable = {
  'usd': {
    'eur': .9329,
    'jpy': 157.41,
    'gbp': .79,
    'aud': 1.51,
    'cad': 1.38,
    'chf': .89,
    'cnh': 7.27,
    'hkd': 7.81,
    'nzd': 1.62
  },
  'eur': {
    'usd': 1.07,
    'jpy': 168.81,
    'gbp': .85,
    'aud': 1.62,
    'cad': 1.47,
    'chf': .96,
    'cnh': 7.79,
    'hkd': 8.37,
    'nzd': 1.74
  },
  'jpy': {
    'usd': 0.0064,
    'eur': 0.0059,
    'gbp': 0.0050,
    'aud': 0.0096,
    'cad': 0.0087,
    'chf': 0.0057,
    'cnh': 0.0461,
    'hkd': 0.050,
    'nzd': 0.010
  },
  'gbp': {
    'usd': 1.27,
    'eur': 1.19,
    'jpy': 199.54,
    'aud': 1.92,
    'cad': 1.74,
    'chf': 1.13,
    'cnh': 9.1787,
    'hkd': 9.91,
    'nzd': 2.07
  },
  'aud': {
    'usd': 0.66,
    'eur': 0.62,
    'jpy': 104.05,
    'gbp': 0.52,
    'cad': 0.91,
    'chf': 0.59,
    'cnh': 4.7918,
    'hkd': 5.17,
    'nzd': 1.08
  },
  'cad': {
    'usd': 0.73,
    'eur': 0.68,
    'jpy': 114.58,
    'gbp': 0.57,
    'aud': 1.10,
    'chf': 0.65,
    'cnh': 5.2717,
    'hkd': 5.69,
    'nzd': 1.19
  },
  'chf': {
    'usd': 1.12,
    'eur': 1.05,
    'jpy': 176.73,
    'gbp': 0.89,
    'aud': 1.70,
    'cad': 1.54,
    'cnh': 8.1523,
    'hkd': 8.77,
    'nzd': 1.83
  },
  'cnh': {
    'usd': 0.1378,
    'eur': 0.1290,
    'jpy': 21.7008,
    'gbp': 0.1088,
    'aud': 148.36,
    'cad': 138.14,
    'chf': 0.1226,
    'hkd': 1.0766,
    'nzd': 0.2242
  },
  'hkd': {
    'usd': 0.13,
    'eur': 0.12,
    'jpy': 20.14,
    'gbp': 0.10,
    'aud': 0.19,
    'cad': 0.18,
    'chf': 0.11,
    'cnh': 0.9308,
    'nzd': 0.21
  },
  'nzd': {
    'usd': 0.61,
    'eur': 0.57,
    'jpy': 96.59,
    'gbp': 0.48,
    'aud': 0.93,
    'cad': 0.84,
    'chf': 0.55,
    'cnh': 4.4565,
    'hkd': 4.79
  }
}

function convert () {
  const fromCurrency = document.querySelector('#fromCurrency').value
  const toCurrency = document.querySelector('#toCurrency').value
  let amount = Number(document.querySelector('#currencyAmount').value)

  if(fromCurrency === "" || toCurrency === "" || amount === 0) {
    //TODO: Add better user validation
    alert('Select a valid inputs')
    return
  }
  if(fromCurrency === toCurrency) {
    //TODO: Add better user validation
    alert('Please select 2 different currencies')
    return
  }

  let conversionRates = conversionRatesTable[fromCurrency][toCurrency]
  format(amount, toCurrency, conversionRates)
}


function format(convertedAmount, toCurrency, conversionRates) {
  output.classList.remove('selling', 'buying')
  conversionRates < 1 ? output.classList.add('selling') : output.classList.add('buying')
  output.textContent = Math.round(100 * convertedAmount) / 100 + ` ${toCurrency.toUpperCase()}` 
}