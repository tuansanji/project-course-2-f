import { useState, useEffect, useCallback, memo } from "react";

import { useTranslation } from "react-i18next";
import "./accessories.scss";

function Accessories({ img, name, price, handleBuy = null }) {
  const { t } = useTranslation(["content"]);
  return (
    <div className="accessories">
      <div className="item">
        <div className="item__thumb">
          <a href={undefined}>
            <img src={img} alt="" />
          </a>
        </div>
        <div className="item__content">
          <h5>
            <a href={undefined}>{name}</a>
          </h5>
          <span>Price: ${price}</span>
          <button onClick={handleBuy} className="action">
            {t("add")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Accessories);
