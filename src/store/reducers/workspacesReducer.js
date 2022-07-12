// action - state management
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

export const initialState = {
  workspacesData: [],
  // editId: null,
  // deleteId: null,
  numberData: [],
  wsDetail: [],
  loading: false,
  error: false,
  success: false,
  createError: false,
  createSuccess: false,
  editError: false,
  editSuccess: false,
  numberError: false,
  numberSuccess: false,
  deleteError: false,
  deleteSuccess: false,
  detailError: false,
  detailSuccess: false
};

const workspacesReducer = (state = initialState, action) => {
  switch (action.type) {
    // get workspace list
    case GET_WORKSPACES_ACTION:
      return {
        ...state,
        loading: true
      };
    case GET_WORKSPACES_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        workspacesData: action.data
      };
    case GET_WORKSPACES_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      };
    case CLEAR_WORKSPACES:
      return {
        ...state,
        workspacesData: [],
        loading: false,
        error: false,
        success: false
      };
    // get total workspaces, datasets, favorites
    case GET_NUMBER_WSDSFAV:
      return {
        ...state,
        loading: true
      };
    case GET_NUMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        numberSuccess: true,
        numberData: action.data
      };
    case GET_NUMBER_FAILED:
      return {
        ...state,
        loading: false,
        numberError: true
      };
    // create workspace
    case CREATE_WORKSPACES:
      return {
        ...state,
        loading: true
      };
    case CREATE_WORKSPACES_SUCCESS:
      return {
        ...state,
        loading: false,
        createSuccess: true
      };
    case CREATE_WORKSPACES_FAILED:
      return {
        ...state,
        loading: false,
        createError: true
      };
    case RESET_WORKSPACES:
      return {
        ...state,
        loading: false,
        createError: false,
        createSuccess: false,
        editError: false,
        editSuccess: false,
        numberError: false,
        numberSuccess: false,
        deleteError: false,
        deleteSuccess: false
        // editId: null,
        // deleteId: null
      };
    // edit workspace
    case EDIT_WORKSPACES:
      return {
        ...state,
        loading: true
      };
    case EDIT_WORKSPACES_SUCCESS:
      return {
        ...state,
        loading: false,
        editSuccess: true,
        wsDetail: action.data
      };
    case EDIT_WORKSPACES_FAILED:
      return {
        ...state,
        loading: false,
        editError: false
      };
    // delete workspace
    case DELETE_WORKSPACES:
      return {
        ...state,
        loading: true
      };
    case DELETE_WORKSPACES_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteSuccess: true,
        wsDetail: []
      };
    case DELETE_WORKSPACES_FAILED:
      return {
        ...state,
        loading: false,
        deleteError: true
      };
    // get workspace detail
    case GET_WS_DETAIL:
      return {
        ...state,
        loading: true
      };
    case GET_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        detailSuccess: true,
        wsDetail: action.data
      };
    case GET_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        detailError: true
      };
    default:
      return state;
  }
};

export default workspacesReducer;
