import {
  CREATE_REPORTS,
  CREATE_REPORTS_SUCCESS,
  CREATE_REPORTS_FAILED,
  RESET_REPORTS,
  GET_CURRENT_RP_ACTION,
  GET_CURRENT_RP_FAILED,
  GET_CURRENT_RP_SUCCESS,
  CLEAR_CURRENT_RP,
  GET_RP_DETAIL,
  GET_RP_DETAIL_FAILED,
  GET_RP_DETAIL_SUCCESS,
  CLEAR_RP_DETAIL,
  EDIT_REPORTS,
  EDIT_REPORTS_FAILED,
  EDIT_REPORTS_SUCCESS,
  DELETE_REPORTS,
  DELETE_REPORTS_FAILED,
  DELETE_REPORTS_SUCCESS
} from '../constants/reportsConstant';

// create report
export const createReportsAction = (body) => ({
  type: CREATE_REPORTS,
  body
});

export const createReportsSuccess = () => ({
  type: CREATE_REPORTS_SUCCESS
});

export const createReportsFailed = (err) => ({
  type: CREATE_REPORTS_FAILED,
  err
});

export const resetReports = () => ({
  type: RESET_REPORTS
});

// get current reports
export const getCurrentRpAction = (id) => ({
  type: GET_CURRENT_RP_ACTION,
  id
});

export const getCurrentRpSuccess = (data) => ({
  type: GET_CURRENT_RP_SUCCESS,
  data
});

export const getCurrentRpFailed = (err) => ({
  type: GET_CURRENT_RP_FAILED,
  err
});

export const clearCurrenRptAction = () => ({
  type: CLEAR_CURRENT_RP
});

// get report detail
export const getRpDetailAction = (id) => ({
  type: GET_RP_DETAIL,
  id
});

export const getRpDetailSuccess = (data) => ({
  type: GET_RP_DETAIL_SUCCESS,
  data
});

export const getRpDetailFailed = (err) => ({
  type: GET_RP_DETAIL_FAILED,
  err
});

export const clearRpDetailAction = () => ({
  type: CLEAR_RP_DETAIL
});

// edit report
export const editReportsAction = (body) => ({
  type: EDIT_REPORTS,
  body
});

export const editReportsSuccess = (data) => ({
  type: EDIT_REPORTS_SUCCESS,
  data
});

export const editReportsFailed = (err) => ({
  type: EDIT_REPORTS_FAILED,
  err
});

// delete report
export const deleteReportsAction = (id) => ({
  type: DELETE_REPORTS,
  id
});

export const deleteReportsSuccess = () => ({
  type: DELETE_REPORTS_SUCCESS
});

export const deleteReportsFailed = (err) => ({
  type: DELETE_REPORTS_FAILED,
  err
});
