// action - state management
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
  DELETE_REPORTS_SUCCESS,
  CREATE_JSON_REPORTS,
} from "../constants/reportsConstant";

export const initialState = {
  currReports: [],
  rpDetail: [],
  loading: false,
  error: false,
  success: false,
  createError: false,
  createSuccess: false,
  currError: false,
  currSuccess: false,
  detailError: false,
  detailSuccess: false,
  editError: false,
  editSuccess: false,
  deleteError: false,
  deleteSuccess: false,
  reportData: [],
};

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    // create
    case CREATE_JSON_REPORTS:
      return {
        ...state,
        reportData: action.data,
      };
    case CREATE_REPORTS:
      return {
        ...state,
        loading: true,
      };
    case CREATE_REPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        createSuccess: true,
      };
    case CREATE_REPORTS_FAILED:
      return {
        ...state,
        loading: false,
        createError: true,
      };
    case RESET_REPORTS:
      return {
        ...state,
        loading: false,
        createError: false,
        createSuccess: false,
        currError: false,
        currSuccess: false,
        editError: false,
        editSuccess: false,
        deleteError: false,
        deleteSuccess: false,
      };
    // get current report
    case GET_CURRENT_RP_ACTION:
      return {
        ...state,
        loading: true,
      };
    case GET_CURRENT_RP_SUCCESS:
      return {
        ...state,
        loading: false,
        currSuccess: true,
        currReports: action.data,
      };
    case GET_CURRENT_RP_FAILED:
      return {
        ...state,
        loading: false,
        currError: true,
      };
    case CLEAR_CURRENT_RP:
      return {
        ...state,
        currReports: [],
        loading: false,
        currError: false,
        currSuccess: false,
      };
    // get report detail
    case GET_RP_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case GET_RP_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        rpDetail: action.data,
      };
    case GET_RP_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        detailError: true,
      };
    case CLEAR_RP_DETAIL:
      return {
        ...state,
        rpDetail: [],
        loading: false,
        detailError: false,
        currSuccess: false,
      };
    // edit report
    case EDIT_REPORTS:
      return {
        ...state,
        loading: true,
      };
    case EDIT_REPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        editSuccess: true,
        rpDetail: action.data,
      };
    case EDIT_REPORTS_FAILED:
      return {
        ...state,
        loading: false,
        editError: false,
      };
    // delete report
    case DELETE_REPORTS:
      return {
        ...state,
        loading: true,
      };
    case DELETE_REPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteSuccess: true,
        rpDetail: [],
      };
    case DELETE_REPORTS_FAILED:
      return {
        ...state,
        loading: false,
        deleteError: true,
      };
    default:
      return state;
  }
};

export default reportsReducer;
