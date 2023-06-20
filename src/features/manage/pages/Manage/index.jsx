import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import HeaderComp from "common/components/HeaderComp";
import {
  fetchSetAuthProfileByIdAction,
} from "features/auth/action";


function Manage() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const authProfile = localStorage.getItem("authProfile");

    if (!authProfile) navigate("/");
    else {
      const parseAuthProfile = JSON.parse(authProfile);
      dispatch(fetchSetAuthProfileByIdAction(parseAuthProfile.id));
    }
  }, []);

  return (
    <div>
      <HeaderComp />
      <Outlet />
    </div>
  );
}

export default Manage;
