import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./globalStyles.scss";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { useNavigate } from "react-router-dom";

// Hardcoded admin credentials
const ADMIN_CREDENTIALS = {
  email: "admin@admin.com",
  password: "admin123",
};

function SignIn() {
  const navigate = useNavigate();
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [confirmConfig, setConfirmConfig] = useState({
    type: "Notification",
    content: "You do not have permission to login to this site!",
  });

  useEffect(() => {
    const authProfile = localStorage.getItem("authProfile");
    if (authProfile) navigate("/manage/user");
  }, [navigate]);

  const handleClose = () => {
    setIsOpenConfirm(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("*Please enter the correct email type (*@*mail.*)")
        .required("*Please enter your email!"),
      password: Yup.string().required("*Please enter your password!"),
    }),
    onSubmit: (values) => {
      // Check credentials against hardcoded admin values
      if (
        values.email === ADMIN_CREDENTIALS.email &&
        values.password === ADMIN_CREDENTIALS.password
      ) {
        const authProfile = {
          id: "admin-1",
          token: "demo-token",
          user: {
            id: "admin-1",
            name: "Admin",
            email: ADMIN_CREDENTIALS.email,
            role: "ADMIN",
            avatar: "",
          },
        };
        localStorage.setItem("authProfile", JSON.stringify(authProfile));
        navigate("/manage");
      } else {
        setConfirmConfig({
          type: "Error",
          content: "Invalid email or password!",
        });
        setIsOpenConfirm(true);
      }
    },
  });

  return (
    <div className="adminLogin">
      <div className="formWrapper">
        {/* add Fiverr logo */}
        <div className="logo">
        </div>
        <h2>Login</h2>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="formGroup">
            {formik.touched.email && formik.errors.email ? (
              <TextField
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                label="Email:"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                error
                helperText={formik.errors.email}
              />
            ) : (
              <TextField
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                label="Email:"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </div>
          <div className="formGroup">
            {formik.touched.password && formik.errors.password ? (
              <TextField
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                label="Password:"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
                error
                helperText={formik.errors.password}
              />
            ) : (
              <TextField
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                label="Password:"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </div>
          <div className="action">
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
      <Dialog
        open={isOpenConfirm}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {confirmConfig.type}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {confirmConfig.content}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SignIn;
