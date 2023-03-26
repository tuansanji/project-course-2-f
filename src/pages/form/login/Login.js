import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

import { formSelector } from "../../.././redux/selector";
import { fetchUser } from ".././formSlice";
import formSlice from "../formSlice";
import toastSlice from "../../../redux/toastSlice";
import { useEffect } from "react";

function Login() {
  const { t } = useTranslation("content");
  const dispatch = useDispatch();
  const stateUser = useSelector(formSelector);
  const navigate = useNavigate();
  useEffect(
    (p) => {
      if (stateUser.stateMessage === "success") {
        dispatch(toastSlice.actions.success(stateUser.messageUser));
        dispatch(formSlice.actions.loginSuccess(""));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else if (stateUser.stateMessage === "err") {
        dispatch(toastSlice.actions.err(stateUser.messageUser));
        dispatch(formSlice.actions.loginSuccess(""));
      }
    },
    [stateUser.stateMessage]
  );

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    password: yup
      .string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (user) => {
      dispatch(fetchUser(user));
    },
    validationSchema: validationSchema,
  });
  return (
    <div className="signup">
      <h1 className="signup-heading">{t("login")}</h1>
      <div className="signup-or">
        <span>{t("orsign2")}</span>
      </div>
      <div className="signup-icon">
        <span className="signup-social">
          <FontAwesomeIcon icon={["fab", "google"]} />
        </span>
        <span className="signup-social">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </span>
        <span className="signup-social">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </span>
        <span className="signup-social">
          <FontAwesomeIcon icon={["fab", "google"]} />
        </span>
      </div>
      <form action="#" className="form__signup">
        <div className="form-group">
          <input
            type="text"
            id="fullname"
            className="signup-input"
            placeholder=" "
            maxLength={24}
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="username"
          />
          <label htmlFor="fullname" className="signup-label">
            {t("fullname")}
          </label>
          {formik.errors.username && formik.touched.username && (
            <p className="error">{formik.errors.username}</p>
          )}
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            className="signup-input"
            placeholder=" "
            maxLength={20}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="password"
          />
          <label htmlFor="password" className="signup-label">
            {t("password")}
          </label>
          {formik.errors.password && formik.touched.password && (
            <p className="error">{formik.errors.password}</p>
          )}
        </div>

        <div className="form__submit" onClick={formik.handleSubmit}>
          {t("signin")}
        </div>
      </form>

      <p className="signup-already">
        {/* <NavLink to="/register" className="login">
          {t("signup")}
        </NavLink> */}
      </p>
    </div>
  );
}

export default Login;
