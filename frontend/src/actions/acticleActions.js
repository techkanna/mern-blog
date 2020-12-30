import axios from 'axios'
import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAIL,
} from '../constants/articleConstands'

export const listArticles = () => async (dispatch) => {

  try {
    dispatch({
      type: ARTICLE_LIST_REQUEST
    })


    const { data } = await axios.get('/api/articles')

    dispatch({
      type: ARTICLE_LIST_SUCCESS,
      payload: data,
    })

  } catch (error) {
    console.error(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: ARTICLE_LIST_FAIL,
      payload: message
    })
  }
}