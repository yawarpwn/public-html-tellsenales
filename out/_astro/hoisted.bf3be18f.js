class e extends HTMLElement{open=!1;$button;$window;$anchor;WhatsappIcon='<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#fff" baseProfile="tiny" overflow="visible" viewBox="0 0 24 24"><path d="m6.3 19.9.9.5a9.6 9.6 0 1 0-3.5-3.5l.5.9-.8 2.9 2.9-.8zM0 24.1l1.6-6A12 12 0 0 1 12 .1c6.6 0 12 5.4 12 12A12 12 0 0 1 6 22.5l-6 1.6zM7.6 6.4h.7c.2 0 .4.1.5.3l1 2.4c.1.2 0 .4-.1.6l-.3.4c-.1.4-.4.7-.4.7l-.1.3.1.2.1.1 1.2 1.5.4.4c.6.5 1.2.9 1.9 1.2l.3.1.2.1c.2 0 .3 0 .4-.2l1-1.1.5-.2h.2l1.7.7.7.3.2.3v.4l-.2.9-.3.4-.4.3-.1.1-.5.3a2 2 0 0 1-1 .3h-.7l-.7-.1c-1.7-.4-3.3-1.3-4.6-2.5l-.8-.8a11.5 11.5 0 0 1-2.4-3.3c-.1-.1-.3-.7-.3-1.3 0-.7.2-1.4.7-2l.3-.4.4-.2.4-.2z"/></svg>';XIcon='<svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" overflow="visible" width="22" height="22" xmlSpace="preserve"><path d="M2 22 22 2M2 2l20 20" fill="" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>';constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.$button=this.shadowRoot.querySelector(".btn"),this.$window=this.shadowRoot.querySelector(".window"),this.$anchor=this.shadowRoot.querySelector("a");const o=this.getAttribute("href");this.$anchor.setAttribute("href",o),this.$window.addEventListener("mouseover",()=>{const t=this.$window.querySelector("img");t.src="/assets/team/raquel_maldonado_2.webp"}),this.$window.addEventListener("mouseout",()=>{const t=this.$window.querySelector("img");t.src="/assets/team/raquel_maldonado.webp"}),this.$button.addEventListener("click",()=>{this.open=!this.open,this.$button.innerHTML=this.open?this.XIcon:this.WhatsappIcon,this.$button.classList.toggle("rotate-180"),this.$window.classList.toggle("open")})}static get styles(){return`
      /* Estilos CSS */
      :host {
      --size: 45px;
      --whatsapp-color: #00ff2a;
      --window-bg: hsl(256, 27%, 19%, 0.8);
      --window-color: #fff;
      --window-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
      --radius: 8px;
      }

      a {
      color: currentColor;
      text-decoration: none;
      }

p { 
margin: 0.5rem 0;
font-weigh: 400;
text-align: center;
}

      .container {
        position: fixed;
        bottom: 8px;
        right: 8px;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .btn.rotate-180 {
        transform: rotate(90deg)
      }
      
      .btn {
        position: relative;
        background: linear-gradient(90deg, rgba(20,230,27,0.9) 0%, rgba(47,231,167,0.9) 100%);
        backdrop-filter: blur(10px);
        outline: none;
        border: none;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 200ms ease-in-out;
        transform: rotate(0deg)
      }
      
      .window {
        position: fixed;
        bottom: 60px;
        right: 8px;
        padding: 1rem;
        background: var(--window-bg);
        backdrop-filter: blur(10px) saturate(180%);
        color: var(--window-color);
        visibility: hidden;
        transform: translateX(5rem);
        transition: all 200ms ease-in-out;
        box-shadow: var(--window-shadow);
        border-radius: var(--radius); 
      }


      .window-container {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.5rem;
        background: #fff1;
        border-radius: var(--radius); 
        cursor: pointer;
      }

      .window-container:hover {
        background: #fff2;
        transform: translate(-1px, -1px);
      }

      .window-container img {
        object-fit: cover;
        border-radius: var(--radius);
      }

      .whatsapp-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .whatsapp-wrap svg {
        width: 35px;
        height: 35px;
        fill: var(--whatsapp-color);
      }

      .texts {
      }

      .name {
        font-size: 14px;
      }

      .post {
        font-size: 12px;
color: #f7daff;
      }

      .online {
        color: var(--whatsapp-color);
        display: flex;
        align-items: center;
      }

      .online:before {
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 5px;
        display: block;
        background-color: var(--whatsapp-color);
        margin-right: 10px;
      }

      .open {
        visibility: visible;
        transform: translate(0, 0);
      }
    `}render(){this.shadowRoot.innerHTML=`
      <style>${e.styles}</style>
      <div class='container'>
        <div class='window'>
          <p>Contacte con nosotros vía <strong>WhatsApp</strong></p>
          <a target="_blank" class='window-container'>
            <img 
              alt='Foto de raquel Raquel Maldonado Ramirez' 
              title='Raquel Maldonado Ramirez' 
              width='60' 
              height='80' 
              src='https://tellsenales.com/assets/team/raquel_maldonado.webp' 
            />
            <div class='texts'>
              <div class='name'>Raquel Maldonado Ramirez</div>
              <div class='post'>Gerente Comercial</div>
              <div class='online'>online</div>
            </div>
            <div class='whatsapp-wrap'>
              ${this.WhatsappIcon}
            </div>
          </a>
        </div>
        <button aria-label='contacto via whatsapp boton' class='btn'>
          ${this.WhatsappIcon}
        </button>
      </div>
    `}}customElements.define("whatsapp-popup",e);
