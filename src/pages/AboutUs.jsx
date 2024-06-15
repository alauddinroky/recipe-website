import React from "react";
import "./AboutUs.css"; // Assuming you have a CSS file for styles
import aboutus from "../assets/aboutus.jpg";

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <img src={aboutus} alt="About Us" className="about-us-image" />
      <div className="about-us-content">
        <p>
          Welcome to our Recipe Website! We are passionate about food and
          dedicated to bringing you the best recipes from around the world.
        </p>
        <p>
          Our mission is to inspire you to cook delicious meals, whether you're
          a seasoned chef or just starting out in the kitchen. We believe that
          cooking should be fun, accessible, and enjoyable for everyone.
        </p>
        <p>
          Here, you'll find a diverse collection of recipes that cater to all
          tastes and dietary preferences. From hearty meals and quick snacks to
          decadent desserts and healthy options, we've got something for
          everyone.
        </p>
        <p>
          We carefully curate our recipes to ensure they are easy to follow and
          deliver great results. Each recipe is tested in our kitchen to
          guarantee that you'll have a successful cooking experience.
        </p>
        <p>
          Thank you for visiting our site. We hope our recipes inspire you to
          create wonderful meals and make lasting memories in the kitchen.
        </p>
        <p>Happy cooking!</p>
        <p>- The Recipe Website Team</p>
      </div>
    </div>
  );
}

export default AboutUs;
