// Write your code here!

const firstName = "Barry"
document.querySelector('main#main').remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = `${firstName}! is the champion`
