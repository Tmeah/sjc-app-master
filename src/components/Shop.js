import "../styles/gallery.css";
import "../styles/shop.css";
import React, { useEffect, /*useRef*/ useState } from "react";
import { CheckoutForm } from "../components/CheckoutForm.js";
import {
  FaShippingFast,
  FaCoins,
  FaWrench,
  FaHome,
  FaShoppingBasket,
} from "react-icons/fa";
import offer from "../images/offer.png";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProductSection from "./ProductSection";
import Modal from "./Modal";

const stripePromise = loadStripe(
  "pk_test_51Nn1A4LGVdJ9rR4a6SEyNuC7MtHWqJMMwLJfMjzpBryvja6cuxiEa7CqmVXsmJ2GTNr07tzSiO6octmCx9Gr6h2x00KcUQVq6i"
);

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

      {selectedSection === "stereoscreens" && (
        <ProductSection
          productType="stereo"
          addToCart={addToCart}
          subsections={[
            "Screen Stereos",
            "Double Din",
            "Single Din",
            "Screen Accessories",
          ]}
        />
      )}

      {selectedSection === "speakers" && (
        <ProductSection
          productType="stereo"
          addToCart={addToCart}
          subsections={[
            "Coaxial",
            "Components",
            "Mid Woofers",
            "Sub Woofers",
            "Subwoofers With Box",
            "Tweeters",
            "Marine Speakers & Subs",
          ]}
        />
      )}

      {selectedSection === "amps" && (
        <ProductSection
          productType="stereo"
          addToCart={addToCart}
          subsections={[
            "Amplifiers",
            "Processors/Crossovers/EQ",
            "Power Capacitors",
            "Essential Add-Ons",
          ]}
        />
      )}

      {selectedSection === "bass" && (
        <ProductSection
          productType="stereo"
          addToCart={addToCart}
          subsections={[
            "Active & Passive Boxes",
            "Single Sub Bass Deals",
            "Double Sub Bass Deals",
            "Speaker & Amp Deals",
          ]}
        />
      )}

      {selectedSection === "accessories" && (
        <ProductSection
          productType="stereo"
          addToCart={addToCart}
          subsections={[
            "Stereo Fitting Accessories",
            "Amplifier Fitting Accessories",
            "Installation Accessories",
            "Audio/Visual Accessories",
            "Speaker Fitting Accessories",
            "Bluetooth Kit & Accessories",
          ]}
        />
      )}

      {selectedSection === "security" && (
        <ProductSection
          productType="stereo"
          addToCart={addToCart}
          subsections={[
            "Car Alarms & Accessories",
            "Parking Sensor Kits",
            "Vehicle Trackers",
            "ODB Port Security",
            "Laser/Speed Camera Detectors",
          ]}
        />
      )}

      {selectedSection === "styling" && (
        <ProductSection
          productType="stereo"
          addToCart={addToCart}
          subsections={[
            "Rotiform Wheels",
            "Alloy Wheel Accessories",
            "Performance Styling",
            "Performance Tuning",
            "Liberty Walk",
          ]}
        />
      )}

      {selectedSection === "airride" && (
        <ProductSection
          productType="stereo"
          addToCart={addToCart}
          subsections={[
            "Complete Air Ride Kits",
            "Front Air Kits",
            "Rear Air Kits",
            "Air Ride Management",
            "Accessories",
            "Builder Series",
          ]}
        />
      )}

      {selectedSection === "dashcams" && (
        <ProductSection
          productType="stereo"
          addToCart={addToCart}
          subsections={[
            "Alpine",
            "BlackVue",
            "Kenwood",
            "Pioneer",
            "Thinkware",
          ]}
        />
      )}

      {selectedSection === "motorhome" && (
        <ProductSection
          productType="stereo"
          addToCart={addToCart}
          subsections={[
            "Navigation & Multimedia Receivers",
            "Stereo Installation Accessories",
            "Complete Multimedia Bundles",
            "Audio Upgrade",
            "Reverse Cameras",
          ]}
        />
      )}

      {selectedSection === "basket" && (
        <div className="cart-display">
          <h2 className="cart-title">Cart Items</h2>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-des">
                <img src={item.image} alt={item.name} className="small-image" />
                {item.name}
              </div>
              £{item.price}
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="cart-btn"
              >
                -
              </button>
              Quantity {item.quantity}
              <button
                onClick={() => increaseQuantity(item.id)}
                className="cart-btn"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="cart-btn-remove"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            Total: £
            {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </div>

          {/* Conditionally render the checkout button */}
          {cart.length > 0 && (
            <button onClick={() => setIsModalOpen(true)} className="modal-btn">
              Proceed to Checkout
            </button>
          )}

          {cart.length <= 0 && (
            <h1 className="empty-basket-h1">
              Your Basket is looking kind of empty...
            </h1>
          )}

          <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
            <Elements stripe={stripePromise}>
              <CheckoutForm
                totalAmount={cartTotal}
                cartDescriptions={cartDescriptions}
              />
            </Elements>
          </Modal>
        </div>
      )}
    </section>
  );
}

export default Shop;
