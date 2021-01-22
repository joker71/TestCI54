let style = ``;
class QuestionList extends HTMLElement {

    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
    }
    async connectedCallback() {
        const conn = await fetch(`https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple`)
        const data = await conn.json();
        const quizs = (data.results);
        console.log(quizs);
        let html =``;
        for (const quiz of quizs) {
            let answer= quiz.incorrect_answers;
            answer.push(quiz.correct_answer);
            html += `<question-item correct="${quiz.correct_answer}" question="${quiz.question}" answer="${answer.sort()}" length= "${data.results.length}"></question-item>`
        }
        this._shadowRoot.innerHTML= `${html}`;

    }
}
window.customElements.define("question-arr", QuestionList);