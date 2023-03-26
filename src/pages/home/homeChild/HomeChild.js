import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function HomeChild() {
  const { t } = useTranslation(["nav"]);
  return (
    <nav className="menu__item--child">
      <ul>
        <li>
          <Link to="/home/world-gaming">{t("world-gaming")}</Link>
        </li>
        <li>
          <Link to="/home/released-game">{t("released-game")}</Link>
        </li>
        <li>
          <Link to="/home/just-for-gamer">{t("just-for-gamer")}</Link>
        </li>
        <li>
          <Link to="/home/just-featured-games">{t("just-featured-games")}</Link>
        </li>
        <li>
          <Link to="/home/world-meet-real">{t("world-meet-real")}</Link>
        </li>
        <li>
          <Link to="/home/gaming-products">{t("gaming-products")}</Link>
        </li>
        <li>
          <Link to="/home/lateat-news-articles">
            {t("lateat-news-articles")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HomeChild;
