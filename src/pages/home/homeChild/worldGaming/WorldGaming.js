import { useEffect, useState, useCallback, memo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img1 from "../../../../assets/img/slider_img02.png";
import img2 from "../../../../assets/img/slider_img01.png";
import img3 from "../../../../assets/img/trongsuot.png";

function WorldGaming() {
  const { t } = useTranslation(["content"]);
  const titleRef = useRef();
  const imgRef = useRef();
  const [titleBanner, setTitleBanner] = useState(true);
  const handleBanner = useCallback(() => {
    setTitleBanner(!titleBanner);
  }, [titleBanner]);
  useEffect(() => {
    titleRef && titleRef.current.classList.toggle("change");
    titleRef && titleRef.current.classList.add("change2");
    imgRef && imgRef.current.classList.toggle("change");
    imgRef && imgRef.current.classList.add("change2");
  }, [titleBanner]);
  return (
    <div className="home__banner">
      <div className="btn prev-btn" onClick={handleBanner}>
        <FontAwesomeIcon className="prev" icon={["fas", "angle-left"]} />
      </div>
      <div className="btn next-btn" onClick={handleBanner}>
        <FontAwesomeIcon className="next" icon={["fas", "angle-right"]} />
      </div>
      <div ref={titleRef} className="home__title" id="world-gaming">
        <h6>{t("world-gaming")}</h6>
        <h2>
          {titleBanner ? t("cod") : t("create")}
          <span>{titleBanner ? t("modern") : t("manage")} </span>
          {titleBanner ? t("warfare") : t("matchs")}
        </h2>
        <p>{t("baner-title")}</p>
        <a href="https://www.callofduty.com/modernwarfare">{t("read-more")}</a>
      </div>
      <div className="home__img" ref={imgRef}>
        <div className="img-before">
          <img src={img1} alt="" />
        </div>
        <div className="img-between">
          <img src={img3} alt="" />
        </div>
        <div className="img-affter">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default memo(WorldGaming);
