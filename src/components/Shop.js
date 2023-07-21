import "../styles/gallery.css";
import  "../styles/shop.css"
import React, { useEffect, /*useRef*/ useState } from "react";

import {  FaShippingFast,FaCoins } from "react-icons/fa";
import { FaWrench, FaArrowLeft } from "react-icons/fa";

import { createClient } from "contentful";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import offer from '../images/offer.png'
import placeholder from '../images/placeholder.jpg'


const client = createClient({
  space: "yl6ypwr5g4ob",
  environment: "master", // defaults to 'master' if not set
  accessToken: "RSTYXHOz79kc6Tw29CE4up1gjVqjVYySh7_rK04Onac",
});

function Shop() {
  const [galleries, setGalleries] = useState([]);
  const [selectedSection, setSelectedSection] = useState('shopLanding'); // Default section


  useEffect(() => {
    client
      .getEntries({ content_type: "shopProduct"})
      .then((response) => setGalleries(response.items))
      .catch(console.error);
  });

  const handleSectionSelection = (section) => {
    setSelectedSection(section);
  };

  return (
    <section className="shop-section" id="shop">
   
      <div className="shop-item-container">

<ul className="shop-item-links">

<li class="shop-item-link" onClick={() => handleSectionSelection('shopLanding')}>
  <FaArrowLeft/>
</li>
<li class="shop-item-link" onClick={() => handleSectionSelection('stereoscreens')}>
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

      {selectedSection === 'shopLanding' && 
      <div className="shop-landing">
        <img src={offer} alt="" className="offer-img" />
        <button className="shop-now-button">SHOP NOW</button>
      </div>}

      {/* <div className="cards car-cards">
      {galleries.map((product) => (
  <div key={product.sys.id} className="product-card">
    <img
      src={product.fields.image.fields.file.url}
      alt={product.fields.title}
      style={{ width: "100%" }}
    />
    <h2>{product.fields.title}</h2>
    <p>Price: £{product.fields.price}</p>
    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(product.fields.description)}} />
    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(product.fields.features)}} />
    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(product.fields.deliveryInfo)}} />
    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(product.fields.returnInfo)}} />
  </div>
))}

      </div> */}

{selectedSection === 'stereoscreens' && <div>    
   <img src={placeholder} alt="" />
</div>}


    </section>
  );
}

export default Shop;
