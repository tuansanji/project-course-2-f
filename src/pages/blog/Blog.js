import { useTranslation } from "react-i18next";
import BreadCrumb from "../../component/content/breadCrumb/BreadCrumb";

import "./blog.scss";
function Blog() {
  const { t } = useTranslation(["content"]);
  return (
    <div>
      <BreadCrumb
        title1={t("about")}
        title2={t("pages")}
        currentpage={t("Blog")}
      />
    </div>
  );
}

export default Blog;
