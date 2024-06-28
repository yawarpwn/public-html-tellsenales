import"./hoisted.1hUWump1.js";import"./hoisted.Uuu7emr2.js";class o extends HTMLElement{img;container;spinner;constructor(){super();const e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.classList.add("container");const i=document.createElement("div");i.classList.add("spinner"),i.textContent="loading...",t.appendChild(i);const n=document.createElement("img");n.alt=this.getAttribute("alt")||"",t.appendChild(n),e.appendChild(t);const s=document.createElement("style");s.textContent=`
      .container {
        position: relative;
        display: inline-block;
      }
      .spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30px;
        height: 30px;
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-top-color: #000;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      img {
        display: none;
        width: 100%;
        height: auto;
      }
      img.loaded {
        display: block;
      }
`,e.appendChild(s),this.container=t,this.spinner=i,this.img=n}loadImage(){const e=this.getAttribute("data-src");if(!e){console.error("No src attribute provided for lazy-load-image element");return}this.img.src=e,this.img.onload=()=>{this.img.classList.add("loaded"),this.spinner.style.display="none"}}connectedCallback(){const e=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(this.loadImage(),e.unobserve(this))})});e.observe(this)}}window.customElements.define("image-lazy",o);
