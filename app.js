const menuBtn = document.querySelector( 'header span' ),
basicMenu = document.querySelector( 'header .basicMenu' ),
menuArrow = document.querySelector( 'header span i' )
let flag = true
menuBtn.addEventListener( 'click', () => {
    if ( flag ) {
        basicMenu.style.height = ` 170px `
        menuArrow.style.transform = ` rotateX( 180deg ) `
        flag = false
    } else {
        basicMenu.style.height = ` 1px `
        menuArrow.style.transform = ` rotateX( 0 ) `
        flag = true
    }
} )