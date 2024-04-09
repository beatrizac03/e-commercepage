let mainImgSelected = document.querySelector('.p-mainimg')
let containerImgs = document.querySelector('.p-secimgs')
let eachSecImg = document.querySelectorAll('.p-eachsecimg')
let qntityItemsField = document.querySelector('.number-qtity')
let btnAddQntity = document.querySelector('.sign-add')
let btnRemoveQntity = document.querySelector('.sign-remove')


let numbQntity = 0
qntityItemsField.innerHTML = numbQntity
qntityItemsField.style.display = 'flex'
qntityItemsField.style.alignItems = 'center'
qntityItemsField.style.justifyContent = 'center'
qntityItemsField.style.fontWeight = '500'
qntityItemsField.style.fontSize = 'var(--small)'


function addQntity () {
    numbQntity++
    qntityItemsField.innerHTML = numbQntity
}

function removeQntity () {
    if (numbQntity > 0) {
        numbQntity--
        qntityItemsField.innerHTML= numbQntity
    } 
}

function reduceOpacity (event) {
    let imgEvent = event.target 
    imgEvent.style.opacity = '50%'
    imgEvent.style.border = '2px solid var(--orange-primary)'
}

function increaseOpacity (event) {
    event.target.style.opacity = '100%'
}

function switchMainImg (event) {
    let divImg = event.target
    // console.log(divImg)

    let style = window.getComputedStyle(divImg)

    let bgImgURL = style.getPropertyValue("background-image")
    // console.log(bgImgURL)

    mainImgSelected.style.backgroundImage = `${bgImgURL}`
}  


btnAddQntity.addEventListener('click', addQntity)
btnRemoveQntity.addEventListener('click', removeQntity)


eachSecImg.forEach( img => {
    img.addEventListener('mouseenter', reduceOpacity)
    img.addEventListener('mouseleave', increaseOpacity)
    img.addEventListener('click', switchMainImg)
})





