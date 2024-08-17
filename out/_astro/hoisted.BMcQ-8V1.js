import"./hoisted.CI9AqNxH.js";import{_ as y}from"./hoisted.DxT2dKaY.js";import"./hoisted.0IjJLwnr.js";const c=document.querySelectorAll(".slide-item"),s=document.querySelector(".slide-box"),d=document.querySelector(".image-view lazy-image"),g=document.querySelector("#slide-next-button"),p=document.querySelector("#slide-prev-button");function l(){const r=s.scrollWidth-s.clientWidth,t=s.scrollLeft>0,o=s.scrollLeft<r;p.style.display=t?"block":"none",g.style.display=o?"block":"none"}c.forEach(r=>{r.addEventListener("click",()=>{c.forEach(n=>n.removeAttribute("data-active")),r.toggleAttribute("data-active");const t=r.querySelector("lazy-image"),o=t.getAttribute("data-src"),e=t.getAttribute("data-alt");d.setAttribute("data-src",o),d.setAttribute("data-alt",e)})});s.addEventListener("scroll",()=>{l()});g.addEventListener("click",()=>{s.scrollBy(64,0)});p.addEventListener("click",()=>{s.scrollBy(-64,0)});l();window.addEventListener("resize",()=>{l()});class f extends HTMLElement{slides;wrapper;constructor(){super(),this.slides=null,this.wrapper=null}connectedCallback(){const t=this.querySelector(".carousel-wrapper"),o=this.querySelector(".prev-button");this.querySelector(".next-button").addEventListener("click",()=>{t.scrollBy({left:300,behavior:"smooth"})}),o.addEventListener("click",()=>{t.scrollBy({left:-300,behavior:"smooth"})})}}customElements.define("carousel-component",f);const E=document.querySelector(".price-whole"),S=document.querySelectorAll(".regular-price"),w=document.querySelector(".discount"),u=document.querySelectorAll(".variant-item");u.forEach(r=>{r.addEventListener("click",()=>{u.forEach(n=>n.removeAttribute("data-active"));const t=r.getAttribute("data-regular-price"),o=r.getAttribute("data-offert-price"),e=r.getAttribute("data-discount");r.toggleAttribute("data-active"),S.forEach(n=>n.textContent=`S/${t}.00`),E.textContent=o,w.textContent=`-${e}%`})});const h=document.querySelector("[data-url]");h?.addEventListener("click",()=>{const{url:r}=h.dataset;navigator.share({url:r,title:"Ficha Técnica"})});const v=document.getElementById("share-button"),L=v?.dataset.title;v?.addEventListener("click",()=>{navigator.share({title:document.title,url:location.href,text:L})});const m=document.querySelector("#open-dialog-btn"),i=document.querySelector("#video-dialog"),k=`
  <svg width="16" height="16" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" viewBox="0 0 24 24" 
    stroke-width="1.5" 
    stroke="currentColor"> 
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"></path> 
  </svg>
`,A=`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        style="animation: spin 1.5s linear infinite"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        ></path>
        <path d="M12 3a9 9 0 1 0 9 9"></path>
      </svg>
`,a=document.querySelector("#share-video-btn");navigator.share||(a.style.display="none");a.addEventListener("click",async()=>{const r=a.getAttribute("data-video-url"),t=a.getAttribute("data-video-title"),o=await fetch(r).then(e=>e.blob());a.innerHTML=A,window.navigator.share({text:t,files:[new File([o],t,{type:o.type})],title:t}).then(()=>{console.log("Video compartido con exito")}).catch(e=>console.log("Error al compartir el video",e)).finally(()=>{a.innerHTML=k})});m instanceof HTMLLIElement&&i instanceof HTMLDialogElement&&m.addEventListener("click",async()=>{i.showModal();const{default:r}=await y(async()=>{const{default:e}=await import("./plyr.min.DTjjHomp.js");return{default:e}},[]),t=new r("#player"),o=document.querySelector("#close-dialog-btn");o instanceof HTMLButtonElement&&o.addEventListener("click",()=>{t.pause(),i.close()}),i.addEventListener("click",e=>{e.target===e.currentTarget&&(t.pause(),i.close())})});class q extends HTMLElement{static observedAttributes=["data-src"];src;alt;constructor(){super(),this.src=this.getAttribute("data-src"),this.alt=this.getAttribute("data-alt")}connectedCallback(){const t=this.querySelector(".image-skeleton");t.style.display="none";const o=this.querySelector(".image-container"),e=document.createElement("img");e.src=this.src,e.alt=this.alt,e.classList.add("lazy-image"),o.append(e)}attributeChangedCallback(t,o,e){this.updateImageSrc(e)}updateImageSrc(t){const o=this.querySelector("img"),[e]=t.split("?");o?.setAttribute("src",e)}}window.customElements.define("lazy-image",q);class x extends HTMLElement{tabs;panels;constructor(){super();const t=this.querySelector('[role="tablist"]');this.tabs=[...t.querySelectorAll('[role="tab"]')],this.panels=[...this.querySelectorAll('[role="tabpanel"]')],this.tabs.forEach((o,e)=>{o.addEventListener("click",n=>{n.preventDefault();const b=t.querySelector("[aria-selected]");n.currentTarget!==b&&this.switchTab(n.currentTarget,e)})})}switchTab(t,o){if(!t)return;this.tabs.forEach(n=>{n.removeAttribute("aria-selected"),n.setAttribute("tabindex","-1")}),this.panels.forEach(n=>{n.hidden=!0});const e=this.panels[o];e&&(e.hidden=!1),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),t.focus()}}customElements.define("tabs-component",x);
