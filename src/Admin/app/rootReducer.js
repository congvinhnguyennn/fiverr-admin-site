import authReducer from "Admin/features/auth/authSlice";
import jobsReducer from "Admin/features/jobs/jobsSlice";
import jobTypeDetailsReducer from "Admin/features/jobTypeDetails/jobTypeDetailsSlice";
import jobTypesReducer from "Admin/features/jobTypes/jobTypesSlice";
import manageReducer from "Admin/features/manage/manageSlice";
import serviceReducer from "Admin/features/service/serviceSlice";

const rootReducer = {
  authReducer: authReducer,
  manageReducer: manageReducer,
  jobsReducer: jobsReducer,
  jobTypesReducer: jobTypesReducer,
  jobTypeDetailsReducer: jobTypeDetailsReducer,
  serviceReducer: serviceReducer,
};

export default rootReducer;
