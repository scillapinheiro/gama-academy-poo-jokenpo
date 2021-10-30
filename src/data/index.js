const emoji = require('node-emoji')

const options = [
    { id: 1, name: 'Pedra ' + emoji.get('fist')},
    { id: 2, name: 'Papel ' + emoji.get('hand')},
    { id: 3, name: 'Tesoura ' + emoji.get('v')}
]

module.exports = options