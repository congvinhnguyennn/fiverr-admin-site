import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

import "./globalStyles.scss";

const HeaderComp = () => {
  const [isOpenConfirm, setIsOpenConfirm] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [selectedPage, setSelectedPage] = React.useState(0);
  const navigate = useNavigate();

  const [authProfile, setAuthProfile] = React.useState(null);

  React.useEffect(() => {
    const storedProfile = localStorage.getItem("authProfile");
    if (storedProfile) {
      setAuthProfile(JSON.parse(storedProfile).user);
    }
  }, []);

  const pages = [
    {
      label: "Quản lý người dùng",
      onClick() {
        navigate("/manage/user");
      },
    },
    {
      label: "Quản lý công việc",
      onClick() {
        navigate("/manage/jobs");
      },
    },
    {
      label: "Quản lý loại công việc",
      onClick() {
        navigate("/manage/jobTypes");
      },
    },
    {
      label: "Quản lý chi tiết loại công việc",
      onClick() {
        navigate("/manage/jobTypeDetails");
      },
    },
    {
      label: "Quản lý dịch vụ",
      onClick() {
        navigate("/manage/service");
      },
    },
  ];

  const settings = [
    {
      label: "Thông tin",
      onClick() {
        navigate("/manage/profile");
      },
    },
    {
      label: "Đăng xuất",
      onClick() {
        localStorage.removeItem("authProfile");
        navigate("/admin");
      },
    },
  ];

  const handleOnChangePage = (index) => setSelectedPage(index);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className="headerComp">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className="headerCompPageMenu"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseNavMenu}
                  className={index === selectedPage ? "selected" : ""}
                >
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      handleOnChangePage(index);
                      page.onClick();
                    }}
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
            <div className="logo"></div>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={authProfile?.name || "Admin"}
                  src={authProfile?.avatar}
                />
                <Typography
                  sx={{
                    display: { xs: "none", md: "block" },
                    ml: 2,
                    mr: 2,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: "14px",
                  }}
                >
                  Hi! {authProfile?.name || "Admin"}
                </Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={() => {
                  handleCloseUserMenu();
                  setting.onClick();
                }}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderComp;
