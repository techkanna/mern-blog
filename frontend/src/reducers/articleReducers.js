import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAIL,
  ARTICLE_CREATE_REQUEST,
  ARTICLE_CREATE_SUCCESS,
  ARTICLE_CREATE_FAIL,
  ARTICLE_CREATE_RESET,
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAIL,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAIL,
  DELETE_ARTICLE_RESET
} from '../constants/articleConstands'

export const articleListReducer = (state = { loading: true, articleList: [] }, action) => {
  switch (action.type) {
    case ARTICLE_LIST_REQUEST:
      return { ...state, loading: true }
    case ARTICLE_LIST_SUCCESS:
      return { loading: false, articleList: action.payload }
    case ARTICLE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const articleCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_CREATE_REQUEST:
      return { loading: true }
    case ARTICLE_CREATE_SUCCESS:
      return { loading: false, artical: action.payload }
    case ARTICLE_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case ARTICLE_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const getArticleReducer = (state = { loading: true, articleDetails: {} }, action) => {
  switch (action.type) {
    case GET_ARTICLE_REQUEST:
      return { ...state, loading: true }
    case GET_ARTICLE_SUCCESS:
      return { loading: false, articleDetails: action.payload[0] }
    case GET_ARTICLE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const deleteArticleReducer = (state = { loading: true, success: false }, action) => {
  switch (action.type) {
    case DELETE_ARTICLE_REQUEST:
      return { ...state, loading: true }
    case DELETE_ARTICLE_SUCCESS:
      return { loading: false, success: action.payload }
    case DELETE_ARTICLE_FAIL:
      return { loading: false, error: action.payload }
    case DELETE_ARTICLE_RESET:
      return {}
    default:
      return state
  }
}