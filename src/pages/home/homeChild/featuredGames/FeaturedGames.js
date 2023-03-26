import { useCallback, useEffect, useState, memo } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import ChildItem from "./ChildItem";

import "./featuredGames.scss";

function FeaturedGames() {
  const { t } = useTranslation(["content"]);
  const [listGames, setListGames] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:9000/games")
      .then((response) => setListGames(response.data));
  }, []);
  return (
    <div className="featured-games">
      <div className="featured-games__bg"></div>
      <div className="featured-games__container">
        <div className="container__title">
          <div className="title">
            <div className="title__content">
              <h2>
                JUST FEATURED <span>GAMES</span>
              </h2>
              <p>{t("description")}</p>
            </div>
          </div>
        </div>
        <div className="container__menu">
          {listGames &&
            listGames.map((item, index) => {
              return <ChildItem key={index} src={item.img} />;
            })}
        </div>
      </div>
    </div>
  );
}
export default memo(FeaturedGames);
