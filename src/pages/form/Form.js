import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { formSelector } from "../.././redux/selector";

function Form() {
  const { t } = useTranslation(["content"]);
  const userCurrent = useSelector(formSelector).userCurrent;

  return (
    <>
      {userCurrent.username !== undefined ? (
        <div className="form__user">
          <Link to={`user-${userCurrent.username}`}>
            <img
              src={
                userCurrent.thumb.preview
                  ? userCurrent.thumb.preview
                  : "https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"
              }
              alt=""
            />
          </Link>
          <span>{userCurrent.username}</span>
        </div>
      ) : (
        <div className="form-group">
          <NavLink to="/register" className="register">
            {t("register")}
          </NavLink>
          <NavLink to="/login" className="login">
            {t("login")}
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Form;
