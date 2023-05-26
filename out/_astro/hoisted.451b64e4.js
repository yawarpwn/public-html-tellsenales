import"./hoisted.bf3be18f.js";class i extends HTMLElement{$slides;$wrapper;slideWidth;currentIndex;constructor(){super(),this.$slides=[],this.slideWidth=0,this.currentIndex=0,this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.$slides=Array.from(this.shadowRoot.querySelectorAll("slider-slide")),this.$wrapper=this.shadowRoot.querySelector(".slider-wrapper"),this.slideWidth=this.$slides[0].offsetWidth;const e=this.shadowRoot.querySelector(".slider-button-prev"),t=this.shadowRoot.querySelector(".slider-button-next"),r=this.shadowRoot.querySelector(".left-box"),o=this.shadowRoot.querySelector(".right-box");e.addEventListener("click",()=>this.prevSlide()),t.addEventListener("click",()=>this.nextSlide()),r.addEventListener("click",()=>this.prevSlide()),o.addEventListener("click",()=>this.nextSlide())}static get observedAttributes(){return[]}nextSlide(){this.currentIndex!==this.$slides.length-1&&(this.currentIndex++,this.updateSlider())}prevSlide(){this.currentIndex!==0&&(this.currentIndex--,this.updateSlider())}updateSlider(){const e=this.currentIndex*this.slideWidth;this.$wrapper.scroll({left:e,behavior:"smooth"})}static get styles(){return`
:host {
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin-left: calc(50% - 50vw);
}
.left-box {
    display: flex;
    flex-direction: column;
    position: absolute;
    flex-shrink: 0;
    box-sizing: border-box;
    height: 256px;
    width: 200px;
    z-index: 4;
    left: 0px;
    cursor: pointer;
}

.right-box {
    display: flex;
    flex-direction: column;
    position: absolute;
    flex-shrink: 0;
    box-sizing: border-box;
    height: 246px;
    width: 200px;
    z-index: 4;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, var(--theme-bg) 100%);
    right: 0px;
    cursor: pointer;
}

.image-name {
margin-top: 1rem;
padding-left: 1rem;
font-size: 14px;
}
.slider-wrapper {
    display: flex;
    flex-direction: row;
    position: relative;
    flex-shrink: 0;
    box-sizing: border-box;
    gap: 40px;
    padding-left: 0px;
    scroll-snap-type: x mandatory;
    justify-content: flex-start;
    scroll-behavior: smooth;
    overflow-y: visible;
    overflow-x: hidden;
}

slider-slide {
    display: flex;
    flex-direction: column;
    position: relative;
    flex-shrink: 0;
    box-sizing: border-box;
    height: auto;
    width: 300px;
    heigh: 200xp;
    scroll-snap-align: center;
    transform: scale(1) translateY(0);
    direction: ltr;
    align-self: center;
    pointer-events: auto;
    cursor: pointer;
}
.image-container {
    display: flex;
    flex-direction: column;
    position: relative;
    flex-shrink: 0;
    box-sizing: border-box;
    width: 100%;
    min-height: 200px;
    min-width: 20px;
    border-radius: 11px;
    overflow: hidden;
}
.image-container img {
    object-fit: cover;
    object-position: top;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}

.slider-button-prev,
.slider-button-next {
  position: absolute;
  width: 40px;
  heigh: 40px;
  top: 50%;
  transform: translateY(-50%);
}

.slider-button-prev {
left: 5px;
}

.slider-button-next {
  right: 5px;
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
    background: linear-gradient(0deg, rgba(24,182,246,1) 0%, rgba(172,127,244,1) 100%);
    border-radius: 16px;
}

`}render(){const e=Array.from(this.querySelectorAll("slider-slide")).map(t=>t.outerHTML).join("");this.shadowRoot.innerHTML=`
<style>${i.styles}</style>
          <div class='left-box'>
                    <div class="slider-button-prev">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                      </svg>
                    </div>
</div>
          <div class='right-box'>
                    <div class="slider-button-next">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                      </svg>
                    </div>
</div>
          </div>
          <div class="slider-wrapper">
            ${e}
        </div>

`}}customElements.define("slider-container",i);
