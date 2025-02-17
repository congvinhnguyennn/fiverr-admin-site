import { Container } from "@mui/system";
import AdminReadOnly from "Admin/features/auth/common/components/AdminReadOnly";
import AdminUpdate from "Admin/features/auth/common/components/AdminUpdate";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActionTypes } from "Admin/features/auth/action";

import "./globalStyles.scss";

function Profile() {
  const dispatch = useDispatch();
  const crudStatus = useSelector((state) => state.authReducer.crudStatus);

  useEffect(() => {
    // Load profile from localStorage
    const authProfile = localStorage.getItem("authProfile");
    if (authProfile) {
      const profile = JSON.parse(authProfile);
      dispatch(authActionTypes.setAuthProfile(profile.user));
    }
  }, [dispatch]);

  return (
    <div className="adminProfileWrapper">
      <Container maxWidth="lg">
        {crudStatus === "read" && <AdminReadOnly />}
        {crudStatus === "update" && <AdminUpdate />}
      </Container>
    </div>
  );
}

export default Profile;
