const menuBtn = document.querySelector('.menuBtn');
const navBarSide = document.querySelector('.listItems')

menuBtn.addEventListener('click', () => {
    console.log("clicked!")
    console.log(navBarSide)
    menuBtn.classList.toggle('fa-bars')
    menuBtn.classList.toggle('fa-times')
    navBarSide.classList.toggle('show')
    menuBtn.classList.toggle('toggleFclr')
    
})
