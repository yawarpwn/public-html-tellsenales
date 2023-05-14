class t extends HTMLElement{connectedCallback(){this.rating=this.getAttribute("rating"),this.render()}styles(){}render(){this.innerHTML=`
            <style>
            .start-rating {
                  height: 16px;
                  width: 83px;
                  background-image: url(/assets/images/stars-sprite-small.png);
                  margin: 4px 0;
            }
            </style>
            <div class='start-rating' style="background-position: 0 ${(this.rating+1)*16}px;" src=''></div>
            `}}customElements.define("start-rating",t);
