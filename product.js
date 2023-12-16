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
        "https://api.jsonbin.io/v3/b/657536ff0574da7622d2d050"
    );
    const datasa = await response.json();
    const data = datasa.record;
    return data;
}

class Product {
    constructor(product) {
        this.id = product.id;
        this.image = product.image;
        this.name = product.Name;
        this.desc = product.Description;
        this.price = product.price;
    }

    RenderAll() {
        return `
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
        `;
    }
}

class App {
    constructor(targetid) {
        this.targetid = targetid;
    }

    async init() {
        // Display skeleton loading
        this.showSkeletonLoading();

        const breadLi = document.getElementById("bread");
        const cakeLi = document.getElementById("cake");
        const pastryLi = document.getElementById("pastry");
        const beveLi = document.getElementById("beve");

        switch (par) {
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
        // Render the actual product information
        if (!par) {
            for (const cat of products) {
                myhtml += `<section class="cake">`;
                for (const buteegdehuun of cat.prods) {
                    const product = new Product(buteegdehuun);
                    console.log(buteegdehuun);
                    myhtml += product.RenderAll();
                }
                myhtml += "</section>";
            }
        } else {
            let filteredProducts = products.filter((prod) => prod.cat == par);

            for (const cat of filteredProducts) {
                myhtml += `<section class="cake">`;
                for (const buteegdehuun of cat.prods) {
                    const product = new Product(buteegdehuun);
                    myhtml += product.RenderAll();
                }
                myhtml += "</section>";
            }
        }

        // Replace the skeleton loading with actual product information
        const myapp = document.getElementById("myapp");
        myapp.innerHTML = myhtml;
    }

    showSkeletonLoading() {
        const skeletonLoadingHTML = `
        <div class="skeleton">
            <div class="article">
                <div class="image loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text bottom loading"></div>
            </div>

            <div class="article">
                <div class="image loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text bottom loading"></div>
            </div>

            <div class="article">
                <div class="image loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text bottom loading"></div>
            </div>

            <div class="article">
                <div class="image loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text bottom loading"></div>
            </div>

            <div class="article">
                <div class="image loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text bottom loading"></div>
            </div>

            <div class="article">
                <div class="image loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text bottom loading"></div>
            </div>

            <div class="article">
                <div class="image loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text bottom loading"></div>
            </div>

            <div class="article">
                <div class="image loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text loading"></div>
                <div class="text bottom loading"></div>
            </div>
        </div>
        `;

        const myapp = document.getElementById("myapp");
        myapp.innerHTML = skeletonLoadingHTML;
    }
}

const app = new App();
app.init();
