let imgClick1 = document.querySelector('.one-img')
let imgClick2 = document.querySelector('.two-img')
let imgClick3 = document.querySelector('.three-img')
let imgClick4 = document.querySelector('.four-img')
let imgClick5 = document.querySelector('.five-img')


let mainFoto = document.querySelector('#main')
let arr =  ['baby1.svg','baby2.svg','baby3.svg','baby4.svg','baby5.svg']
i = 0 
mainFoto.onclick = Slayd
function Slayd(){
    mainFoto.style.backgroundImage = 'url(img/'+arr[i]+')'
    i++
    
    if(i=== arr.length){
        i = 0 
    }
}

imgClick1.addEventListener('click', Slayd)
imgClick2.addEventListener('click', Slayd)
imgClick3.addEventListener('click', Slayd)
imgClick4.addEventListener('click', Slayd)
imgClick5.addEventListener('click', Slayd)

// ========plus and minus========//

let plusBtn = document.getElementById('plusBtn')
let minusBtn = document.getElementById('minusBtn')
let number = document.getElementById('number')
plusBtn.addEventListener('click', ()=>{
    number.value = Calc(1)
})    

minusBtn.addEventListener('click',()=>{
    number.value = Calc(-1)
})

function Calc(oper){
    let res = parseInt(number.value) + oper
    return (res < 1) ? 1 : res
}

function menu(){
    let menu = document.querySelector('.menu-nav')
    menu.style.display = "flex"
    menu.style.width = "375px"
    menu.style.height = "277px"
    menu.style.backgroundColor = 'white'
    
}
let closeX = document.querySelector('.close')
closeX.addEventListener('click' ,() => {
    let menu = document.querySelector('.menu-nav')
    menu.style.display = "none"

})


// ===== header scroll====///

document.addEventListener('DOMContentLoaded', () => {
    const onScroll = () =>{
        let header = document.getElementById('header')
        console.log(header)
        let prevScroll = window.pageYOffset
        let currentScroll
        window.addEventListener('scroll', () => {
            currentScroll = window.pageYOffset
            const headerHidden = () => header.classList.contains('header_hidden')
            
            if (currentScroll > prevScroll && !headerHidden()) { 
                header.classList.add('header_hidden') 
            }
            if (currentScroll < prevScroll && headerHidden()) { 
                header.classList.remove('header_hidden') 
            }
            prevScroll = currentScroll 
        })
    }
    onScroll()
})


// =====добавление товара ==========//

function addBtn(){
    console.log(122)
    let products = document.querySelector('.products')
    products.style.display = "block"
    let input = document.getElementById('number')
    products.innerText = `пежама детская ${input.value}шт`
}
function closeBtn(){
    let products = document.querySelector('.products')
    products.style.display = "none"

}

function likeBtn(){
    let favorite = document.querySelector('.heart')
    console.log(favorite)
    favorite.style.backgroundColor = 'red'
    
}


// =-======mail======///

function ValidMail() {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let myMail = document.getElementById('email').value;
    let valid = re.test(myMail);
    if (valid) output = 'Адрес эл. почты введен правильно!';
    else output = 'Адрес электронной почты введен неправильно!';
    // document.getElementById('message').innerHTML = output;
    return valid;
}