import"./hoisted.-e4IHJc2.js";import"./hoisted.4bJ_GZSV.js";const p="overide";class h extends HTMLElement{_current=this.querySelector('a[aria-current="true"]');minH=parseInt(this.dataset.minH||"2",10);maxH=parseInt(this.dataset.maxH||"3",10);set current(t){t!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),t.setAttribute("aria-current","true"),this._current=t)}constructor(){super();const t=[...this.querySelectorAll("a")],r=e=>{if(e instanceof HTMLHeadingElement){if(e.id===p)return!0;const c=e.tagName[1];if(c){const i=parseInt(c,10);if(i>=this.minH&&i<=this.maxH)return!0}}return!1},n=e=>{if(!e)return null;const c=e;for(;e;){if(r(e))return e;for(e=e.previousElementSibling;e?.lastElementChild;)e=e.lastElementChild;const i=n(e);if(i)return i}return n(c.parentElement)},a=e=>{for(const{isIntersecting:c,target:i}of e){if(!c)continue;const d=n(i);if(!d)continue;const m=t.find(E=>E.hash==="#"+encodeURIComponent(d.id));if(m){this.current=m;break}}},o=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let s;const u=()=>{s&&s.disconnect(),s=new IntersectionObserver(a,{rootMargin:this.getRootMargin()}),o.forEach(e=>s.observe(e))};u();const g=window.requestIdleCallback||(e=>setTimeout(e,1));let l;window.addEventListener("resize",()=>{s&&s.disconnect(),clearTimeout(l),l=setTimeout(()=>g(u),200)})}getRootMargin(){const t=document.querySelector("header")?.getBoundingClientRect().height||0,r=this.querySelector("summary")?.getBoundingClientRect().height||0,n=t+r+32,a=n+53,o=document.documentElement.clientHeight;return`-${n}px 0% ${a-o}px`}}customElements.define("table-toc",h);class b extends h{set current(t){super.current=t;const r=this.querySelector(".display-current");r&&(r.textContent=t.textContent)}constructor(){super();const t=this.querySelector("details");if(!t)return;const r=()=>{t.open=!1};t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",r)}),window.addEventListener("click",n=>{t.contains(n.target)||r()}),window.addEventListener("keydown",n=>{if(n.key==="Escape"&&t.open){const a=t.contains(document.activeElement);if(r(),a){const o=t.querySelector("summary");o&&o.focus()}}})}}customElements.define("mobile-toc",b);