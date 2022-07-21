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
  EDIT_DATASETS_SUCCESS,
  EDIT_DATASETS_FAILED,
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
export const DataUploadLocal = (data) => ({
  type: DATASETS_UPLOAD,
  data,
});
export const getDatasetsAction = () => ({
  type: GET_DATASETS_ACTION,
});

export const getDatasetsSuccess = (data) => ({
  type: GET_DATASETS_SUCCESS,
  data,
});

export const getDatasetsFailed = (err) => ({
  type: GET_DATASETS_FAILED,
  err,
});

export const clearDatasets = () => ({
  type: CLEAR_DATASETS,
});

// create dataset
export const createDatasetsAction = (body) => ({
  type: CREATE_DATASETS,
  body,
});

export const createDatasetsSuccess = () => ({
  type: CREATE_DATASETS_SUCCESS,
});

export const createDatasetsFailed = (err) => ({
  type: CREATE_DATASETS_FAILED,
  err,
});

export const resetDatasets = () => ({
  type: RESET_DATASETS,
});

// get current datasets
export const getCurrentDSAction = (id) => ({
  type: GET_CURRENT_DS_ACTION,
  id,
});

export const getCurrentDSSuccess = (data) => ({
  type: GET_CURRENT_DS_SUCCESS,
  data,
});

export const getCurrentDSFailed = (err) => ({
  type: GET_CURRENT_DS_FAILED,
  err,
});

export const clearCurrentAction = () => ({
  type: CLEAR_CURRENT_DS,
});

// get dataset detail
export const getDsDetailAction = (id) => ({
  type: GET_DS_DETAIL,
  id,
});

export const getDsDetailSuccess = (data) => ({
  type: GET_DS_DETAIL_SUCCESS,
  data,
});

export const getDsDetailFailed = (err) => ({
  type: GET_DS_DETAIL_FAILED,
  err,
});

export const clearDsDetailAction = () => ({
  type: CLEAR_DS_DETAIL,
});

// edit dataset
export const editDatasetsAction = (body) => ({
  type: EDIT_DATASETS,
  body,
});

export const editDatasetsSuccess = (data) => ({
  type: EDIT_DATASETS_SUCCESS,
  data,
});

export const editDatasetsFailed = (err) => ({
  type: EDIT_DATASETS_FAILED,
  err,
});

// delete dataset
export const deleteDatasetsAction = (body) => ({
  type: DELETE_DATASETS,
  body,
});

export const deleteDatasetsSuccess = () => ({
  type: DELETE_DATASETS_SUCCESS,
});

export const deleteDatasetsFailed = (err) => ({
  type: DELETE_DATASETS_FAILED,
  err,
});

// get data upload
export const getDataUploadAction = (body) => ({
  type: GET_DATA_UPLOAD,
  body,
});

export const getDataUploadSuccess = (data) => ({
  type: GET_DATA_UPLOAD_SUCCESS,
  data,
});

export const getDataUploadFailed = (err) => ({
  type: GET_DATA_UPLOAD_FAILED,
  err,
});

export const clearDataUpload = () => ({
  type: CLEAR_DATA_UPLOAD,
});

// get data upload
export const getSharedDatasetsAction = (id) => ({
  type: GET_SHARED_DATASETS,
  id,
});

export const getSharedDatasetsSuccess = (data) => ({
  type: GET_SHARED_DATASETS_SUCCESS,
  data,
});

export const getSharedDatasetsFailed = (err) => ({
  type: GET_SHARED_DATASETS_FAILED,
  err,
});

export const clearSharedDatasets = () => ({
  type: CLEAR_SHARED_DATASETS,
});

// share dataset
export const shareDatasetAction = (body) => ({
  type: SHARE_DATASET,
  body,
});

export const shareDatasetSuccess = (data) => ({
  type: SHARE_DATASET_SUCCESS,
  data,
});

export const shareDatasetFailed = (err) => ({
  type: SHARE_DATASET_FAILED,
  err,
});
