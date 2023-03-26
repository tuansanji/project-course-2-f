import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./style.scss";

function BreadCrumb({
  title1,
  title2 = "null",
  home = "home",
  pages = "pages",
  currentpage,
}) {
  const { t } = useTranslation(["content"]);

  return (
    <div className="bread-crumb">
      <div className="bread-crumb__container">
        <h2>
          {title1} <span> {title2}</span>
        </h2>
        <nav className="address">
          <ol>
            <li>
              <Link to="/">{t(home)}</Link>
            </li>
            <li>
              <Link to="/pages">{t(pages)}</Link>
            </li>
            <li>
              <Link to="/store">{currentpage}</Link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default BreadCrumb;
