import "../styles/gallery.css";
import  "../styles/shop.css"
import React, { useEffect, /*useRef*/ useState } from "react";

import { FaInstagram, FaShippingFast,FaCoins } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";

import { createClient } from "contentful";

const client = createClient({
  space: "yl6ypwr5g4ob",
  environment: "master", // defaults to 'master' if not set
  accessToken: "RSTYXHOz79kc6Tw29CE4up1gjVqjVYySh7_rK04Onac",
});

function Shop() {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "gallery" })
      .then((response) => setGalleries(response.items))
      .catch(console.error);
  });

  return (
    <section className="section2" id="shop">
      <div className="gallery-title">
      </div>

      <div className="shop-item-container">

<ul className="shop-item-links">
<li class="shop-item-link">
STEREO/SCREENS
</li>
<li class="shop-item-link"> 
SPEAKERS/SUBS 
</li>
<li class="shop-item-link">
AMPS
</li>
<li class="shop-item-link">
BASSDEAL
</li>
<li class="shop-item-link">
ACCESSORIES
</li>
<li class="shop-item-link">
SECURITY
</li>
<li class="shop-item-link">
STYLING
</li>
<li class="shop-item-link">
AIRRIDE
</li>
<li class="shop-item-link">
DASHCAMS
</li>
<li class="shop-item-link">
MOTORHOME
</li>


</ul>
</div>

      <div className="shop-banner">
      <div className="banner-logos"> 

      <div className="banner-logo">
      <FaShippingFast className = "banner-logo-img"/> 
      <p className = "banner-logo-text">
        Fast Shipping </p>
      </div>
    

    <div className="banner-logo">
<FaCoins  className = "banner-logo-img" />
    <p className = "banner-logo-text">
0% APR Financing
</p>
</div>


    <div className="banner-logo">
        <FaWrench className = "banner-logo-img" />
    <p className = "banner-logo-text">
        Expert Servicing
        </p>

    </div>
        
       


        </div>
      </div>

      <div className="cards car-cards">
        {galleries.map((gallery) => (
          <div key={gallery.sys.id} className="container-pics">
            <div className="pic--card">
              <div className="pic-card--img">
                {gallery.fields.carpics.map((pic) => (
                  <>
                    <div className="first-content">
                      <img
                        key={pic.sys.id}
                        src={pic.fields.file.url}
                        alt={pic.fields.title}
                        style={{ width: "100%" }} // adjust this as necessary
                      />
                    </div>
                    <div className="second-content">
                      <p>
                        {pic.fields.title}
                        {pic.fields.description &&
                          `: ${pic.fields.description}`}
                      </p>
                      <FaInstagram className="insta-logo" />
                    </div>
                    <div className="hover-overlay"></div>
                  </>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shop;
