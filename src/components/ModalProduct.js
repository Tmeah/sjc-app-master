import React, { useState } from "react";
import "../styles/modalproduct.css";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import placeholder from "../images/placeholder.jpg";
import { BiLeftArrow } from "react-icons/bi";
import Shop from "./Shop";

function ModalProduct({ product, onClose, addToCart, getProductImageUrl }) {
  const [expandedSection, setExpandedSection] = useState(null);

  // Construct the full image URL here
  const imageUrl = `https:${product.fields.image.fields.file.url}`;

  const toggleSection = (sectionName) => {
    if (expandedSection === sectionName) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionName);
    }
  };

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => <p>{children}</p>,
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <b>{text}</b>,
    },
  };

  if (!product) return null;

  return (
    <div className="modal-overlay-product">
      <div className="modal-product">
        <button onClick={onClose} className="modal-product-btn">
          Close
        </button>
        {/* Use the constructed image URL */}
        <img src={imageUrl} alt={product.fields.title} />
        <div className="product-desc-container">
          <h1>{product.fields.title}</h1>
          <h2 onClick={() => toggleSection("Description")}>
            Description{" "}
            <BiLeftArrow
              className={`arrow ${
                expandedSection === "Description" ? "rotate" : ""
              }`}
            />
          </h2>

          {expandedSection === "Description" && (
            <span>
              {documentToReactComponents(product.fields.description, options)}
            </span>
          )}
          <h2 onClick={() => toggleSection("DeliveryInformation")}>
            Delivery Information{" "}
            <BiLeftArrow
              className={`arrow ${
                expandedSection === "DeliveryInformation" ? "rotate" : ""
              }`}
            />
          </h2>
          {expandedSection === "DeliveryInformation" && (
            <ul className="delivery-info-list">
              <li>
                {" "}
                Standard Delivery: All orders will be dispatched within 3-5
                working days and will arrive at your address within 7-10 working
                days from dispatch. Standard delivery is complimentary for
                orders over £100.
              </li>
              <li>
                Express Delivery: Orders placed before 12 noon (Monday-Friday)
                will be dispatched on the same day. Orders placed after 12 noon
                will be dispatched the next working day. Express delivery
                charges are £10.
              </li>
              <li>
                International Delivery: We ship our car audio and security
                products to most countries worldwide. International delivery
                charges are determined based on the weight of the products and
                the destination. All international orders will be dispatched
                within 5 working days.
              </li>
              <li>
                Tracking: Upon the dispatch of your order, an email containing
                tracking information will be sent to you. Please allow a minimum
                of 12 hours for the tracking details to update.
              </li>
            </ul>
          )}
          <h2 onClick={() => toggleSection("ReturnRefundPolicy")}>
            Return & Refund Policy{" "}
            <BiLeftArrow
              className={`arrow ${
                expandedSection === "ReturnRefundPolicy" ? "rotate" : ""
              }`}
            />
          </h2>
          {expandedSection === "ReturnRefundPolicy" && (
            <ul className="delivery-info-list">
              <li>
                {" "}
                Return Window: We offer a 30-day return window for any product
                you purchase, ensuring complete satisfaction with our car audio
                or security systems.
              </li>
              <li>
                Condition of Returns: The product must be unused, in its
                original condition, and returned with all original packaging and
                manuals. Items showing signs of wear or damage will not be
                accepted for return.
              </li>
              <li>
                Refunds: On receipt of the returned product, our quality
                assurance team will review it. If the return is approved, a
                refund will be processed to your original payment method within
                5-7 working days.
              </li>
              <li>
                Exchanges: Exchanges are available in the event you receive a
                defective or damaged product. Please contact our support team
                for assistance.
              </li>
              <li>
                Return Shipping: Customers bear the return shipping costs.
                However, should you receive a defective or incorrect item, we
                will cover the return shipping expenses.
              </li>
              <li>
                Initiating a Return: To commence a return, please get in touch
                with our support team, providing your order number and the
                reason for return.
              </li>
            </ul>
          )}
          <h1>£{product.fields.price}</h1>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({
                sys: { id: product.sys.id },
                fields: {
                  title: product.fields.title,
                  price: product.fields.price,
                  image: getProductImageUrl(product),
                },
              });
            }}
            className="add-to-cart-modal"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalProduct;
