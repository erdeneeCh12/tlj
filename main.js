//media deer tses heseg deer darah uyd dropdown menu needeg haadag
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener("click", () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle("open");
});

//App classin app object uusgej tuund init function duuddag
document.addEventListener("DOMContentLoaded", () => {
    const app = new App("myapp");
    app.init();
});

//cartny icon deer darah uyd block tagiig delgetslene
document.querySelector(".cart_icon").addEventListener("click", () => {
    const cart = document.querySelector("test-info");
    cart.style.display = "block";

});


//odoogyn urlaasa category parametriin utgyg avdag
const params = new URLSearchParams(document.location.search);
const par = params.get("category");

//JSON API-s fetchson func ashiglaj datagaa hadgalna
async function fetchJSON() {
    const response = await fetch(
        "https://api.jsonbin.io/v3/b/657536ff0574da7622d2d050"
    );
    const datasa = await response.json();
    const data = datasa.record;
    return data;
}


//buteegdehuuny medeellyg html helbereer renderlene
// productcart componentod hmtl bolon css bga
class Product {
    constructor(product) {
        this.image = product.image;
        this.name = product.Name;
        this.desc = product.Description;
        this.price = product.price;
        this.id = product.id;
    }

    RenderAll() {
        return `
        <product-cart name="${this.name}" image = "${this.image}" price = "${this.price}" id = "${this.id}" des = "${this.desc}"></product-cart>
        `;
    }
}


//ug classt buteegdehuun bolon skeleton loading renderledene
class App {
    constructor(targetid) {
        this.targetid = targetid;
        this.cart = [];
        this.products = [];
    }

    // buteegdehuunee submenu daragdsan eseheer renderlej haruuldag func
    // ugugdlyg tataj avch delgetslene
    async init() {
        //skeleton loading delgetslene
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

        this.products = await fetchJSON();

        //tuhain huudasruu orohod buh buteegdehuunii medeelleyg haruulna
        let myhtml = "";
        if (!par) {
            for (const cat of this.products) {
                myhtml += `<section class="cake">`;
                for (const buteegdehuun of cat.prods) {
                    const product = new Product(buteegdehuun);
                    myhtml += product.RenderAll();
                }
                myhtml += "</section>";
            }
        } 
        // cat-aar ni filterlej prodiig haruulna
        else {
            let filteredProducts = this.products.filter((prod) => prod.cat == par);

            for (const cat of filteredProducts) {
                myhtml += `<section class="cake">`;
                for (const buteegdehuun of cat.prods) {
                    const product = new Product(buteegdehuun);
                    myhtml += product.RenderAll();
                }
                myhtml += "</section>";
            }
        }

        // const myapp = document.getElementById(this.targetid);
        // myapp.insertAdjacentHTML("afterbegin", myhtml);

        // skeleton laoding uildelee buteegdehuunii medeelleer solino 
        const myapp = document.getElementById("myapp");
        myapp.innerHTML = myhtml;
 
    }

    //skeleton loading uildeliin html butets css ni product_style.css dotor bga
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
        //innerhtml dee delgetslene
        const myapp = document.getElementById("myapp");
        myapp.innerHTML = skeletonLoadingHTML;
    }
}

// enuuger but2-luu dataga url aar damjulad avn deer render dree onclick der ni zaagd ugcin
moveToProductDetailPage = function(id) {
    // console.log("hello");
    let currentURL = window.location.href;
    const urlParams2 = new  URL(window.location.href);
    let newUrl = urlParams2.origin;
    newUrl += `/tlj/but2.html?id=${id}`;
    // newUrl += `/but2.html?id=${id}`;
    window.location.href = newUrl;
  }



let tempList = JSON.parse(localStorage.getItem("productList"));
let totalCount = 0;
//buteegdehuun nemegdsen esehyg shalgaj toog ni tohiruulna
if (tempList) {
    for (let item of tempList) {
        totalCount += item.count;
    }
}

document.querySelector("#totalProduct").textContent = totalCount;
//buteegdehuun bhgu bol local-aa shalgana
if (
    localStorage.getItem("itemList") === null ||
    localStorage.getItem("itemList") === undefined
) {
    console.log("local deer item bairluullaa");
    let array = [];
    localStorage.setItem("itemList", JSON.stringify(array));
} else {
    console.log("local deer ugiin item baina");
}
