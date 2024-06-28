const __vite__fileDeps=["_astro/algoliasearch-lite.umd.Co_JglXP.js","_astro/_commonjsHelpers.Cpj98o6Y.js","_astro/index.BV0hhtLE.js","_astro/index.DpHXXFbw.js","_astro/index.D-GIsIEI.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
const y="modulepreload",w=function(t){return"/"+t},v={},p=function(e,a,f){let u=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),c=i?.nonce||i?.getAttribute("nonce");u=Promise.all(a.map(o=>{if(o=w(o),o in v)return;v[o]=!0;const l=o.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${h}`))return;const s=document.createElement("link");if(s.rel=l?"stylesheet":y,l||(s.as="script",s.crossOrigin=""),s.href=o,c&&s.setAttribute("nonce",c),document.head.appendChild(s),l)return new Promise((r,n)=>{s.addEventListener("load",r),s.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${o}`)))})}))}return u.then(()=>e()).catch(i=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i})};console.log(`®Tell Señales - Todos los derechos reservados 🤖
https://www.indecopi.gob.pe/documents/20182/143803/DecretoLegislativo822.pdf `);const _=document.querySelector("#search-product"),d=document.querySelector("#modal-search"),L=d.querySelector(".Search-Cancel");let m=!1;const E=async()=>{const{default:t}=await p(()=>import("./algoliasearch-lite.umd.Co_JglXP.js").then(r=>r.a),__vite__mapDeps([0,1])),{default:e}=await p(()=>import("./index.BV0hhtLE.js"),__vite__mapDeps([2,3,1])),{searchBox:a,hits:f}=await p(()=>import("./index.D-GIsIEI.js"),__vite__mapDeps([4,1,3]));document.body.appendChild(d),d.show(),m=!0,document.body.style.overflowY="hidden";const u="TELL_SEGURIDAD_PRODUCTS",o=e({indexName:u,searchClient:t("EVPE0RYU8N","14bdd4985f3b412d4dd6ffb765545816"),stalledSearchDelay:500,future:{preserveSharedStateOnUnmount:!0}}),l={senalizaciones:"Señalizaciones",cintasSeguridad:"Cintas de Seguridad",articulosSeguridad:"Articulos de Seguridad",ropaSeguridad:"Ropa de seguridad",proteccionVial:"Proteccion Vial",luchaContraIncendio:"Lucha contra Incendios",epps:"Epps"},h=a({container:"#searchbox",autofocus:!0,showLoadingIndicator:!0,placeholder:"Buscar producto..",showReset:!0,showSubmit:!0}),s=f({container:"#hits",cssClasses:{item:"item-custom-class"},transformItems:r=>r.map(n=>({...n,category:l[n.tag]})),templates:{item:(r,{html:n,components:S})=>n`
        <div class="Hit">
          <a href="/seguridad/${r.slug}/">
            <div class="Hit-Container">
              <img
                class="hit-image"
                src="${r.image}?fit=pad&w=60&h=60"
              />
              <div class="Hit-Content">
                <span class="Hit-Title"> ${S.Highlight({hit:r,attribute:"name"})} </span>
                <span class="Hit-Category">${r.category}</span>
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
      `,empty:(r,{html:n})=>n`
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
            <p class="Search-title">No hay resultados para "<strong>${r.query}</strong>"</p>
          </div>
        `}});o.addWidgets([s,h]),o.start(),o.setUiState({[u]:{query:"señal"}}),o.on("render",()=>{console.log("render"),document.querySelector(".ais-SearchBox-input").focus(),d.setAttribute("data-state",o.status)})},g=()=>{d.close(),document.body.style.overflowY="auto",m=!1};window.addEventListener("keydown",t=>{t.key.toLowerCase()==="k"&&(t.metaKey||t.ctrlKey)&&(t.preventDefault(),E())});window.addEventListener("keydown",t=>{t.key==="Escape"&&m&&(t.preventDefault(),g())});_.addEventListener("click",E);L.addEventListener("click",g);d.addEventListener("click",t=>{t.target===t.currentTarget&&g()});class k extends HTMLElement{#e="__TELLSENALES_THEME__";constructor(){super(),this.#o(this.#a());const e=this.querySelector("select");e&&e.addEventListener("change",a=>{a.currentTarget instanceof HTMLSelectElement&&this.#o(this.#t(a.currentTarget.value))})}#t(e){return e==="auto"||e==="light"||e==="dark"?e:"auto"}#r(){return matchMedia("prefers-colo-scheme: light").matches?"light":"dark"}#o(e){window.ThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?this.#r():e,this.#s(e)}#s(e){typeof localStorage<"u"&&(e==="light"||e==="dark"?localStorage.setItem(this.#e,e):localStorage.removeItem(this.#e))}#a(){const e=typeof localStorage<"u"&&localStorage.getItem(this.#e);return this.#t(e)}}customElements.define("theme-select",k);export{p as _};
