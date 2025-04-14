import{P as w}from"./photoswipe-lightbox.esm.Dmq7wy8N.js";import C from"./photoswipe.esm.BxGa2pwP.js";const S=500,E="auto",A=300,c=24,u="--_masonry-layout-col-count",h="--_masonry-layout-gap",g=1,p=new Map;function a(s,t,o){const e=parseFloat(s.getAttribute(t)||"");return isNaN(e)?o:e}function y(s,t,o){return isNaN(t)?Math.max(1,Math.ceil(s/o)):t}function x(s,t,o){const e=p.get(o);e!=null&&window.clearTimeout(e),p.set(o,window.setTimeout(s,t))}function $(s){let t=0,o=1/0;return s.forEach((e,n)=>{e<o&&(o=e,t=n)}),t}const f=document.createElement("template");f.innerHTML=`
  <style>
    :host {
      display: flex;
      align-items: flex-start;
      justify-content: stretch;
    }

    .column {
	  max-width: calc((100% / var(${u}, 1) - ((var(${h}, ${c}px) * (var(${u}, 1) - 1) / var(${u}, 1)))));
	  width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .column:not(:last-child) {
      margin-inline-end: var(${h}, ${c}px);
    }

    .column ::slotted(*) {
      margin-block-end: var(${h}, ${c}px);
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
`;class v extends HTMLElement{static get observedAttributes(){return["maxcolwidth","gap","cols"]}set maxColWidth(t){this.setAttribute("maxcolwidth",t.toString())}get maxColWidth(){return a(this,"maxcolwidth",S)}set cols(t){this.setAttribute("cols",t.toString())}get cols(){return a(this,"cols",E)}set gap(t){this.setAttribute("gap",t.toString())}get gap(){return a(this,"gap",c)}set debounce(t){this.setAttribute("debounce",t.toString())}get debounce(){return a(this,"debounce",A)}get $columns(){return Array.from(this.shadowRoot.querySelectorAll(".column"))}constructor(){super(),this.debounceId=`layout_${Math.random()}`,this.ro=void 0,this.currentRequestAnimationFrameCallback=void 0,this.attachShadow({mode:"open"}).appendChild(f.content.cloneNode(!0)),this.onSlotChange=this.onSlotChange.bind(this),this.onResize=this.onResize.bind(this),this.layout=this.layout.bind(this),this.$unsetElementsSlot=this.shadowRoot.querySelector("#unset-items > slot")}connectedCallback(){this.$unsetElementsSlot.addEventListener("slotchange",this.onSlotChange),"ResizeObserver"in window?(this.ro=new ResizeObserver(this.onResize),this.ro.observe(this)):window.addEventListener("resize",this.onResize)}disconnectedCallback(){this.$unsetElementsSlot.removeEventListener("slotchange",this.onSlotChange),window.removeEventListener("resize",this.onResize),this.ro!=null&&this.ro.unobserve(this)}attributeChangedCallback(t){switch(t){case"gap":this.style.setProperty(h,`${this.gap}px`);break}this.scheduleLayout()}onSlotChange(){(this.$unsetElementsSlot.assignedNodes()||[]).filter(o=>o.nodeType===g).length>0&&this.layout()}onResize(t){const{width:o}=t!=null&&Array.isArray(t)&&t.length>0?t[0].contentRect:{width:this.offsetWidth};y(o,this.cols,this.maxColWidth)!==this.$columns.length&&this.scheduleLayout()}renderCols(t){const o=this.$columns;if(o.length!==t){for(const e of o)e.parentNode&&e.parentNode.removeChild(e);for(let e=0;e<t;e++){const n=document.createElement("div");n.classList.add("column"),n.setAttribute("part",`column column-${e}`);const l=document.createElement("slot");l.setAttribute("name",e.toString()),n.appendChild(l),this.shadowRoot.appendChild(n)}this.style.setProperty(u,t.toString())}}scheduleLayout(t=this.debounce){x(this.layout,t,this.debounceId)}layout(){this.currentRequestAnimationFrameCallback!=null&&window.cancelAnimationFrame(this.currentRequestAnimationFrameCallback),this.currentRequestAnimationFrameCallback=requestAnimationFrame(()=>{const t=this.gap,o=Array.from(this.children).filter(i=>i.nodeType===g),e=y(this.offsetWidth,this.cols,this.maxColWidth),n=Array(e).fill(0),l=[];for(const i of o){const b=i.getBoundingClientRect().height;let d=$(n);n[d]+=b+t;const m=d.toString();i.slot!==m&&l.push(()=>i.slot=m)}for(const i of l)i();this.renderCols(e)})}}customElements.define("masonry-layout",v);const L=document.querySelector(".gallery-wrap"),_=document.querySelector("#gallery-template"),R=L.querySelector(".gallery-skeleton");_.style.visibility="visible";R.style.display="none";const T=document.querySelector("masonry-layout");T?.renderCols(2);const r=new w({gallery:"#gallery--getting-started",children:"a",pswpModule:C});r.on("uiRegister",function(){r.pswp.ui.registerElement({name:"custom-caption",order:9,isButton:!1,appendTo:"root",html:"Caption text",onInit:(s,t)=>{r.pswp.on("change",()=>{const o=r.pswp.currSlide.data.element;let e="";if(o){const n=o.querySelector(".hidden-caption-content");n?e=n.innerHTML:e=o.querySelector("img")?.getAttribute("alt")||""}s.innerHTML=e||""})}})});r.init();
