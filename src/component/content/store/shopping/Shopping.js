import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

import rootReducer from "../../../.././redux/reducer";
import Accessories from "../Accessories";
import "./shopping.scss";
import { shoppingSelector } from "../../../.././redux/selector";

function Shopping({
  img,
  name,
  price,
  introduce,
  rating,
  handleBuy,
  handleCloseShopping,
  shopping,
  handleAffterBuy,
}) {
  const { t } = useTranslation(["content"]);
  const dispatch = useDispatch();
  const testShoppingSelect = useSelector(shoppingSelector);
  const handleInforGame = () => {
    handleAffterBuy();
    dispatch(rootReducer.actions.addShopping(shopping));
  };

  return (
    <div className="shopping__modal">
      <div className="modal__overlay"></div>
      <div className="modal__body">
        <div className="modal__inner">
          <FontAwesomeIcon
            className="close-btn btn"
            icon={["fas", "xmark"]}
            onClick={handleCloseShopping}
          />

          <Accessories
            img={img}
            name={name}
            price={price}
            handleBuy={handleBuy}
          />
          <div className="description">
            <h3>
              {t("rating")} :
              {(() => {
                let rows = [];
                for (let i = 0; i < rating; i++) {
                  rows.push(<FontAwesomeIcon icon={["fas", "star"]} key={i} />);
                }
                return rows;
              })()}
            </h3>
            <h4>{name}</h4>
            <p>{introduce}</p>
            <button onClick={handleInforGame}>{t("add-cart")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopping;
