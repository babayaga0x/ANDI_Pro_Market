import React from "react";
import "./Portfolio.css";

const works = [
  {
    id: 1,
    title: "Hanger",
    image: "/images/veshalka.jpg",
  },
  {
    id: 2,
    title: "Shoe Rack",
    image: "/images/obuvnica.jpg",
  },
  {
    id: 3,
    title: "Metal Structure 1",
    image: "/images/work1.jpg",
  },
  {
    id: 4,
    title: "Metal Structure 2",
    image: "/images/work2.jpg",
  },
  {
    id: 5,
    title: "Metal Structure 3",
    image: "/images/work3.jpg",
  },
];

function Portfolio() {
  return (
    <main>
      <h2>Portfolio</h2>
      <p>Examples of completed work.</p>

      <div className="portfolio-gallery">
        {works.map((work) => (
          <div className="portfolio-card" key={work.id}>
            <img src={work.image} alt={work.title} />
            <div className="portfolio-title">{work.title}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Portfolio;
