import React from "react";
import { useTranslation } from "react-i18next";

function PagesChild() {
  const { t } = useTranslation(["nav"]);
  return (
    <nav className="menu__item--child">
      <ul>
        <li>
          <a href="#world-gaming">{t("abount-story")}</a>
        </li>
        <li>
          <a href="#lateat-news-articles">{t("upcoming-games")}</a>
        </li>
        <li>
          <a href="#lateat-news-articles">{t("game-single")}</a>
        </li>
      </ul>
    </nav>
  );
}

export default PagesChild;
