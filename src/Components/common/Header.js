/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Button, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = (event) => {
    // Eğer tıklanan element bir alt menü öğesi ise menüyü kapatma
    if (event.target.closest(".dropdown-submenu")) {
      return;
    }

    window.scrollTo(0, 0);
    setExpanded(false);
    setShowSubMenu(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleSubMenuLinkClick = (event) => {
    // Alt menü linkine tıklanırsa menünün kapanmasını önle
    event.stopPropagation();
  };

  return (
    <>
      <header className="header">
        <div
          className="topbar fixed-top sticky-top mb-0"
          style={{ padding: "7px", backgroundColor: "#e44514" }}
        >
          <Container>
            <div className="d-flex justify-content-between align-items-center">
              <div
                className="d-flex align-items-center"
                style={{ color: "#fff" }}
              >
                <span className="topbar__wrapper">
                  <ul
                    className="list-unstyled topbar__list"
                    style={{ color: "#243f88" }}
                  >
                    <li>
                      <span className="fas fa-envelope"></span>
                      <a
                        href="mailto:info@sekiryapi.com"
                        style={{
                          color: "#fff",
                          fontFamily: "Poppins",
                          fontSize: "12px",
                        }}
                      >
                        &nbsp; info@sekiryapi.com
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
              <div className="d-flex">
                <Button
                  style={{
                    backgroundColor: "#243f88",
                    color: "#fff",
                    padding: "3px 7px 3px 7px",
                    fontSize: "13px",
                  }}
                  onClick={() => changeLanguage("tr")}
                >
                  {t("TR")}
                </Button>
                &nbsp;
                <Button
                  style={{
                    backgroundColor: "#243f88",
                    color: "#fff",
                    padding: "3px 7px 3px 7px",
                    fontSize: "13px",
                  }}
                  onClick={() => changeLanguage("en")}
                >
                  {t("EN")}
                </Button>
              </div>
            </div>
          </Container>
        </div>

        <div className="container full-header main-header fixed-top sticky-top">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-6 col-md-6 col-lg-2 navbar-brand logo m-0">
              <Link as={Link} to="/" className="logo-img">
                <img
                  className="img-fluid justify-content-center mt-2"
                  src="assets/images/logo/sekir.webp"
                  alt="logo"
                  title="Şekir"
                />
              </Link>
            </div>

            <nav className="navigation navbar navbar-expand-lg col-lg-8">
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setExpanded(!expanded)}
              >
                <span className="icon ti-menu"></span>
              </button>
              <div
                className={`navbar-collapse collapse dual-nav ${
                  expanded ? "show" : ""
                }`}
              >
                <a
                  href="#"
                  className="closeNav-btn d-lg-none clearfix"
                  id="closeNav"
                  title="Close"
                  onClick={handleClick}
                >
                  <span className="menu-close mr-2">{t("Kapat")}</span>
                  <i className="ti-close" aria-hidden="true"></i>
                </a>
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      as={Link}
                      to="/"
                      onClick={handleClick}
                    >
                      {t("Anasayfa")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      as={Link}
                      to="/aboutus"
                      onClick={handleClick}
                    >
                      {t("Hakkımızda")}
                    </Link>
                  </li>
                  <li 
                    className={`nav-item dropdown ${isHovering ? 'show' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a 
                      className="nav-link dropdown-toggle" 
                      href="#" 
                      role="button"
                    >
                      {t("Ürünlerimiz")}
                    </a>
                    <div className={`dropdown-menu ${isHovering ? 'show' : ''}`}>
                      <Link
                        className="dropdown-item"
                        as={Link}
                        to="/pvc-pencere-kapi-sistemleri"
                        onClick={handleClick}
                      >
                        <i className="fa fa-chevron-right" style={{ fontSize: "13px" }}></i>
                        &nbsp;
                        {t("PVC Pencere ve Kapı")}
                      </Link>
                      <Link
                        className="dropdown-item"
                        as={Link}
                        to="/cam-balkon"
                        onClick={handleClick}
                      >
                        <i className="fa fa-chevron-right" style={{ fontSize: "13px" }}></i>
                        &nbsp;
                        {t("Cam Balkon Sistemleri")}
                      </Link>
                      <Link
                        className="dropdown-item"
                        as={Link}
                        to="/aluminyum"
                        onClick={handleClick}
                      >
                        <i className="fa fa-chevron-right" style={{ fontSize: "13px" }}></i>
                        &nbsp;
                        {t("Alüminyum Korkuluk Küpeşte")}
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      as={Link}
                      to="/uygulamalarimiz"
                      onClick={handleClick}
                    >
                      {t("Uygulamalarımız")}
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      className="nav-link"
                      as={Link}
                      to="/Sidebar"
                      onClick={handleClick}
                    >
                      Sidebar
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      as={Link}
                      to="/contact"
                      onClick={handleClick}
                    >
                      {t("İletişim")}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="col-6 col-md-6 col-lg-2 mt-1">
              
              <div className="search-box float-right">
                <a
                  href="https://wa.me/905512209291"
                  className="search-open search-toggle"
                  target="_blank"
                  onClick={handleClick}
                >
                  <i className="icons fa fa-whatsapp justify-content-center"></i>
                </a>
              </div>
              <div className="search-box float-right">
                <a
                  href="https://www.facebook.com/sekiryapi/?locale=tr_TR"
                  className="search-open search-toggle"
                  target="_blank"
                  onClick={handleClick}
                >
                  <i className="icons fa fa-facebook justify-content-center"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
