let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener("click", () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle("open");
});

const params = new URLSearchParams(document.location.search);
const par = params.get("category");

async function fetchJSON() {
    const response = await fetch(
        "https://api.jsonbin.io/v3/b/6567cf0a54105e766fd76f5f"
    );
    const datasa = await response.json();
    const data = datasa.record;
    return data;
}

// menu.addEventListener("click", () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle("open");
// });


class Product {
    constructor(product) {
        this.image = product.image
        this.name = product.Name;
        this.desc = product.Description;
        this.price = product.price;
    }

    RenderAll() {
        return `
        <article>
            <figure><img src="${this.image}" alt="products"></figure>
            <h3>${this.name}</h3>
            <hr>
            <p>${this.desc}</p>
            <div>
                <p>${this.price}</p>
                <button>Сагслах</button>
            </div>
        </article>
        `;
    }
}

class App {
    constructor(targetid) {
        this.targetid = targetid;
    }

    async init() {
        
        const breadLi = document.getElementById("bread");
        const cakeLi = document.getElementById("cake");
        const pastryLi = document.getElementById("pastry");
        const beveLi = document.getElementById("beve");

        switch(par){
            case "bread":
                breadLi.className = "active";
                break;
            case "cake":
                cakeLi.className = "active";
                break;
            case "pastry":
                pastryLi.className = "active";
                break;
            case "beverages":
                beveLi.classList = "active";
                break;
        }

        let products = await fetchJSON();

        let myhtml = "";
        //all
        if (!par) {
            for (const cat of products) {
                myhtml += `<section class="cake">`
                for (const buteegdehuun of cat.prods) {
                    const product = new Product(buteegdehuun);
                    myhtml += product.RenderAll();
                }
                myhtml += "</section>"
            }
        }
        //filter
        else {
            let filteredProducts = products.filter((prod) => prod.cat == par);

            for (const cat of filteredProducts) {
                myhtml += `<section class="cake">`
                for (const buteegdehuun of cat.prods) {
                    const product = new Product(buteegdehuun);
                    myhtml += product.RenderAll();
                }
                myhtml += "</section>"
            }
        }

        const myapp = document.getElementById("myapp");
        myapp.insertAdjacentHTML("afterbegin", myhtml);


    }
}



const app = new App();
app.init();