import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import toastSlice from "../../../../redux/toastSlice";
import { useTranslation } from "react-i18next";

import rootReducer from "../../../.././redux/reducer";
function ChildCart({ img, name, price, id }) {
  const { t } = useTranslation(["content"]);
  const dispatch = useDispatch();
  const handleDeleteCart = (id) => {
    dispatch(rootReducer.actions.deletetShopping(id));
    dispatch(toastSlice.actions.err(t("toast-delete")));
  };
  return (
    <div className="child-cart">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <h4>{name}</h4>
        <p className="content__price">${price}</p>
      </div>
      <div
        className="icon"
        onClick={() => {
          handleDeleteCart(id);
        }}
      >
        <FontAwesomeIcon icon={["fas", "trash"]} />
      </div>
    </div>
  );
}

export default ChildCart;
