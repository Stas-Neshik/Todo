import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2025 Менеджер задач. Все права защищены.</p>
        <nav className={styles.footerNav}>
          <a href="#" className={styles.footerLink}>
            О нас
          </a>
          <a href="#" className={styles.footerLink}>
            Политика конфиденциальности
          </a>
          <a href="#" className={styles.footerLink}>
            Контакты
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
