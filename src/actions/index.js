import axios from 'axios'
import { POSTS_URL } from '../constants/ApiConstants'
import * as types from '../constants/ActionTypes'

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

export const fetchPostsRequest = () =>({
    type: types.FETCH_POSTS_REQUEST
})

export const fetchPosts = () => {
    console.log('fetchPosts...执行异步操作')
}
