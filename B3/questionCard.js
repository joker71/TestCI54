let number= 0;
let scroce= 0;
let style= ``;
class Question extends HTMLElement {
    
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.corrrect = this.getAttribute("correct");
        this.ques= this.getAttribute("question");
        this.anserlis= this.getAttribute("answer");
        this.ans= this.anserlis.split(",");
        this.length= this.getAttribute("length");
        this.innerHTML=``;
    }
        
}
window.customElements.define('question-item', Question)