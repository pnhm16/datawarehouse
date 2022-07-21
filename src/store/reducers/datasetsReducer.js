// action - state management
import {
  GET_DATASETS_ACTION,
  GET_DATASETS_SUCCESS,
  GET_DATASETS_FAILED,
  CLEAR_DATASETS,
  CREATE_DATASETS,
  CREATE_DATASETS_SUCCESS,
  CREATE_DATASETS_FAILED,
  RESET_DATASETS,
  GET_CURRENT_DS_ACTION,
  GET_CURRENT_DS_SUCCESS,
  GET_CURRENT_DS_FAILED,
  CLEAR_CURRENT_DS,
  GET_DS_DETAIL,
  GET_DS_DETAIL_SUCCESS,
  GET_DS_DETAIL_FAILED,
  CLEAR_DS_DETAIL,
  EDIT_DATASETS,
  EDIT_DATASETS_FAILED,
  EDIT_DATASETS_SUCCESS,
  DELETE_DATASETS,
  DELETE_DATASETS_FAILED,
  DELETE_DATASETS_SUCCESS,
  GET_DATA_UPLOAD,
  GET_DATA_UPLOAD_FAILED,
  GET_DATA_UPLOAD_SUCCESS,
  CLEAR_DATA_UPLOAD,
  GET_SHARED_DATASETS,
  GET_SHARED_DATASETS_SUCCESS,
  GET_SHARED_DATASETS_FAILED,
  CLEAR_SHARED_DATASETS,
  SHARE_DATASET,
  SHARE_DATASET_FAILED,
  SHARE_DATASET_SUCCESS,
  DATASETS_UPLOAD,
} from "../constants/datasetsConstant";

export const initialState = {
  datasetsData: [],
  currDatasets: [],
  dsDetail: [],
  dataUpload: [],
  dataShared: [],
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
  uploadError: false,
  uploadSuccess: false,
  shareError: false,
  shareSuccess: false,
  shareDataError: false,
  shareDataSuccess: false,
  dataUploadLocal: [],
};

const datasetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATASETS_UPLOAD:
      return {
        ...state,
        dataUploadLocal: action.data,
      };
    case GET_DATASETS_ACTION:
      return {
        ...state,
        loading: true,
      };
    case GET_DATASETS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        datasetsData: action.data,
      };
    case GET_DATASETS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case CLEAR_DATASETS:
      return {
        ...state,
        datasetsData: [],
        loading: false,
        error: false,
        success: false,
      };
    // create
    case CREATE_DATASETS:
      return {
        ...state,
        loading: true,
      };
    case CREATE_DATASETS_SUCCESS:
      return {
        ...state,
        loading: false,
        createSuccess: true,
      };
    case CREATE_DATASETS_FAILED:
      return {
        ...state,
        loading: false,
        createError: true,
      };
    case RESET_DATASETS:
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
        shareDataError: false,
        shareDataSuccess: false,
      };
    // get current datasets
    case GET_CURRENT_DS_ACTION:
      return {
        ...state,
        loading: true,
      };
    case GET_CURRENT_DS_SUCCESS:
      return {
        ...state,
        loading: false,
        currSuccess: true,
        currDatasets: action.data,
      };
    case GET_CURRENT_DS_FAILED:
      return {
        ...state,
        loading: false,
        currError: true,
      };
    case CLEAR_CURRENT_DS:
      return {
        ...state,
        currDatasets: [],
        loading: false,
        currError: false,
        currSuccess: false,
      };
    // get dataset detail
    case GET_DS_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case GET_DS_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        dsDetail: action.data,
      };
    case GET_DS_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        detailError: true,
      };
    case CLEAR_DS_DETAIL:
      return {
        ...state,
        dsDetail: [],
        loading: false,
        detailError: false,
        currSuccess: false,
      };
    // edit dataset
    case EDIT_DATASETS:
      return {
        ...state,
        loading: true,
      };
    case EDIT_DATASETS_SUCCESS:
      return {
        ...state,
        loading: false,
        editSuccess: true,
        dsDetail: action.data,
      };
    case EDIT_DATASETS_FAILED:
      return {
        ...state,
        loading: false,
        editError: true,
      };
    // delete dataset
    case DELETE_DATASETS:
      return {
        ...state,
        loading: true,
      };
    case DELETE_DATASETS_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteSuccess: true,
        dsDetail: [],
      };
    case DELETE_DATASETS_FAILED:
      return {
        ...state,
        loading: false,
        deleteError: true,
      };
    // get data upload
    case GET_DATA_UPLOAD:
      return {
        ...state,
        loading: true,
      };
    case GET_DATA_UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        uploadSuccess: true,
        dataUpload: action.data,
      };
    case GET_DATA_UPLOAD_FAILED:
      return {
        ...state,
        loading: false,
        uploadError: true,
      };
    case CLEAR_DATA_UPLOAD:
      return {
        ...state,
        dataUpload: [],
        loading: false,
        uploadError: false,
        uploadSuccess: false,
      };
    // get shared datasets
    case GET_SHARED_DATASETS:
      return {
        ...state,
        loading: true,
      };
    case GET_SHARED_DATASETS_SUCCESS:
      return {
        ...state,
        loading: false,
        shareSuccess: true,
        dataShared: action.data,
      };
    case GET_SHARED_DATASETS_FAILED:
      return {
        ...state,
        loading: false,
        shareError: true,
      };
    case CLEAR_SHARED_DATASETS:
      return {
        ...state,
        dataShared: [],
        loading: false,
        shareError: false,
        shareSuccess: false,
      };
    // share dataset
    case SHARE_DATASET:
      return {
        ...state,
        loading: true,
      };
    case SHARE_DATASET_SUCCESS:
      return {
        ...state,
        loading: false,
        shareDataSuccess: true,
        dsDetail: action.data,
      };
    case SHARE_DATASET_FAILED:
      return {
        ...state,
        loading: false,
        shareDataError: true,
      };
    default:
      return state;
  }
};

export default datasetsReducer;
