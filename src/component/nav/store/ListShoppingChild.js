import React, { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import { useDispatch, useSelector } from "react-redux";

import {
  buyCartSelector,
  shoppingSelector,
  formSelector,
} from "../../.././redux/selector";
import buyCart from "./listShoppingSlice";
import rootReducer from "../../.././redux/reducer";

import ChildCart from "./childCart/ChildCart";
import toastSlice from "../../../redux/toastSlice";
import "./listShoppingChild.scss";
function ListShoppingChild() {
  const dispatch = useDispatch();
  const listItemsCart = useSelector(shoppingSelector);
  const buyCartTest = useSelector(buyCartSelector);
  const userCurrent = useSelector(formSelector);

  const { t } = useTranslation(["content"]);
  const childShoppingRef = useRef();
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    // focusOnSelect: true,
    swipe: true,
    touchMove: true,
    rows: 1,
  };
  const result = useMemo(() => {
    // console.log("rerender");
    const total = listItemsCart.reduce((result, prod) => {
      return result + prod.price;
    }, 0);
    return total;
  }, [listItemsCart]);
  const handleBuyProduct = () => {
    dispatch(
      buyCart.actions.buyProduct({
        list: [...listItemsCart],
        price: result,
      })
    );
    // console.log(userCurrent);
    // console.log(buyCartTest);
    if (listItemsCart.length > 0) {
      dispatch(toastSlice.actions.success(t("toast-buy")));
    } else {
      dispatch(toastSlice.actions.success(t("toast-buy-err")));
    }
    dispatch(rootReducer.actions.resetShopping(0));

    childShoppingRef.current.style.pointerEvents = "none";
    setTimeout(() => {
      childShoppingRef.current.style.pointerEvents = "auto";
    }, 100);
  };

  return (
    <div className="listShoppingChild" ref={childShoppingRef}>
      <div className="listShoppingChild__list">
        <ul>
          {listItemsCart.length > 0 ? (
            <Slider {...settings}>
              {listItemsCart &&
                listItemsCart.map((item, index) => {
                  return (
                    <ChildCart
                      name={item.name}
                      price={item.price}
                      img={item.img}
                      key={index}
                      id={index}
                    />
                  );
                })}
            </Slider>
          ) : (
            <p id="title__nothing"> No product...</p>
          )}
        </ul>
      </div>
      <div className="listShoppingChild__result">
        <div className="total">
          <div className="before">
            <span className="left">{t("total")} :</span>
            <span className="right">${result}</span>
          </div>
          <div className="affter">
            <span className="left">{t("amount")} :</span>
            <span className="right">{listItemsCart.length || 0}</span>
          </div>
        </div>
        <div className="listShoppingChild__btn-buy btn">
          <button onClick={handleBuyProduct}>{t("buy-now")}</button>
        </div>
      </div>
    </div>
  );
}

export default ListShoppingChild;
