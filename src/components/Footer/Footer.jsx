import React, { useRef } from "react";
import "./Footer.css";
import { useEffect } from "react";

const Footer = () => {
  const sectionsRef = useRef([]);
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });
    return () =>
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
  }, []);
  return (
    <footer className="footer">
      <div
        className="footer-content"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="footer-section about">
          <h1 className="logo-text">
            Recipe<span>Site</span>
          </h1>
          <p>
            Welcome to RecipeWebsite, your go-to source for delicious and
            easy-to-make recipes. Explore our collection and get inspired to
            cook something new today!
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#recipes">Recipes</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <i className="fas fa-envelope"></i> info@recipewebsite.com
            </li>
            <li>
              <i className="fas fa-phone"></i> +1 234 567 890
            </li>
          </ul>
          <div className="socials">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 RecipeWebsite | Designed by Mohammed Alauddin
      </div>
    </footer>
  );
};

export default Footer;
