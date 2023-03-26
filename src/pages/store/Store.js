import { useState, useEffect, useCallback, memo } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Shopping from "../../component/content/store/shopping/Shopping";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

import toastMessage from "../.././redux/toastSlice";
import BreadCrumb from "../../component/content/breadCrumb/BreadCrumb";
import Accessories from "../../component/content/store/Accessories";
import { ACCESSORIES_DATA } from "../.././data/api/data";

import "./store.scss";
function Store() {
  const { t } = useTranslation(["content"]);
  const [accessories, setAccessories] = useState([]);
  const [shopping, setShopping] = useState(null);
  const [buy, setBuy] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(ACCESSORIES_DATA)
      .then((response) => setAccessories(response.data))
      .catch((error) => console.log(error));
  }, []);
  const handleBuy = useCallback((item) => {
    setBuy(true);
    setShopping(item);
  }, []);

  return (
    <div className="container__store">
      {buy && (
        <Shopping
          shopping={shopping}
          handleCloseShopping={() => {
            setBuy(false);
            setShopping(null);
          }}
          handleAffterBuy={() => {
            dispatch(toastMessage.actions.success(t("toast-add-success")));
            setBuy(false);
            setShopping(null);
          }}
          img={shopping.img}
          name={shopping.name}
          price={shopping.price}
          introduce={shopping.introduce}
          rating={shopping.rating}
        />
      )}
      <BreadCrumb
        title1={t("access")}
        title2={t("store")}
        currentpage={t("store")}
      />
      <div className="store__shop">
        <div className="container">
          <div className="row">
            {accessories &&
              accessories.map((item) => (
                <Accessories
                  handleBuy={() => handleBuy(item)}
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                />
              ))}
          </div>
        </div>
      </div>
      <ToastContainer
        zIndex="1000"
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}

export default memo(Store);
