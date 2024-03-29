
class productCart extends HTMLElement {
    constructor() {
        super();
        this.myRoot = this.attachShadow({ mode: "closed" });
        this.name = this.getAttribute("name");
        this.price = this.getAttribute("price");
        this.image = this.getAttribute("image");
        this.id = this.getAttribute("id");
        this.desc = this.getAttribute("des");
        this.count = 1;
        this.#render();
    }
    connectedCallback() {

        this.myRoot.querySelectorAll("button")[0].addEventListener("click", (e) => {
            e.stopPropagation();
            const myCart = document.querySelector("test-info");
            myCart.addProductToCart(this);
        });
    }
    #render() {
        this.myRoot.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.inactive {
    display: none;
}

* {
    font-family: 'Lobster', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

:root {
    --bg-color: #186049;
    --text-color: #fefefe;
    --cartnoti-color: #741717;

    --pro-color: #AD8558;
    --protext-color: #eddfca;

    --ft-color: #0a291f;
    --noti-color: #red;
    --nav-color: #bebebe;
    --navtext-color: #0a291f;

    /* dark mode  */
    --bg-color-dark: #113328;
    --text-color-dark: #969494;
    --cartnoti-color-dark: #440f0f;

    --pro-color-dark: #66543f;
    --protext-color-dark: #ebb86b;

    --ft-color-dark: #000000;
    --noti-color-dark: #maroon;
    --nav-color-dark: #525252;
    --navtext-color-dark: #194134;
}

a {
    color: var(--text-color);
    text-decoration: none;
}

button {
    border-radius: 12px;
    background-color: var(--bg-color);
    color: var(--text-color);
    padding: 2px 10px 2px 10px;
}

body::-webkit-scrollbar {
    width: 0;
}

nav {
    /* position: fixed; */
    display: flex;
    color: var(--navtext-color);
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    background-color: var(--nav-color);
    margin-top: 76px;
    padding: 15px 20px;
    border-bottom: var(--ft-color);
    border-width: 1.5px;
}

nav ul {
    display: flex;
    width: 400px;
    justify-content: space-between;
}

nav ul li {
    display: flex;

    & a {
        color: var(--bg-color);
    }
}

.active {
    text-decoration: underline;
    font-weight: 800;
}

body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

footer {
    margin-top: auto;
}

.cake {
    display: grid;
    grid-template-columns: auto auto auto auto;
    /* text-shadow: 2px 2px 4px #000000; */
    margin-top: 1rem;
    justify-content: space-evenly;

    & img {
        width: 16.8vw;
        height: 15rem;
        border-radius: 12px;
        object-fit: cover;
        object-position: center;
    }

    & article {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin-bottom: 2.5rem;
        width: 17vw;
        border-radius: 15px;
        border-style: solid;
        border-width: 2px;
        border-color: var(--nav-color);
        transition: transform 500ms;
        font-family: 'Times New Roman', Times, serif;

        & div {
            display: flex;
            margin: 10px;
            align-items: flex-end;
            justify-content: space-evenly;
            text-align: center;

            & button {
                width: 7rem;
            }
        }

        & hr {
            width: 92%;
            margin: auto;
        }

        & h3 {
            font-weight: 5;
            text-align: center;
            color: var(--ft-color);
        }

        & p {
            margin-top: 12px;
            font-family: 'Times New Roman', Times, serif;
            text-align: center;
        }
    }

    & article:hover {
        transform: translateY(-0.5rem);
    }
}

.skeleton {
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin-top: 1rem;
    justify-content: space-evenly;

    & .article {
        box-shadow: 0 4px 8px 0 rgba(100, 100, 100, 0.2), 0 6px 20px 0 rgba(100, 100, 100, 0.2);
        margin-top: 1rem;
        margin-bottom: 2rem;
        width: 17vw;
        height: 23rem;
        border-radius: 20px;
        border-style: solid;
        border-width: 2px;
        border-color: #dfdfdf;

        & .text {
            display: flex;
            height: 1rem;
            width: 15vw;
            margin: 10px;
            margin-left: 15px;
            background-color: #d8d8d8;
            text-align: center;
            color: var(--ft-color);
        }

        & .bottom {
            width: 8vw;
        }

        & .top {
            margin-top: 15px;
        }

        & .image {
            background-color: #d8d8d8;
            width: 16.8vw;
            height: 15rem;
            border-radius: 17px;
            object-fit: cover;
            object-position: center;
        }

        & .loading {
            overflow: hidden;
        }
    }
}

.loading::before {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, #f0f0f0, transparent);
    transform: translateX(-100%);
    animation: loading 1.6s infinite;
}

@keyframes loading {
    100% {
        transform: translateX(100%);
    }
}

@media all and (max-width: 960px) {
    nav {
        margin-top: 61px;
    }
    .cake {
        grid-template-columns: auto auto;
        & article {
            width: 30vw;
        }
        & img {
            width: 29.6vw;
        }
    }
    .skeleton{
        grid-template-columns: auto auto;
        & .article {
            width: 30vw;
        }
        & .image {
            width: 29.6vw;
        }
        & .text{
            width: 27.5vw;
        }
    }

}

@media all and (max-width: 450px) {
    nav {
        margin-top: 56px;
    }

    .cake {
        grid-template-columns: auto;

        & article {
            width: 60vw;
        }

        & img {
            width: 59.5vw;
        }
    }
    .skeleton {
        grid-template-columns: auto;

        & .article {
            width: 60vw;
        }

        & .image {
            width: 59.5vw;
        }
    }
}

@media (prefers-color-scheme: dark) {
    body {
        background-color: #9b9a9a;

        & hr {
            border-color: var(--nav-color-dark);
        }
    }

    a {
        color: var(--text-color-dark);
    }

    nav {
        color: var(--navtext-color-dark);
        background-color: var(--nav-color-dark);
        border-bottom: var(--ft-color-dark);
    }

    nav ul li {
        & a {
            color: var(--bg-color-dark);
        }
    }

    .cake {
        & article {
            border-color: var(--nav-color-dark);

            & h3 {
                color: var(--ft-color-dark);
            }
        }
    }
    .skeleton {
        & .article {
            border-color: #b0b0b0;
            & .text {
                background-color: #7a7a7a;
                color: var(--ft-color-dark);
            }    
            & .image {
                background-color: #7a7a7a;
            }
        }
    }
    .loading::before {
        background: linear-gradient(to right, transparent, #8f8f8f, transparent);
    }

    img {
        filter: brightness(65%);
    }

    button {
        background-color: var(--bg-color-dark);
        color: var(--text-color-dark);
        border-color: #9b9a9a;
    }
}
        </style>
        <section class="cake">
        <article onclick="moveToProductDetailPage('${this.id}')" style="cursor: pointer;">
        <figure><img src="${this.image}" alt="products"></figure>
        <h3>${this.name}</h3>
        <hr>
        <p>${this.desc}</p>
        <div>
            <p>${this.price}</p>
            <button >Сагслах</button>
        </div>
    </article>
        </section>
        `
    }



}

window.customElements.define('product-cart', productCart);