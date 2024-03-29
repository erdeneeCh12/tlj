class DarkMode extends HTMLElement {
    constructor() {
        super();
        this.#render();
    }

    connectedCallback() {
    }

    #render() {
        this.innerHTML = `
        <body>
    <header class="container">
        <a href="homee.html">
            <figure><img id="logo_pic" src="web_pic/logo4.png" alt="tous_les_jours_logo" width="230" height="30">
            </figure>
        </a>

        <ul class="navbar">
            <li><a href="taniltsuulga.html">Танилцуулга</a></li>
            <li><a href="buteegdhuun.html">Бүтээгдэхүүн</a></li>
            <li><a href="medee.html">Мэдээ</a></li>
        </ul>


        <section class="main">
            <!-- <i class='bx bxs-shopping-bag'></i> -->
            <img id="cart_icon" src="web_pic/icon_cart.png" alt="cart">
            <span class="cartItemCount js-cart-quantity" id="totalProduct">0</span>

            <a href="salbar.html" class="location"><img src="web_pic/icon_location.png" alt="location">Салбар</a>

            <article class="bx bx-menu" id="menu-icon"></article>
        </section>
    </header>

    <main>
        <section class="image-container">
            <h1>Freshly Baked Everyday</h1>
            <p>Өдөр бүр шинэ</p>
        </section>

        <!-- bidnii tuhai -->
        <section class="about">
            <figure><img src="web_pic/about2.jpg" alt="about"></figure>

            <article class="text">
                <h1>Бидний тухай</h1>
                <p>TOUS les JOURS /Тү Лэ Жүр/ нь францаар “Өдөр бүр” гэсэн утгатай ба мастер нарийн боовчны гараар
                    урласан Европ бэйкэрийг үйлчлүүлэгчиддээ өглөө бүр шинээр үйлдвэрлэн санал болгодог онцлогтой
                    юм.<br>Бид анхны салбараа 2016 оны 10 сарын 31-нд Хүүхдийн 100-д амжилттай нээн үйл ажиллагаа явуулж
                    эхлэснээр Монголын бэйкерийн салбарт шинэ соёл, технологийн дэвшлийг нэвтрүүлж чадсан билээ.</p>
                <form action="taniltsuulga.html" method="get"><button>Дэлгэрэнгүй</button></form>
            </article>
        </section>

        <!-- buteegdhuun -->
        <section class="product">
            <h1>Бүтээгдэхүүн</h1>
            <article>
                <a href="https://erdeneech12.github.io/tlj/buteegdhuun.html?category=bread">
                    <figure><img src="web_pic/protype_bread.jpg" alt="bread"></figure>
                </a>
                <a href="https://erdeneech12.github.io/tlj/buteegdhuun.html?category=bread">
                    <h2>Талх</h2>
                </a>
            </article>

            <article>
                <a href="https://erdeneech12.github.io/tlj/buteegdhuun.html?category=cake">
                    <figure><img src="web_pic/protype_cake1.png" alt="cake"></figure>
                </a>
                <a href="https://erdeneech12.github.io/tlj/buteegdhuun.html?category=cake">
                    <h2>Бялуу</h2>
                </a>
            </article>

            <article>
                <a href="https://erdeneech12.github.io/tlj/buteegdhuun.html?category=pastry">
                    <figure><img src="web_pic/protype_pastry.jpg" alt="pastry"></figure>
                </a>
                <a href="https://erdeneech12.github.io/tlj/buteegdhuun.html?category=pastry">
                    <h2>Зууш</h2>
                </a>
            </article>

            <article>
                <a href="https://erdeneech12.github.io/tlj/buteegdhuun.html?category=beverages">
                    <figure><img src="web_pic/protype_beverage.png" alt="beverage"></figure>
                </a>
                <a href="https://erdeneech12.github.io/tlj/buteegdhuun.html?category=beverages">
                    <h2>Уух зүйлс</h2>
                </a>
            </article>
        </section>

        <!-- medee -->
        <section class="news">
            <h1>Мэдээ мэдээлэл</h1>
            <article>
                <a href="homee.html">
                    <figure><img src="web_pic/medee1.jpg" alt="medee1"></figure>
                </a>
            </article>

            <article class="new_text">
                <p>TOUS les JOURS шинэ амт, шинэ дүр төрх бүхий шинэ салбараа нээлээ.</p>
                <p><time>2023-06-27</time></p>
                <form action="homee.html" method="get"><button>Дэлгэрэнгүй</button></form>
            </article>

            <article>
                <a href="homee.html">
                    <figure><img src="web_pic/medee2.jpg" alt="medee2"></figure>
                </a>
            </article>

            <article class="new_text">
                <p>TOUS les JOURS хэрэглэгчиддээ шинэ Салат & Сэндвичээ танилцуулж байна</p>
                <p><time>2022-07-08</time></p>
                <form action="homee.html" method="get"><button>Дэлгэрэнгүй</button></form>
            </article>
        </section>
    </main>

</body>  
        `
    }
}

window.customElements.define('home-with-dark-mode', DarkMode);



