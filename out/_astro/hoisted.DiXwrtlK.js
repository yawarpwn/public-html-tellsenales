import{_ as b}from"./hoisted.1hUWump1.js";import{P as C}from"./photoswipe-lightbox.esm.Dmq7wy8N.js";import"./hoisted.Uuu7emr2.js";const x=500,A="auto",E=300,a=24,c="--_masonry-layout-col-count",h="--_masonry-layout-gap",g=1,p=new Map;function r(s,t,o){const e=parseFloat(s.getAttribute(t)||"");return isNaN(e)?o:e}function y(s,t,o){return isNaN(t)?Math.max(1,Math.ceil(s/o)):t}function _(s,t,o){const e=p.get(o);e!=null&&window.clearTimeout(e),p.set(o,window.setTimeout(s,t))}function v(s){let t=0,o=1/0;return s.forEach((e,n)=>{e<o&&(o=e,t=n)}),t}const f=document.createElement("template");f.innerHTML=`
  <style>
    :host {
      display: flex;
      align-items: flex-start;
      justify-content: stretch;
    }

    .column {
	  max-width: calc((100% / var(${c}, 1) - ((var(${h}, ${a}px) * (var(${c}, 1) - 1) / var(${c}, 1)))));
	  width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .column:not(:last-child) {
      margin-inline-end: var(${h}, ${a}px);
    }

    .column ::slotted(*) {
      margin-block-end: var(${h}, ${a}px);
      box-sizing: border-box;
      width: 100%;
    }

    /* Hide the items that has not yet found the correct slot */
    #unset-items {
      opacity: 0;
      position: absolute;
      pointer-events: none;
    }
  </style>
  <div id="unset-items">
    <slot></slot>
  </div>
`;class S extends HTMLElement{static get observedAttributes(){return["maxcolwidth","gap","cols"]}set maxColWidth(t){this.setAttribute("maxcolwidth",t.toString())}get maxColWidth(){return r(this,"maxcolwidth",x)}set cols(t){this.setAttribute("cols",t.toString())}get cols(){return r(this,"cols",A)}set gap(t){this.setAttribute("gap",t.toString())}get gap(){return r(this,"gap",a)}set debounce(t){this.setAttribute("debounce",t.toString())}get debounce(){return r(this,"debounce",E)}get $columns(){return Array.from(this.shadowRoot.querySelectorAll(".column"))}constructor(){super(),this.debounceId=`layout_${Math.random()}`,this.ro=void 0,this.currentRequestAnimationFrameCallback=void 0,this.attachShadow({mode:"open"}).appendChild(f.content.cloneNode(!0)),this.onSlotChange=this.onSlotChange.bind(this),this.onResize=this.onResize.bind(this),this.layout=this.layout.bind(this),this.$unsetElementsSlot=this.shadowRoot.querySelector("#unset-items > slot")}connectedCallback(){this.$unsetElementsSlot.addEventListener("slotchange",this.onSlotChange),"ResizeObserver"in window?(this.ro=new ResizeObserver(this.onResize),this.ro.observe(this)):window.addEventListener("resize",this.onResize)}disconnectedCallback(){this.$unsetElementsSlot.removeEventListener("slotchange",this.onSlotChange),window.removeEventListener("resize",this.onResize),this.ro!=null&&this.ro.unobserve(this)}attributeChangedCallback(t){switch(t){case"gap":this.style.setProperty(h,`${this.gap}px`);break}this.scheduleLayout()}onSlotChange(){(this.$unsetElementsSlot.assignedNodes()||[]).filter(o=>o.nodeType===g).length>0&&this.layout()}onResize(t){const{width:o}=t!=null&&Array.isArray(t)&&t.length>0?t[0].contentRect:{width:this.offsetWidth};y(o,this.cols,this.maxColWidth)!==this.$columns.length&&this.scheduleLayout()}renderCols(t){const o=this.$columns;if(o.length!==t){for(const e of o)e.parentNode&&e.parentNode.removeChild(e);for(let e=0;e<t;e++){const n=document.createElement("div");n.classList.add("column"),n.setAttribute("part",`column column-${e}`);const l=document.createElement("slot");l.setAttribute("name",e.toString()),n.appendChild(l),this.shadowRoot.appendChild(n)}this.style.setProperty(c,t.toString())}}scheduleLayout(t=this.debounce){_(this.layout,t,this.debounceId)}layout(){this.currentRequestAnimationFrameCallback!=null&&window.cancelAnimationFrame(this.currentRequestAnimationFrameCallback),this.currentRequestAnimationFrameCallback=requestAnimationFrame(()=>{const t=this.gap,o=Array.from(this.children).filter(i=>i.nodeType===g),e=y(this.offsetWidth,this.cols,this.maxColWidth),n=Array(e).fill(0),l=[];for(const i of o){const w=i.getBoundingClientRect().height;let d=v(n);n[d]+=w+t;const m=d.toString();i.slot!==m&&l.push(()=>i.slot=m)}for(const i of l)i();this.renderCols(e)})}}customElements.define("masonry-layout",S);const u=new C({gallery:"#gallery--getting-started",children:"a",pswpModule:()=>b(()=>import("./photoswipe.esm.CKijkUPa.js"),[])});u.on("uiRegister",()=>{u.pswp?.ui?.registerElement({name:"share",order:8,isButton:!0,className:"share-photo",html:`
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class="pswp__icn"
        aria-hidden="true" 
        class="pswp__icn" 
>
          <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
      </svg>
      `,onClick:(s,t,o)=>{const e=o.currSlide?.data.src;navigator.share({url:e,title:document.title})}})});u.init();
