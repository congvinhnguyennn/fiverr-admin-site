import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import getDayMonthYear from "Admin/common/utils/getDayMonthYear";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PolylineIcon from "@mui/icons-material/Polyline";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";

import "./globalStyles.scss";
import { useDispatch, useSelector } from "react-redux";
import convertDateToYearMonthDay from "Admin/common/utils/convertDateToYearMonthDay";
import {
  authActionTypes,
  fetchUpdateAdminProfileAction,
} from "Admin/features/auth/action";

function AdminUpdate() {
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
  const [isOpenFailModal, setIsOpenFailModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    type: "Chúc mừng",
    content: "Chúc mừng, tạo thành công!",
  });

  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.authReducer.authProfile);

  const { birthday, name, email, phone, gender, role, certification, skill } =
    usersList;

  const formik = useFormik({
    initialValues: {
      name: name,
      email: email,
      role: role,
      certification: certification.join("\n"),
      skill: skill.join("\n"),
      phone: phone,
      birthday: convertDateToYearMonthDay(birthday),
      gender: gender,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("*Hãy nhập tên!"),
      email: Yup.string()
        .email("*Kiểu email của bạn chưa chính xác (*@*mail.*)")
        .required("*Hãy nhập email!"),
      phone: Yup.string()
        .required("*Hãy nhập số điện thoại!")
        .matches(
          /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
          "*Số điện thoại chưa chính xác!"
        )
        .min(10, "*Số điện thoại phải có ít nhất 10 số!"),
      birthday: Yup.string()
        .required("*Hãy nhập ngày sinh!")
        .matches(
          /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/i,
          "*Ngày sinh chưa đúng!"
        ),
      gender: Yup.string().required("*Hãy nhập giới tính!"),
    }),
    onSubmit: async (values) => {
      const customDate = getDayMonthYear(values.birthday);
      const customData = {
        ...values,
        birthday: customDate,
        skill: values.skill.split("\n"),
        certification: values.certification.split("\n"),
      };

      const res = await dispatch(
        fetchUpdateAdminProfileAction({
          ...usersList,
          ...customData,
        })
      );

      setModalConfig(res);

      if (res.type === "Chúc mừng!") {
        setIsOpenSuccessModal(true);
      } else {
        setIsOpenFailModal(true);
      }
    },
  });

  const handleSubmitSuccessModal = async () => {
    setIsOpenSuccessModal(false);
    dispatch(authActionTypes.setCrudStatus("read"));
  };
  const handleCloseSuccessModal = () => {
    setIsOpenSuccessModal(false);
  };
  const handleCloseFailModal = () => {
    setIsOpenFailModal(false);
  };
  const handleComeBack = () => {
    dispatch(authActionTypes.setCrudStatus("read"));
  };

  return (
    <div className="adminUpdate">
      <form onSubmit={formik.handleSubmit}>
        <div className="formGroup">
          {formik.touched.name && formik.errors.name ? (
            <TextField
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              label="Họ tên:"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              error
              helperText={formik.errors.name}
            />
          ) : (
            <TextField
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              label="Họ tên:"
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
          {formik.touched.email && formik.errors.email ? (
            <TextField
              disabled
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
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              error
              helperText={formik.errors.email}
            />
          ) : (
            <TextField
              disabled
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
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        </div>
        <div className="formGroup">
          {formik.touched.phone && formik.errors.phone ? (
            <TextField
              id="phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              label="Số điện thoại:"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneIcon />
                  </InputAdornment>
                ),
              }}
              error
              helperText={formik.errors.phone}
            />
          ) : (
            <TextField
              id="phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              label="Số điện thoại:"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        </div>
        <div className="formGroup">
          {formik.touched.birthday && formik.errors.birthday ? (
            <TextField
              id="birthday"
              name="birthday"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthday}
              label="Ngày sinh:"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CelebrationIcon />
                  </InputAdornment>
                ),
              }}
              error
              helperText={formik.errors.birthday}
            />
          ) : (
            <TextField
              id="birthday"
              name="birthday"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthday}
              label="Ngày sinh:"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CelebrationIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        </div>
        <div className="formGroup">
          <FormLabel id="gender">Giới tính:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
          >
            <FormControlLabel value="MALE" control={<Radio />} label="Nam" />
            <FormControlLabel value="FEMALE" control={<Radio />} label="Nữ" />
          </RadioGroup>
        </div>
        <div className="formGroup">
          <TextField
            disabled
            id="role"
            name="role"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.role}
            label="Quyền:"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ManageAccountsIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="formGroup">
          <TextField
            id="skill"
            name="skill"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.skill}
            label="Kỹ năng:"
            variant="outlined"
            multiline
            rows={4}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PolylineIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="formGroup">
          <TextField
            id="certification"
            name="certification"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.certification}
            label="Chứng chỉ:"
            variant="outlined"
            multiline
            rows={4}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPoliceIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="action">
          <Button variant="contained" color="error" onClick={handleComeBack}>
            Quay lại
          </Button>
          <Button variant="contained" type="submit">
            Cập nhật
          </Button>
        </div>
      </form>
      <Dialog
        open={isOpenSuccessModal}
        onClose={handleCloseSuccessModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{modalConfig.type}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {modalConfig.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessModal}>Hủy</Button>
          <Button onClick={handleSubmitSuccessModal} autoFocus>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={isOpenFailModal}
        onClose={handleCloseFailModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{modalConfig.type}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {modalConfig.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFailModal}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminUpdate;
