import React, { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.burgerMenu}>
      <button className={styles.burgerIcon} onClick={toggleMenu}>
        {isOpen ? <CloseIcon closeMenu={closeMenu} /> : <BurgerIcon />}
      </button>
      {isOpen && (
        <div className={styles.menuOverlay}>
          <div className={styles.menuContent}>
            <MenuItem icon={<HomeIcon />} text="Home" />
            <MenuItem icon={<AboutIcon />} text="About" />
            <MenuItem icon={<ServicesIcon />} text="Services" />
          </div>
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ icon, text }) => (
  <div className={styles.menuItem}>
    <div className={styles.menuListItem}>
      <span className={styles.menuItemIcon}>{icon}</span>
      <span className={styles.menuItemText}>{text}</span>
    </div>
  </div>
);

const BurgerIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

const CloseIcon = ({ closeMenu }) => (
  <button className={styles.closeButton} onClick={closeMenu}>
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  </button>
);
const HomeIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#999" d="M12 20V10h4v10h5V12h3l-10-9-10 9h3v8z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

const AboutIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#999"
      d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-1 14H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V6h10v2z"
    />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

const ServicesIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#999"
      d="M20 20H4v-4h16v4zM4 10v4h16v-4H4zm0-6h16v4H4V4zm3 6h2v2H7v-2zm0-6h2v2H7V4zm4 0h2v2h-2V4zm0 6h2v2h-2v-2zm0 6h2v2h-2v-2zm4 0h2v2h-2v-2zm0-6h2v2h-2v-2zm0-6h2v2h-2V4z"
    />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

export default Header;
