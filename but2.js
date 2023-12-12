// product_detail jsonbin file
const apiUrl = "https://api.jsonbin.io/v3/b/657536ff0574da7622d2d050"

// ene functionoor page ee shinechlene parameteree huleej avaad info haruulas section doo bicsn htmlee renderlesen 
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productID = urlParams.get("id");
    fetch(apiUrl).then(response => response.json()).then(data => {
        let products = data.record;
        const Product = getProductById(productID, products);
        const productInfoSection = document.getElementById("renderProductInfo");
        productInfoSection.innerHTML = `
        <section class="item_page">
            <article id="item">
                <figure id="product-image"><img src="${Product.image}" alt="Bread"></figure>
                <div id="price-add">
                    <p> ${Product.price} </p>
                    <button>Сагслах</button>
                </div>
            </article>
            
           <section class="c0ontainer">
            <article id="product-information" >
                <h2>${Product.Name}</h2>
                <h3>Шим тэжээл</h3>
                <article class="div">
                    <p>Калори</p>
                    <p class="items_1">${Product.Calories}</p>
                    <p>Нийт өөх тос</p>
                    <p class="items_1">${Product.Total_fat}</p>
                    <p>Ханасан өөх тос</p>
                    <p class="items_1">${Product.Satured_fat}</p>
                    <p>Транс тос</p>
                    <p class="items_1">${Product.Trans_fat}</p>
                    <p>Нийт нүүрс ус</p>
                    <p class="items_1">${Product.Total_Carbohybrate}</p>
                    <p>Нийт сахар</p>
                    <p class="items_1">${Product.Total_Sugar}</p>
                    <p>Уураг</p>
                    <p class="items_1">${Product.Protein}</p>
                  
                    <hr class="div_hr">
                    <hr class="div_hr">
                </article>
                
            </article>
            <article id="allergens">
                <h3>Харшил өгч болох зүйлс</h3>
                <hr>
                    <div id="allergens-icons">
                        <img alt="" loading="lazy" class="allergy-icon" src="https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deac5b_egg-allergy.svg">
                        <img alt="" loading="lazy" class="allergy-icon" src="https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deac97_dairy-allergy.svg">
                        <img alt="" loading="lazy" class="allergy-icon" src="https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deac59_soy-allergy.svg">
                        <img alt="" loading="lazy" class="allergy-icon" src="https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deac6f_wheat-allergy.svg">
                        <img alt="" loading="lazy" class="allergy-icon" src="https://assets-global.website-files.com/649249d29a20bd6bc3deac48/649249d29a20bd6bc3deac5a_tree-nut-allergy.svg">
                    </div>
                    <p><span>Хэмжээ :  ${Product.Size}</span></p>
                    <p><span>Хадгалах хугацаа : ${Product.Storage_time}</span></p>
                <p id="entrance"><span>Найрлага:</span> ${Product.Composition}</p>
            </article>
            </section>
        </section>
        `;
    })
});

// enuuugeer jsonoo oosoo  productiin id-g haij avsan.
function getProductById(productID, list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].prods.length; j++) {
            if (list[i].prods[j].id == productID) {
                return list[i].prods[j];
            }
        }
    }
}

