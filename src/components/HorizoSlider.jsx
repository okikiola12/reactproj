import iootz2 from '../images/ioootz-2.jpg'
import vriootz from '../images/vr-iootz.jpg'
import ioootz3 from '../images/ioootz-3.jpg'
import { useRef, useState } from 'react'







const HorizoSlider = () => {



    let active = false;
let scrollerMiddle = document.querySelector('.scroller-middle');
let scrollerTop = document.querySelector('.scroller-top');

scrollerMiddle.addEventListener('mousedown',function(){
  active = "middle";
  scrollerMiddle.classList.add('scrolling');
});
document.body.addEventListener('mouseup',function(){
  active = false;
  scrollerMiddle.classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  scrollerMiddle.classList.remove('scrolling');
});
scrollerTop.addEventListener('mousedown',function(){
    active = "top";
    scrollerTop.classList.add('scrolling');
});
document.body.addEventListener('mouseup',function(){
  active = false;
  scrollerTop.classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  scrollerTop.classList.remove('scrolling');
});
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  let x = e.pageX;
  x -= document.querySelector('.wrapper').getBoundingClientRect().left;
  scrollIt(x);
});

function scrollIt(x){
  let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
  if (active==="middle"){
    document.querySelector('.middle').style.width = transform+"px";
    scrollerMiddle.style.left = transform-25+"px";
    if (scrollerTop.getBoundingClientRect().left>scrollerMiddle.getBoundingClientRect().left-5){
      document.querySelector('.top').style.width = transform-5+"px";
      scrollerTop.style.left = transform-30+"px";
    }
  }
  if (active==="top"){
    document.querySelector('.top').style.width = transform+"px";
    scrollerTop.style.left = transform-25+"px";
    if (scrollerTop.getBoundingClientRect().left>scrollerMiddle.getBoundingClientRect().left-5){
      document.querySelector('.middle').style.width = transform+5+"px";
      scrollerMiddle.style.left = transform-20+"px";
    }
  }
}
active = "middle";
scrollIt(460);
active = "top";
scrollIt(230);
active = false;
scrollerMiddle.addEventListener('touchstart',function(){
    active = "middle";
    scrollerMiddle.classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
    active = false;
    scrollerMiddle.classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
    active = false;
    scrollerMiddle.classList.remove('scrolling');
});

scrollerTop.addEventListener('touchstart',function(){
    active = "top";
    scrollerTop.classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
    active = false;
    scrollerTop.classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
    active = false;
    scrollerTop.classList.remove('scrolling');
});

document.querySelector('.wrapper').addEventListener('touchmove',function(e){
    if (!active) return;
    e.preventDefault();
    let x = e.touches[0].pageX;
    x -= document.querySelector('.wrapper').getBoundingClientRect().left;
    scrollIt(x);
});

    
  return (
    <div>

<section class="2-section">

<div id="page">

    <div class="page-text-container">
        <h1 class="page-firh1">
            Go Smart with it & Ot devices
        </h1>
            <p class="page-firp">
                <span class="page-span">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </span>                
            </p>

            <p class="pade-secp">
                <span class="page-span-2">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </span>
            </p>

            <p class="page-thip">
                <span class="page-span-3">       
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                </span>
            </p>
    </div>


    <div className="wrapper">
                <div className="bottom">
                    <img className="ioootz-2" src={iootz2} draggable="false" alt="main-images"/>
                </div>
                <div className="middle">
                    <img className="vr-iootz" src={vriootz} draggable="false" alt="vr-iootz"/>
                </div>
                <div className="scroller scroller-middle">
                    <div className="scroller scroller-top">
                            <svg
                                className="scroller__thumb"
                                xmlns="http://www.w3.org/2000/svg"
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                            >
                                <polygon points="0 50 37 68 37 32 0 50" fill="rgb(24,24,62)" />
                                <polygon points="100 50 64 32 64 68 100 50" fill="rgb(24,24,62)" />
                            </svg>
                        </div>
                </div>
                <div className="top">
                    <img className="ioootz" src={ioootz3} draggable="false" alt="ioootz"/>
                </div>
                <div className="scroller scroller-top">
                            <svg
                                className="scroller__thumb"
                                xmlns="http://www.w3.org/2000/svg"
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                            >
                                <polygon points="0 50 37 68 37 32 0 50" fill="rgb(24,24,62)" />
                                <polygon points="100 50 64 32 64 68 100 50" fill="rgb(24,24,62)" />
                            </svg>
                        </div>
            </div>

</div>

</section>

    </div>
  )
}

export default HorizoSlider
