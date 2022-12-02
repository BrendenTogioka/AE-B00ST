import BannerBg from "../public/assets/BG.png";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${BannerBg})` }}
      >
        <h1 className={styles.title}>Contact AE B00ST</h1>
        <div className={styles.ctaSection}>
          <form className={styles.ctaForm}>
            <input type="text" placeholder="Enter Your Email" />
            <textarea id="" placeholder="Write Your Message"></textarea>
            <button type="submit">Expand Your AE Toolbox</button>
          </form>
        </div>
      </div>
    </>
  );
}
