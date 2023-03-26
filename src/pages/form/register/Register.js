import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

import { fetchPostUser } from ".././formSlice";
import formSlice from "../formSlice";
import toastSlice from "../../../redux/toastSlice";
import "./register.scss";

function Register() {
  const { t } = useTranslation("content");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    email: yup.string().email(),
    password: yup
      .string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      thumb: null,
    },
    onSubmit: (user) => {
      dispatch(fetchPostUser(user));
      dispatch(toastSlice.actions.success("Đăng kí thành công"));
      setTimeout(() => navigate("/login"), 1000);
    },
    validationSchema: validationSchema,
  });
  return (
    <div className="signup">
      <h1 className="signup-heading">{t("signup")}</h1>
      <div className="signup-or">
        <span>{t("orsign")}</span>
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

      <form className="form__signup">
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
            type="text"
            id="email"
            className="signup-input"
            placeholder=" "
            maxLength={40}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="email"
          />
          <label htmlFor="email" className="signup-label">
            Email
          </label>
          {formik.errors.email && formik.touched.email && (
            <p className="error">{formik.errors.email}</p>
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
        <div className="form-group">
          <input
            type="password"
            id="password_confirmation"
            className="signup-input"
            placeholder=" "
            maxLength={20}
            value={formik.values.passwordConfirmation}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="passwordConfirmation"
          />
          <label htmlFor="password_confirmation" className="signup-label">
            {t("passwordconfirmation")}
          </label>
          {formik.errors.passwordConfirmation &&
            formik.touched.passwordConfirmation && (
              <p className="error">{formik.errors.passwordConfirmation}</p>
            )}
        </div>
        <div className="form__group">
          <label htmlFor="avatar">Avatar</label>
          <input
            id="avatar"
            type="file"
            onChange={(e) => {
              const file = e.currentTarget.files[0];
              file.preview = URL.createObjectURL(file);
              formik.setFieldValue("thumb", file);
            }}
          />
        </div>
        <div className="form__submit" onClick={formik.handleSubmit}>
          {t("signup")}
        </div>
      </form>

      <p className="signup-already">
        <span>{t("already")}</span>
        <NavLink to="/login" className="login">
          {t("login")}
        </NavLink>
      </p>
    </div>
  );
}

export default Register;
