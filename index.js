import { questions } from "/data.js"


const categories = document.getElementById("categories");
const question = document.getElementById('question')


renderCategories(questions)

renderQuestion(questions[0])
console.log(questions[0])


function renderCategories(data){
    let categoriesToDisplay = ''

    data.forEach(element => {
        console.log(element.category)

        categoriesToDisplay += `
        <li>
            <input type="checkbox" id="${element.category}">
            <label for="${element.category}">${element.category}</label>
        </li>
        `
    });
    categories.innerHTML = categoriesToDisplay

}


function renderQuestion(questionToRender){
    question.innerHTML = questionToRender.question
}