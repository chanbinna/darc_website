import Navigation from "../../../components/navigation";
import styles from "./addictions.module.css";
import Link from "next/link";
import Footer from "../../../components/footer";
import ScrollToTop from "../../../components/ScrollToTop";

export default function Addicitons() {
  return (
    <main className={styles.main}>
      <ScrollToTop />
      <Navigation />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>We Treat</h1>
          </div>
        </div>
        <div className={styles.chart}>
          <img src='/chartNew.svg' alt='' />
        </div>
        <div className={styles.text}>
          <p>
            *약리작용 기준을 기준으로 분류하였음 <br />
            *기타 약물은 임상실험 및 연구결과의 부재로인해 다양한 부작용이 생길
            수 있음 <br />
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
