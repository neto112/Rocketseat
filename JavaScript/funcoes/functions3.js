// function scope
let subject = 'Golaço'

function oi() {
    subject = 'study'
    return subject
}

console.log(oi(subject))
console.log(subject)
