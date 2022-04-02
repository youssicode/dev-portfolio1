
let navToggler = document.querySelector(".nav-toggler")
navToggler.onclick = function () {
    let nav = document.querySelector("nav")
    let spans = navToggler.querySelectorAll("SPAN")

    nav.classList.toggle("triger");
    spans.forEach(sp => sp.classList.toggle('triger'))

}

window.addEventListener("scroll", animate)
window.onload = animate();
function animate() {
    
    let sections = document.querySelectorAll("section")
    let navlinks = document.querySelectorAll('nav ul li a')
    sections.forEach(sec => {
        const sectionActionLevel = sec.getBoundingClientRect().top
        if (sectionActionLevel < 300) {
            navlinks.forEach(lnk => {
                if (lnk.innerHTML == sec.id) { // OR "lnk.innerText.toLowerCase() == sec.id"
                    lnk.style.color = "var(--thrd-color)" // Color the specific link
                } else {
                    lnk.style.color = "white" // Initialize all nav links' color
                }
            })
        }
    }) 
    
    let navBar = document.querySelector(".nav-container")
    const navBarActionLevel = navBar.getBoundingClientRect().top
    if (navBarActionLevel < -47) navBar.classList.add("sticky")
    if (navBarActionLevel > 0) navBar.classList.remove("sticky")
    
    let hexWrapper = document.querySelectorAll(".hex-holder")
    hexWrapper.forEach(el => {
        const hexWrapperActionLevel = el.getBoundingClientRect().top
        if (hexWrapperActionLevel < (window.innerHeight/2)) {
            el.classList.add("anim")
            // Anime the next Element (Description Div)
            el.nextElementSibling.classList.add("anim")
        }
    }) 
    
    let myCard = document.querySelector(".my-card")
    const myCardActionLevel = myCard.getBoundingClientRect().top
    if (myCardActionLevel < 450) {
        myCard.classList.add("anim")
    }
    
    let skills = document.querySelector(".skills")
    let barLevel = document.querySelectorAll(".bar-level")
    const skillsActionLevel = skills.getBoundingClientRect().top
    if (skillsActionLevel < 450) {
        skills.classList.add("anim")
        barLevel.forEach(el => el.classList.add("anim")) 
    }
    
    let titles = document.querySelectorAll("h2")
    titles.forEach(el => {
        const titleActionLevel = el.getBoundingClientRect().top
        if (titleActionLevel < (window.innerHeight/2)) {
                el.classList.add("anim")
        }
    }) 

    let projectsUl = document.querySelector(".projects-links")
    let project = document.querySelectorAll(".project")
    const projectsUlLevel = projectsUl.getBoundingClientRect().top
    if (projectsUlLevel < (window.innerHeight/2)) {
        projectsUl.classList.add("anim")
        project.forEach(elem => {
            elem.classList.add("anim")
        });
    }
    
    let contactQuestion = document.querySelector(".question")
    const questionActionLevel = contactQuestion.getBoundingClientRect().top
    if (questionActionLevel < 450) {
        contactQuestion.classList.add("anim")
    }
    
    let formInputs = document.querySelector(".form-inputs")
    const formActionLevel = formInputs.getBoundingClientRect().top
    if (formActionLevel < 450) {
        formInputs.classList.add("anim")
    }
}

