import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import "./header.scss";

function Header() {
  const { t } = useTranslation(["nav"]);
  return (
    <div className="header">
      <div className="header__left">
        <p>{t("title")}</p>
        <span>0</span>
        <p>{t("day")}</p>
      </div>
      <div className="header__right">
        <ul>
          <li>
            <a href="https://www.facebook.com/ngheoketaupl">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
          </li>
          <li>
            <a href="http://google.com">
              <FontAwesomeIcon icon={["fab", "google"]} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/?lang=vi">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </li>
          <li>
            <a href="https://github.com/tuansanji/HoangMinhTuan_CIJS77">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </li>
        </ul>
        <span>|</span>
        <a href="http://sieuquayks.wap.sh/">
          <i>
            <FontAwesomeIcon className="icon" icon={["fab", "weibo"]} />
          </i>
          <p>sanji@gecoinfo.com</p>
        </a>
      </div>
    </div>
  );
}

export default Header;
