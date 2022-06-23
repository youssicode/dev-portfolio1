window.addEventListener("scroll", animate)
window.onload = animate();
function animate() {
    let sections = document.querySelectorAll("section")
    let navlinks = document.querySelectorAll('nav ul li a')
    sections.forEach(sec => {
        const sectionActionLevel = sec.getBoundingClientRect().top
        if (sectionActionLevel < 300) {
            navlinks.forEach(lnk => {
                lnk.classList.remove("colored")
                lnk.classList.add("first-color") // Initialize all nav links' color
                if (lnk.innerHTML == sec.id) { // OR "lnk.innerText.toLowerCase() == sec.id"
                    // Color the specific link
                    lnk.classList.remove("first-color")
                    lnk.classList.add("colored")
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
            el.nextElementSibling.classList.add("anim") // Anime the next Element (Description Div)
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
    if (formActionLevel < 550) {
        formInputs.classList.add("anim")
    }
}

// Anime Nav Burger Link
let navToggler = document.querySelector(".nav-toggler")
navToggler.onclick = function () {
    let nav = document.querySelector("nav")
    let spans = navToggler.querySelectorAll("SPAN")

    nav.classList.toggle("triger");
    spans.forEach(sp => sp.classList.toggle('triger'))
}

// Sorting Projects by Technologies
let projectBtn = document.querySelectorAll(".projects-links ul li a")
let Projects = document.querySelectorAll(".project")

projectBtn.forEach(btn => btn.addEventListener("click",renderProjects))

function renderProjects() {
    changeBgBtn(this)
    let technologie = this.dataset.tech // this refer to the clicked button
    if (technologie == "all") {
        Projects.forEach(prj => prj.classList.remove("hide"))
        return
    }
    Projects.forEach(prj => {
        if (prj.dataset.tech.includes(technologie)) {
            prj.classList.remove("hide")
        } else {
            prj.classList.add("hide")
        }
    })
}

function  changeBgBtn(btn) {
    let bg = document.querySelector(".li-bg")
    bg.classList.remove("margin25", "margin50", "margin75")
    if (btn.getAttribute("data-tech") == "ronr") bg.classList.add("margin25")
    if (btn.getAttribute("data-tech") == "react") bg.classList.add("margin50")
    if (btn.getAttribute("data-tech") == "js") bg.classList.add("margin75")
}
// Contact Form Validation
const contacSubmitBtn = document.querySelector('.sub-btn')
contacSubmitBtn.addEventListener("click", (ev)=>{
    ev.preventDefault()
    const contactNameInput = document.querySelector('input[name="visitorName"]').value
    const contactEmailInput = document.querySelector('input[name="visitorEmail"]').value
    const contactMsgInput = document.querySelector('textarea[name="visitorMessage"]').value

    // Name Validiation
    // let spCharts = (/^\w\s-_/ig).test(contactNameInput)
    // let nameTest = !((/\d/ig).test(contactNameInput)) && !(/[^\w\s-.]/ig).test(contactNameInput)
    let nameTest = !(/[^a-zA-Z-_.\s]/ig).test(contactNameInput)
    console.log(nameTest)
    if (!validateField(contactNameInput,"Name",nameTest)) return
 
    // Email Validiation
    let emailTest = (/^\w+([.-]?\w+)*@\[?\w+(-?\w+)*(.\w{2,})+\]?$/ig).test(contactEmailInput)
    if (!validateField(contactEmailInput,"Email",emailTest)) return
 
    // Message Validiation
    if (!validateField(contactMsgInput,"Message",true)) return

    function validateField(val,inputName,test) {
        if ((val == '') || (test == false)){
            ev.preventDefault()
            alert("Enter a valid "+inputName+".")
            return false
        } 
        return true
    }
})
