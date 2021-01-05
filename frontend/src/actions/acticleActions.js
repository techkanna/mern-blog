import axios from 'axios'
import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAIL,
  ARTICLE_CREATE_REQUEST,
  ARTICLE_CREATE_SUCCESS,
  ARTICLE_CREATE_FAIL,
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_FAIL,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAIL,
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

export const createArticle = (newArticle) => async (dispatch) => {
  try {
    dispatch({
      type: ARTICLE_CREATE_REQUEST,
    })

    const { data } = await axios.post('/api/articles', newArticle)

    dispatch({
      type: ARTICLE_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.error(error);
    let message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    if (message.includes('E11000')) {
      message = "😬 Title already taken kindly try another title"
    }

    dispatch({
      type: ARTICLE_CREATE_FAIL,
      payload: message
    })
  }
}

export const getArticle = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ARTICLE_REQUEST,
    })

    const { data } = await axios.get(`/api/articles/${id}`)

    dispatch({
      type: GET_ARTICLE_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.error(error);
    let message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: GET_ARTICLE_FAIL,
      payload: message
    })
  }
}

export const deleteArticle = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ARTICLE_REQUEST
    })

    const { data } = await axios.delete(`/api/articles/${id}`)

    dispatch({
      type: DELETE_ARTICLE_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.error(error);
    let message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: DELETE_ARTICLE_FAIL,
      payload: message
    })
  }
}