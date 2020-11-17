import './app3.css'
import $ from "jquery";
let $square=$('#app3 .square')
$square.on('click',()=>{
    // toggleClass就是有就删掉，没有就加上
    $square.toggleClass('active')
})