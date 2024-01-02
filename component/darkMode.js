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
            <span class="quantity">0</span>

            <a href="salbar.html" class="location"><img src="web_pic/icon_location.png" alt="location">Салбар</a>

            <article class="bx bx-menu" id="menu-icon"> </article>
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

    <footer>
        <section class="social_address">
            <address id="social_feedback">
                <ul id="socials">
                    <li><a href="https://www.facebook.com/TousLesJoursMongolia">
                            <figure><img src="web_pic/logo_fb.png" alt="facebook" width="30" height="30"></figure>
                        </a></li>
                    <li><a href="https://www.instagram.com/touslesjoursmn/">
                            <figure><img src="web_pic/logo_ig.png" alt="instagram" width="30" height="30"></figure>
                        </a></li>
                    <li><a href="https://twitter.com/tljmn?lang=en">
                            <figure><img src="web_pic/logo_tw.png" alt="twitter" width="30" height="30"></figure>
                        </a></li>
                </ul>
            </address>

            <article id="feedback">
                <a href="homee.html">Хүний нөөц</a>
                <a href="homee.html">Санал хүсэлт</a>
            </article>

        </section>
        <hr>
        <section class="address">
            <address id="adds">
                <ul class="bla">
                    <li><img src="web_pic/icons_branch.png" alt="branch" width="24" height="24">
                        <p>Монгол Улс, Улаанбаатар хот, ХУД, 18-р хороо, Их Монгол гудамж, Хүннү 2222 хороолол</p>
                    </li>
                    <li><img src="web_pic/icons_mail.png" alt="mail" width="24" height="24">
                        <p>info@tlj.mn</p>
                    </li>
                    <li><img src="web_pic/icons_phone.png" alt="phone_num" width="24" height="24">
                        <p>(976) 7575-7510</p>
                    </li>
                </ul>
            </address>
            <p id="text">©2022 - АРТИЗАН ХХК. БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН</p>
    </footer>

    <!--js link-->
    <script src="home_script.js"></script>
    // <script src="./product.js"></script>
</body>

        <style scope>
        :root {
            --bg-color: #186049;
            --text-color: #fefefe;
            --cartnoti-color:#741717;
            
            --pro-color: #AD8558;
            --protext-color: #eddfca;
        
            --ft-color: #0a291f;
            --noti-color: #red;
            --nav-color: #bebebe;
            --navtext-color: #0a291f;
        
            /* dark mode  */
            --bg-color-dark: #113328;
            --text-color-dark: #969494;
            --cartnoti-color-dark:#440f0f;
            
            --pro-color-dark: #66543f;
            --protext-color-dark: #7a5d32;
        
            --ft-color-dark: #000000;
            --noti-color-dark: #maroon;
            --nav-color-dark: #525252;
            --navtext-color-dark: #194134;
        }
        @media (prefers-color-scheme: dark) {
            body{
                background-color: #9b9a9a;
                & hr{border-color: var(--nav-color-dark);}
                & .about{background-color: #9b9a9a;}
                & .news{background-color: #9b9a9a;}
                & .product{
                    background-color: var(--pro-color-dark);
                    color: var(--text-color-dark);
                    & a h2{color: var(--text-color-dark);}
                    & article:after{background-color: var(--text-color-dark); }
                }
            }
            a{color: var(--text-color-dark);}
            img{filter: brightness(65%);} 
            button {
                background-color: var(--bg-color-dark);
                color: var(--text-color-dark);
                border-color: #9b9a9a;
            }
            .image-container {
                background: url('web_pic/backimg.jpg') center/cover no-repeat;
                filter: brightness(65%);
                & h1{color: var(--text-color-dark);}
                & p{color: var(--text-color-dark);}
            }
        } 
        </style>
        `
    }
}

window.customElements.define('home-with-dark-mode', DarkMode);
