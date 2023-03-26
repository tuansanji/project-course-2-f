import React from "react";
import { useTranslation } from "react-i18next";
import BreadCrumb from "../../component/content/breadCrumb/BreadCrumb";

import "./community.scss";
function Community() {
  const { t } = useTranslation(["nav"]);
  return (
    <div>
      <BreadCrumb
        title1={t("community")}
        title2={t("pages")}
        currentpage={t("community")}
      />
    </div>
  );
}

export default Community;
