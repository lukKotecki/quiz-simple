import { questions } from "/data.js"

const categories = document.getElementById("categories");
const question = document.getElementById('question')
const gridContainer = document.getElementById('grid-container')
const submitBtn = document.getElementById("submit-btn")

renderCategories(getCategoriesArray(questions))
renderQuestion(questions[1])

let gameIsActive = false;



submitBtn.addEventListener('click', handleCheckAnswer)


function renderCategories(arrayOfFilteredCategories){

    let categoriesToDisplay = ''

    arrayOfFilteredCategories.forEach(element => {

        categoriesToDisplay += `
        <li>
            <input type="checkbox" id="${element}" value="${element}" checked>
            <label for="${element}">${element}</label>
        </li>
        `
    });
    categories.innerHTML = categoriesToDisplay

}

function renderQuestion(questionToRender){

    question.innerHTML = questionToRender.question
    let answersToRender = ''

    questionToRender.answers.forEach(function(element, index) {
        answersToRender += `
        <div class="grid-item">
            <input type="radio" class="answer" value="${element}" id="answer-${index}" name="answer" required>
        <label for="answer-${index}">${element}</label>
    </div>`
    })
    gridContainer.innerHTML = answersToRender;
}


function checkAnswer(question,answer){
    if(answer === question.answers[question.correctAnswer]){
        return true
    }else{
        return false
    }
}

function handleCheckAnswer(e){
    e.preventDefault()
    const indexOfQuestion = questions.findIndex((element) => element.question === question.textContent) //(question.textContent)
    


    if(gameIsActive){
        if(document.querySelector('input[type="radio"]:checked')){
            const selectedAnswer = document.querySelector('input[type="radio"]:checked').value
            console.log(checkAnswer(questions[indexOfQuestion],selectedAnswer))
        }
    }else{
        // gameIsActive = true
        // TODO  start game here
        submitBtn.textContent = 'CHECK ANSWER'
        console.log(getSelectedCategoriesQuestionsArr())
    }
}

function getCategoriesArray(data){
    let filteredCategories = []
    data.forEach(function(element){
        if(!filteredCategories.includes(element.category)){
            filteredCategories.push(element.category)
        }
    })
    return filteredCategories
}


function getSelectedCategoriesQuestionsArr(){
    const selectedCategories = document.querySelectorAll('input[type="checkbox"]:checked')
    let arrayOfSelectedCategories = Array.from(selectedCategories).map(element => element.value)
    let toReturn =[]

     questions.forEach(function(e){
         if(arrayOfSelectedCategories.includes(e.category))
            toReturn.push(e)
     })
     return toReturn
}

