import React, { useEffect, useRef } from "react";
import "./AboutUs.css";
import kitchen from "../../assets/kitchen-section.jpg";
import chef from "../../assets/chef.jpg";
import chef2 from "../../assets/chef-2.jpg";
import blogger from "../../assets/blogger.jpg";
const AboutUs = () => {
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

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="about-us">
      {/* <section
        className="intro section"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="intro-content">
          <h2>About Us</h2>
          <p>
            Welcome to RecipeWebsite, your number one source for all things
            recipe. We're dedicated to giving you the very best of culinary
            inspiration, with a focus on variety, taste, and quality.
          </p>
        </div>
      </section> */}
      <section
        className="story section"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2024 by YourName, RecipeWebsite has grown from a small
            blog into a comprehensive resource for home cooks. YourName's
            passion for food and cooking inspired the creation of this platform,
            which now serves millions of visitors worldwide. From traditional
            dishes to innovative recipes, we strive to bring the best culinary
            content to our audience.
          </p>
          <img src={kitchen} alt="Our Kitchen" />
        </div>
      </section>
      <section
        className="team section"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <div className="team-content">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={chef} alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>Head Chef</p>
            </div>
            <div className="team-member">
              <img src={chef2} alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Recipe Developer</p>
            </div>
            <div className="team-member">
              <img src={blogger} alt="Team Member 3" />
              <h3>Emily Johnson</h3>
              <p>Food Blogger</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
