import './app1.css'
import $ from 'jquery'

let $btn1=$('#add');
let $btn2=$('#minus');
let $btn3=$('#mul');
let $btn4=$('#divide');
let $number=$('#number');
let n=localStorage.getItem('n');
$number.text(n||0);

$btn1.on('click',()=>{
    let n = parseInt($number.text());
    n+=1;
    localStorage.setItem('n',n)
    $number.text(n);
})
$btn2.on('click',()=>{
    let n = parseInt($number.text());
    n-=1;
    localStorage.setItem('n',n)
    $number.text(n);
})
$btn3.on('click',()=>{
    let n = parseInt($number.text());
    n*=2;
    localStorage.setItem('n',n)
    $number.text(n);
})
$btn4.on('click',()=>{
    let n = parseInt($number.text());
    n/=2;
    localStorage.setItem('n',n)
    $number.text(n);
})