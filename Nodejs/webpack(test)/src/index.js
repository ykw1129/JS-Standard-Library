import $ from 'jquery'
import './css/1.css'
import './css/1.less'
$(function(){
    $('li:odd').css('backgroundColor','pink')
    $('li:even').css('backgroundColor','lightblue')
})
class Peson{
    constructor(a){
        this.a = a
    }
    console(){
        console.log()
    }
}
const p1 = new Peson(4)
p1.console()