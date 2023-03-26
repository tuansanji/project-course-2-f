import React from "react";
import { useTranslation } from "react-i18next";
import BreadCrumb from "../../component/content/breadCrumb/BreadCrumb";

import "./overview.scss";
function Overview() {
  const { t } = useTranslation("nav");
  return (
    <div>
      <BreadCrumb
        title1={t("overview")}
        title2={t("pages")}
        currentpage={t("overview")}
      />
    </div>
  );
}

export default Overview;
