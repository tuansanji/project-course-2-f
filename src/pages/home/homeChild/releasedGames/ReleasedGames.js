import { useEffect, useState, useCallback, memo, useRef } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import releaseImg from "../../../../assets/img/title_bar02.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import toastSlice from "../../../.././redux/toastSlice";
import { PRODUCTS_DATA } from "../../../.././data/api/data";
import { addShopping } from "../../../.././redux/action";
import rootReducer from "../../../.././redux/reducer";
import "./releasedGames.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReleasedGames() {
  const dispatch = useDispatch();
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    focusOnSelect: true,
    swipe: true,
    touchMove: true,
  };
  const { t } = useTranslation(["content"]);
  const [products, setProducts] = useState([]);
  const [imgId, setImgId] = useState(0);
  const imgRef = useRef();
  const imgTabRef = useRef();

  const getProducts = async () => {
    try {
      const response = await axios.get(PRODUCTS_DATA);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);
  const handleGetGame = useCallback(
    (id) => {
      setImgId(id - 1);
    },
    [imgId]
  );
  const handleAddToCart = useCallback(() => {
    dispatch(rootReducer.actions.addShopping(products[imgId]));
    dispatch(toastSlice.actions.success(t("toast-add-success")));
  });
  return (
    <div className="home__released-games">
      <div className="realeased-title">
        <h2>
          {t("released-game")} <span>{t("released-games")}</span>
        </h2>
        <p>{t("released-title")}</p>
        <img src={releaseImg} alt="" />
      </div>
      <div className="home__released-list">
        {products.length > 0 && (
          <div className="list-item">
            <div className="item">
              <img src={products[imgId].img} alt="" />
              <div className="item-description">
                <h3>
                  {t("rating")} :
                  {(() => {
                    let rows = [];
                    for (let i = 0; i < products[imgId].rating; i++) {
                      rows.push(
                        <FontAwesomeIcon icon={["fas", "star"]} key={i} />
                      );
                    }
                    return rows;
                  })()}
                </h3>
                <h4>
                  {products[imgId].name}
                  {/* Call <span>of Duty</span> */}
                </h4>
                <ul>
                  <li>
                    <span>{t("category")} :</span>
                    {products[imgId].category}
                  </li>
                  <li>
                    <span>{t("model")} :</span>
                    {products[imgId].model}
                  </li>
                  <li>
                    <span>{t("controller")} :</span>
                    {products[imgId].controller}
                  </li>
                </ul>
                <p>{t("description")}</p>
                <button onClick={handleAddToCart}>{t("add-cart")}</button>
              </div>
            </div>
          </div>
        )}
        <div className="list-menu">
          <div className="list-menu__menu" ref={imgTabRef}>
            <Slider {...settings}>
              {products.map((item) => {
                return (
                  <div className="img-item" key={item.id}>
                    <img
                      ref={imgRef}
                      onClick={(e) => {
                        // e.target.scrollIntoView({
                        //   behavior: "smooth",
                        //   block: "start",
                        //   inline: "nearest",
                        // });

                        handleGetGame(item.id);
                      }}
                      src={item.path}
                      alt=""
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ReleasedGames);
