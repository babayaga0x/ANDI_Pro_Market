import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About ANDI Pro Market Company</h1>
      <div className="about-info">
        <p>Rating: 5.0 (27 reviews)</p>
        <p>Followers: 15 | Following: 3</p>
        <p>On Avito since November 2020</p>
        <p>Company verified | Details verified | Phone confirmed</p>
      </div>

      <div className="about-description">
        <h2>Manufacturing of metal structures and metal products</h2>
        <p>Custom metal products and metal structures</p>
        <ul>
          <li>
            ⚙ We manufacture metal products of any complexity and volume based
            on your samples and drawings. Welding services.
          </li>
          <li>
            ⚙ All orders for custom metal structures are completed according to
            the agreed schedule.
          </li>
          <li>✔ We guarantee timely completion of complex orders.</li>
          <li>✔ Our own modern production facility.</li>
          <li>
            ✔ Each calculation is individual. Economy of scale applies: the
            larger the batch, the lower the price.
          </li>
        </ul>
        <p>
          ☎ Phone: <a href="tel:+79330221632">+7 933 022-16-32</a>
        </p>
      </div>

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "10px",
          border: "5px solid #f39c12",
          height: "400px",
        }}
      >
        <a
          href="https://yandex.ru/maps/44/izhevsk/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: 0,
          }}
        >
          Izhevsk
        </a>
        <a
          href="https://yandex.ru/maps/44/izhevsk/geo/ulitsa_timiryazeva/11037713/?ll=53.239365%2C56.867793&utm_medium=mapframe&utm_source=maps&z=17.84"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Timiryazeva Street — Yandex Maps
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=53.239365%2C56.867793&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCggxMTAzNzcxMxJm0KDQvtGB0YHQuNGPLCDQo9C00LzRg9GA0YLRgdC60LDRjyDQoNC10YHQv9GD0LHQu9C40LrQsCwg0JjQttC10LLRgdC6LCDRg9C70LjRhtCwINCi0LjQvNC40YDRj9C30LXQstCwIgoNG_VUQhWaeGNC&z=17.84"
          width="100%"
          height="400"
          frameBorder="1"
          allowFullScreen={true}
          style={{ position: "relative", borderRadius: "8px" }}
          title="Yandex Map"
        ></iframe>
      </div>
    </div>
  );
}

export default About;
