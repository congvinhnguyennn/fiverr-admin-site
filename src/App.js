import { createTheme, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "features/auth/pages/SignIn";
import Manage from "features/manage/pages/Manage";
import User from "features/manage/common/components/User";
import Job from "features/jobs/pages/Job";
import JobTypes from "features/jobTypes/pages/JobTypes";
import JobTypeDetails from "features/jobTypeDetails/pages/JobTypeDetails";
import Service from "features/service/pages/Service";
import Profile from "features/auth/pages/Profile";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(29, 191, 115)",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Outlet />
        </div>
        <BrowserRouter>
            <Routes>
                <Route index element={<SignIn />} />
                  <Route path="manage/" element={<Manage />}>
                    <Route
                      index
                      element={
                        <p style={{ fontSize: 20, marginTop: 48, fontWeight: 600 }}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
