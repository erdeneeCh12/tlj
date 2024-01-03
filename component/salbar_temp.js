//template uusgene
const template = document.createElement("template");
//innerhtml dotroo door =html css haruulna 
template.innerHTML = `
<article>
    <figure><slot id="image" name="image"></slot></figure>
    <slot class="name" name="name"></slot>
    <p>Ажлын цаг : <time>08:00</time>-аас <time>22:00 </time>Өдөр бүр</p>
    <p>Утас : 7510-0151</p>
    <p>Багтаамж :60-100хүн</p>
    <p>Ойролцоо газрууд : үндэсний төв номын сан</p>
</article>
<style scope>
*{
    margin:0;
    padding:0;
}
article {
    font-family: 'Times New Roman', Times, serif;
    width: 20vw;
    border: 1px;
    border-radius: 12px;
    border-color: var(--nav-color);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 3rem;
    transition: transform 500ms;
    & h3 {
        font-size: 1rem;
        text-align: center;
    }
    & p {
        padding-top: 2px;
        padding-bottom: 2px;
    }
}
#image {
    width: 20vw;
    height: 13rem;
    border-radius: 12px;
    object-fit: cover;
    object-position: center;
}
article:hover{
    transform: translateY(-0.5rem);
}

@media all and (max-width: 960px) {
    #image {width: 35vw;} 
}

</style>
    `;


//gadnaas handah bolomjgu bolgono
class BranchInfo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "closed" });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("branch-info", BranchInfo);