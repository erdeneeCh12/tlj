class FooterSection extends HTMLElement {
    constructor() {
        super();
        this.#render();
    }

    connectedCallback() {

    }

    #render() {
        this.innerHTML = `
        <footer>
        <section class="social_address">
            <address id="social_feedback">
            <ul id="socials">
                <li><a href="https://www.facebook.com/TousLesJoursMongolia"><figure><img src="web_pic/logo_fb.png" alt="facebook" width="30" height="30"></figure></a></li>
                <li><a href="https://www.instagram.com/touslesjoursmn/"><figure><img src="web_pic/logo_ig.png" alt="instagram" width="30" height="30"></figure></a></li>
                <li><a href="https://twitter.com/tljmn?lang=en"><figure><img src="web_pic/logo_tw.png" alt="twitter" width="30" height="30"></figure></a></li>
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
                    <li><img src="web_pic/icons_branch.png" alt="branch" width="24" height="24"><p>Монгол Улс, Улаанбаатар хот, ХУД, 18-р хороо, Их Монгол гудамж, Хүннү 2222 хороолол</p></li>
                    <li><img src="web_pic/icons_mail.png" alt="mail" width="24" height="24"><p>info@tlj.mn</p></li>
                    <li><img src="web_pic/icons_phone.png" alt="phone_num" width="24" height="24"><p>(976) 7575-7510</p></li>
                </ul>
            </address>
            <p id="text">©2022 - АРТИЗАН ХХК. БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН</p>
    </footer>
        `
    }
}

window.customElements.define('footer-section', FooterSection);