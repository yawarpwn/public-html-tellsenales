import"./hoisted.TFVhu6gM.js";class s extends HTMLElement{btn;constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggle())}toggle(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}setExpanded(t){this.setAttribute("aria-expanded",String(t))}}customElements.define("whatsapp-popup",s);const e=document.getElementById("scroll-to-top");function d(){const t=(document.body.scrollTop||document.documentElement.scrollTop)>1e3?"block":"none";e?.parentElement?.classList.toggle("opacity-0",t==="none"),e?.classList.toggle("cursor-default",t==="none")}window.addEventListener("scroll",d);e?.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});class i extends HTMLElement{button;constructor(){super(),this.button=this.querySelector("button"),this.button.addEventListener("click",()=>this.toggleExpanded());const t=this.closest("nav");t&&t.addEventListener("keydown",n=>this.closeOnScape(n))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnScape(t){t.code=="Escape"&&(this.setExpanded(!1),this.button.focus())}}customElements.define("menu-button",i);