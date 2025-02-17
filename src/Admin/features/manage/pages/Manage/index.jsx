import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderComp from "Admin/common/components/HeaderComp";

function Manage() {
  const navigate = useNavigate();

  useEffect(() => {
    const authProfile = localStorage.getItem("authProfile");
    if (!authProfile) {
      navigate("/admin");
    }
  }, [navigate]);

  return (
    <div>
      <HeaderComp />
      <Outlet />
    </div>
  );
}

export default Manage;
