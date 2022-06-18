// Accordeon
const accordeonItem = document.querySelectorAll(".info__item");

accordeonItem.forEach((currentTab) =>{
    let headPart = currentTab.querySelector(".info__head");
    let hiddenPart = currentTab.querySelector(".info__hide");

    headPart.addEventListener('click' , (e) =>{
        let hiddenPartHeight = hiddenPart.scrollHeight + hiddenPart.clientHeight;
        currentTab.classList.toggle("active");

        currentTab.classList.contains("active") ? hiddenPart.style.maxHeight = hiddenPartHeight + 'px' : hiddenPart.style.maxHeight = null
    })
})
//Swiper
const swiper = new Swiper('.stages__swiper', {
    slidesPerView: 1.7,
    spaceBetween: 25,
    navigation: {
        nextEl: '.stages__next',
        prevEl: '.stages__prev',
    },
});
// Validate

let inpName = document.querySelector('input[type="text"]')

let inpNumber = document.querySelector('input[type="tel"]')

let inpEmail = document.querySelector('input[type="email"]')

let send = document.querySelector('.contact__btn')

var regNumber = /^[\d ()+-]+$/

const regEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

let count = 0

document.querySelector('.contact__btn').addEventListener('click' , function(e){
    e.preventDefault()

    if (inpName.value.length < 2) {
        inpName.classList.add('is-invalid')
        count--
    } else {
        inpName.classList.remove('is-invalid')
        count++
    }

    if (!isPhone (regNumber, inpNumber.value) || inpNumber.value.length <= 17) {
        inpNumber.classList.add('is-invalid')
        count--
    } else {
        inpNumber.classList.remove('is-invalid')
        count++
    }

    if(!isEmail (regEmail, inpEmail.value) || inpEmail.value.length <= 3) {
        inpEmail.classList.add('is-invalid')
        count--
    } else {
        inpEmail.classList.remove('is-invalid')
        count++
    }
    console.log(count)
    if(count < 3) {
        count = 0
    }

    if(count == 3) {
        document.querySelector('form').reset()
        count = 0
    }
    console.log(count)
})


function isPhone (regex, inp) {
    return regex.test(inp)
}

function isEmail (regex, inp) {
    return regex.test(inp)
}
// number mask
var element = document.querySelector('input[type="tel"]');
var maskOptions = {
    mask: '+{38} (000)000-00-00'
};
var mask = IMask(element, maskOptions);



