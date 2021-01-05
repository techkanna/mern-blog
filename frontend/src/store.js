import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  articleListReducer,
  articleCreateReducer,
  getArticleReducer,
  deleteArticleReducer,
  articleUpdateReducer
} from './reducers/articleReducers'

const reducer = combineReducers({
  articles: articleListReducer,
  articleCreate: articleCreateReducer,
  article: getArticleReducer,
  articleDelete: deleteArticleReducer,
  articleUpdate: articleUpdateReducer,
})


const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store