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
    }
    
    #Render() {
        this.myRoot.innerHTML = `
        <article class="stack">
            <figure><img src="${this.productImage}" alt="бүтээгдэхүүн"></figure>
            <div class="name"><p>${this.productName}</p></div>
            <figure class="laive">
                <p>x${this.count}</p>
                <p>${(parseInt(this.price) * parseInt(this.count)).toLocaleString()}</p>
            </figure>        
            </article>            
        <style scoped>
            *{
                margin:0;
                padding:0;
            }
            .stack {
                padding:10px 0;
                display: grid;
                grid-template-columns: 18% 40% 42%;
                & .laive{
                    padding-left:20px;
                    display: flex;
                    justify-content: space-between;
                    padding-right: 10px;
                }
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    padding: 0 10px ;
                }
            }
            </style>
        `
    }
}

window.customElements.define("added-hurgelt" , AddedProduct);