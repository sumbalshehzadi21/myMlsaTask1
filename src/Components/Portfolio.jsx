/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pic1.jpg";

const imageAltText = "laptop with some code showing on screen";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "CS Department website",
    description:
      "This is my 5th semester project. In this project I have created a website of CS Department",
    url: "https://sumbalshehzadi21.github.io/bzu-cs-depart/index.html",
  },
  {
    title: "Conference website",
    description:
      "This is a project of one of my clients. In this project, I created a website for a conference.",
    url: "https://conference.bzu.edu.pk/ghfiifp24/",
  },
  {
    title: "About Myself",
    description:
      "I have created this website to described lil bit about myself.",
    url: "https://sumbalshehzadi21.github.io/about-me/",
  },
  {
    title: "JS-Quotes",
    description:
      "A simple JavaScript project that generates random quotes from an API. When you click the button, it fetches a new quote from the API and displays it on the page.",
    url: "https://sumbalshehzadi21.github.io/JS-Quotes/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
