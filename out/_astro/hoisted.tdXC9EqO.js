import"./hoisted.-e4IHJc2.js";import"./hoisted.4bJ_GZSV.js";class i extends HTMLElement{tabs;panels;constructor(){super();const e=this.querySelector('[role="tablist"]');this.tabs=[...e.querySelectorAll('[role="tab"]')],this.panels=[...this.querySelectorAll('[role="tabpanel"]')],console.log("panels: ",this.panels),this.tabs.forEach((r,s)=>{r.addEventListener("click",t=>{t.preventDefault();const a=e.querySelector("[aria-selected]");t.currentTarget!==a&&this.switchTab(t.currentTarget,s)})})}switchTab(e,r){if(!e)return;this.tabs.forEach(t=>{t.removeAttribute("aria-selected"),t.setAttribute("tabindex","-1")}),this.panels.forEach(t=>{t.hidden=!0});const s=this.panels[r];s&&(s.hidden=!1),e.removeAttribute("tabindex"),e.setAttribute("aria-selected","true"),e.focus()}}customElements.define("tabs-component",i);