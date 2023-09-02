import iootz2 from '../images/ioootz-2.jpg'
import vriootz from '../images/vr-iootz.jpg'
import ioootz3 from '../images/ioootz-3.jpg'
/* import { useRef, useState, useEffect } from 'react' */







const HorizoSlider = () => {

    

    
  return (
    <div>

<section className="2-section">

<div id="page">

    <div className="page-text-container">
        <h1 className="page-firh1">
            Go Smart with it & Ot devices
        </h1>
            <p className="page-firp">
                <span className="page-span">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </span>                
            </p>

            <p className="pade-secp">
                <span className="page-span-2">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </span>
            </p>

            <p className="page-thip">
                <span className="page-span-3">       
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

export default HorizoSlider;