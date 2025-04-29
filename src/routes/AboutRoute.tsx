import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import feedback from "@/feedbackData.json";
import styles from "@/routes/AboutRoute.module.css";

export const AboutRoute = () => {
  const text = "About";
  const titleText = "Julia";

  return (
    <>
      <Header text={text} titleText={titleText} />
      <main>
        <div>
          <p className={styles["about-text"]}>
            Hi! I'm Julia, a fullstack JavaScript developer with a creative edge
            and a background in fashion and pattern making. After years of
            working hands-on in the fashion industry, I transitioned into tech
            to explore my passion for problem solving and building smart digital
            solutions. I'm currently diving deep into React, Node.js, and cloud
            deployment, and I love creating user-friendly applications that
            bridge design and functionality. Whether it's a mobile app for
            internal tools or a sleek web interface. I'm all about making things
            that work well and look good.
          </p>
        </div>
        <div>
          <Link to="/contact" className={styles["contact-link"]}>
            Contact Me
          </Link>
        </div>
        <article>
          <ul className={styles["feedback-list"]}>
            {feedback.map((text) => (
              <li key={text.id} className={styles["feedback-item"]}>
                {text.description}
              </li>
            ))}
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
};
