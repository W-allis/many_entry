import 'webpack-hot-middleware/client?reload=true'
import '../assets/css/index.css'
import '../assets/css/index.less'

console.log('hello world')

const b = () => 2

function* test() {
    for (var i = 0; i < 5; i++) {
        yield i
    }
}
// debugger
var a = test()
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)

async function foo() {
    await console.log('i am await')
}

foo()

console.log(' i change main.js')