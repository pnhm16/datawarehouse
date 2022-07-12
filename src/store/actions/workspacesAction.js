import {
  GET_WORKSPACES_ACTION,
  GET_WORKSPACES_SUCCESS,
  GET_WORKSPACES_FAILED,
  CLEAR_WORKSPACES,
  CREATE_WORKSPACES,
  CREATE_WORKSPACES_SUCCESS,
  CREATE_WORKSPACES_FAILED,
  RESET_WORKSPACES,
  EDIT_WORKSPACES,
  EDIT_WORKSPACES_SUCCESS,
  EDIT_WORKSPACES_FAILED,
  GET_NUMBER_WSDSFAV,
  GET_NUMBER_SUCCESS,
  GET_NUMBER_FAILED,
  DELETE_WORKSPACES,
  DELETE_WORKSPACES_SUCCESS,
  DELETE_WORKSPACES_FAILED,
  GET_WS_DETAIL,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILED
} from '../constants/workspacesConstant';

// get workspace list
export const getWorkspacesAction = () => ({
  type: GET_WORKSPACES_ACTION
});

export const getWorkspacesSuccess = (data) => ({
  type: GET_WORKSPACES_SUCCESS,
  data
});

export const getWorkspacesFailed = (err) => ({
  type: GET_WORKSPACES_FAILED,
  err
});

export const clearWorkspaces = () => ({
  type: CLEAR_WORKSPACES
});

// create workspace
export const createWorkspacesAction = (body) => ({
  type: CREATE_WORKSPACES,
  body
});

export const createWorkspacesSuccess = () => ({
  type: CREATE_WORKSPACES_SUCCESS
});

export const createWorkspacesFailed = (err) => ({
  type: CREATE_WORKSPACES_FAILED,
  err
});

export const resetWorkspaces = () => ({
  type: RESET_WORKSPACES
});

// edit workspace
export const editWorkspacesAction = (body) => ({
  type: EDIT_WORKSPACES,
  body
});

export const editWorkspacesSuccess = (data) => ({
  type: EDIT_WORKSPACES_SUCCESS,
  data
});

export const editWorkspacesFailed = (err) => ({
  type: EDIT_WORKSPACES_FAILED,
  err
});

// get total workspaces, datasets, favorites
export const getNumberAction = () => ({
  type: GET_NUMBER_WSDSFAV
});

export const getNumberSuccess = (data) => ({
  type: GET_NUMBER_SUCCESS,
  data
});

export const getNumberFailed = (err) => ({
  type: GET_NUMBER_FAILED,
  err
});

// delete workspace
export const deleteWorkspacesAction = (id) => ({
  type: DELETE_WORKSPACES,
  id
});

export const deleteWorkspacesSuccess = () => ({
  type: DELETE_WORKSPACES_SUCCESS
});

export const deleteWorkspacesFailed = (err) => ({
  type: DELETE_WORKSPACES_FAILED,
  err
});

// get workspace detail
export const getDetailAction = (id) => ({
  type: GET_WS_DETAIL,
  id
});

export const getDetailSuccess = (data) => ({
  type: GET_DETAIL_SUCCESS,
  data
});

export const getDetailFailed = (err) => ({
  type: GET_DETAIL_FAILED,
  err
});
