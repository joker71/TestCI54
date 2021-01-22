let number = 0;
let scroce = 0;
let sumQues=0;
let style = ` <style>
.container {
    height: 100%;
    padding: 15vh;
    margin: 8vh;
    background-color: #ddeeef;
}

label,
h1 {
    font-size: 200%;
    height: 100%;
    width: 100%;
}

h1 {
    color: #2c3d55;
    font-family: "Josefin Sans", sans-serif;
}

label {
    color: #61707d;
    font-family: "Josefin Sans", sans-serif;
}

input[type=radio] {
    padding: 1rem;
    margin: 1rem;
    width: 2rem;
    height: 2rem;
}

@media (max-width: 729px) {
    .container {
        height: 50%;
        display: block
        padding: 0;
        margin: 0;
        padding: 10%;
    }
    h1 {
        font-size: 100%;
        height: 100%;
        width: 100%;
    }
    label {
        font-size: 80%;
    }
    input[type=radio] {
        padding: 0.5rem;
        margin: 0.5rem;
        width: 1rem;
        height: 1rem;
    }
    
}
</style>`;
class Question extends HTMLElement {

    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.corrrect = this.getAttribute("correct");
        this.ques = this.getAttribute("question");
        this.anserlis = this.getAttribute("answer");
        this.ans = this.anserlis.split(",");
        this.length = this.getAttribute("length");
        sumQues= this.length;
        this._shadowRoot.innerHTML = `
       ${style}
        <div class="container" id="card">
        <h1 class="question">${this.ques}</h1>
        <div class="answer">
            <div>
                <input type="radio" name="answer" id="${this.ans[2]}" value="${this.ans[2]}">
                <label for="${this.ans[2]}">${this.ans[2]}</label>
            </div>
            <div>
                <input type="radio" name="answer" id="${this.ans[3]}" value="${this.ans[3]}">
                <label for="${this.ans[3]}">${this.ans[3]}</label>
            </div>
            <div>
                <input type="radio" name="answer" id="${this.ans[0]}" value="${this.ans[0]}">
                <label for="${this.ans[0]}">${this.ans[0]}</label>
            </div>
            <div>
                <input type="radio" name="answer" id="${this.ans[1]}" value="${this.ans[1]}">
                <label for="${this.ans[1]}">${this.ans[1]}</label>
            </div>
        </div>
    </div>`;

        const checkbox = this._shadowRoot.querySelectorAll("input[type=radio]");
        const question = this._shadowRoot.getElementById("card");
        for (const iterator of checkbox) {
            iterator.addEventListener("change", () => {
                if (iterator.value === this.corrrect) {
                    alert("Correct Answer! +10 points")
                    this.changePoint(true);
                }
                else {
                    alert(`Wrong Answer! Correct Answer is ${this.corrrect}`);
                    this.changePoint(false);
                }
                question.style.display = "none";
            });

        }
        
    }
    changePoint(status) {
        number++;
        if (status) scroce = scroce + 10;
        if (number === sumQues) {
            console.log('done')
            alert(`Finished! Your score is ${scroce}. You got ${scroce / 10} questions correct out of ${this.length} questions`)
        }
    }

}
window.customElements.define('question-item', Question);