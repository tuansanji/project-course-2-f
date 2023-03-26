import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./fotter.scss";

function Fotter() {
  const { t } = useTranslation(["fotter"]);
  return (
    <div className="container__fotter" id="fotter">
      <div className="footer__content">
        <div className="title__content">
          <div className="title__container">
            <div className="row">
              <div className="col">
                <div className="wrap">
                  <div className="wrap__title">
                    <h2>
                      Sanji <span>Rose</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content__row">
            <div className="column column-1">
              <div className="table">
                <div className="logo">Sanji</div>
                <div className="text">
                  <p>{t("title")}</p>
                  <div className="contact">
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={["fas", "map"]} />
                        <span>{t("address")} :</span> Phi lộc - Diễn Châu - Nghệ
                        An
                      </li>
                      <li>
                        <FontAwesomeIcon icon={["fas", "phone"]} />
                        <span>{t("phone")} :</span> 0968763453
                      </li>
                      <li>
                        <FontAwesomeIcon icon={["fas", "envelope"]} />
                        <span>{t("email")} :</span> hoangtuan17012015@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="column column-2">
              <div className="table">
                <div className="title">
                  <h5>{t("products")}</h5>
                  <div className="text">
                    <ul>
                      <li>
                        <a href="#">Garena (4)</a>
                      </li>
                      <li>
                        <a href="#">Riot (2)</a>
                      </li>
                      <li>
                        <a href="#">Fifa (11)</a>{" "}
                      </li>
                      <li>
                        <a href="#">Fortnite (1)</a>
                      </li>
                      <li>
                        <a href="#">CS:GO (1)</a>
                      </li>
                      <li>
                        <a href="#">Dota 2 (2)</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="column column-3">
              <div className="table">
                <div className="title">
                  <h5>{t("need-help")}</h5>
                </div>
                <div className="text">
                  <ul>
                    <li>
                      <a href="#">{t("terms")}</a>
                    </li>
                    <li>
                      <a href="#">{t("privacy")}</a>
                    </li>
                    <li>
                      <a href="#">{t("refund")}</a>{" "}
                    </li>
                    <li>
                      <a href="#">{t("affiliate")}</a>
                    </li>
                    <li>
                      <a href="#">{t("faq")}</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="column column-4">
              <div className="table">
                <div className="title">
                  <h5>{t("follow")}</h5>
                </div>
                <div className="list__contact">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/ngheoketaupl/">
                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/tuansanji/HoangMinhTuan_CIJS77/tree/master/final_project_2"
                        style={{ backgroundColor: "brown" }}
                      >
                        <FontAwesomeIcon icon={["fab", "github"]} />
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ backgroundColor: "red" }}>
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fire-left">
          <img
            src="https://themebeyond.com/html/geco/Geco/img/images/footer_fire.png"
            alt=""
          />
        </div>
        <div className="fire-right">
          <img
            src="https://themebeyond.com/html/geco/Geco/img/images/footer_fire.png"
            alt=""
          />
        </div>
      </div>
      <div className="footer__copyright"></div>
    </div>
  );
}

export default Fotter;
