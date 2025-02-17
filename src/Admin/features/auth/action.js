const { createAction } = require("@reduxjs/toolkit");

const authActionTypes = {
  setAuthProfile: createAction("Auth/SET_AUTH_PROFILE"),
  setLoginConfirm: createAction("Auth/SET_LOGIN_CONFIRM"),
  setCrudStatus: createAction("Auth/SET_CRUD_STATUS"),
};

// Mock admin data
const ADMIN_DATA = {
  id: "admin-1",
  name: "Admin",
  email: "admin@admin.com",
  role: "ADMIN",
  avatar: "",
  birthday: "1990-01-01",
  gender: "MALE",
  phone: "0123456789",
  skill: ["Management", "Administration"],
  certification: ["Admin Certification"],
};

const fetchSetAuthProfileAction = (data) => {
  return async (dispatch) => {
    try {
      // Check against hardcoded credentials
      if (data.email === "admin@admin.com" && data.password === "admin123") {
        const authProfile = {
          id: ADMIN_DATA.id,
          token: "demo-token",
          user: ADMIN_DATA,
        };
        localStorage.setItem("authProfile", JSON.stringify(authProfile));
        dispatch(authActionTypes.setAuthProfile(ADMIN_DATA));
        return {
          type: "Success",
          content: "Login Success!",
        };
      } else {
        return {
          type: "Error",
          content: "Invalid email or password!",
        };
      }
    } catch (error) {
      return {
        type: "Error",
        content: "An error occurred",
      };
    }
  };
};

const fetchSetAuthProfileByIdAction = (authId) => {
  return async (dispatch) => {
    try {
      // Return mock data for demo
      dispatch(authActionTypes.setAuthProfile(ADMIN_DATA));
    } catch (error) {
      console.log(error);
    }
  };
};

const fetchUpdateAdminProfileAction = (data) => {
  return async (dispatch) => {
    try {
      // Update local storage with new data
      const authProfile = JSON.parse(localStorage.getItem("authProfile"));
      const updatedProfile = {
        ...authProfile,
        user: {
          ...authProfile.user,
          ...data,
        },
      };
      localStorage.setItem("authProfile", JSON.stringify(updatedProfile));
      
      // Update redux state
      dispatch(authActionTypes.setAuthProfile(data));
      
      return {
        type: "Chúc mừng!",
        content: "Cập nhật thành công",
      };
    } catch (error) {
      return {
        type: "Có lỗi xảy ra!",
        content: "Không thể cập nhật thông tin",
      };
    }
  };
};

const fetchUploadImageAction = (data) => {
  return async (dispatch) => {
    try {
      // Mock image upload - just update the avatar URL in local storage
      const authProfile = JSON.parse(localStorage.getItem("authProfile"));
      const updatedProfile = {
        ...authProfile,
        user: {
          ...authProfile.user,
          avatar: URL.createObjectURL(data.get("formFile")),
        },
      };
      localStorage.setItem("authProfile", JSON.stringify(updatedProfile));
      
      dispatch(fetchSetAuthProfileAction(updatedProfile.user));

      return {
        type: "Success",
        content: "Đăng ảnh thành công!",
      };
    } catch (error) {
      return {
        type: "Error",
        content: "Có lỗi xảy ra!",
      };
    }
  };
};

export {
  authActionTypes,
  fetchSetAuthProfileAction,
  fetchSetAuthProfileByIdAction,
  fetchUpdateAdminProfileAction,
  fetchUploadImageAction,
};
