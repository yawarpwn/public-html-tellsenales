/* empty css                       */import{o as c}from"./jsxRuntime.module.524dbbf4.js";function m(e){return e.replace(/[0-9]/,a=>"-"+a).replace(/([A-Z])/g,a=>"-"+a.toLowerCase())}function n(e){return e.replace(/-/g," ")}const l=e=>e[0].toUpperCase()+e.toLowerCase().slice(1),p=({categories:e,onCategoryChange:a,selectedCategory:o,link:s})=>{const i=r=>{a&&a(r)},t=s?"a":"button";return c("div",{className:"category-carousel__list ",children:e.map(r=>c(t,{className:`category-carousel__item ${r===o?" active":""}`,onClick:()=>i(r),href:s?`/seguridad/c/${r}/`:"",children:[c("div",{className:"category-carousel__icon-container",children:c("div",{className:"category-carousel__border",children:c("img",{width:"30",height:"30",src:`/icons/${r}.svg`})})}),c("span",{children:l(n(r))})]},r))})};export{p as C,l as c,m as t};