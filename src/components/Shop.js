import "../styles/gallery.css";
import "../styles/shop.css";
import React, { useEffect, /*useRef*/ useState } from "react";

import { FaShippingFast, FaCoins } from "react-icons/fa";
import { FaWrench, FaArrowLeft } from "react-icons/fa";

import { createClient } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import offer from "../images/offer.png";
import placeholder from "../images/placeholder.jpg";

const client = createClient({
  space: "yl6ypwr5g4ob",
  environment: "master", // defaults to 'master' if not set
  accessToken: "RSTYXHOz79kc6Tw29CE4up1gjVqjVYySh7_rK04Onac",
});

function Shop() {
  const [selectedSection, setSelectedSection] = useState("shopLanding"); // Default section
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Update localStorage whenever cart changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  console.log("Cart content:", cart);

  const cartDescriptions = cart.map((item) => item.name).join(", ");

  const shopItems = [
    { id: "shopLanding", name: <FaHome />, isIcon: true },
    { id: "stereoscreens", name: "STEREO/SCREENS" },
    { id: "speakers", name: "SPEAKERS/SUBS" },
    { id: "amps", name: "AMPS" },
    { id: "bass", name: "BASSDEAL" },
    { id: "accessories", name: "ACCESSORIES" },
    { id: "security", name: "SECURITY" },
    { id: "styling", name: "STYLING" },
    { id: "airride", name: "AIRRIDE" },
    { id: "dashcams", name: "DASHCAMS" },
    { id: "motorhome", name: "MOTORHOME" },
    {
      id: "basket",
      name: (
        <>
          <span className="item-count">
            {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
          <FaShoppingBasket />
        </>
      ),
      isIcon: true,
    },
  ];

  const handleSectionSelection = (section) => {
    setSelectedSection(section);
  };

  const getProductImageUrl = (product) => {
    return product?.fields?.image?.fields?.file?.url;
  };
  function addToCart(product) {
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.sys.id);

    if (existingProduct) {
      // If the product already exists, increase its quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.sys.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product doesn't exist in the cart, add it
      const cartItem = {
        id: product.sys.id,
        name: product.fields.title,
        price: product.fields.price,
        image: getProductImageUrl(product),
        quantity: 1,
      };
      setCart((prevCart) => [...prevCart, cartItem]);
    }
  }

  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <section className="shop-section" id="shop">
      <div className="shop-item-container">
        <ul className="shop-item-links">
          {shopItems.map((item) => (
            <li
              key={item.id}
              className={`shop-item-link ${item.isIcon ? "basket" : ""}`}
              onClick={() => handleSectionSelection(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="shop-banner">
        <div className="banner-logos">
          <div className="banner-logo">
            <FaShippingFast className="banner-logo-img" />
            <p className="banner-logo-text">Fast Shipping </p>
          </div>

          <div className="banner-logo">
            <FaCoins className="banner-logo-img" />
            <p className="banner-logo-text">0% APR Financing</p>
          </div>

          <div className="banner-logo">
            <FaWrench className="banner-logo-img" />
            <p className="banner-logo-text">Expert Servicing</p>
          </div>
        </div>
      </div>

      {selectedSection === "shopLanding" && (
        <div className="shop-landing">
          <img src={offer} alt="" className="offer-img" />
          <button className="shop-now-button">SHOP NOW</button>
        </div>
      )}

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

      {selectedSection === "stereoscreens" && (
        <div>
          <img src={placeholder} alt="" />
        </div>
      )}
    </section>
  );
}

export default Shop;
