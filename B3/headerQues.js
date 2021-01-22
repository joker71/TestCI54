const style =`
<style>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ddeeef;
    padding-bottom: 70px;
  }
h1,
h2 {
  color: #ff6b6b;
  font-family: "Amatic SC", cursive;
}

h1 {
  font-size: 60px;
  margin: 0px;
  padding-top: 30px;
}

h2 {
  font-size: 35px;
  margin: 0px;
  padding-bottom: 30px;
}
@media (max-width: 729px) {
    h2 {
        font-size: 100%;
        margin: 0px;
        padding-bottom: 35px;
      }
      h1 {
        font-size: 150%;
        margin: 0px;
        padding-top: 30px;
      }
      div {
        padding-bottom: 0px;
    }
      
}
</style>
`
class Header extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this._shadowRoot.innerHTML= `
        ${style}
        <div>
        <h1>How well do you know Sport?</h1>
        <h2>Put your knowledge to the test. </h2>
        </div>
        `
    }

}
window.customElements.define("header-ques", Header);