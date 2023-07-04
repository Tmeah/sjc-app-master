import "../styles/gallery.css";
import React, { useEffect, /*useRef*/ useState } from "react";

import { FaInstagram } from "react-icons/fa";

import { createClient } from "contentful";

const client = createClient({
  space: "yl6ypwr5g4ob",
  environment: "master", // defaults to 'master' if not set
  accessToken: "RSTYXHOz79kc6Tw29CE4up1gjVqjVYySh7_rK04Onac",
});

function Gallery() {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "gallery" })
      .then((response) => setGalleries(response.items))
      .catch(console.error);
  });

  return (
    <section className="section2" id="gallery">
      <div className="gallery-title">
        <p className="red gallery-header">Gallery</p>
        <h2 className="gallery-para">Check Out Our Latest Work</h2>
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

export default Gallery;
