const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/algoliasearch-lite.umd.Cjug1_Gc.js","_astro/_commonjsHelpers.Cpj98o6Y.js","_astro/index.CjrQgjXy.js","_astro/index.DPVnRsHl.js","_astro/index.D4gvhou8.js"])))=>i.map(i=>d[i]);
const k="modulepreload",_=function(o){return"/"+o},v={},p=function(e,n,f){let u=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),i=c?.nonce||c?.getAttribute("nonce");u=Promise.all(n.map(r=>{if(r=_(r),r in v)return;v[r]=!0;const l=r.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${h}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":k,l||(a.as="script",a.crossOrigin=""),a.href=r,i&&a.setAttribute("nonce",i),document.head.appendChild(a),l)return new Promise((t,s)=>{a.addEventListener("load",t),a.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${r}`)))})}))}return u.then(()=>e()).catch(c=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=c,window.dispatchEvent(i),!i.defaultPrevented)throw c})};console.log(`®Tell Señales - Todos los derechos reservados 🤖
https://www.indecopi.gob.pe/documents/20182/143803/DecretoLegislativo822.pdf `);const S=document.querySelector("#search-product"),E=S.querySelector("span"),d=document.querySelector("#modal-search"),L=d.querySelector(".Search-Cancel");let g=!1;const T=`
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    style="animation: spin 2s linear infinite;"
  >
    <path
      stroke="none"
      d="M0 0h24v24H0z"
      fill="none"
    ></path>
    <path d="M12 3a9 9 0 1 0 9 9"></path>
  </svg>
`,C=`
  <svg aria-label="true" width="16" height="16" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" data-astro-cid-patnjmll="" style="--icon-size: 1.7;">
    <path d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"></path>
  </svg> 
`,y=async()=>{E.innerHTML=T;const{default:o}=await p(async()=>{const{default:t}=await import("./algoliasearch-lite.umd.Cjug1_Gc.js").then(s=>s.a);return{default:t}},__vite__mapDeps([0,1])),{default:e}=await p(async()=>{const{default:t}=await import("./index.CjrQgjXy.js");return{default:t}},__vite__mapDeps([2,3,1])),{searchBox:n,hits:f}=await p(async()=>{const{searchBox:t,hits:s}=await import("./index.D4gvhou8.js");return{searchBox:t,hits:s}},__vite__mapDeps([4,1,3]));E.innerHTML=C,document.body.appendChild(d),d.show(),g=!0,document.body.style.overflowY="hidden";const u="TELL_SEGURIDAD_PRODUCTS",r=e({indexName:u,searchClient:o("EVPE0RYU8N","14bdd4985f3b412d4dd6ffb765545816"),stalledSearchDelay:500,future:{preserveSharedStateOnUnmount:!0}}),l={senalizaciones:"Señalizaciones",cintasSeguridad:"Cintas de Seguridad",articulosSeguridad:"Articulos de Seguridad",ropaSeguridad:"Ropa de seguridad",proteccionVial:"Proteccion Vial",luchaContraIncendio:"Lucha contra Incendios",epps:"Epps"},h=n({container:"#searchbox",autofocus:!0,showLoadingIndicator:!0,placeholder:"Buscar producto..",showReset:!0,showSubmit:!0}),a=f({container:"#hits",cssClasses:{item:"item-custom-class"},transformItems:t=>t.map(s=>({...s,category:l[s.tag]})),templates:{item:(t,{html:s,components:w})=>s`
        <div class="Hit">
          <a href="/seguridad/${t.slug}/">
            <div class="Hit-Container">
              <img
                class="hit-image"
                src="${t.image}?fit=pad&w=60&h=60"
              />
              <div class="Hit-Content">
                <span class="Hit-Title"> ${w.Highlight({hit:t,attribute:"name"})} </span>
                <span class="Hit-Category">${t.category}</span>
              </div>
              <div class="Hit-Action">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  class="Hit-Select-Icon"
                >
                  <g
                    stroke="currentColor"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 3v4c0 2-2 4-4 4H2"></path>
                    <path d="M8 17l-6-6 6-6"></path>
                  </g>
                </svg>
              </div>
            </div>
          </a>
        </div>
      `,empty:(t,{html:s})=>s`
          <div class="Search-noResults">
            <div class="Search-screenIcon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 20 20"
                fill="none"
                fill-rule="evenodd"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"
                ></path>
              </svg>
            </div>
            <p class="Search-title">No hay resultados para "<strong>${t.query}</strong>"</p>
          </div>
        `}});r.addWidgets([a,h]),r.start(),r.setUiState({[u]:{query:"señal"}}),r.on("render",()=>{console.log("render"),document.querySelector(".ais-SearchBox-input").focus(),d.setAttribute("data-state",r.status)})},m=()=>{d.close(),document.body.style.overflowY="auto",g=!1};window.addEventListener("keydown",o=>{o.key.toLowerCase()==="k"&&(o.metaKey||o.ctrlKey)&&(o.preventDefault(),y())});window.addEventListener("keydown",o=>{o.key==="Escape"&&g&&(o.preventDefault(),m())});S.addEventListener("click",y);L.addEventListener("click",m);d.addEventListener("click",o=>{o.target===o.currentTarget&&m()});class I extends HTMLElement{#e="__TELLSENALES_THEME__";constructor(){super(),this.#o(this.#a());const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&this.#o(this.#t(n.currentTarget.value))})}#t(e){return e==="auto"||e==="light"||e==="dark"?e:"auto"}#r(){return matchMedia("prefers-colo-scheme: light").matches?"light":"dark"}#o(e){window.ThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?this.#r():e,this.#s(e)}#s(e){typeof localStorage<"u"&&(e==="light"||e==="dark"?localStorage.setItem(this.#e,e):localStorage.removeItem(this.#e))}#a(){const e=typeof localStorage<"u"&&localStorage.getItem(this.#e);return this.#t(e)}}customElements.define("theme-select",I);export{p as _};
