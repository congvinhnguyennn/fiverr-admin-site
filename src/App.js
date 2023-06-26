import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "Admin/features/auth/pages/SignIn";
import Manage from "Admin/features/manage/pages/Manage";
import User from "Admin/features/manage/common/components/User";
import Job from "Admin/features/jobs/pages/Job";
import JobTypes from "Admin/features/jobTypes/pages/JobTypes";
import JobTypeDetails from "Admin/features/jobTypeDetails/pages/JobTypeDetails";
import Service from "Admin/features/service/pages/Service";
import Profile from "Admin/features/auth/pages/Profile";
import Home from "Customer/modules/Home/Home";
import CareerList from "Customer/modules/CareerList/CareerList";
import DetailWork from "Customer/modules/Detail_Work/DetailWork";
import Type_Detail from "Customer/modules/TypeWork_DetailType/Type_Detail";
import Mainlayout from "Customer/layouts/Mainlayout";
import DetailMain from "Customer/modules/Detail_Work/DetailMain";
import ListWork from "Customer/modules/ListWork/ListWork";
import ListMain from "Customer/modules/ListWork/ListMain";
import AuthLayout from "Customer/layouts/AuthLayout/AuthLayout";
import Signin from "Customer/modules/Auth/Signin";

function App() {
  return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/categories/:id" element={<Type_Detail/>}/>
                <Route path="/:careerId" element={<CareerList />} />
                <Route path="/detail/:careerId" element={<DetailMain />} />
                <Route path="/list/:ID" element={<ListMain/>}/>
                <Route path="/" element={<AuthLayout/>}>
                  <Route path="/Signin" element={<Signin/>}/>
                </Route>
                <Route index path="/admin" element={<SignIn />} />
                  <Route path="manage/" element={<Manage />}>
                    <Route
                      index
                      element={
                        <p style={{ fontSize: 20, marginTop: 100, marginLeft: "40%", fontWeight: 600 }}>
                          Vui lòng chọn danh mục muốn quản lý
                        </p>
                      }
                    />
                    <Route path="user" element={<User />} />
                    <Route path="jobs" element={<Job />} />
                    <Route path="jobTypes" element={<JobTypes />} />
                    <Route path="jobTypeDetails" element={<JobTypeDetails />} />
                    <Route path="service" element={<Service />} />
                    <Route path="profile" element={<Profile />} />
                  </Route>
            </Routes>
          </BrowserRouter>
  );
}

export default App;
