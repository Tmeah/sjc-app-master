import React, { useState, useEffect } from "react";
import placeholder from "../images/placeholder.jpg";
import "../styles/productsection.css";
import { createClient } from "contentful";
import ModalProduct from "./ModalProduct";
import { FaArrowLeft } from "react-icons/fa";

function ProductSection({ addToCart, productType, subsections }) {
  const [selectedSubsection, setSelectedSubsection] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Add this state

  // New function to handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // New function to close the modal
  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  const client = createClient({
    space: "yl6ypwr5g4ob",
    environment: "master",
    accessToken: "RSTYXHOz79kc6Tw29CE4up1gjVqjVYySh7_rK04Onac",
  });

  const handleSubsectionClick = (subsection) => {
    setProducts([]);
    setSelectedSubsection(subsection);
  };

  const handleBackToSubsections = () => {
    setSelectedSubsection(null);
  };

  useEffect(() => {
    if (selectedSubsection) {
      setLoading(true);
      client
        .getEntries({
          content_type: "product",
          "fields.productType": selectedSubsection,
        })
        .then((response) => {
          if (response && response.items) {
            setProducts(response.items);
          }
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedSubsection]);

  const getProductImageUrl = (product) => {
    return product.fields.image && product.fields.image.fields.file.url
      ? product.fields.image.fields.file.url
      : placeholder;
  };

  return (
    <div className={productType}>
      {selectedSubsection ? (
        <>
          <button className="back-btn" onClick={handleBackToSubsections}>
            Go back
          </button>

          {/* Display products */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="products-container">
              {products.map((product) => (
                <div
                  key={product.sys.id}
                  className="product-item"
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={getProductImageUrl(product)}
                    alt={product.fields.title}
                    className="product-image"
                  />
                  <h3 className="product-title">{product.fields.title}</h3>
                  <h3 className="product-price">${product.fields.price}</h3>
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
                    className="add-to-cart"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
          {selectedProduct && (
            <ModalProduct
              product={selectedProduct}
              onClose={handleModalClose}
              getProductImageUrl={getProductImageUrl}
              addToCart={addToCart}
            />
          )}
        </>
      ) : (
        // Display subsections
        <div className="sub-sections-container">
          {subsections.map((subsection, index) => (
            <div
              key={index}
              onClick={() => handleSubsectionClick(subsection)}
              className={`sub-sections ${
                selectedSubsection === subsection ? "sub-section-selected" : ""
              }`}
            >
              <div className="sub-container">
                <img
                  src={placeholder}
                  alt={subsection}
                  className="product-img"
                />
                {subsection}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductSection;
