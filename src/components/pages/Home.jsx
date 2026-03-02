import React from "react";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>ANDI Pro Market</h1>
        <p className="subtitle">
          Manufacturing of metal structures and metal products
        </p>

        <div className="rating">
          <strong>5.0</strong>
          <span>27 reviews</span>
        </div>

        <div className="meta">
          <span>15 subscribers</span>
          <span>3 subscriptions</span>
        </div>

        <div className="checks">
          <span>Company verified</span>
          <span>Details verified</span>
          <span>Phone number verified</span>
        </div>
      </section>

      <section className="schedule">
        <h3>Hours</h3>
        <ul>
          <li>Monday – Friday: 9:30 AM - 5:30 PM</li>
          <li>Saturday: Closed</li>
          <li>Sunday: Closed</li>
        </ul>
      </section>

      <section className="gallery-wrapper">
        <div className="gallery">
          <img src="/images/obuvnica.jpg" alt="Obuvnica" />
          <img src="/images/veshalka.jpg" alt="Veshalka" />
          <img src="/images/work1.jpg" alt="Work 1" />
          <img src="/images/work2.jpg" alt="Work 2" />
          <img src="/images/work3.jpg" alt="Work 3" />
        </div>
      </section>
    </main>
  );
}

export default Home;
