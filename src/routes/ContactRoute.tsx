import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useState } from "react";
import styles from "@/routes/ContactRoute.module.css";

export const ContactRoute = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const text = "Contact Me";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    alert(
      "Thank you for contacting me! This form is not yet functional. Please reach out via email at paulinjulia@gmail.com"
    );
  };

  return (
    <>
      <Header text={text} />
      <main>
        <div className={styles["contact-container"]}>
          <form onSubmit={handleSubmit} className={styles["contact-form"]}>
            <div className={styles["contact-form-group"]}>
              <label htmlFor="name" className={styles["contact-form-label"]}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles["contact-form-name-email"]}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["contact-form-group"]}>
              <label htmlFor="email" className={styles["contact-form-label"]}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles["contact-form-name-email"]}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["contact-form-group"]}>
              <label htmlFor="message" className={styles["contact-form-label"]}>
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className={styles["contact-form-textarea"]}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className={styles["contact-form-submit-button"]}
            >
              Send
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};
