import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import feedback from "@/api/feedbackData.json";
import styles from "@/routes/AboutRoute.module.css";

export const AboutRoute = () => {
  const text = "About";
  const titleText = "Julia";

  return (
    <>
      <Header text={text} titleText={titleText} />
      <main className={styles["about-container"]}>
        <section className={styles["about-text"]}>
          <p className={styles["about-text-column"]}>
            Hi! My name is Julia and I'm a full-stack developer with a
            background in the fashion industry and a newfound passion for
            technology. After several years working as a pattern maker, I
            decided to change paths and pursue my growing interest in
            programming. I recently completed a two-year education in full-stack
            JavaScript, where I mainly worked with technologies like React, Vue,
            Node.js, TypeScript, PostgreSQL and MongoDB.
          </p>
          <p className={styles["about-text-column"]}>
            What drives me the most is building useful and user-friendly
            solutions, especially when it involves smart problem-solving and
            writing clean, scalable and maintainable code. Right now, I have a
            interest in backend development with .NET and C#, as well as
            exploring DevOps and CI/CD practices. That said, I enjoy the variety
            that full-stack development offers.
          </p>
          <p className={styles["about-text-column"]}>
            I thrive in collaborative environments and enjoy working in agile
            teams where communication and learning from each other are key. I'm
            curious, driven and not afraid of new challenges.
          </p>
          <p className={styles["about-text-column"]}>
            Outside of coding, I'm a structured, ambitious and hands-on person
            whether it's creating, hiking in nature or learning something
            completely new. I value simplicity, clarity and constant growth,
            both in code and in life.
          </p>
          <p className={styles["about-text-column"]}>
            If you're looking for a dedicated developer who's easy to work with
            and enjoys having fun along the way, feel free to reach out. Let's
            build something great together!
          </p>
          <img
            src="/images/me.jpg"
            alt="About me"
            className={styles["about-image"]}
          />
        </section>
        <section>
          <a
            href="/CV.pdf"
            download="JuliaPaulin-CV.pdf"
            className={styles["contact-link"]}
          >
            Download my CV
          </a>
          <Link to="/contact" className={styles["contact-link"]}>
            Contact Me
          </Link>
        </section>
        <article>
          <ul className={styles["feedback-list"]}>
            {feedback.map((text) => (
              <li key={text.id} className={styles["feedback-item"]}>
                &quot;{text.description}&quot;
              </li>
            ))}
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
};
