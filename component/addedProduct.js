class AddedProduct extends HTMLElement {
    constructor() {
        super();
        this.myRoot = this.attachShadow({ mode: "closed" });
        this.productImage = this.getAttribute("img") ?? "https://i.ibb.co/9hLBbbc/ichigo-figure.webp"
        this.productName = this.getAttribute("name") ?? "asdf"
        this.price = this.getAttribute("price") ?? "69"; 
        this.count =  this.getAttribute("count") ?? "1";
        this.#Render();
    }

    connectedCallback() {
        this.#Render();
        let deleteButton = this.myRoot.querySelectorAll("button");
        deleteButton[0].addEventListener("click" , ()=> {
            let cartInfo = document.querySelector("test-info");
            console.log(cartInfo);
            for(let item of cartInfo.productList) {
                if(item.name === this.productName) {
                    item.count = 1;
                    break;
                }
            }
            cartInfo.deleteItem(this);
        })
    }
    
    #Render() {
        this.myRoot.innerHTML = `
        <article class="cartProduct">
            <figure class="figu"><img src="${this.productImage}" alt="zurag"></figure>
            <h3 class="item">${this.productName}</h3>
            <p class="item" id="p">x ${this.count}</p>
            <p class="item">${(parseInt(this.price) * parseInt(this.count)).toLocaleString()}</p>
            <button class="item">X</button>
        </article>
            <style scoped>
            *{
                margin:0;
                padding:0;
            }
            .cartProduct{
                border-radius:18px;
                margin: 10px;
                display: flex;
                width: 470px;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19);
                border: #bebebe solid 1px;
                align-items: center;
                justify-content: space evenly;
                & img {
                    width: 80px;
                    height: 80px;
                    border-radius: 18px;
                }
                & button{
                    padding: 0;
                    width: 26px;
                    height: 26px;
                    border-radius: 40px;
                    background-color:#186049;
                    color:white;
                    border:none;
                    cursor: pointer;
                    margin-left:32px;
                }
                & .item{
                    margin-left: 20px;
                }
                & h3{
                    width: 150px;
                }
                & p{
                    width: 50px;
                }
                #p{
                    width: 30px;
                }
            }
            </style>
        `
    }
}

window.customElements.define("added-product" , AddedProduct);
