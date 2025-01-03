const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/algoliasearch-lite.umd.igwhkkoY.js","_astro/_commonjsHelpers.CqkleIqs.js","_astro/index.BIa8YObW.js","_astro/index.B5qmB4Uo.js","_astro/index.CECOJJHr.js"])))=>i.map(i=>d[i]);
import{_ as r}from"./preload-helper.CLcXU_4U.js";const c={IndexName:"TELL_SEGURIDAD_PRODUCTS",AppId:"EVPE0RYU8N"},y="14bdd4985f3b412d4dd6ffb765545816",l=document.querySelector("#search-product"),d=l.querySelector("span"),o=document.querySelector("#modal-search"),E=o.querySelector(".Search-Cancel");let n=!1;const S=`
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
`,I=`
  <svg aria-label="true" width="16" height="16" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" data-astro-cid-patnjmll="" style="--icon-size: 1.7;">
    <path d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"></path>
  </svg> 
`,u=async()=>{d.innerHTML=S;const{default:t}=await r(async()=>{const{default:e}=await import("./algoliasearch-lite.umd.igwhkkoY.js").then(a=>a.a);return{default:e}},__vite__mapDeps([0,1])),{default:h}=await r(async()=>{const{default:e}=await import("./index.BIa8YObW.js");return{default:e}},__vite__mapDeps([2,1,3])),{searchBox:p,hits:g}=await r(async()=>{const{searchBox:e,hits:a}=await import("./index.CECOJJHr.js");return{searchBox:e,hits:a}},__vite__mapDeps([4,1,3]));d.innerHTML=I,document.body.appendChild(o),o.show(),n=!0,document.body.style.overflowY="hidden";const s=h({indexName:c.IndexName,searchClient:t(c.AppId,y),stalledSearchDelay:500,future:{preserveSharedStateOnUnmount:!0}}),v={senalizaciones:"Señalizaciones",cintasSeguridad:"Cintas de Seguridad",articulosSeguridad:"Articulos de Seguridad",ropaSeguridad:"Ropa de seguridad",proteccionVial:"Proteccion Vial",luchaContraIncendio:"Lucha contra Incendios",epps:"Epps"},m=p({container:"#searchbox",autofocus:!0,showLoadingIndicator:!0,placeholder:"Buscar producto..",showReset:!0,showSubmit:!0}),f=g({container:"#hits",cssClasses:{item:"item-custom-class"},transformItems:e=>e.map(a=>({...a,category:v[a.tag]})),templates:{item:(e,{html:a,components:w})=>a`
        <div class="Hit">
          <a href="/seguridad/${e.slug}/">
            <div class="Hit-Container">
              <img
                class="hit-image"
                src="${e.image}?fit=pad&w=60&h=60"
              />
              <div class="Hit-Content">
                <span class="Hit-Title"> ${w.Highlight({hit:e,attribute:"name"})} </span>
                <span class="Hit-Category">${e.category}</span>
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
      `,empty:(e,{html:a})=>a`
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
            <p class="Search-title">No hay resultados para "<strong>${e.query}</strong>"</p>
          </div>
        `}});s.addWidgets([f,m]),s.start(),s.setUiState({[indexName]:{query:"señal"}}),s.on("render",()=>{console.log("render"),document.querySelector(".ais-SearchBox-input").focus(),o.setAttribute("data-state",s.status)})},i=()=>{o.close(),document.body.style.overflowY="auto",n=!1};window.addEventListener("keydown",t=>{t.key.toLowerCase()==="k"&&(t.metaKey||t.ctrlKey)&&(t.preventDefault(),u())});window.addEventListener("keydown",t=>{t.key==="Escape"&&n&&(t.preventDefault(),i())});l.addEventListener("click",u);E.addEventListener("click",i);o.addEventListener("click",t=>{t.target===t.currentTarget&&i()});
