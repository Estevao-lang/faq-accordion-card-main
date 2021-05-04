this.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".question")
    const answer = document.querySelectorAll(".answer")


    questions.forEach((question) => question.addEventListener('click', () =>{

        if(question.classList.contains('answer')){
            answer.classList.toggle('.active')
        }
    else{
    answer.forEach(question => question.classList.toggle('active'))
    // answer.parentNode.classList.toggle('')
        }

    }))
})
