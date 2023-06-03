import"./hoisted.a61d2d48.js";class t extends HTMLElement{$slides;$wrapper;$prevButton;$nextButton;slideWidth;currentIndex;isScrolling;constructor(){super(),this.$slides=[],this.slideWidth=0,this.currentIndex=0,this.isScrolling=!1,this.$wrapper=null,this.$nextButton=null,this.$prevButton=null,this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.$slides=Array.from(this.shadowRoot.querySelectorAll("slider-slide")),this.$wrapper=this.shadowRoot.querySelector(".slider-wrapper"),this.$wrapper&&(this.slideWidth=this.$slides[0].offsetWidth+10,this.$wrapper.addEventListener("scroll",()=>{if(this.currentIndex===0?this.$prevButton?.classList.add("button-disabled"):this.$prevButton?.classList.remove("button-disabled"),this.currentIndex===this.$slides.length-3&&window.innerWidth>900?this.$nextButton?.classList.add("button-disabled"):this.currentIndex===this.$slides.length-1?this.$nextButton?.classList.add("button-disabled"):this.$nextButton?.classList.remove("button-disabled"),!this.isScrolling){const e=this.$wrapper.scrollLeft;this.currentIndex=Math.round(e/this.slideWidth)}})),this.$prevButton=this.shadowRoot.querySelector(".slider-button-prev"),this.$nextButton=this.shadowRoot.querySelector(".slider-button-next"),this.$prevButton&&this.$prevButton.addEventListener("click",()=>this.prevSlide()),this.$nextButton&&this.$nextButton.addEventListener("click",()=>this.nextSlide())}static get observedAttributes(){return[]}nextSlide(){this.currentIndex!==this.$slides.length-1&&(this.currentIndex++,this.scrollToCurrentSlide())}prevSlide(){this.currentIndex!==0&&(window.innerWidth>900&&this.currentIndex===this.$slides.length-1&&(this.currentIndex-=2),this.currentIndex--,this.scrollToCurrentSlide())}scrollToCurrentSlide(){this.isScrolling=!0;const e=this.currentIndex*this.slideWidth;this.$wrapper.scrollTo({left:e,behavior:"smooth"}),setTimeout(()=>{this.isScrolling=!1},500)}updateSlider(){const e=this.currentIndex*this.slideWidth;this.$wrapper&&(this.$wrapper.scrollLeft=e)}static get styles(){return`
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        margin-left: calc(50% - 50vw);
      }
      .slider-button-prev, .slider-button-next {
        border: 1px solid orange;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        flex-shrink: 0;
        box-sizing: border-box;
        height: 100%;
        width: 80px;
        z-index: 4;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
      }
      .slider-button-prev {
        left: 0;
      }
      .slider-button-next {
        right: 0;
      }

.button-disabled {
opacity: 0.35;
cursor: auto;
pointer-event: none;
}
      .slider-wrapper {
        display: flex;
        flex-direction: row;
        position: relative;
        flex-shrink: 0;
        box-sizing: border-box;
        gap: 20px;
        padding-left: 0px;
        scroll-snap-type: x mandatory;
        justify-content: flex-start;
        scroll-behavior: smooth;
        overflow-y: visible;
        overflow-x: scroll;
      }
      .slider-wrapper::-webkit-scrollbar {
        width: none;
        background: none;
      }
      slider-slide {
        display: flex;
        flex-direction: column;
        position: relative;
        flex-shrink: 0;
        box-sizing: border-box;
        height: auto;
        width: 300px;
        scroll-snap-align: center;
        transform: scale(1) translateY(0);
        direction: ltr;
        align-self: center;
        pointer-events: auto;
        cursor: pointer;
      }
      .chevron-container {
        margin-top: -1rem;
        display: flex;
        flex-direction: column;
        position: relative;
        flex-shrink: 0;
        box-sizing: border-box;
        background-color: var(--theme-bg);
        color: var(--theme-accent-secondary);
        width: 35px;
        max-width: 35px;
        border-radius: 100%;
        height: 35px;
        justify-content: center;
        align-items: center;
        border-style: solid;
        border-width: 1px;
        border-color: var(--theme-accent-secondary);
      cursor: auto;
      pointer-event: none;
      }

      .slider-button-next {
          align-items: flex-end;
      }
      .image-container {
        display: flex;
        flex-direction: column;
        position: relative;
        flex-shrink: 0;
        box-sizing: border-box;
        width: 100%;
        min-height: 100px;
        min-width: 20px;
        border-radius: 11px;
        overflow: hidden;
        filter: saturate(1.2);
      }
      .image-container:hover img {
        transform: scale(1.1);
        filter: saturate(1.8);
      }
      .image-container img {
        object-fit: cover;
        object-position: top;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        transition: all 300ms ease;
      }
      .image-border {
        display: flex;
        flex-direction: column;
        position: relative;
        flex-shrink: 0;
        box-sizing: border-box;
        padding-left: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-right: 5px;
        background: linear-gradient(
          0deg,
          rgba(24, 182, 246, 1) 0%,
          rgba(172, 127, 244, 1) 100%
        );
        border-radius: 16px;
      }
      .image-name {
  padding-top: 14px;
  padding-left: 14px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    `}render(){const e=Array.from(this.querySelectorAll("slider-slide")).map(i=>i.outerHTML).join("");this.shadowRoot.innerHTML=`
      <style>${t.styles}</style>
      <button aria-label='boton de navegacion slider atras' class='slider-button-prev button-disabled'>
        <div class="chevron-container left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
          </svg>
        </div>
      </button>
      <div class='slider-wrapper'>
        ${e}
      </div>
      <button aria-label='boton de navegacion slider adelante' class='slider-button-next'>
        <div class="chevron-container right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 19.5L15.75 12l-7.5-7.5"></path>
          </svg>
        </div>
      </button>
    `}}customElements.define("slider-container",t);
