class ListInfo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.productList = JSON.parse(localStorage.getItem("productList"));
        this.render();
    }

    connectedCallback() {
        this.shadowRoot.getElementById("totalPrice").innerText = this.getTotalPrice().toLocaleString();
    }

    renderAllProduct() {
        const productList = this.shadowRoot.querySelector("#productList");
        for (const item of this.productList) {
            const addedPro = `<added-hurgelt name="${item.name}" price="${item.price}" img="${item.image}" count="${item.count}" ></added-hurgelt>`;
            productList.insertAdjacentHTML('beforeend', addedPro);
        }
    }

    getTotalPrice = function() {
        let totalPrice = 0;
        for(let item of this.productList) {
            totalPrice += parseInt(item?.price) * item.count;
        }
        return totalPrice;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <section class="list">
                <h1>Захиалах бүтээгдэхүүн</h1>
                <ul id="productList">
                </ul>
                <hr>
                <article class="amount">
                    <p>Нийт үнэ</p>
                    <p class="innerData" id="totalPrice">0</p>
                </article>
            </section>
            <style>
            *{
                margin:0;
                padding:0;
            }
                #productList{
                    padding: 20px 0px;
                    height:420px;
                    overflow-y:scroll;  
                }
                .list {
                    position: flex;
                    background-color: #e9e9e9;
                    width: 23.5vw;
                    height: 550px;
                    margin-top: 10rem;
                    border-radius: 15px;
                    align-items: center;
                    font-size: 18px;
                }
                #productList::-webkit-scrollbar{
                    width:0;
                }
                .amount {
                    display: flex;
                    justify-content: space-between;
                    padding: 0px 30px;
                    font-size:22px;
                    #totalPrice{
                        color:red;
                    }
                }
                h1 {
                    padding: 0;
                    height: 35px;
                    font-weight: 600;
                    font-size: 20px;
                    text-align: center;
                    background-color: var(--bg-color);
                    color: var(--text-color);
                    border-radius: 10px;
                    padding: 2px 20px 2px 20px;
                }
                
                @media all and (max-width:1080px){
                    .list{
                        position: normal;
                        margin: 10rem auto 0 auto;
                        width: 30vw;
                        height: 400px;   
                        font-size: 14px;
                        & img {
                            width: 40px;
                            height: auto;
                            border-radius: 15px;
                            padding: 2px 0 2px 0;
                        }
                        & h1 {
                            height: 35px;
                            font-weight: 600;
                            font-size: 15px;
                            padding: 5px auto 5px auto;
                        }
                        #productList{
                            padding: 20px 0px;
                            height:270px;
                        }
                    }
                }



                @media all and (max-width: 890px){
                    .body{
                        display: grid;
                        grid-template-columns: auto;
                    }
                    .list{
                        margin-top: 8rem;
                        width: 350px;
                    }  
                    #productList{
                        padding: 20px 0px;
                        height:420px;
                    }
                }


                @media all and (max-width:540px){
                    .list{width: 250px;}
                }
            </style>
        `;
        this.renderAllProduct();
    }
}

window.customElements.define("list-info", ListInfo);
