import"./hoisted.e4914c89.js";const e=document.querySelector("swiper-container"),t={injectStyles:[`
          :host {
            --swiper-theme-color: var(--theme-accent-secondary);
            --swiper-navigation-size: 20px;
          }

          .swiper-button-next,
          .swiper-button-prev {
             border: 1px solid var(--theme-accent-secondary); 
             background: var(--theme-bg); 
             width: 40px ; 
             height: 40px ; 
             border-radius: 100%; 
          }
          .swiper-pagination-bullet {
          }
      `]};Object.assign(e,t);e.initialize();
