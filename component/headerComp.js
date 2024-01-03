class HeaderSection extends HTMLElement {
    constructor() {
      super();
      this.#render();
    }
  
    connectedCallback() {}
  
    #render() {
      this.innerHTML = `
      <header class="container">
      <a href="homee.html" ><figure><img id="logo_pic" src="web_pic/logo4.png" alt="tous_les_jours_logo" width="230" height="30"></figure></a>

      <section>
          <ul class="navbar">
              <li><a href="taniltsuulga.html">Танилцуулга</a></li>
              <li><a href="buteegdhuun.html">Бүтээгдэхүүн</a></li>
              <li><a href="medee.html">Мэдээ</a></li>
          </ul>  
      </section>
        

      <section class="main">
          <img class="cart_icon" src="web_pic/icon_cart.png" alt="cart" >
          <span class="cartItemCount js-cart-quantity" id="totalProduct">0</span>

          <a href="salbar.html" class="location"><img src="web_pic/icon_location.png" alt="location">Салбар</a>

          <article class="bx bx-menu" id="menu-icon"> </article>
      </section>    
    </header>  

      `;
    }
  }
  
  window.customElements.define("header-section", HeaderSection);
  