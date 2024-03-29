const myObserver = new IntersectionObserver((entris)=>{
    entris.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add(`show`)
        }else{
            entry.target.classList.remove(`show`)
        }
    })

})
const elements = document.querySelectorAll(`.animate`)
elements.forEach((element)=> myObserver.observe(element))