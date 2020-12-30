import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAIL,
  // ARTICLE_LIST_RESET
} from '../constants/articleConstands'

export const articleReducer = (state = { loading: true, articleList: [] }, action) => {
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