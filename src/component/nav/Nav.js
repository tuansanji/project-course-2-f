import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, memo, useCallback, useRef, useState } from "react";
import i18next from "i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

import logo from "../../assets/img/logo.png";
import Form from "../../pages/form/Form";

import { formSelector } from "../.././redux/selector";
import HomeChild from "../../pages/home/homeChild/HomeChild";
import PagesChild from "../../pages/pages/pagesChild/PagesChild";
import ListShoppingChild from "./store/ListShoppingChild";
import { shoppingSelector } from "../.././redux/selector";
import "./nav.scss";

function Nav() {
  const navRef = useRef();
  const btnBackRef = useRef();

  const userCurrent = useSelector(formSelector).userCurrent;
  const listShoppingCart = useSelector(shoppingSelector);

  const [openNav, setOpenNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const { i18n, t } = useTranslation(["nav"]);
  const languageCurent = i18n.languages[0];

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY >= 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
      navRef.current.style.position = "fixed";
      navRef.current.style.top = 0;
    } else if (document.documentElement.scrollTop > 200) {
    } else {
      navRef.current.style.position = "absolute";
      navRef.current.style.top = "";
      navRef.current.style.animationPlayState = "running";
    }
  };
  const handleLanguegeChange = useCallback(
    (e) => {
      i18n.changeLanguage(e);
    },
    [languageCurent]
  );
  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };
  const handleBackToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
    btnBackRef.current.style.display = "none";
  }, []);

  return (
    <div className="nav" ref={navRef}>
      <div className="nav__logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className={openNav ? "nav__menu nav__open" : "nav__menu"}>
        <ul className="ul__nav" onClick={handleOpenNav}>
          <li className="menu__item">
            <NavLink className="a1" to="/">
              {t("home")}
            </NavLink>
            <HomeChild />
          </li>
          <li className="menu__item">
            <NavLink className="a1" to="/pages">
              {t("pages")}
            </NavLink>
            <PagesChild />
          </li>
          <li className="menu__item">
            <NavLink className="a1" to="/overview">
              {t("overview")}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="a1" to="/community">
              {t("community")}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="a1" to="/store">
              {t("store")}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="a1" to="/blog">
              {t("blog")}
            </NavLink>
          </li>
          <li className="menu__item">
            <a className="a1" href="#fotter">
              {t("contact")}
            </a>
          </li>
        </ul>
        <div id="store-icon">
          <span>{listShoppingCart.length}</span>
          <FontAwesomeIcon icon={["fas", "store"]} />
          <ListShoppingChild />
        </div>
        <div className="nav__language">
          <span
            className={languageCurent == "vi" ? "language__active" : null}
            value="vi"
            onClick={() => {
              handleLanguegeChange("vi");
            }}
          >
            VI
          </span>
          <span style={{ color: "#e4a101" }}>|</span>
          <span
            className={languageCurent == "en" ? "language__active" : null}
            value="en"
            onClick={(value) => {
              handleLanguegeChange("en");
            }}
          >
            EN
          </span>
        </div>
        <Form></Form>
      </div>
      {scroll && (
        <div
          className="btn-backToTop"
          ref={btnBackRef}
          onClick={handleBackToTop}
        >
          <FontAwesomeIcon icon={["fas", "caret-up"]} />
        </div>
      )}
      <div className="nav__close" onClick={handleOpenNav}>
        <FontAwesomeIcon icon={["fas", "bars"]} />
      </div>
    </div>
  );
}

export default memo(Nav);
