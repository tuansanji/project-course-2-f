import { useTranslation } from "react-i18next";
import BreadCrumb from "../../component/content/breadCrumb/BreadCrumb";

import "./pages.scss";
function Pages() {
  const { t } = useTranslation(["nav"]);
  return (
    <div id="world-gaming">
      <BreadCrumb
        title1={t("abount-story")}
        title2={t("pages")}
        currentpage={t("upcoming-games")}
      />
    </div>
  );
}

export default Pages;
