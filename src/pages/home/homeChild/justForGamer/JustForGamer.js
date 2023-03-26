import React from "react";
import { useTranslation } from "react-i18next";

import "./justForGamer.scss";

function JustForGamer() {
  const { t } = useTranslation(["content"]);
  return (
    <div className="just-for-gamer">
      <div className="just-for-gamer__container">
        <div className="row">
          <div className="row-left">
            <div className="left__title">
              {/* <h2>{t("just-for-gamer")}</h2> */}
              <h2>
                JUST FOR <span> GAMER</span>
              </h2>
              <p>{t("description")}</p>
            </div>
            <div className="left__list">
              <ul>
                <li>
                  <div className="list-icon">
                    <img
                      src="https://themebeyond.com/html/geco/Geco/img/icon/gamer_list_icon01.png"
                      alt=""
                    />
                  </div>
                  <div className="list-content">
                    <h5>{t("vr")}</h5>
                    <p>{t("vr-title")}</p>
                  </div>
                </li>
                <li>
                  <div className="list-icon">
                    <img
                      src="https://themebeyond.com/html/geco/Geco/img/icon/gamer_list_icon01.png"
                      alt=""
                    />
                  </div>
                  <div className="list-content">
                    <h5>{t("design")}</h5>
                    <p>{t("design-title")}</p>
                  </div>
                </li>
                <li>
                  <div className="list-icon">
                    <img
                      src="https://themebeyond.com/html/geco/Geco/img/icon/gamer_list_icon01.png"
                      alt=""
                    />
                  </div>
                  <div className="list-content">
                    <h5>{t("pharaod")}</h5>
                    <p>{t("pharaod-title")}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row-right">
            <div className="right__img">
              <img
                src="https://themebeyond.com/html/geco/Geco/img/images/just_gamers_img.png"
                alt=""
              />
              <div className="img__animations">
                <img
                  src="https://themebeyond.com/html/geco/Geco/img/images/gamers_circle_line.png"
                  alt=""
                />
                <img
                  src="https://themebeyond.com/html/geco/Geco/img/images/gamers_circle_shape.png"
                  alt=""
                  className="img__animations_child-2"
                />
              </div>
              <img
                src="https://themebeyond.com/html/geco/Geco/img/images/just_gamers_chart.png"
                alt=""
                className="img__chart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JustForGamer;
