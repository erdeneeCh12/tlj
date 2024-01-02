class Cartinfo extends HTMLElement {
    // constructor() {
    //     super();
    //     this.myRoot = this.attachShadow({ mode: "closed" });
    //     this.productList = JSON.parse(localStorage.getItem("productList"));
    //     this.#Render();
    // }
    constructor() {
        super();
        this.myRoot = this.attachShadow({ mode: "closed" });
        this.productList = JSON.parse(localStorage.getItem("productList")) || [];
        this.#Render();
    }
    

    connectedCallback() {
        this.myRoot.querySelector("button").addEventListener("click" , () => {
            this.style.display = "none";
        }) 
        
        this.myRoot.getElementById("totalPrice").innerText = this.getTotalPrice().toLocaleString();
        
    }

    // connectedCallback() {
    //     this.myRoot.querySelector("button").addEventListener("click", () => {
    //         this.handleOrderButtonClick();
    //     });
    
    //     this.renderAllProduct();
    // }
    
    // handleOrderButtonClick() {
    //     const totalPrice = this.getTotalPrice();
    //     this.myRoot.getElementById("totalPrice").innerText = totalPrice.toLocaleString();
    
    //     // Check if total price is under 15000 and show alert
    //     if (totalPrice < 15000) {
    //         alert("Total price is under 15000!");
    //     } else {
    //         // Prompt user before redirecting if total price is over 15000
    //         const userConfirmation = confirm("Total price is over 15000. Do you want to proceed with the order?");
    //         if (userConfirmation) {
    //             // Redirect to "hurgelt.html" if the user confirms
    //             window.location.href = "https://erdeneech12.github.io/tlj/hurgelt.html";
    //         } else {
    //             // Optionally, you can provide some feedback to the user if they choose not to proceed
    //             alert("Order canceled. Total price is over 15000.");
    //         }
    //     }
    // }
    
    
    


    // renderAllProduct() {
    //     let productList = this.myRoot.getElementById("productList");
    //     for(let item of this.productList) {
    //         const addedPro = `<added-product name="${item.name}" price="${item.price}" img="${item.image}" count="${item.count}" ></added-product>`;
    //         productList.insertAdjacentHTML('beforeend' , addedPro);
    //     } 
    // }

    renderAllProduct() {
        let productList = this.myRoot.getElementById("productList");
        if (productList) {
            for (let item of this.productList) {
                const addedPro = `<added-product name="${item.name}" price="${item.price}" img="${item.image}" count="${item.count}" ></added-product>`;
                productList.insertAdjacentHTML('beforeend', addedPro);
            }
        }
    }
    
    addProductToCart(product) {
        let willAdd = true;
        for(let item of this.productList) {
            if(item?.name === product?.name) {
                willAdd = false;
                item.count += 1;
                break;
            }
        }
        if(willAdd) {
            this.productList.push(product);
        }
        localStorage.setItem("productList" , JSON.stringify(this.productList));
        this.#Render();
        document.getElementById("totalProduct").innerText = this.getTotalCount();   
        this.myRoot.getElementById("totalPrice").innerText = this.getTotalPrice().toLocaleString();
    }

    getTotalCount() {
        let totalCount = 0;
        for(let item of this.productList) {
            totalCount += item.count;
        }
        return totalCount;
    }

    getTotalPrice = function() {
        let totalPrice = 0;
        for(let item of this.productList) {
            totalPrice += parseInt(item?.price) * item.count;
        }
        return totalPrice;
    }

    deleteItem = function(product) {
        for(let i = 0; i < this.productList.length ; i++) {
            console.log(this.productList[i].name);
            if(this.productList[i].name === product.productName) {
                this.productList.splice(i , 1);
            }
        }
        localStorage.setItem("productList" , JSON.stringify(this.productList));
        document.getElementById("totalProduct").innerText = this.getTotalCount();   
        this.#Render();
        this.myRoot.getElementById("totalPrice").innerText = this.getTotalPrice().toLocaleString();
        // this.style.display = "block"; 
    }
   
    #Render() {
        this.myRoot.innerHTML = `
        <div id="cart">
            <article>
                <h2>Сагс</h2>
                <button>Хаах</button>
            </article>
            <ul id="productList">
            </ul>
            <div id="price-add">
                    <p class="innerData" id="totalPrice" >0</p>
                    <!-- <button><a href="https://erdeneech12.github.io/tlj/hurgelt.html">Захиалах</a></button> -->
                    <button><a href="hurgelt.html">Захиалах</a></button>
            </div>
            
        </div>

    <style scoped>
        * {
            margin: 0;
            padding: 0;
          
        }
        a {
            color: var(--text-color);
            text-decoration: none;
        }

        #cart {
            & article{
                display: flex;
                & h2{
                    width: 70%;
                }
                & button{
                    margin-left: 18%;
                }
            }
            height:75vh;
            overflow-y:scroll;
            position: fixed;
            top: 0px;
            right: 20px;
            background-color: #fefefe;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 500px;
            
            margin-top: 80px;
            z-index: 1000;
            & button {
                padding: 5px 10px;
                font-size: 12px;
                background-color: #186049;
                color: #fff;
                border: none;
                border-radius: 10px;
                cursor: pointer;
            }
        }

        #cart::-webkit-scrollbar{
            width:0;
        }
        
        #productList {
            list-style-type: none;
            padding: 0;
            height: auto;
        }
        
        .product {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }
        
        #price-add{
            display: flex;
            border: 1px black solid;
            border-radius: 3vh;
            height: auto;
            width: 80%;
            margin: auto;
            margin-top: 5%;
        }
        #price-add p{
            font-size: 16px;
            width: 50%;
            text-align: center;
            padding-top: 5px;
        }
        #price-add button{
            width: 50%;
            border-radius: 15px;
            background-color: var(--bg-color);
            border: none;
            color: white; 
            font-size: 18px;
        }
        #price-add button:active{
            background-color:#0b3124 ;
                color: rgb(133, 128, 128);
        }
        
        #totalPrice {
            margin-left: 10px;
            color:red;
        }

        @media all and (max-width:540px){
            #cart {
                & article{
                    display: flex;
                    & h2{
                        width: 70vw;
                    }
                    & button{
                        margin-left: 18vw;
                    }
                }
                height:48vh;
                overflow-y:scroll;
                position: fixed;
                top: 46vh ;
                right: 4vw;
                background-color: #fefefe;
                padding: 10px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                width: 88vw;
                
                margin-top: 15px;
                z-index: 1000;
                & button {
                    padding: 2px 5px;
                    font-size: 12px;
                    background-color: #186049;
                    color: #fff;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                }
            }
            
            #price-add{
                border-radius: 3vh;
                height: auto;
                width: 60vw;
                margin-top: 5%;
            }
            #price-add p{
                font-size: 16px;
                width: 50vw;
                text-align: center;
                padding-top: 5px;
            }
            #price-add button{
                width: 50vw;
                border-radius: 15px;
                font-size: 15px;
            }
            #price-add button:active{
                background-color:#0b3124 ;
                    color: rgb(133, 128, 128);
            }
            
            #totalPrice {
                margin-left: 5px;
            } 
        }
    </style>
         `;
         this.myRoot.querySelector("button").addEventListener("click" , () => {
            this.style.display = "none";
        })  
        this.renderAllProduct();
        }
    }


window.customElements.define("test-info", Cartinfo);
