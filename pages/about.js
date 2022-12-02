import BannerBg from "../public/assets/BG.png";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${BannerBg})` }}
      >
        <h1 className={styles.title}>About AE B00ST</h1>
      </div>

      <div className={styles.aboutSection}>
        <div className={styles.aboutVideo}>
          <video width="100%" height="100%" autoPlay loop muted playsInline>
            <source
              src={require("../public/assets/Dot_Sphere.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <div className={styles.aboutContent}>
          <h2>After Effects Leaders</h2>
          <p>
            We share the tips, tricks, and hacks to take your After Effects
            creations to the next level!
          </p>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2>Boost Your Animations With AE B00ST</h2>
            <p>
              Sign up for weekly motion graphics & typography tips, tricks, and
              hacks!
            </p>
            <form className={styles.ctaForm}>
              <input type="text" placeholder="Enter Your Email" />
              <button type="submit">Expand Your AE Toolbox</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
