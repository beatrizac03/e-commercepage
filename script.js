let mainImgSelected = document.querySelector('.p-mainimg')
let containerImgs = document.querySelector('.p-secimgs')
let eachSecImg = document.querySelectorAll('.p-eachsecimg')
let qntityItemsField = document.querySelector('.number-qtity')


function reduceOpacity (event) {
    let imgEvent = event.target 
    imgEvent.style.opacity = '50%'
    imgEvent.style.border = '2px solid var(--orange-primary)'
}

function increaseOpacity (event) {
    event.target.style.opacity = '100%'
    console.log('naaaaaaaao')
}

function switchMainImg (event) {
    let divImg = event.target
    console.log(divImg)

    let style = window.getComputedStyle(divImg)

    let bgImgURL = style.getPropertyValue("background-image")
    console.log(bgImgURL)

    mainImgSelected.style.backgroundImage = `${bgImgURL}`
}  

eachSecImg.forEach( img => {
    img.addEventListener('mouseenter', reduceOpacity)
    img.addEventListener('mouseleave', increaseOpacity)
    img.addEventListener('click', switchMainImg)
})


mainImgSelected.addEventListener('click', function(event) {
    // console.log('simmmm')
    // console.log(event.target)
    // event.target.style.backgroundImage = 'url(assets/images/icon-plus.svg)'
})




