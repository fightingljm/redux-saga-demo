import axios from 'axios'
import { POSTS_URL } from '../constants/ApiConstants'
import * as types from '../constants/ActionTypes'
import { call, put } from 'redux-saga/effects'

// export const loadPosts = () => dispatch => {
//   axios.get(POSTS_URL).then(
//     res => {
//       dispatch({
//         type: types.LOAD_POSTS,
//         posts: res.data
//       })
//     }
//   )
// }

const api = url => axios.get(url)
.then(e=>e.data)

export const fetchPostsRequest = () =>({
    type: types.FETCH_POSTS_REQUEST
})

export function* fetchPosts (){
    const posts = yield call(api, POSTS_URL)
    yield put({type:types.FETCH_POSTS_SUCCESS,posts})
}
