import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { authActionTypes, fetchUploadImageAction } from "Admin/features/auth/action";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./globalStyles.scss";

function AdminReadOnly() {
  const [isOpenNotifyModal, setIsOpenNotifyModal] = useState(false);
  const [notifiModalConfig, setNotifyModalConfig] = useState({
    type: "Notification",
    content: "Notification",
  });

  const { authProfile } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();

  if (!authProfile) return <div>Loading...</div>;

  const {
    avatar,
    name,
    email,
    birthday,
    gender,
    role,
    phone,
    skill,
    certification,
  } = authProfile;

  const handleUploadImg = async (e) => {
    const form = new FormData();
    const file = e.target.files[0];
    form.append("formFile", file);
    const res = await dispatch(fetchUploadImageAction(form));
    setNotifyModalConfig(res);
    setIsOpenNotifyModal(true);
  };

  const handleChangeCrudStatus = () => {
    dispatch(authActionTypes.setCrudStatus("update"));
  };

  const handleCloseNotifyModal = () => {
    setIsOpenNotifyModal(false);
  };

  return (
    <div className="adminReadOnly">
      <div className="adminReadOnlyWrapper">
        <div className="adminReadOnlyAvatar">
          <Avatar
            alt={name}
            src={avatar}
            sx={{ width: 100, height: 100 }}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleUploadImg}
            />
            <PhotoCamera />
          </IconButton>
        </div>
        <div className="adminReadOnlyInfo">
          <div className="adminReadOnlyInfoItem">
            <p className="label">Full Name:</p>
            <p className="content">{name}</p>
          </div>
          <div className="adminReadOnlyInfoItem">
            <p className="label">Email:</p>
            <p className="content">{email}</p>
          </div>
          <div className="adminReadOnlyInfoItem">
            <p className="label">Phone:</p>
            <p className="content">{phone}</p>
          </div>
          <div className="adminReadOnlyInfoItem">
            <p className="label">Birthday:</p>
            <p className="content">{birthday}</p>
          </div>
          <div className="adminReadOnlyInfoItem">
            <p className="label">Gender:</p>
            <p className="content">{gender}</p>
          </div>
          <div className="adminReadOnlyInfoItem">
            <p className="label">Role:</p>
            <p className="content">{role}</p>
          </div>
          <div className="adminReadOnlyInfoItem">
            <p className="label">Skills:</p>
            <div className="contentList">
              {skill.map((item, index) => {
                return (
                  <p key={index} className="content">
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="adminReadOnlyInfoItem">
            <p className="label">Certifications:</p>
            <div className="contentList">
              {certification.map((item, index) => {
                return (
                  <p key={index} className="content">
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="adminReadOnlyAction">
          <Button variant="contained" onClick={handleChangeCrudStatus}>
            Edit Profile
          </Button>
        </div>
      </div>
      <Dialog
        open={isOpenNotifyModal}
        onClose={handleCloseNotifyModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {notifiModalConfig.type}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {notifiModalConfig.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNotifyModal}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminReadOnly;
