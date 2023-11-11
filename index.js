import { questions } from "/data.js"

const categories = document.getElementById("categories");
const question = document.getElementById('question')
const gridContainer = document.getElementById('grid-container')
const submitBtn = document.getElementById("submit-btn")


renderCategories(getCategoriesArray(questions))
renderQuestion(questions[1])
renderAnswers(questions[1])


submitBtn.addEventListener('click', handleCheckAnswer)

function renderCategories(arrayOfFilteredCategories){

    let categoriesToDisplay = ''

    arrayOfFilteredCategories.forEach(element => {

        categoriesToDisplay += `
        <li>
            <input type="checkbox" id="${element}">
            <label for="${element}">${element}</label>
        </li>
        `
    });
    categories.innerHTML = categoriesToDisplay

}

function renderQuestion(questionToRender){
    question.innerHTML = questionToRender.question
}

function renderAnswers(question){
    let answersToRender = ''
    question.answers.forEach(function(element, index) {
        answersToRender += `
        <div class="grid-item">
            <input type="radio" class="answer" value="${element}" id="answer-${index}" name="answer">
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

console.log(checkAnswer(questions[1],"opolskie"))


function handleCheckAnswer(e){
    e.preventDefault()
    const selectedAnswer = document.querySelector('input[type="radio"]:checked').value
    
    console.log("odpowiedz to: "+ selectedAnswer)
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

getCategoriesArray(questions)

function getSelectedCategories(){

}